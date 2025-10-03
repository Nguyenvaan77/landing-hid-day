"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Heart, Activity, Moon, Sparkles } from "lucide-react"

export default function CombinationBenefitsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  const combinedBenefits = [
    {
      icon: Sparkles,
      title: "Tiêu hóa",
      description: "Hỗ trợ hệ tiêu hóa khỏe mạnh",
    },
    {
      icon: Heart,
      title: "Tim mạch",
      description: "Bảo vệ tim mạch toàn diện",
    },
    {
      icon: Activity,
      title: "Tuần hoàn máu",
      description: "Cải thiện tuần hoàn máu",
    },
    {
      icon: Moon,
      title: "Giấc ngủ",
      description: "Ngủ ngon, giảm căng thẳng",
    },
  ]

  return (
    <section
      ref={elementRef}
      className={`py-16 lg:py-20 bg-gradient-to-br from-herb-green-500 via-herb-green-600 to-herb-green-700 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-4xl lg:text-6xl">✨</span>
            <span>Khi kết hợp</span>
            <span className="text-4xl lg:text-6xl">✨</span>
          </h2>

          {/* Flavor Combination */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="bg-red-500/40 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
              <span className="text-white font-bold text-lg lg:text-xl">🍐 Chua nhẹ</span>
            </div>
            <span className="text-white font-bold text-2xl">→</span>
            <div className="bg-purple-500/40 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
              <span className="text-white font-bold text-lg lg:text-xl">🌸 Đắng thanh</span>
            </div>
            <span className="text-white font-bold text-2xl">→</span>
            <div className="bg-amber-500/40 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
              <span className="text-white font-bold text-lg lg:text-xl">🍯 Ngọt dịu</span>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-white font-semibold mb-12">
            → Hài hòa vị giác, tạo nên trà thảo mộc cân bằng
          </p>
        </div>

        {/* Combined Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combinedBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 hover:bg-white/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/40">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/90 text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/15 backdrop-blur-md rounded-2xl px-8 py-4 border-2 border-white/30">
            <p className="text-white text-lg lg:text-xl font-medium">
              💚 Hỗ trợ toàn diện cho sức khỏe với sự kết hợp hoàn hảo của thiên nhiên
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
