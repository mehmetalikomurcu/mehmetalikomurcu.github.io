'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Shorter, more impactful rotating texts
  const rotatingTexts = useMemo(() => [
    "Mehmet Ali Kömürcü",
    "Full Stack Developer",
    "Computer Engineer",
    "ASP.NET Expert",
    "Angular Developer",
    "Code Architect"
  ], [])

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    const currentText = rotatingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
          setIsTypingComplete(false)
        } else {
          // Pause at end, then start deleting
          setIsTypingComplete(true)
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
          setIsTypingComplete(false)
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        }
      }
    }, isDeleting ? 40 : (charIndex === 0 ? 800 : 100))

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentTextIndex, rotatingTexts])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image - Repositioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <Image
                  src="https://github.com/mehmetalikomurcu.png"
                  alt="Mehmet Ali Kömürcü"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Compact greeting + Dynamic typing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Hello, I'm
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold min-h-[80px] md:min-h-[120px] lg:min-h-[140px] flex items-center justify-center">
              <span className="gradient-text text-center leading-tight">
                {displayedText}
                <span className={`typing-cursor ml-1 ${isTypingComplete ? 'animate-pulse' : ''}`}>
                  |
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Building modern web applications with clean architecture and scalable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/mehmetalikomurcu', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mehmet-ali-komurcu', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mehmetalikomurcu0@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 