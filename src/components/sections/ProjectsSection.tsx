'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Globe, Server, Database, Layout } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Boğaziçi MUN Community - Present Bulletin',
    description: 'A .NET MVC-based content management website with user, writer, and admin roles, enabling article submission, category-based browsing, and admin approval workflows.',
    image: '/api/placeholder/600/400',
    category: 'Web Application',
    technologies: ['.NET MVC', 'C#', 'SQL Server', 'Bootstrap', 'jQuery'],
    liveUrl: 'https://presentbogazicimun.com.tr',
    githubUrl: '',
    features: ['User Management', 'Content Approval', 'Category System', 'Article Submission']
  },
  {
    id: 2,
    title: 'Kömürcüoğlu Automotive - Sales & Rental Platform',
    description: 'A .NET MVC-based platform for vehicle sales and rentals with user and admin panels, featuring categorized listings and automated email notifications.',
    image: '/api/placeholder/600/400',
    category: 'E-Commerce',
    technologies: ['.NET MVC', 'C#', 'Email Integration', 'Bootstrap', 'SQL Server'],
    liveUrl: 'https://komurcuogluoto.com.tr',
    githubUrl: '',
    features: ['Vehicle Listings', 'Email Notifications', 'Admin Panel', 'Rental Management']
  },
  {
    id: 3,
    title: 'Büyükkayalı Spor Kulübü - Official Website',
    description: 'A dynamic and responsive football club website using Next.js and Supabase, allowing real-time content updates through an admin panel.',
    image: '/api/placeholder/600/400',
    category: 'Web Application',
    technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Real-time Updates'],
    liveUrl: 'https://buyukkayalispor.com.tr',
    githubUrl: '',
    features: ['Real-time Updates', 'Admin Panel', 'Team Management', 'Fixture System']
  },
  {
    id: 4,
    title: 'University Dentistry Appointment System',
    description: 'A specialized appointment system for Faculty of Dentistry staff at Izmir Katip Celebi University, enabling direct booking for dental treatments.',
    image: '/api/placeholder/600/400',
    category: 'Enterprise',
    technologies: ['.NET Core', 'MVC', 'SQL Server', 'Bootstrap', 'jQuery'],
    liveUrl: '',
    githubUrl: '',
    features: ['Staff Management', 'Appointment Booking', 'Hospital Integration', 'User-Friendly Interface']
  },
  {
    id: 5,
    title: 'University Lunchroom Reservation System',
    description: 'A comprehensive meal reservation system for students and staff with balance loading through bank API integration and turnstile data monitoring.',
    image: '/api/placeholder/600/400',
    category: 'Enterprise',
    technologies: ['.NET Core 7', 'MVC', 'Bank API', 'N-Tier Architecture', 'Code First'],
    liveUrl: '',
    githubUrl: '',
    features: ['Meal Reservations', 'Bank Integration', 'Turnstile Monitoring', 'Balance Management']
  },
  {
    id: 6,
    title: 'UBYS - University Information Management Modules',
    description: 'Currently developing integrated modules for the University Information Management System (UBYS) using modern full-stack technologies.',
    image: '/api/placeholder/600/400',
    category: 'Enterprise',
    technologies: ['Angular', 'ASP.NET Core', 'CQRS', 'Onion Architecture', 'JWT'],
    liveUrl: '',
    githubUrl: '',
    features: ['CQRS Pattern', 'Clean Architecture', 'JWT Authentication', 'Module Integration']
  }
]

const categories = ['All', 'Web Application', 'E-Commerce', 'Enterprise']

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work spanning university systems, freelance projects, and modern web applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === 'Web Application' && <Layout className="w-16 h-16 text-white/80" />}
                  {project.category === 'E-Commerce' && <Globe className="w-16 h-16 text-white/80" />}
                  {project.category === 'Enterprise' && <Server className="w-16 h-16 text-white/80" />}
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className="w-1 h-1 bg-teal-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 