"use client"

import Image from "next/image"
import { Calendar, Star, BookOpen, ShoppingCart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const features = [
  {
    icon: Calendar,
    title: "Đặt lịch linh hoạt",
    description: "Khám online hoặc trực tiếp theo lịch trình phù hợp với bạn",
    image: "/img/datlich.png",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    borderRadius: "rounded-none",
  },
  {
    icon: Star,
    title: "Đánh giá công khai",
    description: "Nhận xét thật từ cộng đồng sau mỗi lần khám để bạn tham khảo",
    image: "/img/thay.png",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    borderRadius: "rounded-2xl",
  },
  {
    icon: BookOpen,
    title: "Thư viện YHCT",
    description: "Kho tài liệu Y học cổ truyền dễ tra cứu và đáng tin cậy",
    image: "/img/thuvien.png",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    borderRadius: "rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none",
  },
  {
    icon: ShoppingCart,
    title: "Dược liệu chuẩn sạch",
    description: "Sản phẩm đã kiểm định chất lượng, giao hàng tận nơi",
    image: "/img/datlich.png",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    borderRadius: "rounded-xl",
  },
]

export default function FeaturesSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      id="features"
      className={`py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/70 via-herb-green-100/50 to-herb-green-200/60 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100/80 to-herb-green-200/70 text-herb-green-800 text-sm font-medium mb-3"
            style={{ borderRadius: "0px 12px 0px 12px" }}
          >
            <span className="w-2 h-2 bg-herb-green-500 mr-2" style={{ borderRadius: "0px" }}></span>
            Tính năng nổi bật
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">CÁC TÍNH NĂNG NỔI BẬT</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Những tính năng mạnh mẽ được thiết kế để giúp bạn kết nối với lương y một cách dễ dàng và hiệu quả.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${feature.borderColor} ${feature.borderRadius} card-hover-effect`}
            >
              <div className="space-y-3">
                {/* Icon */}
                <div
                  className={`inline-flex p-2 ${feature.bgColor} border ${feature.borderColor}`}
                  style={{
                    borderRadius:
                      index === 0 ? "50%" : index === 1 ? "10px" : index === 2 ? "0px 10px 0px 10px" : "6px",
                  }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
                </div>

                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: index === 0 ? "0px" : index === 1 ? "12px" : index === 2 ? "6px 0px 6px 0px" : "8px",
                  }}
                >
                  <Image
                    src={feature.image || "/placeholder.svg?height=200&width=300"}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
