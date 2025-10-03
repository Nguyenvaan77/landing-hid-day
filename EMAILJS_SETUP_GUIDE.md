# 🚀 HƯỚNG DẪN SETUP EMAILJS CHO LANGCONNECT

## Bước 1: Đăng ký EmailJS
1. Truy cập: https://www.emailjs.com/
2. Click "Sign Up" và đăng ký tài khoản miễn phí
3. Xác nhận email đăng ký

## Bước 2: Tạo Email Service
1. Vào Dashboard > Email Services
2. Click "Add New Service"
3. Chọn "Gmail" (khuyến nghị)
4. Đăng nhập Gmail: `langconnect2025@gmail.com`
5. Cho phép EmailJS truy cập Gmail
6. Đặt tên Service: "LangConnect Gmail"
7. Copy **Service ID** (ví dụ: service_abc123)

## Bước 3: Tạo Email Template
1. Vào Dashboard > Email Templates  
2. Click "Create New Template"
3. Đặt tên: "LangConnect Contact Form"
4. Copy nội dung từ file `emailjs-template.html` vào Template Editor
5. Click "Save" 
6. Copy **Template ID** (ví dụ: template_xyz789)

## Bước 4: Lấy Public Key
1. Vào Dashboard > Account > General
2. Copy **Public Key** (ví dụ: user_abcXYZ123)

## Bước 5: Cập nhật Code
Thay thế trong file `components/FinalCTASection.tsx`:

\`\`\`typescript
const serviceId = 'service_abc123'     // Thay bằng Service ID của bạn
const templateId = 'template_xyz789'   // Thay bằng Template ID của bạn  
const publicKey = 'user_abcXYZ123'     // Thay bằng Public Key của bạn
\`\`\`

## Bước 6: Test
1. Chạy website: `npm run dev`
2. Điền form liên hệ và gửi thử
3. Kiểm tra email `langconnect2025@gmail.com`
4. Kiểm tra EmailJS Dashboard > Logs

## 🎯 Kết quả mong đợi:
- ✅ Email đẹp mắt gửi đến langconnect2025@gmail.com
- ✅ Thông tin đầy đủ: tên, email, SĐT, tin nhắn
- ✅ Thời gian gửi chính xác
- ✅ Form reset sau khi gửi thành công
- ✅ Thông báo trạng thái cho người dùng

## 🔧 Troubleshooting:
- **Lỗi 401**: Kiểm tra Public Key
- **Lỗi 404**: Kiểm tra Service ID và Template ID  
- **Email không đến**: Kiểm tra spam folder
- **Template lỗi**: Kiểm tra syntax {{variable}}

## 📊 Giới hạn miễn phí:
- 200 emails/tháng
- Đủ cho giai đoạn demo/testing
- Có thể upgrade sau nếu cần

## 🎨 Tùy chỉnh Template:
- Thay đổi màu sắc trong CSS
- Thêm logo LangConnect
- Thêm thông tin liên hệ
- Thêm call-to-action buttons
