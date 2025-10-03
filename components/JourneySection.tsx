"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function JourneySection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/60 via-herb-green-100/40 to-herb-green-200/50 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100/70 to-herb-green-200/60 text-herb-green-800 text-sm font-medium"
                style={{ borderRadius: "0px 20px 0px 20px" }}
              >
                <span className="w-2 h-2 bg-herb-green-500 mr-2" style={{ borderRadius: "0px" }}></span>
                Câu chuyện của chúng tôi
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                HÀNH TRÌNH ĐI TÌM LƯƠNG Y – VÀ LÝ DO LANGCONNECT RA ĐỜI
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>Có những người đi khám ở 5–7 nơi, vẫn chưa tìm được ai hiểu bệnh mình.</p>
              <p>Có những lương y giỏi thật sự – nhưng vì ở xa, ít người biết đến.</p>
              <div
                className="p-4 bg-white/80 backdrop-blur-sm border-l-6 border-herb-green-500 shadow-lg"
                style={{ borderRadius: "0px 12px 12px 0px" }}
              >
                <p className="font-semibold text-slate-800">LangConnect sinh ra để rút ngắn hành trình đó.</p>
                <p className="mt-1">Để bạn không phải "chữa mò", phụ thuộc vào lời truyền miệng.</p>
              </div>
              <div
                className="flex items-center space-x-3 text-herb-green-600 font-semibold bg-herb-green-50/80 p-3"
                style={{ borderRadius: "16px 0px 16px 0px" }}
              >
                <ArrowRight className="w-4 h-4" />
                <span>Chúng tôi giúp bạn gặp đúng thầy – đúng chuyên môn – đúng lúc bạn cần nhất.</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/img/memcab/thay_thuoc.png"
                alt="Thầy thuốc thực địa"
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
        </div>
      </div>
    </section>
  )
}
