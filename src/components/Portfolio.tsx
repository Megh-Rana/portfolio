import React from "react";
import { motion } from "framer-motion";

/**
 * Updated Portfolio.tsx
 * - brighter, happier color palette
 * - header wordmark instead of generic M
 * - avatar/photo placeholder on the right (drop your photo in /src/assets/avatar.jpg)
 * - short hero tagline (no long bio) — full bio moved to About section
 * - cleaner layout, no duplicated About content
 */

type Project = {
  name: string;
  desc: string;
  repo: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    name: "Anvesha",
    desc: "One Stop Personalized Career & Education Adviser",
    repo: "https://github.com/Megh-Rana/anvesha",
    tags: ["HTML/CSS", "scikit-learn"],
  },
  {
    name: "Pravaha",
    desc: "A simple blogging platform where admins can manage posts and users can read, comment, and search.",
    repo: "https://github.com/Megh-Rana/Pravaha",
    tags: ["TypeScript", "TailwindCSS"],
  },
  {
    name: "FlappyC",
    desc: "Flappy Bird Clone made in C, using SDL2",
    repo: "https://github.com/Megh-Rana/FlappyC",
    tags: ["C", "SDL2"],
  },
  {
    name: "LineFollowerPID",
    desc: "Line Following Robot using PID control",
    repo: "https://github.com/Megh-Rana/LineFollowerPID",
    tags: ["ESP32", "IOT"],
  },
  {
    name: "Ray Optics Simulator",
    desc: "Simple website to simulate basic ray optics for Convex and Concave mirrors and lenses",
    repo: "https://github.com/Megh-Rana/LineFollowerPID",
    tags: ["HTML/CSS"],
  },
  {
    name: "ChemistryReactionPathFinder",
    desc: "Website to graphically visualize interconnected chemical reactions and solve chemistry convesion problems",
    repo: "https://github.com/Megh-Rana/LineFollowerPID",
    tags: ["HTML/CSS"],
  },
  {
    name: "CorvusOS-Revived",
    desc: "Maintained Custom AOSP source with upstreamed security patches",
    repo: "https://github.com/CorvusOS-Revived",
    tags: ["AOSP"],
  },
  {
    name: "PixelExperience12-Legacy",
    desc: "Custom AOSP firmware modified for running on ultra legacy devices",
    repo: "https://github.com/PE12-Legacy",
    tags: ["AOSP"],
  },        
];

export default function Portfolio() {
  const fullName = "Megh Rana";
  const heroTagline = "I build playful tech — tiny tools, embedded hacks & joyful UIs.";
  const aboutLong =
    "I’m a Computer Science undergraduate passionate about building, breaking, and rebuilding things — both in code and hardware. My work spans across embedded systems, Android development, Linux customization, and web projects, with a knack for taking on technical challenges that most people consider “too much trouble.”";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081229] via-[#0b1b3a] to-[#0b0f1a] text-white antialiased">
      {/* colorful layered glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-20 -top-16 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#60a5fa]/40 to-[#7c3aed]/30" />
        <div className="absolute right-[-120px] bottom-[-40px] w-[420px] h-[420px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#f472b6]/30 to-[#60a5fa]/20" />
      </div>

      {/* Header wordmark */}
      <header className="fixed inset-x-0 top-0 z-40 bg-transparent/10 backdrop-blur-md border-b border-white/6">
        <div className="max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            {/* Wordmark with small animated accent */}
            <div className="text-lg font-extrabold tracking-tight select-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-violet-400 to-pink-300">
                {fullName}
              </span>
            </div>

            {/* animated dot accent */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(90deg,#60a5fa,#7c3aed,#fb7185)" }}
            />
          </a>

          <nav className="hidden md:flex gap-8 text-slate-300 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#socials" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="md:hidden text-slate-300">☰</div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 pt-32 pb-24">
        {/* HERO */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Hey — I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-purple-400">
                {fullName}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-lg text-slate-300 max-w-xl"
            >
              {heroTagline}
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-lg text-white"
                style={{ background: "linear-gradient(90deg,#7c3aed,#60a5fa)" }}
              >
                View Projects
              </a>

              <a
                href="#socials"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-white/10 hover:bg-white/20 border border-white/8"
              >
                Contact
              </a>
            </div>

            {/* optional quick highlights beneath hero */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="px-3 py-2 rounded-full bg-white/5 border border-white/6">🔧 AOSP</div>
              <div className="px-3 py-2 rounded-full bg-white/5 border border-white/6">💻 Web</div>
              <div className="px-3 py-2 rounded-full bg-white/5 border border-white/6">🧪 AI/ML</div>
            </div>
          </div>

          {/* Right: avatar / illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            {/* If you have a photo: place it at /src/assets/avatar.jpg and uncomment the <img> below */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* colorful ring */}
              <div className="absolute inset-0 rounded-2xl" style={{
                background: "conic-gradient(from 180deg at 50% 50%, rgba(96,165,250,0.18), rgba(124,58,237,0.18), rgba(251,113,133,0.12))",
                filter: "blur(18px)"
              }} />

              <div className="relative w-56 h-56 rounded-3xl bg-gradient-to-br from-sky-400/30 to-purple-500/30 border border-white/8 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img
                  src="/src/assets/avatar.png"
                  alt="Megh Rana"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

            </motion.div>
          </div>
        </section>

        {/* ABOUT (detailed) */}
        <section id="about" className="mt-20">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold">
            About
          </motion.h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-slate-200 leading-relaxed">{aboutLong}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="mt-1">India</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">Currently</div>
                  <div className="mt-1">AOSP • UI Design • Systems</div>
                </div>
              </div>
            </div>

            <aside className="p-6 rounded-2xl bg-gradient-to-b from-purple-500/20 to-sky-500/20 border border-white/10">
              <div className="text-sm text-slate-300 font-medium">Quick Bits</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>• Computer Engineering (2029)</li>
                <li>• Comfortable: JS, C/C++, Python, Embedded</li>
                <li>• Loves building side projects</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold">
            Projects
          </motion.h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.name}
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">{p.name}</div>
                    <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                  </div>

                  <div className="text-sm text-slate-400">{(p.tags || []).join(" • ")}</div>
                </div>

                <div className="mt-4 text-sm text-slate-400 underline">Open on GitHub</div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT / SOCIALS */}
        <section id="socials" className="mt-20">
          <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold">
            Get in touch
          </motion.h2>

          <div className="mt-6 flex flex-wrap gap-4 items-center text-sm">
            <a href="https://github.com/Megh-Rana" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">GitHub</a>
            <a href="https://www.linkedin.com/in/megh-rana/" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">LinkedIn</a>
            <a href="https://instagram.com/_megh_rana_" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">Instagram</a>
            <a href="mailto:meghrana2007@gmail.com" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10">Email</a>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 pb-12 text-slate-400 text-sm">
          © {new Date().getFullYear()} {fullName}
        </footer>
      </main>
    </div>
  );
}
