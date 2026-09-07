import React, { useEffect, useState } from 'react';

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';

import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
  Code2,
  Monitor,
  Layout,
  Cpu,
  Terminal,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Palette,
} from 'lucide-react';

const Hero: React.FC = () => {
  // =========================================================
  // NAME TYPEWRITER
  // =========================================================
  const fullText = 'Senesh Pahan';

  const [text, setText] = useState('');
  const [nameFinished, setNameFinished] = useState(false);

  // =========================================================
  // ROLE TYPEWRITER
  // =========================================================
  const roles = [
    'Software Developer',
    'Cyber Security Enthusiast',
    'Web Developer',
    'UI/UX & Graphic Designer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // =========================================================
  // TOUCH EFFECT
  // =========================================================
  const [touchRipple, setTouchRipple] = useState<{
    x: number;
    y: number;
    id: number;
  } | null>(null);

  const [isTouching, setIsTouching] = useState(false);

  // =========================================================
  // PARALLAX
  // =========================================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 55,
    damping: 22,
    mass: 0.7,
  });

  const springY = useSpring(mouseY, {
    stiffness: 55,
    damping: 22,
    mass: 0.7,
  });

  // =========================================================
  // NAME TYPING
  // =========================================================
  useEffect(() => {
    let currentIndex = 0;

    const interval = window.setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setNameFinished(true);
        }, 350);
      }
    }, 110);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  // =========================================================
  // ROLE TYPING
  // =========================================================
  useEffect(() => {
    if (!nameFinished) return;

    const currentRole = roles[roleIndex];

    let timeout: number;

    if (!isDeleting && roleText === currentRole) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && roleText === '') {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 250);

      return () => window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          setRoleText(
            currentRole.slice(0, roleText.length + 1)
          );
        } else {
          setRoleText(
            currentRole.slice(0, roleText.length - 1)
          );
        }
      },
      isDeleting ? 42 : 82
    );

    return () => window.clearTimeout(timeout);
  }, [
    roleText,
    isDeleting,
    roleIndex,
    nameFinished,
  ]);

  // =========================================================
  // MOUSE MOVE
  // =========================================================
  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) / 28);
    mouseY.set((y - centerY) / 28);
  };

  // =========================================================
  // TOUCH START
  // =========================================================
  const handleTouchStart = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    const touch = e.touches[0];

    if (!touch) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setTouchRipple({
      x,
      y,
      id: Date.now(),
    });

    setIsTouching(true);
  };

  // =========================================================
  // TOUCH MOVE
  // =========================================================
  const handleTouchMove = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    const touch = e.touches[0];

    if (!touch) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) / 22);
    mouseY.set((y - centerY) / 22);

    setIsTouching(true);
  };

  // =========================================================
  // TOUCH END
  // =========================================================
  const handleTouchEnd = () => {
    setIsTouching(false);

    mouseX.set(0);
    mouseY.set(0);

    window.setTimeout(() => {
      setTouchRipple(null);
    }, 600);
  };

  // =========================================================
  // SCROLL BUTTONS
  // =========================================================
  const scrollToProjects = () => {
    document
      .getElementById('portfolio')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  // =========================================================
  // SOCIAL LINKS
  // =========================================================
  const socials = [
    {
      icon: Github,
      link: 'https://github.com/pahanr4453',
      label: 'Github',
    },
    {
      icon: Linkedin,
      link: 'https://linkedin.com/in/pahan_sewmina',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      link: 'https://facebook.com/pahansewmina',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      link: 'https://instagram.com/pahan_sewmina',
      label: 'Instagram',
    },
    {
      icon: Mail,
      link: 'mailto:seneshpahan@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#010413]
        px-5
        selection:bg-blue-500/30
        sm:px-7
        md:px-10
        lg:px-14
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* BLUE GLOW */}
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="
            absolute
            -left-28
            -top-28
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
            sm:h-[520px]
            sm:w-[520px]
            lg:h-[650px]
            lg:w-[650px]
          "
        />

        {/* CYAN GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[170px]
          "
        />

        {/* TECH ICONS */}
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-[7%] top-[13%] hidden sm:block">
            <Code2
              size={40}
              className="text-blue-500/20"
            />
          </div>

          <div className="absolute bottom-[18%] left-[8%] hidden lg:block">
            <Terminal
              size={34}
              className="text-cyan-400/15"
            />
          </div>

          <div className="absolute right-[10%] top-[42%] hidden md:block">
            <Cpu
              size={46}
              className="text-blue-400/15"
            />
          </div>

          <div className="absolute bottom-[18%] right-[17%] hidden lg:block">
            <Layout
              size={33}
              className="text-blue-300/15"
            />
          </div>

          <div className="absolute right-[26%] top-[23%] hidden xl:block">
            <Monitor
              size={30}
              className="text-blue-400/10"
            />
          </div>
        </motion.div>

        {/* PARTICLES */}
        {[15, 28, 44, 63, 76].map(
          (left, i) => (
            <motion.span
              key={i}
              animate={{
                opacity: [0.15, 0.7, 0.15],
                scale: [1, 1.8, 1],
                y: [0, -16, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              className="
                absolute
                h-1
                w-1
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
              "
              style={{
                left: `${left}%`,
                top: `${20 + ((i * 13) % 60)}%`,
              }}
            />
          )
        )}

        {/* MOBILE TOUCH GLOW */}
        <motion.div
          animate={{
            opacity: isTouching ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            x: springX,
            y: springY,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[240px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[75px]
            md:hidden
          "
        />
      </div>

      {/* =====================================================
          TOUCH RIPPLE
      ===================================================== */}
      <AnimatePresence>
        {touchRipple && (
          <motion.div
            key={touchRipple.id}
            initial={{
              scale: 0,
              opacity: 0.7,
            }}
            animate={{
              scale: 3.4,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="
              pointer-events-none
              absolute
              z-20
              h-16
              w-16
              rounded-full
              border
              border-cyan-400/60
              bg-blue-500/20
              shadow-[0_0_35px_rgba(34,211,238,0.55)]
              md:hidden
            "
            style={{
              left: touchRipple.x - 32,
              top: touchRipple.y - 32,
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          py-24
          sm:py-28
          lg:py-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            sm:gap-20
            lg:grid-cols-[0.9fr_1.4fr]
            lg:gap-20
          "
        >
          {/* =================================================
              PROFILE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -55,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[390px]
              justify-center
              lg:max-w-none
              lg:justify-start
            "
          >
            {/* Mobile = normal flow
                sm+ = floating badge */}
            <div className="relative flex flex-col items-center">

              {/* PHOTO AREA */}
              <div className="relative">

                {/* PHOTO GLOW */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.16, 0.25, 0.16],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    inset-[-22px]
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-500
                    to-cyan-400
                    blur-[90px]
                  "
                />

                {/* ROTATING RING */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    inset-[-14px]
                    rounded-full
                    border
                    border-dashed
                    border-blue-400/25
                  "
                />

                {/* PROFILE IMAGE */}
                <div
                  className="
                    relative
                    rounded-full
                    bg-gradient-to-b
                    from-blue-500/20
                    to-transparent
                    p-2
                  "
                >
                  <img
                    src="/pa.jpg"
                    alt="Senesh Pahan"
                    draggable={false}
                    className="
                      aspect-square
                      w-[250px]
                      rounded-full
                      border
                      border-white/10
                      object-cover
                      object-center
                      shadow-2xl
                      sm:w-[285px]
                      md:w-[315px]
                      lg:w-[340px]
                    "
                  />
                </div>

                {/* SPARKLE */}
                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [0, 7, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -right-2
                    -top-3
                    sm:-right-4
                  "
                >
                  <Sparkles
                    size={42}
                    className="
                      text-cyan-400
                      drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]
                    "
                  />
                </motion.div>
              </div>

              {/* =================================================
                  CREATIVE TECHNOLOGIST BADGE
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="
                  relative
                  z-20
                  mx-auto
                  mt-5
                  w-[min(90vw,315px)]

                  sm:absolute
                  sm:-bottom-10
                  sm:left-auto
                  sm:right-[-55px]
                  sm:mt-0
                  sm:w-auto

                  lg:-right-16
                "
              >
                <div
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-[1.35rem]
                    border
                    border-white/[0.08]
                    bg-[#050b16]/95
                    px-3.5
                    py-3
                    shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                    backdrop-blur-2xl

                    sm:min-w-[295px]
                    sm:gap-4
                    sm:px-4
                    sm:py-3.5
                  "
                >
                  {/* BACKGROUND GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-10
                      top-1/2
                      h-24
                      w-24
                      -translate-y-1/2
                      rounded-full
                      bg-blue-500/[0.06]
                      blur-3xl
                    "
                  />

                  {/* ICONS */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-shrink-0
                      items-center
                      gap-1
                      sm:gap-1.5
                    "
                  >
                    {/* DESIGN */}
                    <motion.div
                      whileHover={{
                        y: -2,
                        scale: 1.07,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-purple-400/[0.08]
                        bg-purple-500/[0.07]
                        text-purple-400
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <Palette size={15} />
                    </motion.div>

                    {/* CODE */}
                    <motion.div
                      whileHover={{
                        y: -2,
                        scale: 1.07,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-cyan-400/[0.08]
                        bg-cyan-500/[0.07]
                        text-cyan-400
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <Code2 size={15} />
                    </motion.div>

                    {/* SECURITY */}
                    <motion.div
                      whileHover={{
                        y: -2,
                        scale: 1.07,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-emerald-400/[0.08]
                        bg-emerald-500/[0.07]
                        text-emerald-400
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <ShieldCheck size={15} />
                    </motion.div>
                  </div>

                  {/* BADGE TEXT */}
                  <div
                    className="
                      relative
                      z-10
                      min-w-0
                      flex-1
                      text-left
                    "
                  >
                    <p
                      className="
                        whitespace-nowrap
                        text-[11px]
                        font-black
                        leading-none
                        text-white
                        sm:text-[13px]
                      "
                    >
                      Creative Technologist
                    </p>

                    <p
                      className="
                        mt-1.5
                        whitespace-nowrap
                        text-[6px]
                        font-black
                        uppercase
                        tracking-[0.11em]
                        text-blue-400
                        sm:text-[7px]
                        sm:tracking-[0.13em]
                      "
                    >
                      Design
                      <span className="mx-1 text-blue-500/50">
                        •
                      </span>
                      Code
                      <span className="mx-1 text-blue-500/50">
                        •
                      </span>
                      Security
                    </p>

                    <p
                      className="
                        mt-1.5
                        whitespace-nowrap
                        text-[6px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-slate-500
                        sm:text-[6.5px]
                        sm:tracking-[0.1em]
                      "
                    >
                      Founder
                      <span className="mx-1.5 text-blue-500/40">
                        •
                      </span>

                      <span className="text-slate-400">
                        SP Digital Forge
                      </span>
                    </p>
                  </div>

                  {/* PREMIUM SHINE */}
                  <motion.div
                    animate={{
                      x: [-100, 360],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: 'easeInOut',
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -top-10
                      h-28
                      w-7
                      rotate-12
                      bg-white/[0.025]
                      blur-md
                    "
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              HERO TEXT
          ================================================= */}
          <div className="text-center lg:text-left">

            {/* I'M */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mb-1
                text-3xl
                font-black
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              I'm
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="
                font-black
                tracking-[-0.055em]
              "
            >
              <span
                className="
                  block
                  min-h-[58px]
                  text-5xl
                  leading-[0.95]

                  sm:min-h-[70px]
                  sm:text-6xl

                  md:min-h-[85px]
                  md:text-7xl

                  lg:min-h-[100px]
                  lg:text-[6.2rem]
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-blue-100
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {text}
                </span>

                {!nameFinished && (
                  <motion.span
                    animate={{
                      opacity: [1, 0.2, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      repeat: Infinity,
                    }}
                    className="ml-1 text-cyan-400"
                  >
                    _
                  </motion.span>
                )}
              </span>
            </motion.h1>

            {/* ROLE TYPEWRITER */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: nameFinished ? 1 : 0,
                y: nameFinished ? 0 : 10,
              }}
              transition={{
                duration: 0.55,
              }}
              className="
                mx-auto
                mb-7
                flex
                min-h-[35px]
                max-w-xl
                items-center
                justify-center
                lg:mx-0
                lg:justify-start
              "
            >
              <span
                className="
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                  sm:text-xs
                  sm:tracking-[0.24em]
                  md:text-sm
                  md:tracking-[0.28em]
                "
              >
                {roleText}

                {nameFinished && (
                  <motion.span
                    animate={{
                      opacity: [1, 0.1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="
                      ml-1
                      inline-block
                      text-cyan-300
                    "
                  >
                    |
                  </motion.span>
                )}
              </span>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.8,
              }}
              className="
                mx-auto
                mb-8
                max-w-xl
                text-sm
                font-light
                leading-7
                text-slate-400
                sm:text-base
                md:text-lg
                lg:mx-0
              "
            >
              Building{' '}
              <span
                className="
                  font-semibold
                  italic
                  text-white
                  underline
                  decoration-blue-500/60
                  decoration-2
                  underline-offset-8
                "
              >
                modern digital experiences
              </span>{' '}
              through software development,
              web technologies, automation
              and a growing focus on cyber
              security.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                mb-8
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              {/* VIEW WORK */}
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={scrollToProjects}
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-7
                  py-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_12px_35px_rgba(37,99,235,0.28)]
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_45px_rgba(37,99,235,0.4)]
                "
              >
                View My Work

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* LET'S TALK */}
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={scrollToContact}
                className="
                  group
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-blue-400/30
                  bg-white/[0.025]
                  px-7
                  py-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-400/60
                  hover:bg-blue-500/10
                "
              >
                Let&apos;s Talk

                <Mail
                  size={17}
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </motion.button>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.95,
                duration: 0.7,
              }}
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                lg:justify-start
              "
            >
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={
                      item.link.startsWith('mailto:')
                        ? undefined
                        : '_blank'
                    }
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    whileHover={{
                      y: -6,
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.025]
                      text-slate-400
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-blue-400/50
                      hover:bg-blue-500/10
                      hover:text-white
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon size={21} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-blue-500/20
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;