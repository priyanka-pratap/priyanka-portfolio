import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, Code2, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalist Tech Elegance
 * - Deep charcoal background (#0a0e27) with pure white text
 * - Electric cyan (#00d9ff) accents for interactive elements
 * - Asymmetric layout with generous whitespace
 * - Typography-driven hierarchy (bold headlines, light body)
 * - Smooth, professional animations
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Trading Analysis Tool",
      description:
        "A comprehensive trading analytics platform designed to track and optimize trading performance. Features include 252-day trading challenge tracking, 3% daily profit target calculations, capital management with ₹100,000 base, withdrawal and reinvestment rule automation, and advanced technical analysis for crude oil and gold scalping strategies with reverse psychology setups.",
      tech: ["React", "TypeScript", "Python", "Data Visualization"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Untraceable Calling App",
      description:
        "A privacy-focused secure communication application emphasizing end-to-end encryption and anonymous calling capabilities. Built with robust backend infrastructure and advanced encryption protocols to ensure user privacy and secure data transmission.",
      tech: ["React Native", "Node.js", "Encryption", "WebRTC"],
      link: "#",
      featured: true,
      status: "In Progress",
    },
    {
      id: 3,
      title: "AI Glow-Up Photo Generator",
      description:
        "An innovative AI-powered application that transforms selfies into medically prescribed aesthetic enhancements. Uses advanced image processing and AI models to deliver professional-grade beauty transformations.",
      tech: ["React", "Python", "TensorFlow", "Image Processing"],
      link: "#",
      featured: false,
      status: "Planned",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Docker"] },
    { category: "Mobile", items: ["React Native", "Mobile UI/UX"] },
    { category: "Other", items: ["Data Visualization", "WebRTC", "Encryption"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-accent">PAP</div>
          <div className="flex gap-6">
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663486619921/RPgjmj4nfkiFhhyMBNDB8X/hero-bg-1-GvbvJtV9gD4Ryi3E4VBzDg.webp')",
          }}
        />
        <div className="container relative py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-accent">Priyanka</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I build practical web and mobile applications that solve real-world problems. Specialized in
                trading analytics, secure communications, and AI-powered solutions.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2"
              >
                View My Work
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Download CV
              </Button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-sm h-96 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="relative text-center space-y-4">
                <Code2 className="w-16 h-16 text-accent mx-auto" />
                <p className="text-sm text-muted-foreground">Building with precision & creativity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300">
                  {/* Status Badge */}
                  {project.status && (
                    <div className="inline-block mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && !project.status && (
                    <div className="inline-block mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Featured
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-48 rounded-lg border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-30" />
                        <div className="relative text-center">
                          <ExternalLink className="w-12 h-12 text-accent/50 mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider between projects */}
                  {idx < projects.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transform translate-y-8" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-border bg-card/30">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I discovered my passion for coding through solving real-world problems. My journey began with a curiosity
              about how technology can optimize financial trading and secure communications. This led me to specialize in
              building practical applications that combine technical precision with user-centric design.
            </p>

            <p>
              I'm particularly interested in projects that involve complex data analysis, secure systems, and
              cutting-edge AI applications. Whether it's building trading analytics platforms, privacy-focused apps, or
              AI-powered solutions, I approach each project with a focus on clean code, scalability, and user
              experience.
            </p>

            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and
              continuously learning to stay at the forefront of web and mobile development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border bg-card/30">
        <div className="container max-w-2xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abhishekpratapsinghpriyanka@gmail.com">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Me
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-2 flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-border space-y-4">
            <p className="text-sm text-muted-foreground">
              Email: <span className="text-accent font-medium">abhishekpratapsinghpriyanka@gmail.com</span>
            </p>
            <p className="text-xs text-muted-foreground/70">
              © 2026 Priyanka Abhishek Pratap Singh. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
