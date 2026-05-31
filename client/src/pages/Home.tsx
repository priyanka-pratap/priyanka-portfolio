import { Mail, Github, ExternalLink, Code2, Zap, ArrowRight, Sparkles, Database, Smartphone, Wrench, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Premium Tech Elegance with Neon Accents
 * - Deep black background (#0a0a0a) with vibrant neon green (#00ff00) and purple (#7c3aed) accents
 * - Animated geometric backgrounds with glowing effects
 * - High-energy, modern tech aesthetic inspired by leading dev companies
 * - Premium animations and smooth transitions
 * - Dashed border elements and floating geometric shapes
 */

// Skill Icon Mapping
const skillIcons: { [key: string]: React.ReactNode } = {
  // Frontend
  "React": <Code2 className="w-5 h-5" />,
  "TypeScript": <Code2 className="w-5 h-5" />,
  "Tailwind CSS": <Zap className="w-5 h-5" />,
  "JavaScript": <Code2 className="w-5 h-5" />,
  
  // Backend
  "Node.js": <Rocket className="w-5 h-5" />,
  "Python": <Code2 className="w-5 h-5" />,
  "Express": <Rocket className="w-5 h-5" />,
  "REST APIs": <Zap className="w-5 h-5" />,
  
  // Database
  "MongoDB": <Database className="w-5 h-5" />,
  "PostgreSQL": <Database className="w-5 h-5" />,
  "Firebase": <Database className="w-5 h-5" />,
  
  // Tools
  "Git": <Wrench className="w-5 h-5" />,
  "GitHub": <Wrench className="w-5 h-5" />,
  "VS Code": <Wrench className="w-5 h-5" />,
  "Docker": <Wrench className="w-5 h-5" />,
  
  // Mobile
  "React Native": <Smartphone className="w-5 h-5" />,
  "Mobile UI/UX": <Smartphone className="w-5 h-5" />,
  
  // Other
  "Data Visualization": <Zap className="w-5 h-5" />,
  "WebRTC": <Rocket className="w-5 h-5" />,
  "Encryption": <Wrench className="w-5 h-5" />,
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex justify-between items-center relative z-10">
          <div className="text-2xl font-bold neon-text flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center animate-pulse">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            PAP
          </div>
          <div className="flex gap-8">
            <a href="#projects" className="text-sm hover:text-accent transition-colors duration-300 hover:scale-110 transform">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors duration-300 hover:scale-110 transform">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors duration-300 hover:scale-110 transform">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663486619921/RPgjmj4nfkiFhhyMBNDB8X/premium-hero-bg-gLWChJ3FjSezPQFAUe38bd.webp')",
          }}
        />

        <div className="container relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Hi, I'm <span className="neon-text">Priyanka</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                I build practical web & mobile applications that solve real-world problems with precision and elegance.
              </p>

              {/* CTA Button with Animation */}
              <div className="flex gap-4 pt-8">
                <a href="#projects" className="group">
                  <button className="glow-box bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transform transition-all duration-300">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Holographic Avatar */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur-3xl animate-pulse" />
                {/* Avatar Image */}
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663486619921/RPgjmj4nfkiFhhyMBNDB8X/priyanka-avatar-hologram-dGyvfVSsTzyBvHiASwA2Wd.webp"
                  alt="Priyanka - Holographic Avatar"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-500 hover:scale-105 transform"
                />
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 animate-pulse" style={{ animationDuration: "3s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-black">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <div className={`bg-card rounded-lg border-2 border-dashed transition-all duration-500 overflow-hidden ${
                  hoveredProject === project.id ? "border-accent shadow-lg shadow-accent/20" : "border-border"
                }`}>
                  <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
                    {/* Project Info */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        {project.status && (
                          <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-bold animate-pulse">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-bold border border-accent/30 hover:bg-accent/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-48 rounded-lg border-2 border-dashed border-accent/50 bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center overflow-hidden group/card">
                        <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-30 transition-opacity duration-300 ${
                          hoveredProject === project.id ? "bg-accent/10" : ""
                        }`} />
                        <div className="relative text-center">
                          <ExternalLink className={`w-12 h-12 mx-auto mb-2 transition-all duration-300 ${
                            hoveredProject === project.id ? "text-accent animate-bounce" : "text-accent/50"
                          }`} />
                          <p className="text-xs text-muted-foreground">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Icons and Animations */}
      <section id="skills" className="py-24 border-t border-border bg-card/50">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-black">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                onMouseEnter={() => setHoveredSkill(skillGroup.category)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`bg-background rounded-lg p-6 border transition-all duration-300 transform hover:scale-105 ${
                  hoveredSkill === skillGroup.category
                    ? "border-accent shadow-lg shadow-accent/20 -translate-y-2"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                    {skillGroup.category === "Frontend" && <Code2 className="w-4 h-4 text-white" />}
                    {skillGroup.category === "Backend" && <Rocket className="w-4 h-4 text-white" />}
                    {skillGroup.category === "Database" && <Database className="w-4 h-4 text-white" />}
                    {skillGroup.category === "Tools" && <Wrench className="w-4 h-4 text-white" />}
                    {skillGroup.category === "Mobile" && <Smartphone className="w-4 h-4 text-white" />}
                    {skillGroup.category === "Other" && <Zap className="w-4 h-4 text-white" />}
                  </div>
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 group/skill hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="text-accent group-hover/skill:animate-spin transition-all duration-300">
                        {skillIcons[skill] || <Code2 className="w-5 h-5" />}
                      </div>
                      <span className="text-sm text-foreground group-hover/skill:text-accent transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="w-0 h-0.5 bg-accent group-hover/skill:w-8 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-t border-border relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663486619921/RPgjmj4nfkiFhhyMBNDB8X/section-divider-bg-DKPN3o87nWrsa72dJuwUqD.webp')",
          }}
        />

        <div className="container max-w-2xl space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-5xl font-black">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
          </div>

          {/* Animated avatar in about section */}
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full animate-pulse" />
              <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                <Code2 className="w-10 h-10 text-accent animate-bounce" />
              </div>
            </div>
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
      <section id="contact" className="py-24 border-t border-border bg-card/50">
        <div className="container max-w-2xl text-center space-y-12">
          {/* Animated contact avatar */}
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent rounded-full animate-spin" style={{ animationDuration: "4s" }} />
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-accent animate-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl font-black">Let's Connect</h2>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abhishekpratapsinghpriyanka@gmail.com">
              <button className="glow-box bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 font-bold flex items-center gap-2 rounded-lg transition-all duration-300 hover:scale-110 transform">
                <Mail className="w-4 h-4" />
                Email Me
              </button>
            </a>
            <a href="https://github.com/priyanka-pratap" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-3 font-bold flex items-center gap-2 rounded-lg transition-all duration-300 hover:scale-110 transform">
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </a>
          </div>

          <div className="pt-8 border-t border-border space-y-4">
            <p className="text-sm text-muted-foreground">
              Email: <span className="text-accent font-bold">abhishekpratapsinghpriyanka@gmail.com</span>
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
