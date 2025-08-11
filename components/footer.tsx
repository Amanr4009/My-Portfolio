"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, ArrowUp, Mail, Phone, Linkedin, Github, Code2 } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:aman.keshri652@gmail.com" },
    { name: "Phone", icon: Phone, href: "tel:+916201265651" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Aman Kumar</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Full Stack Developer passionate about creating innovative web solutions with modern technologies.
                Specializing in MERN stack, AWS cloud services, and AI-powered applications.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:aman.keshri652@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  aman.keshri652@gmail.com
                </a>
                <a
                  href="tel:+916201265651"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  +91-6201265651
                </a>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="mt-6 bg-transparent hover:bg-primary/10"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {currentYear} Aman Kumar. Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Full Stack Developer</span>
              <span>•</span>
              <span>Available for Projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
