"use client"

import Image from "next/image"
import { Linkedin, Facebook } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const team = [
  {
    name: "Phạm Thị Tuyết",
    role: "Founder & CEO",
    quote: '"Các em bơi về hết đây cho chị"',
    image:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/518655758_2539916263032604_1026818518813603483_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Sg4ZN7SSh_UQ7kNvwHp3CnY&_nc_oc=AdnTr2VkRjk1pgO52CoY5INZBCVRwu0EFAjjiBfYoecWC6vOyFzuGjYSx62cpzBnCjo&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=qOrC2yGNdN0Jo9FOlU3orQ&oh=00_AfRr9CAn2O2-Un3jQAbQptPsI4RkkPZ7BcImRN06SKMGiA&oe=68827DEF",
  },
  {
    name: "Park Bo Gum",
    role: "Thư ký Founder",
    quote: '"Làm thân chủ hạnh phúc là nhiệm vụ của tôi"',
    image: "https://liembarbershop.com/wp-content/uploads/2024/09/Fo58zmPacAYA02W.jpg",
  },
]

export default function TeamSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      id="about"
      className={`py-12 lg:py-16 bg-white scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-herb-green-100 text-herb-green-800 rounded-full text-sm font-medium mb-3">
            <span className="w-2 h-2 bg-herb-green-500 rounded-full mr-2"></span>
            Đội ngũ của chúng tôi
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            VỀ CHÚNG TÔI – NHỮNG NGƯỜI ĐỨNG SAU LANGCONNECT
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            LangConnect được khởi xướng bởi một nhóm sinh viên năm cuối của Đại học Dược Hà Nội, với sự đồng hành chuyên
            môn của các giảng viên và lương y giàu kinh nghiệm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center space-y-4">
                {/* Avatar */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-herb-green-500 shadow-lg">
                    <Image
                      src={member.image || "/placeholder.svg?height=96&width=96"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-herb-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-herb-green-600 font-semibold">{member.role}</p>
                  <blockquote className="text-gray-600 italic leading-relaxed">{member.quote}</blockquote>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
