import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-[#050816] flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side: Avatar/Photo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
            
            {/* Image */}
            <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/profile.webp"
                alt="Mounika Bandharu Portrait"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 text-lg font-medium mb-4 uppercase tracking-wider"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold leading-tight mb-8 text-white"
          >
            Passionate about creating clean frontend experiences.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-8 mb-6"
          >
            I am a frontend developer focused on building modern, responsive, and visually polished websites using React, Tailwind CSS, and JavaScript. 
            Currently, I am deep-diving into advanced motion libraries and modern state management tools to build web apps that are as functional as they are beautiful.
            I love bridging the gap between design and clean, maintainable code to build interfaces that feel professional across all devices.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;