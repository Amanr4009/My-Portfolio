"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Calendar, Users, Zap, Brain, Code, MessageSquare, FileCode } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
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

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      category: "Full-Stack Web Application",
      period: "Jul 2024",
      description: "A modern fashion e-commerce platform featuring AI-driven review analysis and secure media storage.",
      longDescription:
        "Built a comprehensive e-commerce solution with advanced AI capabilities for analyzing customer reviews and providing intelligent product recommendations. The platform features secure user authentication, real-time inventory management, and seamless payment integration. Implemented AWS S3 for secure media storage and utilized OpenAI API for sentiment analysis of customer reviews.",
      image: "/modern-fashion-ai-ecommerce.png",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "AWS S3", "Stripe", "JWT"],
      features: [
        "AI-powered review sentiment analysis",
        "Intelligent product recommendations",
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "AWS S3 media storage integration",
        "Responsive design for all devices",
      ],
      highlights: [
        { icon: Brain, text: "AI Review Analysis" },
        { icon: Zap, text: "Real-time Updates" },
        { icon: Users, text: "User-friendly Interface" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
    },
    {
      id: 2,
      title: "Connected Community - Social App",
      category: "Real-time Social Platform",
      period: "Jan–May 2023",
      description: "A real-time social networking application with chat functionality and secure authentication.",
      longDescription:
        "Developed a comprehensive social networking platform that enables users to connect, share content, and communicate in real-time. The application features WebSocket-based chat system, OAuth authentication, user profiles, post sharing, and real-time notifications. Built with scalability in mind to handle multiple concurrent users.",
      image: "/modern-social-media-chat.png",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "WebSockets", "OAuth", "Socket.io"],
      features: [
        "Real-time chat messaging with Socket.io",
        "OAuth-based secure authentication",
        "User profiles and social connections",
        "Post sharing and interaction system",
        "Real-time notifications",
        "Mobile-responsive design",
      ],
      highlights: [
        { icon: MessageSquare, text: "Real-time Chat" },
        { icon: Users, text: "Social Networking" },
        { icon: Zap, text: "Live Notifications" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
    },
    {
      id: 3,
      title: "CodeBook - Online Code Editor",
      category: "Development Tool",
      period: "Sept–Dec 2022",
      description:
        "A feature-rich online code editor supporting multiple programming languages with syntax highlighting.",
      longDescription:
        "Created a web-based code editor that supports multiple programming languages with advanced features like syntax highlighting, auto-completion, and code execution. The editor provides a seamless development experience with customizable themes, file management, and collaborative editing capabilities.",
      image: "/online-code-editor.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "CodeMirror", "MySQL"],
      features: [
        "Multi-language syntax highlighting",
        "Auto-completion and suggestions",
        "Code execution environment",
        "File management system",
        "Customizable editor themes",
        "Collaborative editing features",
      ],
      highlights: [
        { icon: Code, text: "Multi-language Support" },
        { icon: FileCode, text: "Syntax Highlighting" },
        { icon: Zap, text: "Real-time Execution" },
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
    },
  ]

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise and creative problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={cn(
                  "group overflow-hidden transition-all duration-1000 transform hover:shadow-xl hover:-translate-y-2",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  `delay-${200 + index * 150}`,
                )}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center p-2 bg-muted/50 rounded-lg">
                        <highlight.icon className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs font-medium">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
                        </DialogHeader>
                        {selectedProject && (
                          <div className="space-y-6">
                            <img
                              src={selectedProject.image || "/placeholder.svg"}
                              alt={selectedProject.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Project Overview</h4>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                  {selectedProject.longDescription}
                                </p>

                                <h4 className="font-semibold mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                  {selectedProject.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {selectedProject.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>

                                <div className="space-y-3">
                                  <Button asChild className="w-full">
                                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      View Live Project
                                    </a>
                                  </Button>
                                  <Button variant="outline" asChild className="w-full bg-transparent">
                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                      <Github className="h-4 w-4 mr-2" />
                                      View Source Code
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={cn(
              "text-center mt-16 transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              "delay-1000",
            )}
          >
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a potential collaboration?
            </p>
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
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
