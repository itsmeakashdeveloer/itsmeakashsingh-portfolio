import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons'
import { CONTACT_INFO, PERSONAL } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} />,
  Phone: <Phone size={22} />,
  MapPin: <MapPin size={22} />,
}

const socialIcons: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={20} />,
  Linkedin: <LinkedinIcon size={20} />,
  Twitter: <TwitterIcon size={20} />,
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-100">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm currently open to new opportunities — freelance projects, full-time roles,
              or exciting collaborations. Don't hesitate to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-dark-200/50 border border-violet/10 rounded-xl hover:border-violet/25 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      color: info.color,
                      backgroundColor: `${info.color}12`,
                    }}
                  >
                    {iconMap[info.iconName]}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: info.color }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm font-medium"
                        style={{ color: info.color }}
                      >
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {PERSONAL.socials.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-200 border border-violet/15 text-gray-400 hover:text-white hover:border-violet hover:bg-violet/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {socialIcons[s.iconName]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark-200/50 border border-violet/10 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                    >
                      <CheckCircle
                        size={56}
                        className="mx-auto mb-4 text-accent-green"
                      />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400 mb-6">
                      Thanks for reaching out. I'll get back to you soon!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 bg-gradient-to-r from-violet to-accent-pink text-white font-semibold rounded-full text-sm"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-300/50 border border-violet/10 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-300/50 border border-violet/10 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's it about?"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-300/50 border border-violet/10 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-300/50 border border-violet/10 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-violet to-accent-pink text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)] disabled:opacity-60"
                      whileHover={{ scale: status === 'sending' ? 1 : 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
