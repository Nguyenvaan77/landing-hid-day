"use client"

import { Shield, Clock, Users, CheckCircle, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const benefits = [
  {
    icon: Shield,
    title: "An tâm về chuyên môn",
    description: "Thầy thuốc được xác thực hồ sơ",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgPattern: "shield",
    stats: "100%",
    statsLabel: "Xác thực",
    verificationText: "Hồ sơ được xác thực",
  },
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    description: "Kết nối nhanh chóng, dễ dàng",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    bgPattern: "clock",
    stats: "< 5 phút",
    statsLabel: "Kết nối",
    verificationText: "Quy trình đã được kiểm chứng",
  },
  {
    icon: Users,
    title: "Minh bạch & công khai",
    description: "Đánh giá sau khám từ cộng đồng thực",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    bgPattern: "community",
    stats: "4.8/5",
    statsLabel: "Đánh giá",
    verificationText: "Đánh giá được xác minh",
  },
]

export default function WhyChooseSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-pink-400 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Ưu điểm vượt trội
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            VÌ SAO NÊN CHỌN{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              LANGCONNECT
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những lý do khiến hàng nghìn người tin tưởng lựa chọn LangConnect
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-200 hover:border-transparent"
              style={{
                borderRadius:
                  index === 0 ? "0px 32px 0px 32px" : index === 1 ? "32px 0px 32px 0px" : "16px 32px 0px 32px",
                minHeight: "280px",
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                {benefit.bgPattern === "shield" && (
                  <div className="absolute top-4 right-4 w-24 h-24">
                    <Shield className="w-full h-full text-blue-300" />
                  </div>
                )}
                {benefit.bgPattern === "clock" && (
                  <div className="absolute top-4 right-4 w-24 h-24">
                    <Clock className="w-full h-full text-purple-300" />
                  </div>
                )}
                {benefit.bgPattern === "community" && (
                  <div className="absolute top-4 right-4 w-24 h-24">
                    <Users className="w-full h-full text-pink-300" />
                  </div>
                )}
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Stats badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 bg-gradient-to-r ${benefit.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                  >
                    {benefit.stats}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">{benefit.statsLabel}</div>
                </div>

                <div className="flex-1 space-y-4">
                  {/* Icon with animated background */}
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${benefit.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      style={{
                        borderRadius:
                          index === 0 ? "0px 16px 0px 16px" : index === 1 ? "16px 0px 16px 0px" : "8px 16px 0px 16px",
                      }}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Bottom section - Simplified */}
                <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-transparent transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle
                        className={`w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className="text-xs font-medium text-green-600">{benefit.verificationText}</span>
                    </div>
                    <div
                      className={`w-6 h-0.5 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
