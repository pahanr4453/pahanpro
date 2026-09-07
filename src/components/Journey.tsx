import {
  GraduationCap,
  Trophy,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Palette,
  Sparkles,
  Camera
} from 'lucide-react';

import { motion } from 'framer-motion';

const Journey = () => {
  const education = [
    {
      title: "Secondary Education",
      institution: "Mahinda Rajapaksha College, Matara",
      duration: "2016 - 2025",
      description:
        "Nurturing a strong foundation in technology and academics at one of the leading schools in the south.",
      icon: <GraduationCap className="text-blue-400" />
    },
    {
      title: "C Programming Certification",
      institution: "DP Education IT Campus",
      duration: "May 2026",
      description:
        "Successfully mastered foundational programming architectures, procedural core logics, and algorithms certified by DP Education Perera Foundation.",
      icon: <Award className="text-cyan-400" />,
      certificateUrl: "/Certificate.pdf"
    },
    {
      title: "Graphic Design & UI/UX",
      institution: "Self-Mastery & Coursework",
      duration: "Skill Acquired",
      description:
        "Mastered visual storytelling, layout design, and digital aesthetics through intensive course modules.",
      icon: <Palette className="text-emerald-400" />
    },
    {
      title: "Professional Skills Mastery",
      institution: "British Council, Sun Vision English Academy & SNIT",
      duration: "Certified",
      description:
        "Mastering English communication, professional linguistics, and advanced mathematical shortcuts.",
      icon: <Award className="text-pink-400" />
    },
    {
      title: "Higher Education Aspirations",
      institution: "SLIIT (Expected)",
      duration: "Prospective",
      description:
        "Targeting a degree in Software Engineering to build next-gen digital solutions.",
      icon: <BookOpen className="text-purple-400" />
    }
  ];

  const sports = [
    { name: "Cricket", icon: "🏏", color: "from-blue-500/20" },
    { name: "Volleyball", icon: "🏐", color: "from-orange-500/20" },
    { name: "Karate Master", icon: "🥋", color: "from-red-500/20" },
    { name: "Footballer", icon: "⚽", color: "from-sky-500/20" },
    { name: "Throwball", icon: "🏐", color: "from-green-500/20" },
    { name: "Chess Master", icon: "♟️", color: "from-purple-500/20" }
  ];

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#020617]
        px-5
        py-24
        sm:px-6
        md:px-8
        lg:px-10
        lg:py-28
      "
    >
      {/* BACKGROUND GLOWS */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 20, 35, 0],
          scale: [1, 1.08, 0.96, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-0
          h-96
          w-96
          rounded-full
          bg-blue-600/[0.07]
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 40, -15, 0],
          scale: [1, 0.94, 1.06, 1]
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-24
          h-[480px]
          w-[480px]
          rounded-full
          bg-purple-600/[0.06]
          blur-[160px]
        "
      />

      {/* AMBIENT PARTICLES */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -35, 0],
            opacity: [0.12, 0.45, 0.12],
            scale: [1, 1.25, 1]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.4
          }}
          className={`
            pointer-events-none
            absolute
            h-1
            w-1
            rounded-full
            bg-gradient-to-r
            ${
              i % 2 === 0
                ? "from-blue-400 to-cyan-400"
                : "from-purple-400 to-pink-400"
            }
          `}
          style={{
            top: `${24 + i * 13}%`,
            left: `${12 + i * 18}%`
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mb-6
              flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/5
              px-4
              py-1.5
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>

            <span className="text-[9px] font-black uppercase tracking-[0.28em] text-blue-400">
              Live: My Evolution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tighter
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            STORY &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text italic text-transparent">
              ACHIEVEMENTS
            </span>
          </motion.h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-transparent" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: ACADEMIC PATH */}
          <div className="space-y-10">
            <h3 className="flex items-center gap-4 text-xl font-black uppercase tracking-widest text-white sm:text-2xl">
              <span className="rounded-2xl border border-blue-500/25 bg-blue-600/15 p-3">
                <GraduationCap className="text-blue-500" />
              </span>

              Academic Path

              <div className="h-px flex-grow bg-gradient-to-r from-blue-500/40 to-transparent" />
            </h3>

            <div className="relative ml-3 border-l border-slate-800/70 pl-7 sm:ml-5 sm:pl-10">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08
                  }}
                  className="group relative pb-6 last:pb-0 sm:pb-8"
                >
                  {/* NODE */}
                  <div
                    className="
                      absolute
                      -left-[34px]
                      top-6
                      h-3.5
                      w-3.5
                      rounded-full
                      border-2
                      border-slate-700
                      bg-[#020617]
                      transition-all
                      duration-300
                      group-hover:border-blue-500
                      group-hover:bg-blue-500
                      sm:-left-[47px]
                    "
                  />

                  {/* CARD */}
                  <div
                    className="
                      rounded-[1.5rem]
                      border
                      border-white/5
                      bg-white/[0.02]
                      p-5
                      backdrop-blur-sm
                      transition-all
                      duration-400
                      group-hover:-translate-y-1
                      group-hover:border-blue-500/25
                      group-hover:bg-white/[0.04]
                      sm:p-6
                    "
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 sm:text-[10px]">
                        {item.duration}
                      </span>

                      <span className="text-slate-500 transition-colors group-hover:text-blue-400">
                        {item.icon}
                      </span>
                    </div>

                    <h4 className="mt-1 text-lg font-black uppercase tracking-tight text-white transition-colors group-hover:text-blue-400 sm:text-xl">
                      {item.title}
                    </h4>

                    <p className="mb-3 text-[9px] font-bold uppercase tracking-wide text-gray-400 sm:text-[10px]">
                      {item.institution}
                    </p>

                    <p className="text-xs font-medium leading-relaxed text-gray-500">
                      {item.description}
                    </p>

                    {item.certificateUrl && (
                      <div className="mt-5 border-t border-white/5 pt-3">
                        <motion.a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.18em]
                            text-cyan-400
                            transition-colors
                            hover:text-white
                          "
                        >
                          Open Certificate
                          <ArrowRight size={12} />
                        </motion.a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">

            {/* SPORTS */}
            <div>
              <h3 className="mb-8 flex items-center gap-4 text-xl font-black uppercase tracking-widest text-white sm:text-2xl">
                <span className="rounded-2xl border border-yellow-500/25 bg-yellow-500/15 p-3">
                  <Trophy className="text-yellow-500" />
                </span>

                Sports Excellence

                <div className="h-px flex-grow bg-gradient-to-r from-yellow-500/40 to-transparent" />
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {sports.map((sport, i) => (
                  <motion.div
                    key={sport.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.05
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02
                    }}
                    className={`
                      group
                      flex
                      min-h-[125px]
                      flex-col
                      items-center
                      justify-center
                      rounded-[1.6rem]
                      border
                      border-white/5
                      bg-gradient-to-br
                      ${sport.color}
                      to-transparent
                      p-4
                      text-center
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-white/10
                    `}
                  >
                    <span className="mb-3 text-3xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:text-4xl">
                      {sport.icon}
                    </span>

                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-white sm:text-[10px]">
                      {sport.name}
                    </h4>

                    <div className="mt-3 h-px w-7 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* NATIONAL MERIT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900/40
                p-6
                shadow-2xl
                transition-all
                duration-500
                hover:border-yellow-500/20
                sm:p-8
                lg:p-9
              "
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-700 group-hover:bg-yellow-500/20" />

              <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/15
                    bg-gradient-to-br
                    from-yellow-400
                    to-orange-600
                    shadow-[0_0_25px_rgba(234,179,8,0.25)]
                    sm:h-20
                    sm:w-20
                  "
                >
                  <Star className="fill-white text-white" size={32} />
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="mb-2 text-xl font-black uppercase italic leading-none tracking-tighter text-white sm:text-2xl">
                    National Merit Pass
                  </h4>

                  <p className="text-[9px] font-bold uppercase leading-relaxed tracking-widest text-gray-500 sm:text-[10px]">
                    Excellence award in Dancing event for{" "}
                    <span className="font-bold text-yellow-500">
                      GUS Lanka
                    </span>
                    .
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-blue-400/70
                      sm:text-[9px]
                    "
                  >
                    Achievement Highlight
                    <Star size={12} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BEYOND THE CODE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-slate-900/40
                p-6
                shadow-2xl
                transition-all
                duration-500
                hover:border-purple-500/20
                sm:p-8
              "
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-700 group-hover:bg-purple-500/20" />

              <div className="relative z-10">
                <h4 className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-widest text-white sm:text-xl">
                  <span className="rounded-xl bg-purple-500/10 p-2 text-purple-400">
                    <Sparkles size={18} />
                  </span>

                  Beyond The Code
                </h4>

                <p className="mb-6 text-xs font-medium leading-relaxed text-gray-400">
                  When I am not compiling lines of logic, I design
                  experiences through high-end digital aesthetics and
                  cinematic visuals.
                </p>

                <div className="space-y-4">

                  {/* UI UX */}
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.01]
                      p-4
                      transition-all
                      duration-300
                      hover:border-purple-500/25
                      hover:bg-white/[0.03]
                    "
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                      <Palette size={18} />
                    </div>

                    <div className="min-w-0">
                      <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                        UI/UX & Brand Aesthetics
                      </h5>

                      <p className="mt-1 text-[10px] font-medium leading-5 text-gray-500">
                        Crafting dark-themed layouts, balanced structures,
                        and pixel-perfect vectors.
                      </p>
                    </div>
                  </div>

                  {/* CINEMATIC */}
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.01]
                      p-4
                      transition-all
                      duration-300
                      hover:border-cyan-500/25
                      hover:bg-white/[0.03]
                    "
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Camera size={18} />
                    </div>

                    <div className="min-w-0">
                      <h5 className="text-xs font-bold uppercase tracking-wide text-white">
                        Cinematic Motion & Editing
                      </h5>

                      <p className="mt-1 text-[10px] font-medium leading-5 text-gray-500">
                        Capturing the raw energy of high-performance car
                        edits and nature-based visual storytelling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;