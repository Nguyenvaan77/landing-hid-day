"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ProductDetailCard from "./ProductDetailCard"

const products = [
  {
    name: "Lê gai",
    emoji: "🍐",
    scientificName: "Rosa roxburghii",
    image: "/img/product/legai.jpg",
    description: "Quả nhỏ, tròn, khi khô màu nâu sậm, đường kính ~1,5–2 cm, vị chua thơm",
    nutrition: "Giàu vitamin C (gấp nhiều lần cam), polyphenol, flavonoid, axit hữu cơ",
    benefits: [
      "Tăng sức đề kháng, nâng cao miễn dịch",
      "Chống oxy hóa, làm chậm lão hóa",
      "Làm đẹp da, giúp da sáng khỏe",
      "Hỗ trợ phòng ngừa ung thư, tiểu đường",
    ],
    accentColor: "bg-red-500",
    gradientFrom: "from-red-600/90",
    gradientTo: "to-red-800/90",
  },
  {
    name: "Nụ hòe",
    emoji: "🌸",
    scientificName: "Flos Styphnolobii japonici imaturi",
    image: "/img/product/hoe.jpg",
    description: "Nụ hoa hình trứng có cuống nhỏ, dài 3-6mm, rộng 1-2mm, màu vàng xám",
    nutrition: "Chứa nhiều rutin, quercetin, flavonoid → bền thành mạch, kháng viêm",
    benefits: [
      "Bền thành mạch, hỗ trợ tim mạch",
      "Ổn định huyết áp, hạ mỡ máu",
      "Thanh nhiệt, mát gan, hỗ trợ giải độc",
      "An thần, ngủ ngon, cải thiện mất ngủ",
    ],
    accentColor: "bg-purple-500",
    gradientFrom: "from-purple-600/90",
    gradientTo: "to-purple-800/90",
  },
  {
    name: "Táo đỏ",
    emoji: "🍯",
    scientificName: "Fructus Ziziphi jujubae",
    image: "/img/memcab/tao.jpg",
    description: "Quả đỏ nâu, hình trứng, ruột xốp mềm, vị ngọt dịu",
    nutrition: "Giàu đường tự nhiên, vitamin nhóm B, C, khoáng chất (sắt, kali, magiê), saponin",
    benefits: ["Bổ khí huyết, tăng năng lượng", "Dưỡng tâm an thần", "Điều hòa hương vị trà", "Chống mệt mỏi"],
    accentColor: "bg-amber-500",
    gradientFrom: "from-amber-600/90",
    gradientTo: "to-amber-800/90",
  },
]

export default function ProductDetailsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-12 lg:py-16 bg-gradient-to-b from-white to-herb-green-50 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-herb-green-900 mb-3">📖 CHI TIẾT DƯỢC LIỆU</h2>
          <p className="text-lg text-herb-green-700 max-w-3xl mx-auto">
            Khám phá sâu hơn về từng vị thuốc quý trong bộ ba dược liệu
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-purple-400 to-amber-400 mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductDetailCard {...product} />
            </div>
          ))}
        </div>

        {/* Combination Benefits */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-herb-green-500 to-herb-green-700 rounded-2xl p-6 lg:p-8 shadow-2xl text-white">
          <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Khi kết hợp</span>
            <span>✨</span>
          </h3>
          <div className="space-y-4 text-center">
            <p className="text-lg">
              <span className="font-semibold bg-red-500/30 px-3 py-1 rounded-full">Chua nhẹ</span>
              {" – "}
              <span className="font-semibold bg-purple-500/30 px-3 py-1 rounded-full">đắng thanh</span>
              {" – "}
              <span className="font-semibold bg-amber-500/30 px-3 py-1 rounded-full">ngọt dịu</span>
            </p>
            <p className="text-lg">→ Hài hòa vị giác, tạo nên trà thảo mộc cân bằng</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="font-semibold">🍃 Tiêu hóa</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="font-semibold">❤️ Tim mạch</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="font-semibold">🔄 Tuần hoàn</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="font-semibold">😴 Giấc ngủ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
