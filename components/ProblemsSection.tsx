"use client"

import { AlertTriangle, DollarSign, MessageCircle, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const problems = [
  {
    icon: AlertTriangle,
    title: "Thông tin nhiễu loạn",
    description: "Không biết tin ai trong biển thông tin y học cổ truyền trên mạng",
    color: "text-red-600",
    bgGradient: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    accentColor: "bg-red-500",
    pattern: "zigzag",
  },
  {
    icon: DollarSign,
    title: "Chữa nhiều nơi không khỏi",
    description: "Không có ai theo sát quá trình điều trị, tiền mất tật mang",
    color: "text-amber-600",
    bgGradient: "from-amber-50 to-orange-100",
    borderColor: "border-amber-200",
    accentColor: "bg-amber-500",
    pattern: "dots",
  },
  {
    icon: MessageCircle,
    title: "Chỉ nghe lời truyền miệng",
    description: "Rủi ro cao khi không có thông tin xác thực về thầy thuốc",
    color: "text-orange-600",
    bgGradient: "from-orange-50 to-red-100",
    borderColor: "border-orange-200",
    accentColor: "bg-orange-500",
    pattern: "waves",
  },
]

export default function ProblemsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-herb-green-50 to-white relative overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 via-amber-100 to-orange-100 text-red-800 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Những thách thức hiện tại
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            BẠN ĐANG <span className="text-red-600">BĂN KHOĂN</span> VÌ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 via-amber-400 to-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${problem.bgGradient} hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-2 ${problem.borderColor} transform hover:scale-105`}
              style={{
                borderRadius:
                  index === 0 ? "0px 24px 0px 24px" : index === 1 ? "24px 0px 24px 0px" : "12px 24px 0px 24px",
                minHeight: "280px",
              }}
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                {problem.pattern === "zigzag" && (
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,20 L20,0 L40,20 L60,0 L80,20 L100,0 L100,100 L0,100 Z"
                      fill="currentColor"
                      className={problem.color}
                    />
                  </svg>
                )}
                {problem.pattern === "dots" && (
                  <div className="grid grid-cols-8 gap-2 p-4 h-full">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className={`w-2 h-2 ${problem.accentColor} rounded-full opacity-20`}></div>
                    ))}
                  </div>
                )}
                {problem.pattern === "waves" && (
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                      fill="currentColor"
                      className={problem.color}
                    />
                  </svg>
                )}
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="text-center space-y-4">
                  {/* Animated Icon Container */}
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 ${problem.accentColor} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                      style={{
                        borderRadius: index === 0 ? "50%" : index === 1 ? "16px" : "8px 16px 8px 16px",
                      }}
                    >
                      <problem.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                    </div>
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700"></div>
                  </div>

                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-bold ${problem.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {problem.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6">
                  <div
                    className={`h-1 ${problem.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    style={{
                      borderRadius: index === 0 ? "0px" : index === 1 ? "4px" : "2px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 ${problem.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
