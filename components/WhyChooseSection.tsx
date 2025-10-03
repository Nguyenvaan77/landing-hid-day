"use client"

import { Shield, Clock, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const benefits = [
  {
    icon: Shield,
    title: "An tâm về chuyên môn",
    description: "Thầy thuốc được xác thực hồ sơ",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderRadius: "rounded-none",
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    description: "Kết nối nhanh chóng, dễ dàng",
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderRadius: "rounded-3xl",
  },
  {
    icon: Users,
    title: "Minh bạch & công khai",
    description: "Đánh giá sau khám từ cộng đồng thực",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderRadius: "rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none",
  },
]

export default function WhyChooseSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">VÌ SAO NÊN CHỌN LANGCONNECT?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Những lý do khiến hàng nghìn người tin tưởng lựa chọn LangConnect
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${benefit.borderRadius} card-hover-effect`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${benefit.borderRadius}`}
              ></div>

              <div className="relative text-center space-y-4">
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${benefit.gradient} shadow-lg`}
                  style={{
                    borderRadius: index === 0 ? "0px" : index === 1 ? "16px" : "6px 16px 6px 16px",
                  }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-800">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>

                {/* Check mark */}
                <div className="flex justify-center">
                  <div
                    className={`w-6 h-6 ${benefit.bgColor} flex items-center justify-center`}
                    style={{
                      borderRadius: index === 0 ? "50%" : index === 1 ? "6px" : "0px",
                    }}
                  >
                    <span className="text-blue-600 font-bold text-sm">✓</span>
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
