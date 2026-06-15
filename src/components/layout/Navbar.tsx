import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/data'
import { scrollToSection } from '@/utils/scroll'
import { cn } from '@/utils/cn'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-violet/10 py-3'
          : 'bg-transparent py-5'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-body text-lg font-semibold tracking-tight text-white hover:text-violet-light transition-colors"
        >
          <span className="text-violet-light">&lt;</span>
          <span>Akash</span>
          <span className="text-violet-light">/&gt;</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                  activeSection === link.id
                    ? 'text-violet-light'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-violet/10 rounded-lg border border-violet/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop resume button */}
        <a
          href="/Akash_Singh_CV_2026.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet to-accent-pink text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(124,58,237,0.4)]"
        >
          Resume
          <Download size={14} />
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[60px] bg-dark/95 backdrop-blur-xl z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pb-20">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'text-xl font-display font-semibold transition-colors',
                    activeSection === link.id
                      ? 'text-violet-light'
                      : 'text-gray-400 hover:text-white'
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="/Akash_Singh_CV_2026.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet to-accent-pink text-white font-semibold rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Download Resume
                <Download size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
