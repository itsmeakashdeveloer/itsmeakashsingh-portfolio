import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  isLoading: boolean
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Rotating ring */}
            <motion.div
              className="w-28 h-28 rounded-full border-2 border-violet/20"
              style={{ borderTopColor: '#7C3AED', borderRightColor: '#EC4899' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo text */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <span className="font-display text-3xl font-extrabold bg-gradient-to-r from-violet-light via-accent-pink to-accent-cyan bg-clip-text text-transparent">
                AS
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div className="mt-8 w-48 h-1 bg-dark-300 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet via-accent-pink to-accent-cyan rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-gray-500 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
