import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json")

// Đọc dữ liệu từ file
async function readContacts() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Tạo CSV content
function generateCSV(contacts: any[]) {
  const headers = [
    "ID",
    "Thời gian",
    "Họ tên",
    "Email",
    "Số điện thoại",
    "Nội dung tin nhắn",
    "Trạng thái email",
    "Lỗi (nếu có)",
    "Trình duyệt",
    "IP Address",
    "Tạo lúc",
    "Cập nhật lúc",
  ]

  const csvContent = [
    headers.join(","),
    ...contacts.map((contact) =>
      [
        `"${contact.id || ""}"`,
        `"${contact.timestamp || ""}"`,
        `"${contact.name || ""}"`,
        `"${contact.email || ""}"`,
        `"${contact.phone || "Không cung cấp"}"`,
        `"${(contact.message || "").replace(/"/g, '""')}"`, // Escape quotes
        `"${contact.emailStatus || "pending"}"`,
        `"${contact.errorMessage || ""}"`,
        `"${contact.userAgent || ""}"`,
        `"${contact.ipAddress || "N/A"}"`,
        `"${contact.createdAt || ""}"`,
        `"${contact.updatedAt || ""}"`,
      ].join(","),
    ),
  ].join("\n")

  return csvContent
}

// GET - Thống kê chi tiết (API ẩn)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const format = searchParams.get("format") // json, csv, html
    const download = searchParams.get("download") === "true"

    // Đọc dữ liệu
    const contacts = await readContacts()

    // Tính toán thống kê
    const stats = {
      total: contacts.length,
      successful: contacts.filter((c: any) => c.emailStatus === "success").length,
      failed: contacts.filter((c: any) => c.emailStatus === "failed").length,
      pending: contacts.filter((c: any) => c.emailStatus === "pending").length,
    }

    const successRate = stats.total > 0 ? Math.round((stats.successful / stats.total) * 100) : 0

    // Thống kê theo ngày (7 ngày gần nhất)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split("T")[0]
    }).reverse()

    const dailyStats = last7Days.map((date) => {
      const dayContacts = contacts.filter((c: any) => c.createdAt?.startsWith(date))
      return {
        date,
        total: dayContacts.length,
        successful: dayContacts.filter((c: any) => c.emailStatus === "success").length,
        failed: dayContacts.filter((c: any) => c.emailStatus === "failed").length,
      }
    })

    // Thống kê lỗi phổ biến
    const errorStats = contacts
      .filter((c: any) => c.emailStatus === "failed" && c.errorMessage)
      .reduce((acc: any, contact: any) => {
        const error = contact.errorMessage
        acc[error] = (acc[error] || 0) + 1
        return acc
      }, {})

    // Thống kê browser
    const browserStats = contacts.reduce((acc: any, contact: any) => {
      if (contact.userAgent) {
        let browser = "Unknown"
        if (contact.userAgent.includes("Chrome")) browser = "Chrome"
        else if (contact.userAgent.includes("Firefox")) browser = "Firefox"
        else if (contact.userAgent.includes("Safari")) browser = "Safari"
        else if (contact.userAgent.includes("Edge")) browser = "Edge"

        acc[browser] = (acc[browser] || 0) + 1
      }
      return acc
    }, {})

    // Trả về theo format
    if (format === "csv" || download) {
      const csvContent = generateCSV(contacts)
      const filename = `langconnect_contacts_${new Date().toISOString().split("T")[0]}.csv`

      return new NextResponse(csvContent, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      })
    }

    if (format === "html") {
      const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📊 LangConnect - Thống kê liên hệ</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stat-number { font-size: 2em; font-weight: bold; color: #4CAF50; }
        .stat-label { color: #666; margin-top: 5px; }
        .table-container { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; font-weight: 600; }
        .status-success { color: #28a745; font-weight: bold; }
        .status-failed { color: #dc3545; font-weight: bold; }
        .status-pending { color: #ffc107; font-weight: bold; }
        .actions { margin: 20px 0; }
        .btn { display: inline-block; padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none; border-radius: 4px; margin-right: 10px; }
        .btn:hover { background: #45a049; }
        .chart { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 LangConnect - Thống kê liên hệ</h1>
            <p>Cập nhật lúc: ${new Date().toLocaleString("vi-VN")}</p>
        </div>

        <div class="actions">
            <a href="/api/statistical?format=csv&download=true" class="btn">📥 Tải CSV</a>
            <a href="/api/statistical?format=json" class="btn">📋 JSON Data</a>
            <a href="javascript:location.reload()" class="btn">🔄 Làm mới</a>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${stats.total}</div>
                <div class="stat-label">📝 Tổng số liên hệ</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.successful}</div>
                <div class="stat-label">✅ Gửi thành công</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.failed}</div>
                <div class="stat-label">❌ Gửi thất bại</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${successRate}%</div>
                <div class="stat-label">📈 Tỷ lệ thành công</div>
            </div>
        </div>

        <div class="chart">
            <h3>📊 Thống kê 7 ngày gần nhất</h3>
            <table>
                <thead>
                    <tr>
                        <th>Ngày</th>
                        <th>Tổng số</th>
                        <th>Thành công</th>
                        <th>Thất bại</th>
                        <th>Tỷ lệ</th>
                    </tr>
                </thead>
                <tbody>
                    ${dailyStats
                      .map(
                        (day) => `
                        <tr>
                            <td>${day.date}</td>
                            <td>${day.total}</td>
                            <td class="status-success">${day.successful}</td>
                            <td class="status-failed">${day.failed}</td>
                            <td>${day.total > 0 ? Math.round((day.successful / day.total) * 100) : 0}%</td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
        </div>

        <div class="table-container">
            <h3 style="padding: 20px; margin: 0; background: #f8f9fa;">📋 Danh sách liên hệ gần nhất (${Math.min(
              contacts.length,
              50,
            )} mục)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Thời gian</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>SĐT</th>
                        <th>Trạng thái</th>
                        <th>Lỗi</th>
                    </tr>
                </thead>
                <tbody>
                    ${contacts
                      .slice(-50)
                      .reverse()
                      .map(
                        (contact: any) => `
                        <tr>
                            <td>${new Date(contact.createdAt || contact.timestamp).toLocaleString("vi-VN")}</td>
                            <td>${contact.name}</td>
                            <td>${contact.email}</td>
                            <td>${contact.phone || "N/A"}</td>
                            <td class="status-${contact.emailStatus}">${
                              contact.emailStatus === "success"
                                ? "✅ Thành công"
                                : contact.emailStatus === "failed"
                                  ? "❌ Thất bại"
                                  : "⏳ Đang chờ"
                            }</td>
                            <td>${contact.errorMessage || ""}</td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>`

      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      })
    }

    // Default: JSON format
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      summary: {
        ...stats,
        successRate: `${successRate}%`,
      },
      dailyStats,
      errorStats,
      browserStats,
      recentContacts: contacts.slice(-10).reverse(), // 10 liên hệ gần nhất
      totalContacts: contacts.length,
    })
  } catch (error) {
    console.error("Error generating statistics:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
