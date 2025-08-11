"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aman.keshri652@gmail.com",
      href: "mailto:aman.keshri652@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6201265651",
      href: "tel:+916201265651",
      description: "Available for calls",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      description: "Open to remote work",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      description: "Quick turnaround",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      description: "Professional network",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      description: "Code repositories",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:aman.keshri652@gmail.com",
      description: "Direct contact",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={cn(
              "text-center mb-16 transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div
              className={cn(
                "transition-all duration-1000 delay-200 transform",
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
              )}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
                    Whether you're looking for a full-stack developer, need help with AI integration, or want to explore
                    modern web solutions, I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={info.label}
                      className={cn(
                        "transition-all duration-1000 transform hover:shadow-md hover:-translate-y-1",
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                        `delay-${400 + index * 100}`,
                      )}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm mb-1">{info.label}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{info.description}</p>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="text-sm font-medium text-primary hover:underline break-all"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Connect on Social</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="lg"
                        asChild
                        className={cn(
                          "transition-all duration-1000 transform hover:scale-105",
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                          `delay-${800 + index * 100}`,
                        )}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <social.icon className="h-5 w-5" />
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <Card
                  className={cn(
                    "bg-primary/5 border-primary/20 transition-all duration-1000 transform",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    "delay-1000",
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Current Availability</h4>
                    </div>
                    <p className="text-muted-foreground">
                      I'm currently open to new opportunities and freelance projects. Let's discuss how I can help bring
                      your vision to life.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={cn(
                "transition-all duration-1000 delay-400 transform",
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
              )}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" required placeholder="Project Discussion" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project, timeline, and how I can help..."
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
