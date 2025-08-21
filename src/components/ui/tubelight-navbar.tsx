"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { DivideIcon as LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  action?: () => void
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  variant?: 'clinic' | 'lounge'
}

export function TubelightNavBar({ items, className, variant = 'clinic' }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const bgColor = isScrolled 
    ? 'bg-black/95 backdrop-blur-lg' 
    : variant === 'clinic' 
      ? 'bg-[#e7d8c4]/90 backdrop-blur-sm'
      : 'bg-lounge-bg/90 backdrop-blur-sm'

  const textColor = isScrolled
    ? 'text-white'
    : variant === 'clinic'
      ? 'text-[#3d251b]'
      : 'text-lounge-accent'

  const activeColor = isScrolled
    ? 'bg-white/20 text-white'
    : variant === 'clinic'
      ? 'bg-clinic-accent/10 text-clinic-accent'
      : 'bg-lounge-accent/10 text-lounge-accent'

  const primaryColor = isScrolled
    ? 'border-white bg-white/20'
    : variant === 'clinic'
      ? 'border-clinic-accent bg-clinic-accent/20'
      : 'border-lounge-accent bg-lounge-accent/20'

  const handleItemClick = (item: NavItem) => {
    setActiveTab(item.name)
    if (item.action) {
      item.action()
    }
  }

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl",
        className,
      )}
    >
      <div className={cn(
        "flex items-center justify-between gap-2 border border-white/20 py-2 px-3 rounded-full shadow-lg transition-all duration-300",
        bgColor
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center px-2 flex-shrink-0">
          <img 
            src="/images/zayn-logo.png"
            alt="ZAYN"
            className="h-6 md:h-8 lg:h-10"
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 flex-1 justify-center min-w-0">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <div
                key={item.name}
                className={cn(
                  "relative cursor-pointer text-xs md:text-sm font-medium transition-all duration-300 flex-shrink-0",
                  "px-2 py-2 md:px-4 md:py-2 rounded-full",
                  "touch-manipulation select-none",
                  "active:scale-95 hover:scale-105",
                  textColor,
                  "hover:text-gold",
                  isActive && activeColor,
                )}
                onClick={() => handleItemClick(item)}
              >
                {item.url && !item.action ? (
                  <Link 
                    to={item.url} 
                    className="flex items-center justify-center gap-1 md:gap-2 min-w-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="hidden sm:inline text-xs md:text-sm whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="sm:hidden flex items-center justify-center">
                      <Icon size={16} strokeWidth={2.5} />
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-center justify-center gap-1 md:gap-2 min-w-0">
                    <span className="hidden sm:inline text-xs md:text-sm whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="sm:hidden flex items-center justify-center">
                      <Icon size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                )}
                
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className={cn(
                      "absolute inset-0 w-full rounded-full -z-10 border",
                      primaryColor
                    )}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {/* Tubelight effect - responsive sizing */}
                    <div className={cn(
                      "absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 rounded-t-full transition-colors duration-300",
                      "w-4 h-0.5 md:w-8 md:h-1",
                      isScrolled ? 'bg-white' : variant === 'clinic' ? 'bg-clinic-accent' : 'bg-lounge-accent'
                    )}>
                      <div className={cn(
                        "absolute rounded-full blur-md transition-colors duration-300",
                        "w-6 h-3 md:w-12 md:h-6 -top-1 md:-top-2 -left-1 md:-left-2",
                        isScrolled ? 'bg-white/20' : variant === 'clinic' ? 'bg-clinic-accent/20' : 'bg-lounge-accent/20'
                      )} />
                      <div className={cn(
                        "absolute rounded-full blur-md transition-colors duration-300",
                        "w-4 h-3 md:w-8 md:h-6 -top-0.5 md:-top-1",
                        isScrolled ? 'bg-white/20' : variant === 'clinic' ? 'bg-clinic-accent/20' : 'bg-lounge-accent/20'
                      )} />
                      <div className={cn(
                        "absolute rounded-full blur-sm transition-colors duration-300",
                        "w-2 h-2 md:w-4 md:h-4 top-0 left-1 md:left-2",
                        isScrolled ? 'bg-white/20' : variant === 'clinic' ? 'bg-clinic-accent/20' : 'bg-lounge-accent/20'
                      )} />
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Book Now Button */}
        <a 
          href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-medium text-xs md:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0",
            "px-3 py-2 md:px-6 md:py-2 rounded-full",
            "touch-manipulation select-none",
            "active:scale-95 hover:scale-105",
            isScrolled 
              ? 'bg-white text-black hover:bg-gray-100 shadow-lg'
              : 'bg-gold text-white hover:bg-gold/90 border border-gold'
          )}
        >
          <span className="hidden sm:inline">Book Now</span>
          <span className="sm:hidden">Book</span>
        </a>
      </div>
    </div>
  )
}