import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { TIMELINE } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'
import type { TimelineEntry } from '@/types'

function TimelineItem({ item, index }: { item: TimelineEntry; index: number }) {
  return (
    <motion.div
      className="relative pl-10 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline line */}
      <div className="absolute left-[14px] top-3 bottom-0 w-px bg-gradient-to-b from-violet/40 via-violet/20 to-transparent" />

      {/* Dot */}
      <motion.div
        className="absolute left-0 top-1.5 w-[30px] h-[30px] rounded-full flex items-center justify-center border-2"
        style={{
          borderColor: item.color,
          boxShadow: `0 0 16px ${item.color}40`,
          background: `${item.color}15`,
        }}
        whileInView={{
          scale: [0, 1.2, 1],
        }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: item.color }}
        />
      </motion.div>

      {/* Content card */}
      <motion.div
        className="bg-dark-200/50 border border-violet/10 rounded-2xl p-6 hover:border-violet/25 transition-all duration-300"
        whileHover={{ x: 4, boxShadow: `0 0 30px ${item.color}10` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
            <div className="text-sm font-medium" style={{ color: item.color }}>
              {item.organization}
            </div>
          </div>
          <span className="text-xs font-medium text-gray-500 bg-dark-300/80 px-3 py-1 rounded-full whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md border"
              style={{
                borderColor: `${item.color}30`,
                color: item.color,
                backgroundColor: `${item.color}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="My Journey"
          title="Education &"
          highlight="Background"
          subtitle="My academic journey and professional development path."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center text-violet-light">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Education</h3>
          </motion.div>

          <div>
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
