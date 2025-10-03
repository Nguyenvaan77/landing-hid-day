"use client"

import Image from "next/image"
import { Calendar, Star, BookOpen, ShoppingCart, Sparkles, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const features = [
  {
    icon: Calendar,
    title: "Đặt lịch linh hoạt",
    description: "Khám online hoặc trực tiếp theo lịch trình phù hợp với bạn",
    image: "/img/datlich.png",
    color: "text-sky-600",
    gradient: "from-sky-400 to-blue-500",
    bgPattern: "calendar",
    stats: "24/7",
    statsLabel: "Hỗ trợ",
    shape: "hexagon",
  },
  {
    icon: Star,
    title: "Đánh giá công khai",
    description: "Nhận xét thật từ cộng đồng sau mỗi lần khám để bạn tham khảo",
    image: "/img/danhgia.png",
    color: "text-yellow-600",
    gradient: "from-yellow-400 to-orange-500",
    bgPattern: "stars",
    stats: "4.9★",
    statsLabel: "Đánh giá",
    shape: "star",
  },
  {
    icon: BookOpen,
    title: "Thư viện YHCT",
    description: "Kho tài liệu Y học cổ truyền dễ tra cứu và đáng tin cậy",
    image: "/img/thuvien.png",
    color: "text-purple-600",
    gradient: "from-purple-400 to-indigo-500",
    bgPattern: "books",
    stats: "1000+",
    statsLabel: "Tài liệu",
    shape: "book",
  },
  {
    icon: ShoppingCart,
    title: "Dược liệu chuẩn sạch",
    description: "Sản phẩm đã kiểm định chất lượng, giao hàng tận nơi",
    image: "/img/duoclieusach.png",
    color: "text-emerald-600",
    gradient: "from-emerald-400 to-green-500",
    bgPattern: "herbs",
    stats: "100%",
    statsLabel: "Chất lượng",
    shape: "leaf",
  },
]

export default function FeaturesSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      id="features"
      className={`py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/70 via-herb-green-100/50 to-herb-green-200/60 relative overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-300 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-emerald-300 rounded-full blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100/80 to-herb-green-200/70 text-herb-green-800 text-sm font-medium mb-4 rounded-full">
            <Sparkles className="w-4 h-4 mr-2" />
            Tính năng đột phá
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            CÁC TÍNH NĂNG{" "}
            <span className="bg-gradient-to-r from-herb-green-600 to-emerald-600 bg-clip-text text-transparent">
              Chính
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những tính năng mạnh mẽ được thiết kế để giúp bạn kết nối với lương y một cách dễ dàng và hiệu quả.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-200 hover:border-transparent"
              style={{
                borderRadius:
                  feature.shape === "hexagon"
                    ? "0px 24px 0px 24px"
                    : feature.shape === "star"
                      ? "24px 0px 24px 0px"
                      : feature.shape === "book"
                        ? "12px 24px 0px 24px"
                        : "24px 12px 24px 0px",
                minHeight: "380px",
              }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Stats badge */}
              <div className="absolute top-4 right-4 z-20">
                <div
                  className={`px-3 py-1 bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.stats}
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">{feature.statsLabel}</div>
              </div>

              <div className="relative z-10 p-4 h-full flex flex-col">
                {/* Image section - Moved to top */}
                <div className="mb-4">
                  <div
                    className="relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                    style={{
                      borderRadius:
                        feature.shape === "hexagon"
                          ? "0px 16px 0px 16px"
                          : feature.shape === "star"
                            ? "16px"
                            : feature.shape === "book"
                              ? "8px 16px 0px 16px"
                              : "16px 8px 16px 0px",
                    }}
                  >
                    <Image
                      src={feature.image || "/placeholder.svg?height=200&width=300"}
                      alt={feature.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>

                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg`}>
                        <TrendingUp className={`w-6 h-6 ${feature.color}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icon and Title section */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      style={{
                        borderRadius:
                          feature.shape === "hexagon"
                            ? "0px 12px 0px 12px"
                            : feature.shape === "star"
                              ? "50%"
                              : feature.shape === "book"
                                ? "6px 12px 0px 12px"
                                : "12px 6px 12px 0px",
                      }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300 flex-1">
                      {feature.title}
                    </h3>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute top-2 right-8 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-4">
                  <div
                    className={`h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    style={{
                      borderRadius: feature.shape === "hexagon" ? "0px" : "2px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
