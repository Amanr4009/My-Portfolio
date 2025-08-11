"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Cloud, Palette, Server, Brain, Users, Clock, Target, Lightbulb, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => {
            const progressValues: Record<string, number> = {}
            technicalSkills.forEach((category) => {
              category.skills.forEach((skill) => {
                progressValues[skill.name] = skill.level
              })
            })
            setAnimatedProgress(progressValues)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "text-blue-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "text-green-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Python", level: 75 },
        { name: "Flask", level: 70 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      category: "Database & Cloud",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "AWS", level: 78 },
        { name: "Firebase", level: 82 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Cloud,
      color: "text-orange-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
      ],
    },
  ]

  const softSkills = [
    { name: "Teamwork", icon: Users, description: "Collaborative problem-solving" },
    { name: "Time Management", icon: Clock, description: "Efficient project delivery" },
    { name: "Initiative", icon: Target, description: "Proactive approach" },
    { name: "Adaptability", icon: Lightbulb, description: "Quick learning ability" },
    { name: "Debugging", icon: Brain, description: "Analytical thinking" },
    { name: "UX Design", icon: Palette, description: "User-centered design" },
  ]

  const certifications = [
    "Accenture Virtual Internship Experience Program",
    "AWS Cloud Practitioner (In Progress)",
    "React Advanced Patterns",
    "Node.js Best Practices",
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 lg:py-32">
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
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((category, categoryIndex) => (
                <Card
                  key={category.category}
                  className={cn(
                    "transition-all duration-1000 transform hover:shadow-lg",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    `delay-${200 + categoryIndex * 100}`,
                  )}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className={cn("h-6 w-6", category.color)} />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "transition-all duration-500 transform",
                          isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0",
                          `delay-${400 + categoryIndex * 100 + skillIndex * 50}`,
                        )}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={animatedProgress[skill.name] || 0} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={cn(
                    "text-center p-4 transition-all duration-1000 transform hover:scale-105 hover:shadow-md",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    `delay-${600 + index * 100}`,
                  )}
                >
                  <CardContent className="p-0">
                    <skill.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-sm">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages & Additional Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <Card
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
                "delay-1000",
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-primary" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Python", "Java", "C", "Bash", "TypeScript"].map((lang, index) => (
                    <Badge
                      key={lang}
                      variant="secondary"
                      className={cn(
                        "transition-all duration-500 hover:bg-primary/10",
                        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
                        `delay-${1100 + index * 50}`,
                      )}
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                "delay-1200",
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Certifications & Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-start gap-2 text-sm transition-all duration-500",
                        isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0",
                        `delay-${1300 + index * 100}`,
                      )}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
