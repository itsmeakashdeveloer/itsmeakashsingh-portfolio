import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons'
import ParticleField from '@/components/ui/ParticleField'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { PERSONAL } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'
import akashPhoto from '@/assets/akash-photo.png'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

const socialIcons: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={20} />,
  Linkedin: <LinkedinIcon size={20} />,
  Twitter: <TwitterIcon size={20} />,
}

const floatingTech = [
  { name: 'React', x: '75%', y: '15%', delay: 0 },
  { name: 'Python', x: '85%', y: '45%', delay: 1 },
  { name: 'JavaScript', x: '70%', y: '75%', delay: 2 },
]

export default function Hero() {
  const { displayText } = useTypingEffect({
    words: PERSONAL.roles,
    typingSpeed: 100,
    deletingSpeed: 60,
    pauseDuration: 2000,
  })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet/20 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-pink/15 blur-[100px]"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent-cyan/10 blur-[80px]"
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-200/80 backdrop-blur-sm rounded-full border border-violet/20 mb-8"
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-xl"
              >
                👋
              </motion.span>
              <span className="text-sm text-gray-300 font-medium">Hello, World!</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4"
            >
              I'm{' '}
              <span className="bg-gradient-to-r from-violet-light via-accent-pink to-accent-cyan bg-300% animate-gradient-shift bg-clip-text text-transparent">
                {PERSONAL.firstName}
              </span>
              <br />
              <span className="text-white">{PERSONAL.lastName}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6 h-10"
            >
              <span className="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-violet-light to-accent-pink bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="w-[3px] h-7 bg-violet-light rounded-full inline-block"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8"
            >
              {PERSONAL.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet to-accent-pink text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]"
              >
                View My Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-white font-semibold rounded-full border-2 border-violet/20 transition-all duration-300 hover:border-violet-light hover:text-violet-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {PERSONAL.socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-dark-200 border border-violet/15 text-gray-400 transition-all duration-300 hover:text-white hover:border-violet hover:bg-violet/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  {socialIcons[s.iconName]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 rounded-full bg-gradient-to-br from-violet/20 via-accent-pink/10 to-accent-cyan/20 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center border border-violet/10 overflow-hidden">
                  <img
                    src={akashPhoto}
                    alt="Akash Singh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {[
                { num: '2+', label: 'Projects', angle: -30, distance: 180 },
                { num: '5+', label: 'Skills', angle: 90, distance: 170 },
                { num: '4', label: 'Years Study', angle: 210, distance: 175 },
              ].map((stat, i) => {
                const rad = (stat.angle * Math.PI) / 180
                const x = Math.cos(rad) * stat.distance
                const y = Math.sin(rad) * stat.distance
                return (
                  <motion.div
                    key={stat.label}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-200/90 backdrop-blur-sm border border-violet/20 rounded-xl px-4 py-2.5 text-center"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-lg font-bold bg-gradient-to-r from-violet-light to-accent-pink bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {floatingTech.map((tech) => (
              <motion.div
                key={tech.name}
                className="absolute px-3 py-1.5 bg-dark-200/80 backdrop-blur-sm border border-violet/15 rounded-full text-xs font-medium text-violet-light"
                style={{ left: tech.x, top: tech.y }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: tech.delay,
                  ease: 'easeInOut',
                }}
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-violet-light transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
