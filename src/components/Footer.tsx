import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  ArrowUp,
  Code2,
  X,
  ShieldCheck,
  FileText,
  Zap,
  Monitor,
} from 'lucide-react';

// =========================================================
// MODAL TYPE
// =========================================================
interface ModalState {
  type: 'Privacy' | 'Terms';
  content: string;
}

function Footer() {
  const [modal, setModal] = useState<ModalState | null>(null);
  const [os, setOs] = useState<string>('Detecting...');

  // =========================================================
  // OS DETECTION
  // =========================================================
  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    let platform = 'Unknown OS';

    if (userAgent.indexOf('Win') !== -1) {
      platform = 'Windows';
    } else if (userAgent.indexOf('Mac') !== -1) {
      platform = 'MacOS';
    } else if (userAgent.indexOf('Android') !== -1) {
      platform = 'Android';
    } else if (userAgent.indexOf('Linux') !== -1) {
      platform = 'Linux';
    } else if (userAgent.indexOf('like Mac') !== -1) {
      platform = 'iOS';
    }

    setOs(platform);
  }, []);

  // =========================================================
  // BACK TO TOP
  // =========================================================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // =========================================================
  // SOCIAL LINKS
  // =========================================================
  const socialLinks = [
    {
      icon: <Github size={20} />,
      link: 'https://github.com/pahanr4453',
      color: 'hover:text-white',
      label: 'Github',
    },
    {
      icon: <Linkedin size={20} />,
      link: 'https://linkedin.com/in/pahan_sewmina',
      color: 'hover:text-blue-500',
      label: 'LinkedIn',
    },
    {
      icon: <Youtube size={20} />,
      link: '#',
      color: 'hover:text-red-500',
      label: 'YouTube',
    },
    {
      icon: <Facebook size={20} />,
      link: 'https://www.facebook.com/pahansewmina',
      color: 'hover:text-blue-600',
      label: 'Facebook',
    },
    {
      icon: <Instagram size={20} />,
      link: 'https://www.instagram.com/pahan_sewmina',
      color: 'hover:text-pink-500',
      label: 'Instagram',
    },
  ];

  // =========================================================
  // INFO MODAL
  // =========================================================
  const InfoModal = ({
    title,
    content,
    onClose,
  }: {
    title: string;
    content: string;
    onClose: () => void;
  }) => (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        fixed
        inset-0
        z-[150]
        flex
        items-center
        justify-center
        bg-black/90
        p-6
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <motion.div
        initial={{
          scale: 0.9,
          y: 20,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        exit={{
          scale: 0.9,
          y: 20,
        }}
        className="
          relative
          w-full
          max-w-lg
          rounded-[2rem]
          border
          border-white/10
          bg-slate-900
          p-8
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6
            text-gray-500
            transition-colors
            hover:text-white
          "
        >
          <X size={20} />
        </button>

        <h3
          className="
            mb-4
            flex
            items-center
            gap-3
            text-xl
            font-black
            uppercase
            tracking-widest
            text-white
          "
        >
          {title === 'Privacy' ? (
            <ShieldCheck className="text-blue-500" />
          ) : (
            <FileText className="text-blue-500" />
          )}

          {title}
        </h3>

        <p
          className="
            text-[11px]
            font-bold
            uppercase
            leading-relaxed
            tracking-wider
            text-gray-400
          "
        >
          {content}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#020617]
        px-6
        pb-12
        pt-24
      "
    >
      {/* =====================================================
          TOP BORDER
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-full
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-500/30
          to-transparent
        "
      />

      {/* BACKGROUND GLOWS */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-600/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          right-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[120px]
        "
      />

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-16
            border-b
            border-white/5
            pb-20
            md:grid-cols-12
            md:gap-8
          "
        >
          {/* =================================================
              BRAND IDENTITY
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              space-y-6
              text-center
              md:col-span-5
              md:text-left
            "
          >
            <div className="flex flex-col gap-2">

              <h3
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                  text-4xl
                  font-black
                  uppercase
                  tracking-tighter
                  text-white
                  md:justify-start
                "
              >
                SENESH

                <span className="text-blue-600">
                  PAHAN
                </span>

                {/* STATUS DOT */}
                <div
                  className="
                    relative
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                  "
                >
                  <motion.span
                    animate={{
                      scale: [1, 2.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      h-full
                      w-full
                      rounded-full
                      bg-blue-500/30
                    "
                  />

                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      h-full
                      w-full
                      rounded-full
                      border
                      border-blue-500/20
                    "
                  />

                  <span
                    className="
                      relative
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_12px_#3b82f6]
                    "
                  />
                </div>
              </h3>

              <p
                className="
                  mx-auto
                  max-w-xs
                  text-xs
                  font-bold
                  uppercase
                  leading-relaxed
                  tracking-[0.3em]
                  text-gray-500
                  md:mx-0
                "
              >
                Developing high-end digital experiences through code.
              </p>

              {/* STATUS CHIPS */}
              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-3
                  md:justify-start
                "
              >
                {/* INFRA */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    px-3
                    py-1.5
                    shadow-inner
                  "
                >
                  <div className="flex h-3 w-5 items-end gap-[2px]">
                    {[0.4, 0.9, 0.6, 1].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [
                            `${h * 100}%`,
                            '25%',
                            `${h * 100}%`,
                          ],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: 'easeInOut',
                        }}
                        className="
                          w-[2px]
                          rounded-full
                          bg-blue-500
                        "
                      />
                    ))}
                  </div>

                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.25em]
                      text-blue-500/70
                    "
                  >
                    Infra Stable
                  </span>
                </div>

                {/* SECURITY */}
                <motion.div
                  animate={{
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-emerald-500/10
                    bg-emerald-500/[0.03]
                    px-3
                    py-1.5
                  "
                >
                  <ShieldCheck
                    size={11}
                    className="text-emerald-500/80"
                  />

                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.25em]
                      text-emerald-500/70
                    "
                  >
                    Security Verified
                  </span>
                </motion.div>
              </div>
            </div>

            {/* GLOBAL REACH */}
            <div
              className="
                flex
                items-center
                justify-center
                md:justify-start
              "
            >
              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.01]
                  px-5
                  py-2.5
                  transition-all
                  duration-500
                  hover:border-blue-500/20
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.4em]
                    text-gray-500
                    transition-colors
                    group-hover:text-blue-400
                  "
                >
                  Global Reach

                  <span className="mx-2 text-white/10">
                    |
                  </span>

                  100% Active
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              QUICK MENU
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              flex
              flex-col
              items-center
              space-y-6
              md:col-span-3
              md:items-start
            "
          >
            <h4
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.5em]
                text-white/30
              "
            >
              Menu
            </h4>

            <ul className="space-y-4 text-center md:text-left">
              {[
                {
                  name: 'Home',
                  href: '#home',
                },
                {
                  name: 'Projects',
                  href: '#portfolio',
                },
                {
                  name: 'Skills',
                  href: '#skills',
                },
                {
                  name: 'Achievements',
                  href: '#journey',
                },
                {
                  name: 'Contact',
                  href: '#contact',
                },
              ].map((item) => (
                <li
                  key={item.name}
                  className="overflow-hidden"
                >
                  <a
                    href={item.href}
                    className="
                      group
                      relative
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                      transition-all
                      hover:text-white
                      md:justify-start
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-blue-500
                        transition-all
                        duration-300
                        group-hover:w-4
                      "
                    />

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =================================================
              SOCIAL + BACK TO TOP + SIGNATURE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              flex
              flex-col
              items-center
              space-y-8
              md:col-span-4
              md:items-end
            "
          >
            {/* SOCIALS */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                md:justify-end
              "
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{
                    y: -5,
                    backgroundColor:
                      'rgba(37,99,235,0.1)',
                    borderColor:
                      'rgba(37,99,235,0.3)',
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  href={social.link}
                  target={
                    social.link === '#'
                      ? undefined
                      : '_blank'
                  }
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-3.5
                    text-gray-500
                    transition-all
                    duration-300
                    ${social.color}
                  `}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* BACK TO TOP */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-white
                shadow-[0_10px_30px_rgba(37,99,235,0.2)]
                transition-all
                hover:bg-blue-500
              "
            >
              Back to Top

              <ArrowUp
                size={16}
                className="
                  transition-transform
                  group-hover:-translate-y-1
                "
              />
            </motion.button>

            {/* =================================================
                SIGNATURE IMAGE
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="
                flex
                flex-col
                items-center
                md:items-end
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.035,
                  y: -2,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
                className="
                  group/signature
                  relative
                  select-none
                "
              >
                {/* SUBTLE SIGNATURE GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[15%]
                    bottom-[10%]
                    h-8
                    rounded-full
                    bg-blue-500/[0.06]
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover/signature:opacity-100
                  "
                />

                <img
                  src="/signature.png"
                  alt="Senesh Pahan Signature"
                  draggable={false}
                  className="
                    relative
                    z-10
                    w-[150px]
                    object-contain
                    opacity-70
                    invert
                    contrast-125
                    transition-all
                    duration-500
                    group-hover/signature:opacity-100
                    group-hover/signature:drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]
                    sm:w-[170px]
                    md:w-[185px]
                  "
                />

                {/* SIGNATURE UNDERLINE */}
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    h-px
                    w-[72%]
                    origin-center
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400/35
                    to-transparent
                  "
                />

                {/* SMALL LIGHT DOT */}
                <motion.span
                  animate={{
                    opacity: [
                      0.2,
                      0.8,
                      0.2,
                    ],
                    scale: [
                      0.9,
                      1.2,
                      0.9,
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -right-1
                    bottom-1
                    h-1
                    w-1
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_8px_rgba(103,232,249,0.8)]
                  "
                />
              </motion.div>

              <span
                className="
                  mt-2
                  text-[6px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-slate-700
                "
              >
                Signature • 2026
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-8
            md:flex-row
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              order-2
              text-[9px]
              font-black
              uppercase
              tracking-[0.4em]
              text-gray-600
              md:order-1
            "
          >
            © 2026 ALL RIGHTS RESERVED
          </p>

          {/* =================================================
              ARCHITECTED BY
          ================================================= */}
          <div
            className="
              group
              relative
              order-1
              flex
              items-center
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10
              bg-gradient-to-b
              from-white/[0.05]
              to-transparent
              px-10
              py-5
              shadow-2xl
              backdrop-blur-2xl
              md:order-2
            "
          >
            {/* GLOW SWEEP */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1,
              }}
              className="
                absolute
                inset-0
                w-1/2
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-blue-500/10
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
              "
            >
              <div
                className="
                  mr-5
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  p-2.5
                  transition-colors
                  group-hover:bg-blue-500/20
                "
              >
                <Code2
                  size={16}
                  className="
                    text-blue-500
                    transition-transform
                    group-hover:rotate-12
                  "
                />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    mb-1
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.6em]
                    text-white/30
                  "
                >
                  Architected By
                </span>

                <span
                  className="
                    text-[14px]
                    font-black
                    uppercase
                    tracking-tighter
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-blue-400
                  "
                >
                  Senesh Pahan
                </span>
              </div>

              <div
                className="
                  mx-8
                  h-8
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />

              {/* TECH VISUALIZER */}
              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                "
              >
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-dashed
                    border-blue-500/20
                  "
                />

                <Zap
                  size={14}
                  className="
                    animate-pulse
                    fill-blue-500/10
                    text-blue-500/80
                  "
                />
              </div>
            </div>
          </div>

          {/* =================================================
              TERMS / PRIVACY / OS
          ================================================= */}
          <div className="order-3 flex items-center gap-6">

            <div
              className="
                group/bar
                relative
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                overflow-hidden
                rounded-full
                border
                border-white/5
                bg-white/[0.03]
                px-5
                py-3
                text-[8px]
                font-black
                uppercase
                tracking-[0.18em]
                text-gray-500
                shadow-inner
                backdrop-blur-sm

                sm:gap-6
                sm:px-6
                sm:text-[9px]
                sm:tracking-[0.2em]
              "
            >
              <span
                className="
                  border-r
                  border-white/10
                  pr-4
                  font-black
                  tracking-[0.3em]
                  text-blue-500/60
                  transition-colors
                  group-hover/bar:text-blue-400
                "
              >
                OS V3.0
              </span>

              <span
                onClick={() =>
                  setModal({
                    type: 'Privacy',
                    content:
                      'All user data is encrypted and handled with high security.',
                  })
                }
                className="
                  cursor-pointer
                  transition-all
                  hover:text-blue-400
                  hover:tracking-widest
                "
              >
                Privacy
              </span>

              <span
                className="
                  select-none
                  font-light
                  text-blue-500/20
                "
              >
                /
              </span>

              <span
                onClick={() =>
                  setModal({
                    type: 'Terms',
                    content:
                      'By using this site, you agree to professional engagement terms.',
                  })
                }
                className="
                  cursor-pointer
                  transition-all
                  hover:text-blue-400
                  hover:tracking-widest
                "
              >
                Terms
              </span>

              {/* OS CHIP */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-blue-500/10
                  bg-blue-500/5
                  px-3
                  py-1.5
                "
              >
                <Monitor
                  size={10}
                  className="
                    text-blue-500/40
                    transition-colors
                    group-hover/bar:text-blue-400
                  "
                />

                <span
                  className="
                    tracking-widest
                    text-blue-500/40
                    transition-colors
                    group-hover/bar:text-blue-400
                  "
                >
                  {os}
                </span>
              </div>

              {/* SRI LANKA */}
              <div
                className="
                  flex
                  items-center
                  border-l
                  border-white/10
                  pl-4
                "
              >
                <div
                  className="
                    group/flag
                    relative
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                  "
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-blue-500/30
                      opacity-0
                      transition-opacity
                      group-hover/flag:opacity-100
                    "
                  />

                  <span
                    className="
                      cursor-help
                      text-[18px]
                      leading-none
                      grayscale
                      drop-shadow-lg
                      transition-all
                      duration-500
                      hover:grayscale-0
                    "
                  >
                    🇱🇰
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INFO MODALS
      ===================================================== */}
      <AnimatePresence>
        {modal && (
          <InfoModal
            title={modal.type}
            content={modal.content}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;