"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import emailjs from "@emailjs/browser"
import { CSVLogger, type ContactData } from "@/lib/csv-logger"
import { IPService } from "@/lib/ip-service"

export default function FinalCTASection() {
  const { elementRef, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Tạo timestamp unique
    const timestamp = new Date().toISOString()

    // Lấy thông tin user
    const userAgent = navigator.userAgent
    const userIP = await IPService.getUserIP()

    // Tạo contact data để lưu CSV
    const contactData: ContactData = {
      timestamp,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Không cung cấp",
      message: formData.message,
      emailStatus: "pending",
      userAgent,
      ipAddress: userIP,
    }

    // Lưu vào localStorage ngay lập tức (backup đầu tiên)
    CSVLogger.saveContact(contactData)

    // Gửi dữ liệu lên API để lưu trữ server-side
    try {
      await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      })
    } catch (error) {
      console.warn("Failed to save to server, but localStorage backup exists:", error)
    }

    try {
      // EmailJS Configuration - THAY ĐỔI CÁC GIÁ TRỊ NÀY
      const serviceId = "service_langconnect" // Thay bằng Service ID thực
      const templateId = "template_contact" // Thay bằng Template ID thực
      const publicKey = "YOUR_PUBLIC_KEY" // Thay bằng Public Key thực

      // Gửi email qua EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Không cung cấp",
          message: formData.message,
          to_email: "langconnect2025@gmail.com",
          sent_at: new Date().toLocaleString("vi-VN"),
          website: "LangConnect Landing Page",
        },
        publicKey,
      )

      // Cập nhật trạng thái thành công
      CSVLogger.updateEmailStatus(timestamp, "success")

      // Cập nhật trạng thái trên server
      try {
        await fetch("/api/contacts/update-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp,
            status: "success",
          }),
        })
      } catch (error) {
        console.warn("Failed to update server status:", error)
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Tự động ẩn thông báo sau 5 giây
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error: any) {
      console.error("Error sending email:", error)

      // Cập nhật trạng thái lỗi với chi tiết
      const errorMessage = error?.text || error?.message || "Unknown error"
      CSVLogger.updateEmailStatus(timestamp, "failed", errorMessage)

      // Cập nhật trạng thái lỗi trên server
      try {
        await fetch("/api/contacts/update-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp,
            status: "failed",
            errorMessage,
          }),
        })
      } catch (error) {
        console.warn("Failed to update server error status:", error)
      }

      setSubmitStatus("error")

      // Tự động ẩn thông báo lỗi sau 5 giây
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      ref={elementRef}
      className={`py-16 bg-gradient-to-br from-herb-green-600 to-herb-green-800 relative overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Text Content */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🚀 SẴN SÀNG BẮT ĐẦU?</h2>
                <p className="text-lg text-herb-green-100">
                  Tham gia cùng hàng nghìn người đã tin tưởng LangConnect để chăm sóc sức khỏe bằng Y học cổ truyền. Bắt
                  đầu hành trình của bạn ngay hôm nay.
                </p>
              </div>

              {/* Right - Action Buttons */}
              <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-col gap-3 w-72">
                  <a
                    href="https://lang-connect-tpye.vercel.app/thay-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-herb-green-600 hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-lg transition-colors w-full text-left block"
                  >
                    👉 Đặt lịch ngay
                  </a>
                  <a
                    href="https://lang-connect-tpye.vercel.app/kien-thuc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white hover:bg-white hover:text-herb-green-600 px-6 py-3 text-base font-semibold bg-transparent rounded-lg transition-colors w-full text-left block"
                  >
                    👉 Thư viện YHCT
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61575814304088&locale=vi_VN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white hover:bg-white hover:text-herb-green-600 px-6 py-3 text-base font-semibold bg-transparent rounded-lg transition-colors w-full text-left block whitespace-nowrap"
                  >
                    🤝 Cộng đồng LangConnect
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Liên hệ với chúng tôi</h3>
              <p className="text-herb-green-100">
                Có câu hỏi hoặc cần hỗ trợ? Chúng tôi luôn sẵn sàng lắng nghe và giúp đỡ bạn.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Thông tin liên hệ</h4>
                  <p className="text-herb-green-100 leading-relaxed">
                    Chúng tôi cam kết phản hồi trong vòng 24 giờ và luôn sẵn sàng hỗ trợ bạn tìm được lương y phù hợp.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Email</h5>
                      <p className="text-herb-green-100">langconnect2025@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Điện thoại</h5>
                      <p className="text-herb-green-100">0968912734 - Phạm Thị Tuyết</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Địa chỉ</h5>
                      <p className="text-herb-green-100">13-15 Lê Thánh Tông, phường Cửa Nam, thành phố Hà Nội</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-100 text-sm">
                      Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                      <br />
                      <small>✅ Dữ liệu đã được lưu trữ an toàn.</small>
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-100 text-sm">
                      Email gửi thất bại, nhưng thông tin của bạn đã được lưu trữ an toàn.
                      <br />
                      <small>📞 Vui lòng liên hệ trực tiếp: 0968912734</small>
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm disabled:opacity-50"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm disabled:opacity-50"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm disabled:opacity-50"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors resize-none text-sm disabled:opacity-50"
                      placeholder="Nhập nội dung tin nhắn..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-herb-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-herb-green-600 border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang gửi & lưu trữ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>Gửi liên hệ</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-herb-green-200 text-center">
                    🔒 Thông tin của bạn được lưu trữ an toàn và bảo mật
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
