import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#020617] text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-8 lg:px-20">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 text-lg font-medium mb-6"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Hi, I’m{" "}
              <span className="text-cyan-400">
                Mounika
              </span>
              <br />
              I build modern
              <br />
              web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-400 text-lg leading-8 mb-10"
            >
              Passionate frontend developer focused on creating
              responsive, user-friendly, and visually polished
              websites using React, Tailwind CSS, and JavaScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >

              <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-300 transition duration-300">
                View Projects
              </button>

              <button className="border border-gray-600 px-8 py-4 rounded-full text-lg hover:bg-white/10 transition duration-300">
                Contact Me
              </button>

            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

              {/* Image */}
              <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-cyan-400 overflow-hidden">

                <img
                  src="/profile.jpg"
                  alt="Mounika"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;