// EmailJS Configuration
export const emailJSConfig = {
  serviceId: "service_langconnect", // Sẽ được thay thế sau khi setup
  templateId: "template_contact", // Sẽ được thay thế sau khi setup
  publicKey: "YOUR_PUBLIC_KEY", // Sẽ được thay thế sau khi setup
}

// Template variables để sử dụng trong EmailJS template:
export const templateVariables = {
  from_name: "{{from_name}}", // Tên người gửi
  from_email: "{{from_email}}", // Email người gửi
  phone: "{{phone}}", // Số điện thoại
  message: "{{message}}", // Nội dung tin nhắn
  to_email: "{{to_email}}", // Email nhận (langconnect2025@gmail.com)
  sent_at: "{{sent_at}}", // Thời gian gửi
  website: "{{website}}", // Nguồn website
}
