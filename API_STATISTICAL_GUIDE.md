# 🔐 API STATISTICAL - HƯỚNG DẪN SỬ DỤNG

## 🎯 **Endpoint ẩn cho Admin:**

### **📊 Xem thống kê tổng quan:**
\`\`\`
GET /api/statistical
\`\`\`

### **📋 Xem dạng HTML (Dashboard đẹp):**
\`\`\`
GET /api/statistical?format=html
\`\`\`

### **📥 Tải file CSV:**
\`\`\`
GET /api/statistical?format=csv&download=true
\`\`\`

### **📄 Dữ liệu JSON:**
\`\`\`
GET /api/statistical?format=json
\`\`\`

---

## 🖥️ **Cách truy cập:**

### **1. Truy cập Dashboard HTML:**
- Mở browser và vào: `https://your-domain.com/api/statistical?format=html`
- Sẽ hiển thị dashboard đẹp với:
  - 📊 Thống kê tổng quan
  - 📈 Biểu đồ 7 ngày gần nhất
  - 📋 Danh sách liên hệ chi tiết
  - 📥 Nút tải CSV

### **2. Tải CSV trực tiếp:**
- Vào: `https://your-domain.com/api/statistical?format=csv&download=true`
- File CSV sẽ tự động download

### **3. API JSON (cho developers):**
- Vào: `https://your-domain.com/api/statistical?format=json`
- Trả về JSON với đầy đủ thống kê

---

## 📊 **Dữ liệu trả về:**

### **JSON Response mẫu:**
\`\`\`json
{
  "success": true,
  "timestamp": "2025-01-02T20:30:15.123Z",
  "summary": {
    "total": 25,
    "successful": 23,
    "failed": 2,
    "pending": 0,
    "successRate": "92%"
  },
  "dailyStats": [
    {
      "date": "2025-01-02",
      "total": 5,
      "successful": 4,
      "failed": 1
    }
  ],
  "errorStats": {
    "EmailJS Error: Invalid template": 1,
    "Network timeout": 1
  },
  "browserStats": {
    "Chrome": 20,
    "Firefox": 3,
    "Safari": 2
  },
  "recentContacts": [
    {
      "id": "1704230415123",
      "name": "Nguyễn Văn A",
      "email": "test@gmail.com",
      "phone": "0901234567",
      "message": "Tôi muốn tìm hiểu...",
      "emailStatus": "success",
      "createdAt": "2025-01-02T20:30:15.123Z"
    }
  ]
}
\`\`\`

### **CSV Format:**
\`\`\`csv
ID,Thời gian,Họ tên,Email,Số điện thoại,Nội dung tin nhắn,Trạng thái email,Lỗi (nếu có),Trình duyệt,IP Address,Tạo lúc,Cập nhật lúc
"1704230415123","2025-01-02T20:30:15.123Z","Nguyễn Văn A","test@gmail.com","0901234567","Tôi muốn tìm hiểu...","success","","Chrome","192.168.1.1","2025-01-02T20:30:15.123Z",""
\`\`\`

---

## 🔒 **Bảo mật:**

### **✅ Điểm mạnh:**
- API không có authentication → Dễ truy cập cho admin
- Endpoint ẩn → Khó đoán
- Dữ liệu lưu local → Không phụ thuộc database

### **⚠️ Lưu ý:**
- URL này cần được giữ bí mật
- Chỉ chia sẻ với team developers
- Có thể thêm basic auth nếu cần:

\`\`\`typescript
// Thêm vào đầu route handler
const auth = request.headers.get('authorization')
if (auth !== 'Bearer YOUR_SECRET_TOKEN') {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
\`\`\`

---

## 📱 **Mobile Friendly:**
- Dashboard HTML responsive
- Hoạt động tốt trên mobile
- Có thể bookmark để truy cập nhanh

---

## 🚀 **Tính năng nâng cao:**

### **1. Real-time updates:**
- Tự động refresh mỗi 30 giây
- WebSocket cho updates real-time

### **2. Filters:**
- Lọc theo ngày: `?from=2025-01-01&to=2025-01-31`
- Lọc theo trạng thái: `?status=failed`

### **3. Export formats:**
- Excel: `?format=xlsx`
- PDF: `?format=pdf`

### **4. Notifications:**
- Email alert khi có liên hệ mới
- Slack/Discord webhook integration
