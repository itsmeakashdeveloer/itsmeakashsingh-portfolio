import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { PERSONAL } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'
import akashPhoto from '@/assets/akash-photo.png'
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-100">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Crafting Digital Experiences"
          highlight="with Passion"
          center={false}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet/10 to-accent-pink/10 border border-violet/15 p-2">
                <img
                  src={akashPhoto}
                  alt="Akash Singh"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-dark-200/95 backdrop-blur-sm border border-violet/20 rounded-2xl px-4 py-3 flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-light to-accent-pink bg-clip-text text-transparent">
                  B.Tech
                </span>
                <small className="text-gray-400 text-xs leading-tight">
                  Computer
                  <br />
                  Science
                </small>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-dark-200/95 backdrop-blur-sm border border-violet/20 rounded-2xl px-4 py-3 flex items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <span className="text-xl">⌨️</span>
                <small className="text-gray-400 text-xs leading-tight">
                  Clean Code
                  <br />
                  Advocate
                </small>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {PERSONAL.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-gray-400 leading-relaxed mb-4 last:mb-8"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {PERSONAL.facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-dark-200/50 border border-violet/10 rounded-xl p-4 flex items-center gap-3 hover:border-violet/30 transition-all duration-300"
                >
                  <span className="text-2xl">{fact.icon}</span>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {fact.label}
                    </div>
                    <div className="text-sm font-semibold text-white">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/Akash_Singh_CV_2026.pdf"
              download
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet to-accent-pink text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <Download size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
