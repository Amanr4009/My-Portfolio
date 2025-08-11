"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, MapPin, Users, Zap, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const highlights = [
    {
      icon: Calendar,
      label: "Experience",
      value: "1+ Years",
      description: "Professional Development",
    },
    {
      icon: Zap,
      label: "Projects",
      value: "15+",
      description: "Completed Successfully",
    },
    {
      icon: Users,
      label: "Team Impact",
      value: "30%",
      description: "Increased User Engagement",
    },
    {
      icon: Target,
      label: "Performance",
      value: "25%",
      description: "Faster Deployment Rate",
    },
  ]

  const achievements = [
    "Top 5 Finalist - Radical Health Software Engineer Drive",
    "Employee of the Month - NEWZENALPHA TECH",
    "100% Client Satisfaction in Freelance Projects",
    "Accenture Virtual Internship Program Graduate",
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-muted/30">
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
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image and Quick Stats */}
            <div
              className={cn(
                "transition-all duration-1000 delay-200 transform",
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
              )}
            >
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="relative w-80 h-80 mx-auto mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src="/indian-software-developer-headshot.png"
                    alt="Aman Kumar - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Floating Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <Card
                      key={highlight.label}
                      className={cn(
                        "transition-all duration-1000 transform hover:scale-105",
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                        `delay-${300 + index * 100}`,
                      )}
                    >
                      <CardContent className="p-4 text-center">
                        <highlight.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground mb-1">{highlight.value}</div>
                        <div className="text-sm font-medium text-foreground mb-1">{highlight.label}</div>
                        <div className="text-xs text-muted-foreground">{highlight.description}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* About Content */}
            <div
              className={cn(
                "transition-all duration-1000 delay-400 transform",
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
              )}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate Full Stack Developer with over a year of hands-on experience building scalable,
                    responsive web applications. Currently working at{" "}
                    <span className="text-primary font-semibold">NEWZENALPHA TECH</span>, where I've architected and
                    launched 3+ production-grade applications that increased user engagement by 30% and improved
                    deployment efficiency by 25%.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My expertise spans the entire development lifecycle - from crafting intuitive user interfaces with
                    React and Next.js to building robust backend systems with Node.js and cloud deployment on AWS. I'm
                    particularly passionate about integrating AI capabilities into web applications, having worked on
                    smart job recommendation systems, interview simulation environments, and automated resume analysis
                    tools.
                  </p>
                </div>

                {/* Key Strengths */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">What I Bring to the Table</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "MERN Stack Expertise",
                      "AWS Cloud Architecture",
                      "AI Integration Specialist",
                      "Performance Optimization",
                      "Secure Authentication",
                      "Team Collaboration",
                    ].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={cn(
                          "justify-start p-2 transition-all duration-500 hover:bg-primary/10",
                          isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0",
                          `delay-${600 + index * 50}`,
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className={cn(
                          "flex items-start gap-2 text-muted-foreground transition-all duration-500",
                          isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0",
                          `delay-${700 + index * 100}`,
                        )}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div
                  className={cn(
                    "pt-4 transition-all duration-1000 delay-1000 transform",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                  )}
                >
                  <Button
                    size="lg"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="rounded-full px-8"
                  >
                    Let's Work Together
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
