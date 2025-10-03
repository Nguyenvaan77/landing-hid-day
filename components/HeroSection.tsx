import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-br from-herb-green-50 via-herb-green-100 to-herb-green-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/img/memcab/nenhup.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-herb-green-50/80 via-herb-green-100/10 to-herb-green-200/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Animated */}
          <div className="space-y-6 animate-fade-in-left visible">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-sm font-medium">
                <span className="mr-2">🎉</span>
                Chào Tân Sinh viên Dược Hà Nội
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-herb-green-900 leading-tight">
                Một tách trà nhỏ
                <span className="block text-herb-green-600">Gửi lời chúc sức khỏe – niềm vui – vững bước</span>
              </h1>

              <p className="text-xl text-herb-green-800 leading-relaxed max-w-2xl">
                Chúc bạn mạnh khỏe, tự tin và vững bước trong hành trình mới. Mỗi ngày học tập và trải nghiệm sẽ như{" "}
                <strong className="text-herb-green-700">một tách trà ấm</strong>, cho bạn thêm sự bình an và năng lượng
                tích cực.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-herb-green-500 to-herb-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-herb-green-600 hover:to-herb-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>🌿 Khám phá ngay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image - Animated */}
          <div className="relative animate-fade-in-right visible">
            <div className="relative z-10">
              <Image
                src="/img/memcab/nenhup.png"
                alt="Trà dược liệu"
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-herb-green-300/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-herb-green-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
