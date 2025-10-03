# 📊 HƯỚNG DẪN HỆ THỐNG BACKUP CSV

## 🎯 Tính năng chính:

### ✅ **Lưu trữ tự động:**
- Mỗi lần có người gửi form → Lưu ngay vào localStorage
- Không phụ thuộc vào EmailJS → Không bao giờ mất dữ liệu
- Lưu cả thông tin lỗi nếu email gửi thất bại

### 📋 **Dữ liệu được lưu:**
- **Thời gian**: Timestamp chính xác
- **Thông tin cá nhân**: Tên, email, SĐT, tin nhắn
- **Trạng thái email**: Success/Failed/Pending
- **Chi tiết lỗi**: Nếu gửi email thất bại
- **Thông tin kỹ thuật**: Browser, IP address

### 🔧 **Admin Panel:**
- **Xuất CSV**: Download file Excel với tất cả dữ liệu
- **Thống kê**: Xem tỷ lệ thành công/thất bại
- **Xóa dữ liệu**: Clear toàn bộ (có xác nhận)

## 🚀 Cách sử dụng:

### **Cho Admin:**
1. **Truy cập Admin Panel**: Click vào ⚙️ ở góc phải
2. **Xuất CSV**: Click "Xuất CSV" → File tự động download
3. **Xem thống kê**: Click "Thống kê" → Popup hiển thị số liệu
4. **Xóa dữ liệu**: Click "Xóa dữ liệu" (cẩn thận!)

### **File CSV sẽ có format:**
\`\`\`csv
Thời gian,Họ tên,Email,Số điện thoại,Nội dung tin nhắn,Trạng thái email,Lỗi (nếu có),Trình duyệt,IP Address
"2025-01-02T20:30:15.123Z","Nguyễn Văn A","nguyenvana@gmail.com","0901234567","Tôi muốn tìm hiểu về dịch vụ...","success","","Mozilla/5.0...","192.168.1.1"
\`\`\`

## 🔒 **Bảo mật & Riêng tư:**

### ✅ **An toàn:**
- Dữ liệu lưu trong localStorage (chỉ admin truy cập được)
- Không gửi lên server nào khác
- File CSV chỉ tạo khi admin click xuất

### ⚠️ **Lưu ý:**
- localStorage có giới hạn ~5-10MB
- Dữ liệu sẽ mất nếu clear browser data
- Nên xuất CSV định kỳ để backup

## 📈 **Thống kê mẫu:**
\`\`\`
📊 Thống kê liên hệ:

📝 Tổng số: 25
✅ Gửi thành công: 23
❌ Gửi thất bại: 2
⏳ Đang chờ: 0

Tỷ lệ thành công: 92%
\`\`\`

## 🛠️ **Troubleshooting:**

**❓ Không thấy Admin Panel?**
- Click vào ⚙️ ở góc phải trên cùng

**❓ File CSV không download?**
- Kiểm tra popup blocker
- Thử browser khác

**❓ Dữ liệu bị mất?**
- Kiểm tra localStorage: F12 > Application > Local Storage
- Có thể do clear browser data

**❓ Muốn backup tự động?**
- Có thể setup cron job để xuất CSV định kỳ
- Hoặc tích hợp Google Sheets API
