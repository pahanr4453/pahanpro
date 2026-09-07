import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from 'framer-motion';

import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Home,
  Wrench,
  FolderKanban,
  Trophy,
  MessageCircle,
} from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface NavLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const navLinks: NavLink[] = [
    {
      name: 'Home',
      href: '#home',
      icon: Home,
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: Wrench,
    },
    {
      name: 'Projects',
      href: '#portfolio',
      icon: FolderKanban,
    },
    {
      name: 'Achievements',
      href: '#journey',
      icon: Trophy,
    },
  ];

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <div
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#010413]
          font-sans
          text-white
          scroll-smooth
          selection:bg-blue-500/30
        "
      >
        <Helmet>
          <title>
            Senesh Pahan | Software Developer & Cyber Security
          </title>

          <link rel="icon" href="/mysp.png" />
        </Helmet>

        {/* =========================================
            NAVBAR
        ========================================= */}
        <nav
          className={`
            fixed
            left-1/2
            z-[100]
            -translate-x-1/2
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  top-3
                  w-[94%]

                  sm:w-[92%]

                  lg:top-4
                  lg:w-[86%]

                  xl:w-[78%]
                  2xl:w-[72%]
                `
                : `
                  top-0
                  w-full
                `
            }
          `}
        >
          <div
            className={`
              relative
              w-full
              backdrop-blur-2xl
              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    rounded-[22px]
                    border
                    border-white/[0.055]
                    bg-[#020611]/96
                    px-4
                    py-3
                    shadow-[0_20px_60px_rgba(0,0,0,0.62)]

                    sm:px-5

                    lg:rounded-[24px]
                    lg:bg-[#07101f]/82
                    lg:px-7
                  `
                  : `
                    border-b
                    border-white/[0.045]
                    bg-[#01030b]/88
                    px-5
                    py-5

                    sm:px-6

                    lg:bg-[#010413]/25
                    lg:px-10
                    lg:py-6

                    xl:px-12
                  `
              }
            `}
          >
            {/* TOP LIGHT */}
            <div
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-blue-300/20
                to-transparent
              "
            />

            <div className="relative z-10 flex items-center justify-between gap-4">

              {/* =========================================
                  BRAND
              ========================================= */}
              <motion.a
                href="#home"
                initial={{
                  opacity: 0,
                  x: -18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  scale: 1.015,
                }}
                className="
                  group
                  flex
                  min-w-0
                  flex-shrink-0
                  items-center
                  gap-3
                "
              >
                {/* SP LOGO */}
                <motion.div
                  whileHover={{
                    rotate: 0,
                    scale: 1.06,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    flex-shrink-0
                    rotate-12
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-tr
                    from-blue-700
                    to-cyan-500
                    text-xs
                    font-black
                    text-white
                    shadow-[0_8px_25px_rgba(37,99,235,0.22)]
                  "
                >
                  <span className="relative z-10">
                    SP
                  </span>

                  <motion.div
                    animate={{
                      x: [-45, 55],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: 'easeInOut',
                    }}
                    className="
                      pointer-events-none
                      absolute
                      h-14
                      w-3
                      rotate-12
                      bg-white/10
                      blur-sm
                    "
                  />
                </motion.div>

                {/* BRAND TEXT */}
                <div className="flex min-w-0 flex-col">
                  <span
                    className="
                      flex
                      whitespace-nowrap
                      text-[13px]
                      font-black
                      uppercase
                      leading-none
                      tracking-tighter
                      text-white

                      sm:text-sm
                      lg:text-lg
                    "
                  >
                    SENESH
                    <span className="ml-1 text-blue-500">
                      PAHAN
                    </span>
                  </span>

                  <span
                    className="
                      mt-1
                      truncate
                      text-[6px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-blue-400/50

                      sm:tracking-[0.3em]
                      lg:text-[7px]
                    "
                  >
                    Digital Architect
                  </span>
                </div>
              </motion.a>

              {/* =========================================
                  DESKTOP NAV
              ========================================= */}
              <LayoutGroup>
                <div
                  className="
                    hidden
                    items-center
                    rounded-full
                    border
                    border-white/[0.045]
                    bg-white/[0.015]
                    p-1
                    lg:flex
                  "
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isHovered = hoveredNav === link.name;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onMouseEnter={() =>
                          setHoveredNav(link.name)
                        }
                        className="
                          group
                          relative
                          flex
                          min-w-[88px]
                          items-center
                          justify-center
                          rounded-full
                          px-4
                          py-2.5
                          xl:min-w-[100px]
                        "
                      >
                        {isHovered && (
                          <motion.span
                            layoutId="navbar-hover-pill"
                            transition={{
                              type: 'spring',
                              stiffness: 420,
                              damping: 32,
                            }}
                            className="
                              absolute
                              inset-0
                              rounded-full
                              border
                              border-blue-400/15
                              bg-gradient-to-r
                              from-blue-500/12
                              via-blue-400/[0.07]
                              to-cyan-500/[0.05]
                              shadow-[0_8px_24px_rgba(37,99,235,0.13)]
                            "
                          />
                        )}

                        <div className="relative z-10 flex items-center gap-2">
                          <motion.div
                            animate={{
                              scale: isHovered ? 1 : 0.88,
                              opacity: isHovered ? 1 : 0.45,
                              y: isHovered ? -1 : 0,
                            }}
                            transition={{
                              duration: 0.22,
                            }}
                            className="text-blue-400"
                          >
                            <Icon size={12} />
                          </motion.div>

                          <span
                            className={`
                              text-[8px]
                              font-black
                              uppercase
                              tracking-[0.13em]
                              transition-colors
                              duration-300
                              xl:text-[9px]

                              ${
                                isHovered
                                  ? 'text-white'
                                  : 'text-slate-500'
                              }
                            `}
                          >
                            {link.name}
                          </span>

                          <motion.span
                            animate={{
                              scale: isHovered ? 1 : 0,
                              opacity: isHovered ? 1 : 0,
                            }}
                            className="
                              absolute
                              -bottom-[7px]
                              left-1/2
                              h-[3px]
                              w-[3px]
                              -translate-x-1/2
                              rounded-full
                              bg-cyan-300
                              shadow-[0_0_8px_rgba(103,232,249,1)]
                            "
                          />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </LayoutGroup>

              {/* =========================================
                  DESKTOP SIGNATURE + LET'S TALK
              ========================================= */}
              <div className="hidden items-center gap-4 xl:flex">

                {/* SIGNATURE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.65,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    group/signature
                    relative
                    select-none
                    text-right
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-3
                      rounded-full
                      bg-blue-500/[0.035]
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover/signature:opacity-100
                    "
                  />

                  <div className="relative">
                    <motion.span
                      whileHover={{ x: -2 }}
                      className="
                        block
                        text-[9px]
                        font-medium
                        italic
                        tracking-[0.12em]
                        text-white/35
                        transition-all
                        duration-300
                        group-hover/signature:text-white/65
                      "
                    >
                      Senesh
                    </motion.span>

                    <motion.span
                      whileHover={{ x: 3 }}
                      className="
                        mt-0.5
                        block
                        text-[15px]
                        font-semibold
                        italic
                        tracking-[0.08em]
                        text-blue-400/90
                        transition-all
                        duration-300
                        group-hover/signature:text-cyan-300
                      "
                    >
                      Pahan
                    </motion.span>

                    <motion.span
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        delay: 0.7,
                        duration: 0.8,
                        ease: 'easeOut',
                      }}
                      className="
                        absolute
                        -bottom-2
                        right-0
                        h-px
                        w-[110%]
                        origin-right
                        bg-gradient-to-l
                        from-cyan-300/75
                        via-blue-500/40
                        to-transparent
                      "
                    />

                    <motion.span
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      animate={{
                        width: 24,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1,
                        duration: 0.55,
                      }}
                      className="
                        absolute
                        -bottom-[7px]
                        -right-3
                        h-px
                        rotate-[-18deg]
                        bg-blue-300/50
                      "
                    />

                    <motion.div
                      animate={{
                        opacity: [0.15, 0.75, 0.15],
                        scale: [0.9, 1.1, 0.9],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="
                        absolute
                        -right-4
                        -top-1
                        text-cyan-300/45
                      "
                    >
                      <Sparkles size={9} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* DIVIDER */}
                <div
                  className="
                    h-8
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />

                {/* LET'S TALK */}
                <motion.a
                  href="#contact"
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group/talk
                    relative
                    inline-flex
                    items-center
                    overflow-hidden
                    rounded-full
                    border
                    border-blue-500/25
                    bg-blue-500/[0.055]
                    px-5
                    py-2.5
                    shadow-[0_8px_30px_rgba(37,99,235,0.08)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/35
                    hover:bg-blue-500/10
                  "
                >
                  <motion.span
                    initial={{
                      x: '-160%',
                    }}
                    whileHover={{
                      x: '190%',
                    }}
                    transition={{
                      duration: 0.75,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      h-[140%]
                      w-8
                      rotate-12
                      bg-white/[0.05]
                      blur-md
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-blue-400
                      transition-colors
                      duration-300
                      group-hover/talk:text-white
                    "
                  >
                    LET&apos;S TALK

                    <ArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover/talk:translate-x-1
                      "
                    />
                  </span>
                </motion.a>
              </div>

              {/* =========================================
                  TABLET CONTACT
              ========================================= */}
              <div className="hidden md:flex lg:hidden">
                <motion.a
                  href="#contact"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-[#050b17]
                    text-blue-300
                  "
                >
                  <MessageCircle size={16} />
                </motion.a>
              </div>

              {/* =========================================
                  MOBILE MENU BUTTON
              ========================================= */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() =>
                    setIsMenuOpen((prev) => !prev)
                  }
                  aria-label="Toggle navigation menu"
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-[#050a14]
                    text-blue-300
                    shadow-[0_8px_25px_rgba(0,0,0,0.28)]
                  "
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{
                          opacity: 0,
                          rotate: -90,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: 90,
                          scale: 0.7,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <X size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{
                          opacity: 0,
                          rotate: 90,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: -90,
                          scale: 0.7,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <Menu size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* =========================================
                MOBILE / TABLET MENU
            ========================================= */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -12,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.24,
                    ease: 'easeOut',
                  }}
                  className="
                    absolute
                    left-0
                    top-[calc(100%+10px)]
                    w-full
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/[0.07]
                    bg-[#01040d]/[0.99]
                    p-5
                    shadow-[0_25px_65px_rgba(0,0,0,0.88)]
                    backdrop-blur-2xl
                    lg:hidden
                  "
                >
                  {/* DARK SUBTLE GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -top-20
                      left-1/2
                      h-40
                      w-56
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500/[0.05]
                      blur-[70px]
                    "
                  />

                  <ul className="relative z-10 flex flex-col gap-2.5">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;

                      return (
                        <motion.li
                          key={link.name}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                        >
                          <a
                            href={link.href}
                            onClick={() =>
                              setIsMenuOpen(false)
                            }
                            className="
                              group
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              border
                              border-white/[0.035]
                              bg-white/[0.01]
                              px-4
                              py-3.5
                              transition-all
                              active:scale-[0.99]
                              hover:border-blue-500/12
                              hover:bg-blue-500/[0.04]
                            "
                          >
                            <div className="flex items-center gap-3.5">
                              {/* ICON */}
                              <div
                                className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-blue-400/[0.055]
                                  bg-blue-500/[0.045]
                                  text-blue-300
                                  transition-all
                                  group-hover:border-blue-400/10
                                  group-hover:bg-blue-500/[0.08]
                                "
                              >
                                <Icon size={15} />
                              </div>

                              {/* TEXT */}
                              <span
                                className="
                                  text-[11px]
                                  font-black
                                  uppercase
                                  tracking-[0.16em]
                                  text-slate-300
                                  transition-colors
                                  group-hover:text-white
                                "
                              >
                                {link.name}
                              </span>
                            </div>

                            {/* STATUS DOT */}
                            <span
                              className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-cyan-400
                                opacity-35
                                shadow-[0_0_7px_rgba(34,211,238,0.65)]
                                transition-opacity
                                group-hover:opacity-90
                              "
                            />
                          </a>
                        </motion.li>
                      );
                    })}

                    {/* =========================================
                        MOBILE CONTACT AREA
                    ========================================= */}
                    <motion.li
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.23,
                      }}
                      className="
                        mt-3
                        border-t
                        border-white/[0.055]
                        pt-5
                      "
                    >
                      {/* DARK MOBILE SIGNATURE */}
                      <div
                        className="
                          mb-5
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                      >
                        <div className="relative text-center">
                          <span
                            className="
                              block
                              text-[10px]
                              font-medium
                              italic
                              tracking-[0.1em]
                              text-white/40
                            "
                          >
                            Senesh
                          </span>

                          <span
                            className="
                              mt-0.5
                              block
                              text-[15px]
                              font-semibold
                              italic
                              tracking-[0.08em]
                              text-blue-300/85
                            "
                          >
                            Pahan
                          </span>

                          <motion.div
                            initial={{
                              scaleX: 0,
                            }}
                            animate={{
                              scaleX: 1,
                            }}
                            transition={{
                              delay: 0.35,
                              duration: 0.5,
                            }}
                            className="
                              mx-auto
                              mt-2
                              h-px
                              w-16
                              origin-center
                              bg-gradient-to-r
                              from-transparent
                              via-blue-300/45
                              to-transparent
                            "
                          />
                        </div>
                      </div>

                      {/* DARK LET'S TALK */}
                      <motion.a
                        href="#contact"
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          setIsMenuOpen(false)
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-xl
                          border
                          border-blue-500/20
                          bg-[#07101f]
                          py-4
                          text-[11px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-blue-300
                          shadow-[0_12px_30px_rgba(0,0,0,0.40)]
                          transition-all
                          active:bg-[#0a1629]
                        "
                      >
                        LET&apos;S TALK
                        <ArrowRight size={15} />
                      </motion.a>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* =========================================
            PAGE CONTENT
        ========================================= */}
        <main className="relative">
          <Hero />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;