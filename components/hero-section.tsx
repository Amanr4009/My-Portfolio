"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Full Stack Developer", "MERN Stack Expert", "AWS Cloud Engineer", "AI Integration Specialist"]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Aman Kumar
              </span>
            </h1>
          </div>

          {/* Animated role text */}
          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="h-16 flex items-center justify-center mb-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                <span className="inline-block min-w-0">{roles[currentRole]}</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            className={cn(
              "transition-all duration-1000 delay-500 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about building scalable web applications with modern technologies. Specialized in MERN stack,
              AWS cloud services, and AI-powered solutions that drive business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={cn(
              "transition-all duration-1000 delay-700 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={scrollToAbout} className="text-lg px-8 py-6 rounded-full">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="text-lg px-8 py-6 rounded-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={cn(
              "transition-all duration-1000 delay-900 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="lg" asChild className="rounded-full p-3 hover:bg-primary/10">
                <a href="mailto:aman.keshri652@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full p-3 hover:bg-primary/10">
                <a href="tel:+916201265651" aria-label="Phone">
                  <Phone className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full p-3 hover:bg-primary/10">
                <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="rounded-full p-3 hover:bg-primary/10">
                <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
