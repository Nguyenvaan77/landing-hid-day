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

// Ghi dữ liệu vào file
async function writeContacts(contacts: any[]) {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2))
}

// POST - Cập nhật trạng thái email
export async function POST(request: NextRequest) {
  try {
    const { timestamp, status, errorMessage } = await request.json()

    if (!timestamp || !status) {
      return NextResponse.json({ error: "Missing timestamp or status" }, { status: 400 })
    }

    // Đọc dữ liệu hiện tại
    const contacts = await readContacts()

    // Tìm và cập nhật contact
    const contactIndex = contacts.findIndex((contact: any) => contact.timestamp === timestamp)

    if (contactIndex === -1) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    // Cập nhật trạng thái
    contacts[contactIndex].emailStatus = status
    contacts[contactIndex].updatedAt = new Date().toISOString()

    if (errorMessage) {
      contacts[contactIndex].errorMessage = errorMessage
    }

    // Lưu lại file
    await writeContacts(contacts)

    return NextResponse.json({ success: true, message: "Status updated successfully" })
  } catch (error) {
    console.error("Error updating contact status:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
