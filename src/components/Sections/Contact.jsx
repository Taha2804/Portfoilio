import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Mail, Github, Linkedin, Globe, Send } from 'lucide-react'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  website: Globe,
}

export default function Contact() {
  const { email, social } = portfolioData.personal

  return (
    <section id="contact" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-8 mx-auto" />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in working together? Whether it&apos;s a security audit,
            development project, or just a conversation about cybersecurity — I&apos;d
            love to hear from you.
          </p>
        </ScrollFadeIn>

        {/* Email CTA */}
        <motion.a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neon-cyan hover:text-dark-bg transition-all mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail size={24} />
          <span>{email}</span>
          <Send size={18} />
        </motion.a>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-8">
          {Object.entries(social).map(([platform, url], index) => {
            const Icon = socialIcons[platform] || Globe
            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-dark-border border border-dark-border rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all"
                whileHover={{ scale: 1.15, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </div>

        {/* Footer */}
        <motion.p
          className="mt-16 text-gray-600 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-cyan">$</span> echo &quot;Designed &amp; Built
          by Taha Badami&quot;
        </motion.p>
      </div>
    </section>
  )
}
