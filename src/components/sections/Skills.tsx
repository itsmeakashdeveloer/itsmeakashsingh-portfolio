import { motion } from 'framer-motion'
import { SKILL_CATEGORIES, COMPETENCIES } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTilt } from '@/hooks/useTilt'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

function SkillBar({
  name,
  level,
  icon,
  color,
  delay,
}: {
  name: string
  level: number
  icon: string
  color: string
  delay: number
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <motion.span
            className="text-base"
            whileHover={{ scale: 1.3, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {icon}
          </motion.span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <motion.span
          className="text-xs font-bold tabular-nums"
          style={{ color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-dark-200 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: color }}
          />
        </motion.div>
      </div>
    </div>
  )
}

function SkillCard({
  cat,
  catIdx,
}: {
  cat: (typeof SKILL_CATEGORIES)[number]
  catIdx: number
}) {
  const { ref, handleMove, handleLeave } = useTilt(5)

  return (
    <motion.div variants={cardVariants}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="bg-dark-200/50 border border-violet/10 rounded-2xl p-6 hover:border-violet/25 transition-all duration-500 hover:shadow-[0_8px_50px_rgba(124,58,237,0.1)] h-full"
        style={{ transition: 'transform 0.15s ease-out, border-color 0.5s, box-shadow 0.5s' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ backgroundColor: `${cat.color}12` }}
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1 + catIdx,
            }}
          >
            {cat.icon}
          </motion.div>
          <h3 className="font-display text-lg font-bold" style={{ color: cat.color }}>
            {cat.title}
          </h3>
        </div>

        <div className="space-y-4">
          {cat.skills.map((skill, skillIdx) => (
            <SkillBar
              key={skill.name}
              {...skill}
              color={cat.color}
              delay={catIdx * 0.15 + skillIdx * 0.08}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet/[0.03] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="What I Know"
          title="My"
          highlight="Technical Skills"
          subtitle="A curated toolkit built through real-world projects and continuous learning."
        />

        {/* Skill categories grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <SkillCard key={cat.title} cat={cat} catIdx={catIdx} />
          ))}
        </motion.div>

        {/* Professional competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-xl font-bold text-white mb-6">
            Professional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {COMPETENCIES.map((comp, i) => (
              <motion.span
                key={comp}
                className="px-5 py-2.5 bg-dark-200/60 border border-violet/15 rounded-full text-sm font-medium text-gray-300 hover:border-violet/40 hover:text-violet-light hover:bg-violet/[0.06] transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                {comp}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
