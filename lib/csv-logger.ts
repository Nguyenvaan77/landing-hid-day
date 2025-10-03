// CSV Logger - Lưu trữ thông tin liên hệ
export interface ContactData {
  timestamp: string
  name: string
  email: string
  phone: string
  message: string
  emailStatus: "success" | "failed" | "pending"
  errorMessage?: string
  userAgent: string
  ipAddress?: string
}

export class CSVLogger {
  private static readonly STORAGE_KEY = "langconnect_contacts"

  // Lưu dữ liệu vào localStorage
  static saveContact(data: ContactData): void {
    try {
      const existingData = this.getAllContacts()
      existingData.push(data)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData))
      console.log("✅ Contact saved to localStorage:", data.name)
    } catch (error) {
      console.error("❌ Error saving to localStorage:", error)
    }
  }

  // Lấy tất cả contacts từ localStorage
  static getAllContacts(): ContactData[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error("❌ Error reading from localStorage:", error)
      return []
    }
  }

  // Cập nhật trạng thái email
  static updateEmailStatus(timestamp: string, status: "success" | "failed", errorMessage?: string): void {
    try {
      const contacts = this.getAllContacts()
      const contactIndex = contacts.findIndex((c) => c.timestamp === timestamp)

      if (contactIndex !== -1) {
        contacts[contactIndex].emailStatus = status
        if (errorMessage) {
          contacts[contactIndex].errorMessage = errorMessage
        }
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(contacts))
        console.log(`✅ Updated email status for ${contacts[contactIndex].name}: ${status}`)
      }
    } catch (error) {
      console.error("❌ Error updating email status:", error)
    }
  }

  // Xuất CSV
  static exportToCSV(): void {
    try {
      const contacts = this.getAllContacts()
      if (contacts.length === 0) {
        alert("Không có dữ liệu để xuất!")
        return
      }

      // Tạo CSV header
      const headers = [
        "Thời gian",
        "Họ tên",
        "Email",
        "Số điện thoại",
        "Nội dung tin nhắn",
        "Trạng thái email",
        "Lỗi (nếu có)",
        "Trình duyệt",
        "IP Address",
      ]

      // Tạo CSV content
      const csvContent = [
        headers.join(","),
        ...contacts.map((contact) =>
          [
            `"${contact.timestamp}"`,
            `"${contact.name}"`,
            `"${contact.email}"`,
            `"${contact.phone || "Không cung cấp"}"`,
            `"${contact.message.replace(/"/g, '""')}"`, // Escape quotes
            `"${contact.emailStatus}"`,
            `"${contact.errorMessage || ""}"`,
            `"${contact.userAgent}"`,
            `"${contact.ipAddress || "N/A"}"`,
          ].join(","),
        ),
      ].join("\n")

      // Tạo và download file
      const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)

      link.setAttribute("href", url)
      link.setAttribute("download", `langconnect_contacts_${new Date().toISOString().split("T")[0]}.csv`)
      link.style.visibility = "hidden"

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      console.log(`✅ Exported ${contacts.length} contacts to CSV`)
    } catch (error) {
      console.error("❌ Error exporting CSV:", error)
      alert("Có lỗi khi xuất file CSV!")
    }
  }

  // Xóa tất cả dữ liệu (cẩn thận!)
  static clearAllData(): void {
    if (confirm("⚠️ Bạn có chắc muốn xóa tất cả dữ liệu liên hệ? Hành động này không thể hoàn tác!")) {
      localStorage.removeItem(this.STORAGE_KEY)
      console.log("🗑️ All contact data cleared")
      alert("Đã xóa tất cả dữ liệu!")
    }
  }

  // Thống kê
  static getStats(): {
    total: number
    successful: number
    failed: number
    pending: number
  } {
    const contacts = this.getAllContacts()
    return {
      total: contacts.length,
      successful: contacts.filter((c) => c.emailStatus === "success").length,
      failed: contacts.filter((c) => c.emailStatus === "failed").length,
      pending: contacts.filter((c) => c.emailStatus === "pending").length,
    }
  }
}
