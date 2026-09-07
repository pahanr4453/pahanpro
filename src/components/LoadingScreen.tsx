import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(timer);
          return 100;
        }

        if (prev < 40) return Math.min(prev + 4, 100);
        if (prev < 80) return Math.min(prev + 3, 100);

        return Math.min(prev + 2, 100);
      });
    }, 32);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress !== 100) return;

    const timeout = window.setTimeout(() => {
      setDone(true);
    }, 650);

    return () => window.clearTimeout(timeout);
  }, [progress]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            filter: 'blur(6px)',
          }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-[#010413]
            text-white
          "
        >
          {/* =====================================================
              BACKGROUND
          ===================================================== */}
          <div className="pointer-events-none absolute inset-0">
            {/* Center glow */}
            <motion.div
              animate={{
                opacity: [0.08, 0.14, 0.08],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/15
                blur-[170px]
                sm:h-[650px]
                sm:w-[650px]
              "
            />

            {/* Very subtle grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.012]
                bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
                bg-[size:80px_80px]
                [mask-image:radial-gradient(circle_at_center,black_15%,transparent_76%)]
              "
            />

            {/* Vignette */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_20%,rgba(1,4,19,0.4)_68%,#010413_100%)]
              "
            />

            {/* Cinematic soft light */}
            <motion.div
              initial={{ x: '-160%' }}
              animate={{ x: '170%' }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
              className="
                absolute
                -top-[25%]
                h-[150%]
                w-[130px]
                rotate-[12deg]
                bg-gradient-to-r
                from-transparent
                via-white/[0.022]
                to-transparent
                blur-2xl
              "
            />
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[100dvh]
              items-center
              justify-center
              px-5
            "
          >
            <div
              className="
                flex
                w-full
                max-w-xl
                flex-col
                items-center
                text-center
              "
            >
              {/* =========================
                  WELCOME
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.6,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-5
                    bg-gradient-to-r
                    from-transparent
                    to-blue-400/50
                  "
                />

                <span
                  className="
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.46em]
                    text-blue-400
                    sm:text-[8px]
                  "
                >
                  Welcome
                </span>

                <span
                  className="
                    h-px
                    w-5
                    bg-gradient-to-r
                    from-blue-400/50
                    to-transparent
                  "
                />
              </motion.div>

              {/* =========================
                  SP MONOGRAM
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.82,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative mb-9"
              >
                {/* Outer glow */}
                <motion.div
                  animate={{
                    opacity: [0.12, 0.22, 0.12],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    inset-[-28px]
                    rounded-full
                    bg-blue-500/15
                    blur-[50px]
                  "
                />

                {/* SP glass icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.018, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    relative
                    flex
                    h-[88px]
                    w-[88px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/[0.10]
                    bg-gradient-to-br
                    from-white/[0.05]
                    via-white/[0.02]
                    to-blue-500/[0.025]
                    shadow-[0_24px_70px_rgba(0,0,0,0.50)]
                    backdrop-blur-2xl
                    sm:h-[96px]
                    sm:w-[96px]
                  "
                >
                  {/* Top glass reflection */}
                  <div
                    className="
                      absolute
                      left-[18%]
                      right-[18%]
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                    "
                  />

                  {/* Subtle internal shine */}
                  <motion.div
                    initial={{ x: '-180%' }}
                    animate={{ x: '220%' }}
                    transition={{
                      duration: 2.2,
                      delay: 0.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      h-[150%]
                      w-8
                      rotate-[18deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.055]
                      to-transparent
                      blur-md
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      bg-gradient-to-br
                      from-white
                      via-blue-100
                      to-blue-500
                      bg-clip-text
                      text-[29px]
                      font-black
                      tracking-[-0.10em]
                      text-transparent
                      sm:text-[32px]
                    "
                  >
                    SP
                  </span>
                </motion.div>
              </motion.div>

              {/* =========================
                  NAME
              ========================= */}
              <div className="overflow-hidden pb-1">
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    text-[2.7rem]
                    font-black
                    uppercase
                    leading-none
                    tracking-[-0.06em]
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  SENESH{' '}
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
                    PAHAN
                  </span>
                </motion.h1>
              </div>

              {/* =========================
                  SIGNATURE
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: 'auto',
                }}
                transition={{
                  delay: 0.48,
                  duration: 0.7,
                }}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  whitespace-nowrap
                "
              >
                <span className="h-px w-5 bg-blue-500/25" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    italic
                    tracking-[0.16em]
                    text-slate-500
                  "
                >
                  crafted with purpose
                </span>

                <span className="h-px w-5 bg-blue-500/25" />
              </motion.div>

              {/* =========================
                  PROGRESS
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.62,
                  duration: 0.55,
                }}
                className="
                  mt-10
                  w-full
                  max-w-[300px]
                "
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="
                      text-[6px]
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-slate-700
                    "
                  >
                    Loading
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-black
                      tabular-nums
                      text-blue-400
                    "
                  >
                    {progress}%
                  </span>
                </div>

                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-white/[0.06]
                  "
                >
                  <motion.div
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.14,
                      ease: 'easeOut',
                    }}
                    className="
                      relative
                      h-full
                      bg-gradient-to-r
                      from-blue-600
                      via-blue-400
                      to-cyan-200
                    "
                  >
                    <div
                      className="
                        absolute
                        right-0
                        top-1/2
                        h-[4px]
                        w-[4px]
                        -translate-y-1/2
                        rounded-full
                        bg-white
                        shadow-[0_0_10px_rgba(147,197,253,0.9)]
                      "
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM OS BRAND
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.72,
              duration: 0.6,
            }}
            className="
              absolute
              bottom-7
              left-1/2
              z-20
              -translate-x-1/2
              whitespace-nowrap
              text-center
              sm:bottom-9
            "
          >
            <p
              className="
                text-[7px]
                font-black
                uppercase
                tracking-[0.34em]
                text-slate-600
              "
            >
              Portfolio OS v3.0
            </p>

            <p
              className="
                mt-2
                text-[6px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-slate-800
              "
            >
              Senesh Pahan
            </p>
          </motion.div>

          {/* =====================================================
              100% CINEMATIC EXIT LIGHT
          ===================================================== */}
          <AnimatePresence>
            {progress >= 100 && (
              <>
                {/* Center glow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.5, 1.4, 1.8],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    h-40
                    w-40
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-300/20
                    blur-[55px]
                  "
                />

                {/* Thin flash line */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scaleX: [0, 1, 1.1],
                  }}
                  transition={{
                    duration: 0.55,
                    ease: 'easeOut',
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    h-px
                    w-[65%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-blue-200
                    to-transparent
                    shadow-[0_0_15px_rgba(147,197,253,0.6)]
                  "
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}