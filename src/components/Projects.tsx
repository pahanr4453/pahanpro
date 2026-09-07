import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Landmark,
  ShoppingBag,
  Palmtree,
  Camera,
  ShieldCheck, 
  Bot,
  Search,
  MessageCircle,
  X,
} from 'lucide-react';

// ------------------------------------
// FEATURED PROJECTS
// ------------------------------------

const myProjects = [
  {
    title: 'FINANCIAL ANALYTICS HUB',
    description:
      'Secure digital banking platform for real-time transaction tracking and high-precision financial reporting.',
    tech: ['PHP', 'MYSQL', 'CHART.JS'],
    link: 'https://denipitiyawestsanasa.it.com/',
    github: '#',
    image: '/project-finance.jpg',
    color: 'from-emerald-500/20',
    icon: <Landmark size={23} className="text-emerald-400" />,
  },
  {
    title: 'SMART E-COMMERCE ENGINE',
    description:
      'High-performance marketplace featuring dynamic product management and secure checkout systems.',
    tech: ['PHP', 'CSS', 'HTML5', 'MYSQL'],
    link: 'https://imaginative-cucurucho-eb61b7.netlify.app/',
    github: '#',
    image: '/project-ecommerce.jpg',
    color: 'from-blue-500/20',
    icon: <ShoppingBag size={23} className="text-blue-400" />,
  },
    {
    title: 'CINEMATIC PHOTOGRAPHY PORTFOLIO',
    description:
      'A premium photography portfolio designed for visual storytelling, elegant galleries, responsive layouts, and a cinematic viewing experience.',
    tech: ['REACT', 'TAILWIND', 'CMS', 'SEO'],
    link: 'https://hirusha-two.vercel.app/',
    github: '#',
    image: '/project-photography.jpg',
    color: 'from-pink-500/20',
    icon: <Camera size={23} className="text-pink-400" />,
  },
  {
    title: 'CYBER SECURITY MONITOR',
    description:
      'A cyber security focused dashboard concept for monitoring threats, suspicious activity, security events, and system protection status.',
    tech: ['CYBER SECURITY', 'NETWORKING', 'REACT', 'SECURITY'],
    link: 'https://cybersc2pa.netlify.app/',
    github: '#',
    image: '/project-cyber.jpg',
    color: 'from-cyan-500/20',
    icon: <ShieldCheck size={23} className="text-cyan-400" />,
  },
  {
    title: 'VISIT SRI LANKA PLATFORM',
    description:
      'Immersive travel guide showcasing Sri Lankan destinations with a modern and interactive experience.',
    tech: ['REACT', 'NODE.JS', 'TAILWIND'],
    link: '#',
    github: '#',
    image: '/-srilanka.jpgproject',
    color: 'from-amber-500/20',
    icon: <Palmtree size={23} className="text-amber-400" />,
  },
  {
    title: 'PYTHON AUTOMATION BOT',
    description:
      'Custom Python automation solution for reducing repetitive web tasks and improving workflow efficiency.',
    tech: ['PYTHON', 'SELENIUM', 'LOGIC'],
    link: '#',
    github: '#',
    image: '/project-python.jpg',
    color: 'from-purple-500/20',
    icon: <Bot size={23} className="text-purple-400" />,
  },
  {
    title: 'DATA SCRAPING ENGINE',
    description:
      'Python-based engine for extracting structured web data and transforming it into useful datasets.',
    tech: ['PYTHON', 'BEAUTIFULSOUP', 'CSV'],
    link: '#',
    github: '#',
    image: '/project-scraping.jpg',
    color: 'from-red-500/20',
    icon: <Search size={23} className="text-red-400" />,
  },
];

// ------------------------------------
// PREMIUM ASSETS
// ------------------------------------

const saleProjects = [
  {
    title: 'SMART EDUCATOR PRO',
    subtitle: 'LMS + ADMIN + SEO',
    price: '$230.00',
    image: '/sale1.jpg',
    description:
      'A polished academic management system with a secure backend, student database, and professional interface.',
    fullDetails:
      'Bring your tuition brand to life with a custom-built platform designed for educators who want to manage classes professionally. Includes student registration, notes management, administrative tools and SEO optimization.',
    tech: ['PHP', 'MYSQL', 'LMS', 'SEO'],
  },
  {
    title: 'SEO-POWERED PHOTOGRAPHY ENGINE',
    subtitle: 'PORTFOLIO + CMS + SEO',
    price: '$90.00',
    image: '/sale2.jpg',
    description:
      'A cinematic photography ecosystem with content management, fast performance, and SEO-focused architecture.',
    fullDetails:
      'A high-performance business portfolio designed for photographers. Includes modern visuals, fast loading, SEO-focused structure, and a complete admin panel for gallery management.',
    tech: ['REACT', 'TAILWIND', 'CMS', 'SEO'],
  },
];

export default function Projects() {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const whatsappNumber = '94761151536';

  return (
    <div className="relative overflow-hidden bg-[#020617]">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.07, 0.12, 0.07],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -left-40
            top-10
            h-[460px]
            w-[460px]
            rounded-full
            bg-blue-600
            blur-[160px]
          "
        />

        <motion.div
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -bottom-40
            -right-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-600
            blur-[180px]
          "
        />
      </div>

      {/* =========================================
          PREMIUM ASSET MODAL
      ========================================= */}
      <AnimatePresence>
        {selectedAsset && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAsset(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{ duration: 0.3 }}
              className="
                relative
                z-10
                flex
                max-h-[90vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-[#050a18]
                shadow-2xl
                md:flex-row
              "
            >
              <button
                onClick={() => setSelectedAsset(null)}
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-white
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white/10
                "
              >
                <X size={19} />
              </button>

              <div className="h-64 md:h-auto md:w-1/2">
                <img
                  src={selectedAsset.image}
                  alt={selectedAsset.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-y-auto p-7 md:w-1/2 md:p-12">
                <span className="mb-4 inline-block text-[9px] font-black uppercase tracking-[0.35em] text-blue-400">
                  Premium Asset
                </span>

                <h2 className="mb-2 text-3xl font-black tracking-tight text-white md:text-4xl">
                  {selectedAsset.title}
                </h2>

                <p className="mb-5 text-[9px] font-black uppercase tracking-[0.22em] text-slate-500">
                  {selectedAsset.subtitle}
                </p>

                <div className="mb-6 text-3xl font-black text-blue-400">
                  {selectedAsset.price}
                </div>

                <p className="mb-7 text-sm leading-7 text-slate-400">
                  {selectedAsset.fullDetails}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {selectedAsset.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-blue-500/15
                        bg-blue-500/[0.07]
                        px-3
                        py-1.5
                        text-[8px]
                        font-black
                        uppercase
                        tracking-widest
                        text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Senesh, I want to purchase: ${selectedAsset.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    py-4
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    hover:bg-blue-500
                  "
                >
                  BUY VIA WHATSAPP
                  <MessageCircle size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================
          FEATURED PROJECTS
      ========================================= */}
      <section
        id="portfolio"
        className="relative px-5 py-24 sm:px-6 md:px-8 lg:px-10 lg:py-28"
      >
        <div className="relative z-10 mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-14 border-l-2 border-blue-600/50 pl-5 sm:pl-6 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.42em] text-blue-400">
                Selected Work
              </p>

              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                FEATURED{' '}
                <span className="italic text-blue-500">
                  PROJECTS
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-[10px] font-semibold uppercase leading-6 tracking-[0.22em] text-slate-500">
                Building digital experiences with performance, clarity and modern design.
              </p>
            </motion.div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {myProjects.map((project, index) => {
              const hasGithub =
                project.github && project.github !== '#';

              const hasLive =
                project.link && project.link !== '#';

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative"
                >
                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-h-[470px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-white/5
                      bg-slate-900/35
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:border-blue-500/30
                      group-hover:bg-slate-900/50
                    "
                  >
                    {/* PHOTO */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.05]
                        "
                      />

                      {/* image dark overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#020617]
                          via-[#020617]/20
                          to-transparent
                        "
                      />

                      {/* project colored glow */}
                      <div
                        className={`
                          absolute
                          inset-0
                          bg-gradient-to-br
                          ${project.color}
                          to-transparent
                          opacity-25
                        `}
                      />

                      {/* NUMBER */}
                      <span
                        className="
                          absolute
                          right-4
                          top-4
                          rounded-full
                          border
                          border-white/10
                          bg-black/35
                          px-3
                          py-1.5
                          text-[8px]
                          font-black
                          tracking-wider
                          text-white/70
                          backdrop-blur-xl
                        "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* ICON ON PHOTO */}
                      <motion.div
                        whileHover={{
                          scale: 1.06,
                        }}
                        className="
                          absolute
                          bottom-4
                          left-4
                          flex
                          h-13
                          w-13
                          h-[52px]
                          w-[52px]
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/45
                          shadow-xl
                          backdrop-blur-xl
                        "
                      >
                        {project.icon}
                      </motion.div>

                      {/* STATUS */}
                      <div
                        className={`
                          absolute
                          bottom-4
                          right-4
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[7px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          backdrop-blur-xl
                          ${
                            hasLive
                              ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                              : 'border-white/10 bg-black/35 text-slate-500'
                          }
                        `}
                      >
                        {hasLive ? 'Live' : 'Coming Soon'}
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        flex-1
                        flex-col
                        p-7
                        sm:p-8
                      "
                    >
                      <h3
                        className="
                          mb-4
                          text-xl
                          font-black
                          uppercase
                          tracking-tight
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-blue-400
                          md:text-2xl
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mb-7
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {project.description}
                      </p>

                      {/* TECH */}
                      <div className="mb-8 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-md
                              border
                              border-blue-500/15
                              bg-blue-500/[0.07]
                              px-2.5
                              py-1.5
                              text-[8px]
                              font-black
                              uppercase
                              tracking-widest
                              text-blue-400
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ACTIONS */}
                      <div className="mt-auto flex items-center gap-3">

                        {hasGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/10
                              bg-white/5
                              text-gray-400
                              transition-all
                              hover:border-blue-500/30
                              hover:text-white
                            "
                          >
                            <Github size={19} />
                          </a>
                        )}

                        {hasLive ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              group/btn
                              flex
                              h-12
                              flex-1
                              items-center
                              justify-center
                              gap-2
                              rounded-xl
                              bg-blue-600
                              text-[9px]
                              font-black
                              uppercase
                              tracking-[0.17em]
                              text-white
                              transition-all
                              hover:bg-blue-500
                            "
                          >
                            VIEW PROJECT

                            <ExternalLink
                              size={15}
                              className="
                                transition-transform
                                duration-300
                                group-hover/btn:translate-x-0.5
                              "
                            />
                          </a>
                        ) : (
                          <div
                            className="
                              flex
                              h-12
                              flex-1
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/[0.05]
                              bg-white/[0.015]
                            "
                          >
                            <span
                              className="
                                text-[8px]
                                font-black
                                uppercase
                                tracking-[0.18em]
                                text-slate-600
                              "
                            >
                              IN DEVELOPMENT
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          PREMIUM ASSETS
      ========================================= */}
      <section
        className="
          relative
          border-t
          border-white/5
          bg-[#010413]
          px-5
          py-24
          sm:px-6
          md:px-8
          lg:px-10
          lg:py-28
        "
      >
        <div className="relative z-10 mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-14 text-center md:mb-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="
                  mb-4
                  inline-block
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-4
                  py-1.5
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.35em]
                  text-blue-400
                "
              >
                Exclusive Market
              </span>

              <h2
                className="
                  mb-4
                  text-4xl
                  font-black
                  uppercase
                  tracking-tighter
                  text-white
                  md:text-6xl
                "
              >
                PREMIUM{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    bg-clip-text
                    italic
                    text-transparent
                  "
                >
                  ASSETS
                </span>
              </h2>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-gray-500
                "
              >
                Available for Purchase
              </p>
            </motion.div>
          </div>

          {/* CARDS */}
          <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
            {saleProjects.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                onClick={() => setSelectedAsset(item)}
                className="group cursor-pointer"
              >
                <div
                  className="
                    h-full
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/5
                    bg-slate-900/35
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    group-hover:border-blue-500/25
                    group-hover:bg-slate-900/45
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#020617]/85
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-xl
                        border
                        border-white/10
                        bg-black/50
                        px-4
                        py-2
                        text-sm
                        font-black
                        text-blue-400
                        backdrop-blur-md
                      "
                    >
                      {item.price}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 sm:p-8">
                    <span
                      className="
                        mb-3
                        block
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.22em]
                        text-blue-400
                      "
                    >
                      {item.subtitle}
                    </span>

                    <h3
                      className="
                        mb-4
                        text-xl
                        font-black
                        uppercase
                        tracking-tighter
                        text-white
                        transition-colors
                        group-hover:text-blue-400
                        md:text-2xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mb-7
                        text-sm
                        leading-6
                        text-slate-500
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                        flex
                        h-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-600
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-white
                        transition-all
                        group-hover:bg-blue-500
                      "
                    >
                      VIEW DETAILS
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}