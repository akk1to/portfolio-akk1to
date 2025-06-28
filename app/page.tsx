"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { WorkCard } from "@/components/work-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ProfileCard } from "@/components/profile-card"
import { FloatingMusicPlayer } from "@/components/floating-music-player"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />
      <FloatingMusicPlayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dotted Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <ProfileCard
              name="akk1to.dev"
              jobTitle="Full-stack Developer & AI Enthusiast"
              location="Vietnam"
              avatar="/logo.jpg?height=200&width=200"
              joinedDate="2020"
            />
          </div>

          {/* Right side - Welcome Message */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-block">
                <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="relative z-10">Welcome to my profile</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-white">Learning about</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-600">
                  The future of Internet
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-300 max-w-[600px] leading-relaxed">
                Working on my own projects & works with my digital experiences and modern technologies,
                creative design, efficient code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-yellow-500 border-0"
                onClick={() => window.open("https://github.com/akk1to", "_blank")}
              >
                <span className="relative z-10 flex items-center">
                  View my work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-600 text-zinc-300 hover:text-black hover:border-zinc-400 bg-transparent backdrop-blur-sm"
                onClick={() => window.open("http://discord.com/users/727497287777124414", "_blank")}
              >
                Get in touch through Discord
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link href="https://github.com/akk1to" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/akk1to/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/dragondev_vn" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:contact@akk1to.tech">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white backdrop-blur-sm"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My personal story" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://upload.cdn.akk1to.is-a.dev/content/discordimage.jpg"
                  alt="akk1to.dev"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a 16-year-old student from Vietnam who's get addicted to coding, building apps, games (also breaking it lmao). I've been hooked on computer since I was 5, start to learn code in 8, starting from Scratch, a cool beginner-friendly programming language that's now very popular with young children! On Scratch, I've tried to make basic games and started to learn about coding language!
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Now, at the age of 16, I've already become fluent in some well-known programming language like C++, Java, Python,... But I'm not only coding! I'm also a huge fan of game, especially Minecraft. I've already played Minecraft since I was 8, so that I've played Minecraft for about 7yrs! I love tinkering with it, understanding how it works, and creating my own stuff like plugins and mods. Minecraft is like a dream playground for developers like me.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Lê Anh Tuấn</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">contact@akk1to.dev</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Vietnam</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    className="bg-zinc-800 hover:bg-zinc-700 text-white"
                    onClick={() => window.open("http://github.com/akk1to", "_blank")}
                  >
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="HTML/CSS" level={65} />
            <SkillBadge name="Javascript" level={77} />
            <SkillBadge name="React" level={68} />
            <SkillBadge name="Next.js" level={71} />
            <SkillBadge name="Node.js" level={74} />
            <SkillBadge name="TaiwindCSS" level={61} />
            <SkillBadge name="Java" level={43} />
            <SkillBadge name="C++" level={87} />
            <SkillBadge name="Database" level={70} />
            <SkillBadge name="Linux/Ubuntu" level={65} />
            <SkillBadge name="Docker" level={70} />
            <SkillBadge name="Git" level={75} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Works" subtitle="Places where I'm working" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <WorkCard
              title="AsakaCloud"
              description="Asaka Cloud is proud to be Vietnam's top Minecraft server rental service, offering high-quality and affordable online game server hosting solutions."
              tags={["Working as: Unofficial Active Supporter"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/work1.png"
              webUrl="https://asakacloud.vn/"
              discordUrl="https://discord.gg/asakacloud"
            />
            <WorkCard
              title="DreamMC Network"
              description="DreamMC Network is a Minecraft Community, where you can find friends to play togther in our Minecraft Server!"
              tags={["Working as: Owner of DreamMC Network"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/work2.png"
              webUrl="https://dreammc.asia"
              discordUrl="https://discord.gg/dreammc"
            />
            <WorkCard
              title="Hungg's Basement"
              description="HunggVN is a famous Minecraft Youtuber in Vietnam, usually make videoss about Minecraft Fact & more."
              tags={["Working as: Giveaway Staff"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/work3.png"
              webUrl="https://hunggsmp.wiki.gg/vi/"
              discordUrl="https://discord.gg/hunggvn"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="SentinelsGuard"
              description="The portable, fully antiddos layer 7 & 4, lightweight and modern For Minecraft Proxy based on Velocity"
              tags={["Java", "Minecraft", "Velocity", "Proxy"]}
              image="https://avatars.githubusercontent.com/u/146626223?v=4"
              demoUrl="https://github.com/Khoasoma/SentinelProxy"
              repoUrl="https://github.com/Khoasoma/SentinelProxy"
            />
            <ProjectCard
              title="BusinessManager"
              description="A all-in-one dashboard to manage your business."
              tags={["Business", "Database", "Dashboard", "NodeJS/NextJS"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/project2.png"
              demoUrl="https://merryhome-dashboard-ui.vercel.app/"
              repoUrl="https://github.com/akk1to"
            />
            <ProjectCard
              title="YugiReborn (Private)"
              description="A project of recreating Yugioh Game online"
              tags={["HTML/JSS", "Web Game", "JavaScript", "Firebase"]}
              image="https://upload.cdn.akk1to.is-a.dev/content/project3.jpg"
              demoUrl="https://github.com/akk1to"
              repoUrl="https://github.com/akk1to"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">contact@akk1to.tech</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/akk1to</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/akk1to</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-600">akk</span>
              <span className="text-white">1to</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} akk1to.dev. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/akk1to" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/linkedin.com/in/akk1to/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/dragondev_vn" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:contact@akk1to.tech">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
