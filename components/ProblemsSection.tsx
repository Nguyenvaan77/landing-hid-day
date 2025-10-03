"use client"

import { AlertTriangle, DollarSign, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const problems = [
  {
    icon: AlertTriangle,
    title: "Thông tin nhiễu loạn",
    description: "Không biết tin ai trong biển thông tin y học cổ truyền trên mạng",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    accentColor: "bg-red-100",
  },
  {
    icon: DollarSign,
    title: "Chữa nhiều nơi không khỏi",
    description: "Không có ai theo sát quá trình điều trị, tiền mất tật mang",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    accentColor: "bg-amber-100",
  },
  {
    icon: MessageCircle,
    title: "Chỉ nghe lời truyền miệng",
    description: "Rủi ro cao khi không có thông tin xác thực về thầy thuốc",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    accentColor: "bg-orange-100",
  },
]

export default function ProblemsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-herb-green-50 to-white scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-herb-green-900 mb-4">BẠN ĐANG BĂN KHOĂN VÌ?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative p-6 ${problem.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${problem.borderColor} card-hover-effect`}
              style={{
                borderRadius: index === 0 ? "0px" : index === 1 ? "24px" : "12px 0px 24px 0px",
              }}
            >
              <div className="text-center space-y-3">
                <div
                  className={`inline-flex p-3 ${problem.accentColor} border-2 ${problem.borderColor}`}
                  style={{
                    borderRadius: index === 0 ? "50%" : index === 1 ? "16px" : "8px",
                  }}
                >
                  <problem.icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${problem.color}`}>{problem.title}</h3>
                <p className="text-herb-green-700 leading-relaxed text-sm">{problem.description}</p>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-12 h-12 ${problem.accentColor} opacity-30`}
                style={{
                  borderRadius:
                    index === 0 ? "0px 0px 0px 12px" : index === 1 ? "0px 24px 0px 12px" : "0px 12px 0px 24px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
