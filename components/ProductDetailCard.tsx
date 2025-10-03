"use client"

import Image from "next/image"
import { Check } from "lucide-react"

interface ProductDetailCardProps {
  name: string
  emoji: string
  scientificName: string
  image: string
  description: string
  nutrition: string
  benefits: string[]
  accentColor: string
  gradientFrom: string
  gradientTo: string
}

export default function ProductDetailCard({
  name,
  emoji,
  scientificName,
  image,
  description,
  nutrition,
  benefits,
  accentColor,
  gradientFrom,
  gradientTo,
}: ProductDetailCardProps) {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" priority />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      {/* Content Overlay - Bottom Section */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        {/* Info Card */}
        <div
          className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-md bg-opacity-95 rounded-2xl p-6 shadow-2xl border border-white/20`}
        >
          {/* Product Name */}
          <div className="mb-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-4xl">{emoji}</span>
              {name}
            </h3>
            <p className="text-white/80 text-sm italic">{scientificName}</p>
          </div>

          {/* Description */}
          <div className="mb-4 space-y-2">
            <p className="text-white/90 text-sm leading-relaxed">
              <strong>Đặc điểm:</strong> {description}
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              <strong>Dinh dưỡng:</strong> {nutrition}
            </p>
          </div>

          {/* Benefits Grid */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Công dụng nổi bật:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2 group/item">
                  <div
                    className={`flex-shrink-0 w-5 h-5 ${accentColor} rounded-full flex items-center justify-center mt-0.5`}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
