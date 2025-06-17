'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Calendar, Users, Code, Database, Globe, Smartphone, Server, Layers } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'RESTful APIs']
    },
    {
      title: 'Frontend Development', 
      icon: Globe,
      skills: ['Angular', 'TypeScript', 'JavaScript', 'Next.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Architecture & Patterns',
      icon: Layers,
      skills: ['CQRS', 'Onion Architecture', 'N-Tier Architecture', 'Code First', 'JWT Authentication']
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: ['SQL Server', 'Supabase', 'Git', 'jQuery', 'Bank API Integration']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'Mobile UI', 'Cross-platform Development']
    },
    {
      title: 'Other Technologies',
      icon: Code,
      skills: ['Penetration Testing', 'System Integration', 'Real-time Updates', 'Email Integration']
    }
  ]

  const stats = [
    { icon: Calendar, value: '4+', label: 'Years Experience', description: 'Software Development' },
    { icon: BookOpen, value: '10+', label: 'Projects Completed', description: 'Full Stack Development' },
    { icon: Users, value: '3', label: 'Leadership Roles', description: 'Community & Team Lead' },
    { icon: Award, value: '3.52', label: 'GPA', description: 'Computer Engineering' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and learning new technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a fourth-year Computer Engineering student at İzmir Katip Çelebi University with hands-on 
                experience in full-stack development, primarily using ASP.NET Core, Angular, and SQL. I have worked 
                on university management systems, specialized appointment platforms, and meal reservation solutions, 
                gaining expertise in scalable architectures like CQRS and Onion Architecture.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond software development, I have actively contributed as a community leader, facilitating feedback 
                loops between students and development teams. My freelance projects include building dynamic web 
                platforms with admin-user management, banking API integrations, and optimized user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I also had the opportunity to study abroad at the University of Trento, Italy, as part of the ERASMUS 
                program, which broadened my perspective on international collaboration and diverse approaches to technology.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-lg mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 