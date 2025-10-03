"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function FinalCTASection() {
  const { elementRef, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.")
    setFormData({ name: "", email: "", phone: "", message: "" })
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
                  <button className="bg-white text-herb-green-600 hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-lg transition-colors w-full text-left">
                    👉 Đặt lịch ngay
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-herb-green-600 px-6 py-3 text-base font-semibold bg-transparent rounded-lg transition-colors w-full text-left">
                    👉 Thư viện YHCT
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-herb-green-600 px-6 py-3 text-base font-semibold bg-transparent rounded-lg transition-colors w-full text-left whitespace-nowrap">
                    🤝 Cộng đồng LangConnect
                  </button>
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
                      <p className="text-herb-green-100">contact@langconnect.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Điện thoại</h5>
                      <p className="text-herb-green-100">+84 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Địa chỉ</h5>
                      <p className="text-herb-green-100">Đại học Dược Hà Nội, Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
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
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm"
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
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm"
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
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors text-sm"
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
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white transition-colors resize-none text-sm"
                      placeholder="Nhập nội dung tin nhắn..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-herb-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group text-sm"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Gửi liên hệ</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
