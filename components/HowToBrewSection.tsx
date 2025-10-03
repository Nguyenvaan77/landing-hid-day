"use client"

import { Coffee, Clock, Droplet, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const steps = [
  {
    icon: Coffee,
    title: "Chuẩn bị nguyên liệu",
    description: "2–3 quả lê gai + 1 nhúm nhỏ nụ hòe + 2–3 lát táo đỏ",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Droplet,
    title: "Thêm nước sôi",
    description: "250–300ml nước sôi (khoảng 100°C)",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Hãm 5–7 phút",
    description: "Đợi cho dược liệu ngấm đều và giải phóng dưỡng chất",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Coffee,
    title: "Thưởng thức",
    description: "Uống nóng hoặc thêm đá tùy khẩu vị",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export default function HowToBrewSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/70 via-herb-green-100/50 to-herb-green-200/60 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-base font-medium mb-3">
            <Coffee className="w-5 h-5 mr-2" />
            Hướng dẫn pha chế
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">☕ CÁCH PHA NHANH</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Chỉ với 4 bước đơn giản, bạn đã có thể thưởng thức tách trà dược liệu tuyệt vời
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-herb-green-200 to-transparent z-0"></div>
              )}

              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-herb-green-500 to-herb-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">{index + 1}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-3 ${step.bgColor} rounded-lg`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-7 h-7 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Lưu ý quan trọng</h3>
              <p className="text-yellow-700 leading-relaxed text-base">
                <strong>Không dùng cho:</strong> Phụ nữ mang thai/cho con bú, người huyết áp thấp, trẻ nhỏ dưới 5 tuổi.
                <br />
                Nếu có bất kỳ vấn đề sức khỏe nào, vui lòng tham khảo ý kiến bác sĩ trước khi sử dụng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
