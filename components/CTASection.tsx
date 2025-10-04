"use client"

import { Globe, Facebook, Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function CTASection() {
  const { elementRef, isVisible } = useScrollAnimation()

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
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">🚀 KẾT NỐI CÙNG CHÚNG MÌNH</h2>
            <p className="text-lg text-herb-green-100 max-w-2xl mx-auto leading-relaxed">
              Xem thêm kiến thức thú vị về YHCT và hoạt động của dự án. Cùng nhau khám phá và chia sẻ!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Website Card */}
            <a
              href="https://langconnect.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 border-2 border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">Website</h3>
                  <p className="text-herb-green-100 text-sm">Khám phá thêm nhiều kiến thức</p>
                </div>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/profile.php?id=61575814304088"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 border-2 border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">Fanpage</h3>
                  <p className="text-herb-green-100 text-sm">Cập nhật hoạt động mới nhất</p>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">📞 Liên hệ trực tiếp</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Mail className="w-5 h-5" />
                <span>langconnect2025@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-5 h-5" />
                <span>0968912734 - Phạm Thị Tuyết</span>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61578673978954"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-herb-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              🌿 Tìm hiểu thêm ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
