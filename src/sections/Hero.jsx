import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  // Scroll parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants optimized for mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 15 : 40 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.8,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: isMobile ? 0.95 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen bg-[#020617] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background glow shapes */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-1/4 left-[5%] w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-cyan-400 text-lg font-medium mb-4 uppercase tracking-wider"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
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
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="text-gray-400 text-lg leading-8 mb-10"
            >
              Passionate frontend developer focused on creating
              responsive, user-friendly, and visually polished
              websites using React, Tailwind CSS, and JavaScript.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-300 transition duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-600 px-8 py-4 rounded-full text-lg hover:bg-white/10 transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none"></div>

              {/* Image Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-cyan-400 overflow-hidden shadow-2xl">
                <img
                  src="/profile.webp"
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