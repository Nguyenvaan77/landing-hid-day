"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-herb-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-herb-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🍵</span>
            </div>
            <span className="text-xl font-bold text-herb-green-800">Trà Dược Liệu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-herb-green-700 hover:text-herb-green-500 font-medium transition-colors">
              Sản phẩm
            </a>
            <a href="#benefits" className="text-herb-green-700 hover:text-herb-green-500 font-medium transition-colors">
              Công dụng
            </a>
            <a href="#how-to" className="text-herb-green-700 hover:text-herb-green-500 font-medium transition-colors">
              Cách pha
            </a>
            <a href="#about" className="text-herb-green-700 hover:text-herb-green-500 font-medium transition-colors">
              Về chúng tôi
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-herb-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-herb-green-600 transition-colors">
              Đặt hàng
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-herb-green-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-herb-green-200">
            <div className="flex flex-col space-y-4">
              <a href="#product" className="text-herb-green-700 hover:text-herb-green-500 font-medium">
                Sản phẩm
              </a>
              <a href="#benefits" className="text-herb-green-700 hover:text-herb-green-500 font-medium">
                Công dụng
              </a>
              <a href="#how-to" className="text-herb-green-700 hover:text-herb-green-500 font-medium">
                Cách pha
              </a>
              <a href="#about" className="text-herb-green-700 hover:text-herb-green-500 font-medium">
                Về chúng tôi
              </a>
              <div className="pt-4 border-t border-herb-green-200">
                <button className="w-full bg-herb-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-herb-green-600 transition-colors">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
