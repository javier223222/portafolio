'use client';

import { motion } from 'framer-motion';
import { ServerCog, Cloud, Zap, MapPin, Calendar, ExternalLink, Trophy, BookOpen } from 'lucide-react';


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const achievements = [
    { 
      position: "1st Place", 
      event: "Talent Land Hackathon 2025", 
      icon: "🥇",
      description: "Innovation in backend architecture"
    },
    { 
      position: "1st Place", 
      event: "MegaHackathon Internacional Blockchain & Web3", 
      icon: "🥇",
      description: "Decentralized application development"
    },
    { 
      position: "3rd Place", 
      event: "VaraNetwork Hackathon 2024", 
      icon: "🥉",
      description: "Smart contract integration"
    },
    { 
      position: "Publication", 
      event: "Scientific Publication - Solary Project", 
      icon: "📰",
      description: "Indexed research contribution"
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "15+", label: "Projects Completed", icon: ServerCog },
    { number: "3", label: "Hackathon Wins", icon: Trophy },
    { number: "8+", label: "Technologies", icon: Zap },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-16 text-gray-100 max-w-[98%] sm:max-w-[97%] lg:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 ">
      <div className="">
      
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
           Passionate backend developer with a vision for scalable architecture and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Introduction Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl">
                  <ServerCog className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Backend Developer with Architectural Vision
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I&apos;m Javier Cundapi, a software engineer passionate about building
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> scalable, clean, and efficient APIs</span>.
                    I work with <strong>Node.js, Go, Java, Spring Boot, and Laravel</strong>, applying clean architecture principles and best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-xl">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Real-World Production Experience
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I&apos;ve worked on ERPs, authentication systems, educational platforms, and IoT solutions for energy monitoring,
                    integrating technologies like <strong>Docker, WebSockets, JWT, PostgreSQL, and MongoDB</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Learning Card */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800"
              variants={fadeIn}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Always Learning & Sharing
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I continue training in <strong>AWS, Azure, security, and performance</strong>. 
                    I enjoy participating in hackathons, writing about my projects, and learning in community.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Achievements */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeIn}
            >
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-100 dark:border-yellow-800"
              variants={fadeIn}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Awards & Achievements
                </h3>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-lg">{achievement.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {achievement.position} - {achievement.event}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              variants={fadeIn}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Quick Facts
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Based in:</span>
                  <span className="font-medium">Mexico</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Focus:</span>
                  <span className="font-medium">Backend Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Specialty:</span>
                  <span className="font-medium">API Architecture</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interests:</span>
                  <span className="font-medium">Cloud, Clean Code, Blockchain</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

       
        <motion.div
          className="mt-16 text-center"
         
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Let&apos;s Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on innovative projects and collaborate with passionate teams.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href={"mailto:upconectionupconection@gmail.com"}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}