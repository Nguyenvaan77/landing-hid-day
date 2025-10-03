"use client"

import { Target, Heart, Users, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const missionPoints = [
  {
    icon: Target,
    text: "Bạn giúp người khác tránh rủi ro",
  },
  {
    icon: Heart,
    text: "Bạn ghi nhận lương y thật sự giỏi",
  },
  {
    icon: Lightbulb,
    text: "Bạn góp phần xây dựng nền YHCT rõ nguồn – sáng đạo – nhân văn",
  },
]

export default function MissionSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/80 via-herb-green-100/60 to-herb-green-200/70 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-herb-green-100 text-herb-green-800 rounded-full text-sm font-medium">
                <Users className="w-3 h-3 mr-2" />
                Sứ mệnh của chúng tôi
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">SỨ MỆNH CỦA CHÚNG TÔI</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl border border-herb-green-200/50">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-herb-green-600">
                  LangConnect – Đưa Y học cổ truyền Việt Nam bước vào kỷ nguyên số.
                </strong>
                <br className="hidden sm:block" />
                Chúng tôi không chỉ kết nối thầy thuốc và người bệnh – mà còn kết nối niềm tin, tri thức và trách nhiệm
                cộng đồng.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Khi bạn tham gia cộng đồng LangConnect:</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gradient-to-br from-herb-green-50/90 to-herb-green-100/80 rounded-lg border border-herb-green-200/60"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-herb-green-500 rounded-full flex items-center justify-center">
                          <point.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed text-sm">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
