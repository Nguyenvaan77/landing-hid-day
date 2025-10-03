"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const steps = [
  {
    number: "01",
    title: "Tạo tài khoản miễn phí",
    description: "Đăng ký tài khoản LangConnect chỉ trong vài bước đơn giản",
    image: "/img/datlich.png",
  },
  {
    number: "02",
    title: "Xem hồ sơ & chọn thầy phù hợp",
    description: "Duyệt qua danh sách lương y đã được xác minh và đánh giá",
    image: "/img/thay.png",
  },
  {
    number: "03",
    title: "Đặt lịch khám hoặc tư vấn",
    description: "Linh hoạt đặt lịch tư vấn online hoặc khám trực tiếp",
    image: "/img/datlich.png",
  },
  {
    number: "04",
    title: "Đánh giá sau kết nối",
    description: "Chia sẻ trải nghiệm để giúp cộng đồng và cải thiện dịch vụ",
    image: "/img/thuvien.png",
  },
]

export default function HowToUseSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      id="how-to-use"
      className={`py-12 lg:py-16 bg-white scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">CÁCH SỬ DỤNG CỰC ĐƠN GIẢN</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chỉ với 4 bước đơn giản, bạn đã có thể kết nối với lương y phù hợp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-herb-green-200 to-transparent z-0"></div>
              )}

              <div className="relative bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-3 left-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-herb-green-500 to-herb-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={step.image || "/placeholder.svg?height=200&width=300"}
                      alt={step.title}
                      width={300}
                      height={200}
                      className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
