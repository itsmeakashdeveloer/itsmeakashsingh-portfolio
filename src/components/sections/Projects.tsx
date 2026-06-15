import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { PROJECTS } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { useTilt } from '@/hooks/useTilt'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, handleMove, handleLeave } = useTilt(6)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group bg-dark-200/50 border border-violet/10 rounded-2xl overflow-hidden hover:border-violet/25 transition-all duration-500 hover:shadow-[0_8px_50px_rgba(124,58,237,0.12)]"
        style={{ transition: 'transform 0.15s ease-out, border-color 0.5s, box-shadow 0.5s' }}
      >
        {/* Project visual area */}
        <div
          className="relative h-52 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}10, ${project.color}25)`,
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20 blur-xl"
            style={{ backgroundColor: project.color }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10 blur-xl"
            style={{ backgroundColor: project.color }}
          />

          <motion.span
            className="text-7xl relative z-10 drop-shadow-lg"
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {project.icon}
          </motion.span>

          {project.featured && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-violet/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
              Featured
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-violet-light transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-md border uppercase tracking-wider"
                style={{
                  borderColor: `${project.color}25`,
                  color: project.color,
                  backgroundColor: `${project.color}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group/link"
              >
                <GithubIcon size={15} />
                <span className="group-hover/link:underline underline-offset-4">Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-violet-light transition-colors group/link"
                style={{ color: project.color }}
              >
                <ExternalLink size={15} />
                <span className="group-hover/link:underline underline-offset-4">
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-100">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="What I've Built"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of projects that showcase my skills and passion for creating impactful digital products."
        />

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-white font-semibold rounded-full border-2 border-violet/20 transition-all duration-300 hover:border-violet-light hover:text-violet-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GithubIcon size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
