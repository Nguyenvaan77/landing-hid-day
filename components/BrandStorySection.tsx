"use client"

import Image from "next/image"
import { BookOpen, Users, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function BrandStorySection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section ref={elementRef} className={`py-12 lg:py-16 bg-white scroll-animate ${isVisible ? "visible" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/img/memcab/thay_thuoc.png"
                alt="Dược liệu thiên nhiên"
                width={600}
                height={400}
                className="w-full h-auto shadow-2xl"
                style={{ borderRadius: "32px 0px 32px 0px" }}
              />
            </div>
            {/* Decorative background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-herb-green-200/60 to-herb-green-300/50 transform rotate-3 scale-105 opacity-20"
              style={{ borderRadius: "32px 0px 32px 0px" }}
            ></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100/70 to-herb-green-200/60 text-herb-green-800 text-sm font-medium"
                style={{ borderRadius: "0px 20px 0px 20px" }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Về chúng mình
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                📖 KIẾN THỨC Y HỌC CỔ TRUYỀN CHO THẾ HỆ TRẺ
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>
                Chúng mình là nhóm sinh viên năm cuối Đại học Dược Hà Nội, với niềm đam mê chia sẻ kiến thức Y học cổ
                truyền (YHCT) một cách dễ hiểu và thiết thực.
              </p>

              <div
                className="p-4 bg-gradient-to-br from-herb-green-50 to-herb-green-100 border-l-6 border-herb-green-500 shadow-lg"
                style={{ borderRadius: "0px 12px 12px 0px" }}
              >
                <p className="font-semibold text-slate-800">
                  <Heart className="w-5 h-5 inline mr-2 text-herb-green-600" />
                  Sứ mệnh của chúng mình
                </p>
                <p className="mt-2">
                  Đưa YHCT đến gần hơn với sinh viên và giới trẻ, qua những sản phẩm thiên nhiên và tri thức hữu ích.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Chia sẻ kiến thức YHCT thực tế</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Sản phẩm thiên nhiên, an toàn</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Đồng hành cùng sinh viên Dược</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
