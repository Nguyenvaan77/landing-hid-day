import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json")

// Đảm bảo thư mục data tồn tại
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Đọc dữ liệu từ file
async function readContacts() {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(DATA_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    // File chưa tồn tại, trả về array rỗng
    return []
  }
}

// Ghi dữ liệu vào file
async function writeContacts(contacts: any[]) {
  await ensureDataDirectory()
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2))
}

// POST - Lưu contact mới
export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Validate dữ liệu
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Đọc dữ liệu hiện tại
    const contacts = await readContacts()

    // Thêm contact mới
    contacts.push({
      ...contactData,
      id: Date.now().toString(), // Simple ID generation
      createdAt: new Date().toISOString(),
    })

    // Lưu lại file
    await writeContacts(contacts)

    return NextResponse.json({ success: true, message: "Contact saved successfully" })
  } catch (error) {
    console.error("Error saving contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET - Lấy danh sách contacts (chỉ cho admin)
export async function GET(request: NextRequest) {
  try {
    const contacts = await readContacts()
    return NextResponse.json({ contacts, total: contacts.length })
  } catch (error) {
    console.error("Error reading contacts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
