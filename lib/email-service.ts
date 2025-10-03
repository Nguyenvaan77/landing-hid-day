// File hướng dẫn setup các dịch vụ email

// 1. EMAILJS SETUP (Khuyến nghị)
// Bước 1: Đăng ký tại https://www.emailjs.com/
// Bước 2: Tạo Email Service (Gmail/Outlook)
// Bước 3: Tạo Email Template
// Bước 4: Cài đặt: npm install @emailjs/browser
// Bước 5: Thay thế code trong FinalCTASection.tsx

export const emailJSConfig = {
  serviceId: "YOUR_SERVICE_ID", // Từ EmailJS dashboard
  templateId: "YOUR_TEMPLATE_ID", // Từ EmailJS dashboard
  publicKey: "YOUR_PUBLIC_KEY", // Từ EmailJS dashboard
}

// Template EmailJS mẫu:
/*
Chào admin LangConnect,

Có liên hệ mới từ website:

Họ tên: {{from_name}}
Email: {{from_email}}
Số điện thoại: {{phone}}
Nội dung: {{message}}

Thời gian: {{sent_at}}
*/

// 2. FORMSPREE SETUP
// Bước 1: Đăng ký tại https://formspree.io/
// Bước 2: Tạo form mới
// Bước 3: Lấy Form ID
// Bước 4: Thay thế URL trong code

export const formspreeConfig = {
  formId: "YOUR_FORM_ID", // Từ Formspree dashboard
  endpoint: "https://formspree.io/f/YOUR_FORM_ID",
}

// 3. GOOGLE APPS SCRIPT SETUP
// Bước 1: Tạo Google Sheet mới
// Bước 2: Mở Apps Script (Extensions > Apps Script)
// Bước 3: Paste code dưới đây:

/*
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Thêm dòng mới với dữ liệu
    sheet.appendRow([
      new Date(),
      data.name,
      data.email, 
      data.phone,
      data.message
    ]);
    
    // Gửi email thông báo (tùy chọn)
    MailApp.sendEmail({
      to: 'langconnect2025@gmail.com',
      subject: 'Liên hệ mới từ website',
      body: `
        Họ tên: ${data.name}
        Email: ${data.email}
        SĐT: ${data.phone}
        Nội dung: ${data.message}
      `
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
*/

// Bước 4: Deploy as Web App
// Bước 5: Copy URL và thay thế trong code

export const googleAppsScriptConfig = {
  webAppUrl: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL",
}

// 4. NETLIFY FORMS (Nếu deploy trên Netlify)
// Chỉ cần thêm data-netlify="true" vào form tag
// Netlify sẽ tự động xử lý và gửi email thông báo

// 5. WEBHOOK DISCORD/SLACK (Bonus)
// Có thể gửi thông báo trực tiếp vào Discord/Slack channel

export const webhookConfig = {
  discordWebhook: "YOUR_DISCORD_WEBHOOK_URL",
  slackWebhook: "YOUR_SLACK_WEBHOOK_URL",
}
