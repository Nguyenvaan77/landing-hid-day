"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function TaoDoDetailSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`relative py-12 lg:py-20 overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
      style={{ background: "linear-gradient(135deg, rgba(70,150,90,0.1) 0%, rgba(70,150,90,0.2) 100%)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in-left visible">
            <div className="relative z-10">
              <Image
                src="/img/product/tao.png"
                alt="Táo đỏ"
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              style={{ backgroundColor: "rgba(70,150,90,0.3)" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "rgba(70,150,90,0.4)" }}
            ></div>
          </div>

          {/* Right - Info */}
          <div className="space-y-6 animate-fade-in-right visible">
            <div className="space-y-4">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#18551e" }}>
                Táo đỏ
                
              </h2>

              <div className="space-y-3 text-lg" style={{ color: "#2a5631" }}>
                <p>
                  <strong>Tính vị:</strong> Vị ngọt, ôn. Quy Tỳ, Vị
                </p>
                <p>
                  <strong>Đặc điểm:</strong> Quả đỏ nâu hình trứng, ruột xốp mềm, vị ngọt dịu
                </p>
                <p>
                  <strong>Dinh dưỡng:</strong> Giàu đường tự nhiên, vitamin B, C, sắt, kali, magiê
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
