"use client"

import { Leaf } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import Image from "next/image"

export default function ProductIntroSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-herb-green-50 to-white scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            Sản phẩm đặc biệt
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-herb-green-900 mb-4">
            🌿 Bộ 3 vị Lê gai – Nụ hòe – Táo đỏ
          </h2>
          <p className="text-xl text-herb-green-800 max-w-3xl mx-auto leading-relaxed">
            Không chỉ là đồ uống thanh mát mà còn là <strong>kiến thức YHCT</strong> mà chúng mình muốn chia sẻ.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-herb-green-400 via-herb-green-500 to-herb-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Lê gai Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-hover-effect">
            {/* Full Image */}
            <div className="relative aspect-[3/4]">
              <Image src="/img/product/legai.png" alt="Lê gai" fill className="object-cover" />

              {/* Text Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 pt-20">
                <h3 className="text-2xl font-bold text-white mb-2">🍐 Lê gai</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Thanh nhiệt, tăng sức đề kháng, chống lão hoá, đẹp da
                </p>
              </div>
            </div>
          </div>

          {/* Nụ hòe Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-hover-effect">
            {/* Full Image */}
            <div className="relative aspect-[3/4]">
              <Image src="/img//product/hoe.png" alt="Nụ hòe" fill className="object-cover" />

              {/* Text Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 pt-20">
                <h3 className="text-2xl font-bold text-white mb-2">🌸 Nụ hòe</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Làm bền thành mạch, hỗ trợ tim mạch, ổn định huyết áp, giúp ngủ ngon
                </p>
              </div>
            </div>
          </div>

          {/* Táo đỏ Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-hover-effect">
            {/* Full Image */}
            <div className="relative aspect-[3/4]">
              <Image src="/img/product/tao.png" alt="Táo đỏ" fill className="object-cover" />

              {/* Text Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 pt-20">
                <h3 className="text-2xl font-bold text-white mb-2">🍯 Táo đỏ</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Bổ khí huyết, tăng năng lượng, an thần, giảm căng thẳng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
