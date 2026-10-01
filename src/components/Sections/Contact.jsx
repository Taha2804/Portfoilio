import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
}

export default function Contact() {
  const { email, social } = portfolioData.personal

  return (
    <section id="contact" className="py-24 px-6 bg-base relative">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollFadeIn>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">09</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Get In Touch
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-8 mx-auto" />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
            Open to SOC, VAPT, and digital forensics roles. Want to talk security,
            tooling, or a potential hire? Reach out.
          </p>
        </ScrollFadeIn>

        <motion.a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 border border-cyan/50 text-cyan px-8 py-4 rounded-sm text-lg font-medium hover:bg-cyan hover:text-base transition-all mb-12"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail size={22} />
          <span>{email}</span>
          <Send size={18} />
        </motion.a>

        <div className="flex justify-center gap-4 mt-8">
          {Object.entries(social).map(([platform, url], index) => {
            const Icon = socialIcons[platform]
            if (!Icon) return null
            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border rounded-sm flex items-center justify-center text-muted hover:text-cyan hover:border-cyan transition-all"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </div>

        <motion.p
          className="mt-16 text-faint text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan">&gt;</span> echo &quot;Designed &amp; built by Taha Badami&quot;
        </motion.p>
      </div>
    </section>
  )
}