import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { NAV_LINKS } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-violet/10">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection('home')}
              className="font-body text-lg font-semibold text-white hover:text-violet-light transition-colors"
            >
              <span className="text-violet-light">&lt;</span>
              Akash Singh
              <span className="text-violet-light">/&gt;</span>
            </button>
            <p className="text-gray-500 text-sm mt-1">
              Building beautiful things on the web.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-500 hover:text-violet-light transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-6 border-t border-violet/5">
          <p className="text-gray-600 text-sm">
            &copy; {year} Akash Singh. Crafted with{' '}
            <Heart size={12} className="inline text-accent-pink fill-accent-pink" /> in
            India.
          </p>

          <motion.button
            onClick={() => scrollToSection('home')}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-200 border border-violet/15 text-gray-500 hover:text-violet-light hover:border-violet/30 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
