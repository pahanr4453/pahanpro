import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Globe,
  Terminal,
  Palette,
  Cloud,
  Layout,
  FileCode,
  Monitor,
  Database,
  Code2,
  Layers,
  Github,
  Smartphone
} from 'lucide-react';

interface SubSkill {
  name: string;
  level: number;
  icon: JSX.Element;
}

interface SkillGroup {
  category: string;
  icon: JSX.Element;
  colorClass: string;
  items: SubSkill[];
}

function Skills() {
  // Mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20
  });

  const springY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Don't run mouse parallax on touch-sized screens
    if (window.innerWidth < 768) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    mouseX.set((clientX - innerWidth / 2) / 30);
    mouseY.set((clientY - innerHeight / 2) / 30);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const skillGroups: SkillGroup[] = [
    {
      category: 'Web Development',
      icon: <Globe size={42} className="text-blue-400" />,
      colorClass: 'from-blue-500 to-cyan-400',
      items: [
        {
          name: 'HTML5',
          level: 95,
          icon: <Layout size={18} />
        },
        {
          name: 'CSS3 / Tailwind',
          level: 85,
          icon: <Palette size={18} />
        },
        {
          name: 'JavaScript',
          level: 75,
          icon: <FileCode size={18} />
        },
        {
          name: 'PHP / MySQL',
          level: 70,
          icon: <Database size={18} />
        }
      ]
    },

    {
      category: 'Python Programming',
      icon: <Terminal size={42} className="text-yellow-500" />,
      colorClass: 'from-yellow-500 to-orange-500',
      items: [
        {
          name: 'Python Core',
          level: 80,
          icon: <Code2 size={18} />
        },
        {
          name: 'Automation Scripts',
          level: 65,
          icon: <Terminal size={18} />
        },
        {
          name: 'Data Analysis',
          level: 60,
          icon: <Layers size={18} />
        }
      ]
    },

    {
      category: 'Design & UI/UX',
      icon: <Palette size={42} className="text-pink-500" />,
      colorClass: 'from-purple-500 to-pink-500',
      items: [
        {
          name: 'Figma UI Design',
          level: 85,
          icon: <Monitor size={18} />
        },
        {
          name: 'Adobe Photoshop',
          level: 75,
          icon: <Layers size={18} />
        },
        {
          name: 'Graphic Design',
          level: 80,
          icon: <Palette size={18} />
        }
      ]
    },

    {
      category: 'Systems & Cloud',
      icon: <Cloud size={42} className="text-green-400" />,
      colorClass: 'from-green-500 to-emerald-500',
      items: [
        {
          name: 'Git & GitHub',
          level: 90,
          icon: <Github size={18} />
        },
        {
          name: 'Cloud Hosting',
          level: 65,
          icon: <Cloud size={18} />
        },
        {
          name: 'App Distribution',
          level: 60,
          icon: <Smartphone size={18} />
        }
      ]
    }
  ];

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        overflow-hidden
        bg-transparent
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      {/* ==========================================
          LIVE BACKGROUND
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Parallax Elements */}
        <motion.div
          style={{
            x: springX,
            y: springY
          }}
          className="absolute inset-0"
        >
          {/* Particles */}
          <div
            className="
              absolute
              left-[10%]
              top-[10%]
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-blue-500
              opacity-70
              blur-[2px]
            "
          />

          <div
            className="
              absolute
              right-[15%]
              top-[40%]
              h-3
              w-3
              rounded-full
              bg-cyan-400
              opacity-40
              blur-[4px]
            "
          />

          <div
            className="
              absolute
              bottom-[20%]
              left-[20%]
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-purple-500
              opacity-50
              blur-[2px]
            "
          />

          {/* Background Icons */}
          <div
            className="
              absolute
              left-[5%]
              top-[60%]
              hidden
              opacity-[0.07]
              md:block
            "
          >
            <Code2
              size={60}
              className="text-blue-500"
            />
          </div>

          <div
            className="
              absolute
              bottom-[10%]
              right-[10%]
              hidden
              opacity-[0.07]
              md:block
            "
          >
            <Terminal
              size={50}
              className="text-cyan-500"
            />
          </div>
        </motion.div>

        {/* Static Glows */}
        <div
          className="
            absolute
            left-[-180px]
            top-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-900/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[-180px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-900/10
            blur-[150px]
          "
        />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}
      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="
            relative
            mb-14
            text-center
            sm:mb-16
            md:mb-20
          "
        >
          <p
            className="
              mb-3
              text-[9px]
              font-black
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            What I Work With
          </p>

          <h2
            className="
              text-3xl
              font-black
              uppercase
              tracking-wider
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Technical{' '}

            <span className="text-blue-500">
              Expertise
            </span>
          </h2>

          <motion.div
            initial={{
              width: 0
            }}
            whileInView={{
              width: 80
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.25
            }}
            className="
              mx-auto
              mt-4
              h-1
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-400
            "
          />
        </motion.div>

        {/* ==========================================
            CARDS
        ========================================== */}
        <div
          className="
            grid
            gap-6
            sm:gap-8
            md:grid-cols-2
            md:gap-10
            lg:gap-12
          "
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                x: idx % 2 === 0 ? -40 : 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-60px'
              }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08
              }}
              whileHover={{
                y: -5
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/5
                bg-slate-800/20
                p-6
                shadow-2xl
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-blue-500/20
                hover:bg-slate-800/40
                sm:p-8
                lg:rounded-[2.5rem]
                lg:p-10
              "
            >
              {/* Card hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-blue-500/[0.05]
                  opacity-0
                  blur-[90px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* CATEGORY */}
              <div
                className="
                  relative
                  z-10
                  mb-9
                  flex
                  items-center
                  gap-4
                  sm:mb-10
                  sm:gap-5
                  lg:mb-12
                  lg:gap-6
                "
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.08
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="relative flex-shrink-0"
                >
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white/5
                      blur-2xl
                    "
                  />

                  <div className="relative">
                    {group.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-xl
                      font-black
                      uppercase
                      leading-tight
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-400
                      sm:text-2xl
                      md:text-[1.65rem]
                      lg:text-3xl
                    "
                  >
                    {group.category}
                  </h3>

                  <div
                    className="
                      mt-3
                      h-1
                      w-12
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>
              </div>

              {/* ======================================
                  INDIVIDUAL SKILLS
              ====================================== */}
              <div
                className="
                  relative
                  z-10
                  space-y-7
                  sm:space-y-8
                "
              >
                {group.items.map((skill, sIdx) => (
                  <div
                    key={skill.name}
                    className="group/item"
                  >
                    {/* Skill info */}
                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        justify-between
                        gap-4
                        font-bold
                        text-gray-400
                      "
                    >
                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            flex-shrink-0
                            text-blue-400
                            transition-transform
                            duration-300
                            group-hover/item:scale-110
                          "
                        >
                          {skill.icon}
                        </span>

                        <span
                          className="
                            truncate
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.13em]
                            transition-colors
                            group-hover/item:text-white
                            sm:text-xs
                            sm:tracking-widest
                          "
                        >
                          {skill.name}
                        </span>
                      </div>

                      {/* Percentage */}
                      <span
                        className="
                          flex-shrink-0
                          rounded-md
                          border
                          border-white/[0.05]
                          bg-white/[0.025]
                          px-2
                          py-1
                          text-[9px]
                          font-black
                          text-gray-400
                          sm:text-xs
                        "
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="
                        h-1.5
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-white/5
                      "
                    >
                      <motion.div
                        initial={{
                          width: 0
                        }}
                        whileInView={{
                          width: `${skill.level}%`
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 1.3,
                          ease: 'easeOut',
                          delay: 0.25 + sIdx * 0.08
                        }}
                        className={`
                          relative
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          ${group.colorClass}
                          shadow-[0_0_7px_rgba(59,130,246,0.28)]
                        `}
                      >
                        {/* Small shine */}
                        <div
                          className="
                            absolute
                            right-0
                            top-1/2
                            h-1.5
                            w-1.5
                            -translate-y-1/2
                            rounded-full
                            bg-white/60
                            opacity-0
                            shadow-[0_0_6px_rgba(255,255,255,0.5)]
                            transition-opacity
                            duration-300
                            group-hover/item:opacity-100
                          "
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className="
            mx-auto
            mt-14
            h-px
            max-w-xl
            bg-gradient-to-r
            from-transparent
            via-blue-500/20
            to-transparent
          "
        />
      </div>
    </section>
  );
}

export default Skills;