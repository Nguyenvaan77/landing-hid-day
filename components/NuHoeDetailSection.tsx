"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function NuHoeDetailSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`relative py-12 lg:py-20 overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
      style={{ background: "linear-gradient(135deg, rgba(81,165,85,0.15) 0%, rgba(81,165,85,0.25) 100%)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform skew-y-6"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Info */}
          <div className="space-y-6 animate-fade-in-left visible lg:order-1 order-2">
            <div className="space-y-4">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#1a5a1d" }}>
                Nụ hòe
              </h2>

              <div className="space-y-3 text-lg" style={{ color: "#2d5a2f" }}>
                <p>
                  <strong>Tính vị:</strong> Vị đắng, hơi hàn. Quy Can, Đại tràng
                </p>
                <p>
                  <strong>Đặc điểm:</strong> Nụ hoa hình trứng, dài 3-6mm, màu vàng xám
                </p>
                <p>
                  <strong>Dinh dưỡng:</strong> Giàu rutin, quercetin, flavonoid
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-in-right visible lg:order-2 order-1">
            <div className="relative z-10">
              <Image
                src="/img/product/hoe.png"
                alt="Nụ hòe"
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              style={{ backgroundColor: "rgba(81,165,85,0.3)" }}
            ></div>
            <div
              className="absolute -bottom-8 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "rgba(81,165,85,0.4)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
