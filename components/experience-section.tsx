"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap, Award, TrendingUp, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
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

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "NEWZENALPHA TECH",
      location: "Remote",
      period: "Aug 2024 – Present",
      type: "Full-time",
      description:
        "Leading full-stack development initiatives, architecting scalable applications, and pioneering AI integration solutions.",
      achievements: [
        "Architected and launched 3+ production-grade full-stack applications using React, Node.js, and Firebase",
        "Increased user engagement by 30% and improved load times by 15% through performance optimization",
        "Pioneered secure JWT-based authentication, reducing unauthorized access by 50%",
        "Enhanced deployment rate by 25% through improved design-engineering collaboration",
        "Led integration of AI capabilities including smart job recommendations and interview simulations",
        "Implemented end-to-end CI/CD workflows and performance optimization strategies",
      ],
      technologies: ["React", "Node.js", "Firebase", "JWT", "AI/ML", "AWS", "MongoDB", "REST APIs"],
      highlights: [
        { icon: TrendingUp, text: "30% User Engagement Increase" },
        { icon: Zap, text: "25% Faster Deployment" },
        { icon: Users, text: "50% Reduced Unauthorized Access" },
      ],
    },
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "MS Ramaiah University",
      location: "Bangalore, India",
      period: "2019 – 2023",
      type: "Bachelor's Degree",
      description:
        "Comprehensive computer science education with focus on software engineering and modern technologies.",
      coursework: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Technologies"],
      achievements: ["Strong academic performance", "Active participation in coding competitions"],
    },
    {
      degree: "Class XII - Science",
      institution: "Sri Chaitanya, CBSE",
      location: "India",
      period: "2019",
      type: "Higher Secondary",
      description: "Science stream with Mathematics, Physics, and Chemistry focus.",
    },
    {
      degree: "Class X",
      institution: "DAV Public School, CBSE",
      location: "India",
      period: "2017",
      type: "Secondary",
      description: "Strong foundation in core subjects with excellent academic performance.",
    },
  ]

  const certifications = [
    {
      name: "Accenture Virtual Internship Experience Program",
      issuer: "Forage",
      year: "2023",
      description: "Comprehensive program covering software engineering practices and industry standards.",
    },
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-20 lg:py-32 bg-muted/30">
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
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic foundation
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Building className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative mb-12 transition-all duration-1000 transform",
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                    `delay-${200 + index * 200}`,
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          <Badge variant="secondary">{job.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                      {/* Key Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {job.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10"
                          >
                            <highlight.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{highlight.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {education.map((edu, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative mb-8 transition-all duration-1000 transform",
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
                    `delay-${600 + index * 150}`,
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <Badge variant="outline">{edu.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      {edu.coursework && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={cn(
                    "transition-all duration-1000 transform hover:shadow-md",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    `delay-${1000 + index * 100}`,
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
