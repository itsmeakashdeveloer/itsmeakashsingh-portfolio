import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  highlight: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={center ? 'text-center mb-16' : 'mb-16'}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-violet-light mb-3">
        {label}
      </p>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
        {title}{' '}
        <span className="bg-gradient-to-r from-violet-light to-accent-pink bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {subtitle && (
        <p
          className={`text-[1.05rem] text-gray-400 mt-4 leading-relaxed ${
            center ? 'max-w-xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
