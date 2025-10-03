"use client"

import { Shield, Heart, Sparkles, Moon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const benefits = [
  {
    icon: Shield,
    title: "Tăng đề kháng – chống oxy hóa",
    description: "Bảo vệ cơ thể khỏi các gốc tự do và tăng cường hệ miễn dịch",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderRadius: "rounded-none",
  },
  {
    icon: Heart,
    title: "Bảo vệ tim mạch, ổn định huyết áp",
    description: "Hỗ trợ tuần hoàn máu tốt và duy trì huyết áp ổn định",
    gradient: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    borderRadius: "rounded-3xl",
  },
  {
    icon: Sparkles,
    title: "Thanh nhiệt, mát gan, giải độc",
    description: "Làm mát cơ thể, hỗ trợ chức năng gan và thải độc tự nhiên",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderRadius: "rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none",
  },
  {
    icon: Moon,
    title: "Ngủ ngon, giảm căng thẳng, sáng da",
    description: "Cải thiện giấc ngủ, giảm stress và làm đẹp da từ bên trong",
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderRadius: "rounded-2xl",
  },
]

export default function BenefitsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4 mr-2" />
            Công dụng nổi bật
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">✨ CÔNG DỤNG TUYỆT VỜI</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Bộ ba dược liệu mang đến những lợi ích toàn diện cho sức khỏe
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-red-400 to-purple-400 mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    borderRadius:
                      index === 0 ? "0px" : index === 1 ? "16px" : index === 2 ? "6px 16px 6px 16px" : "20px",
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
                      borderRadius: index === 0 ? "50%" : index === 1 ? "6px" : index === 2 ? "0px" : "8px",
                    }}
                  >
                    <span className="text-green-600 font-bold text-sm">✓</span>
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
