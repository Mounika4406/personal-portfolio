import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUser,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white px-6 py-24 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-7xl"
      >
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-xs font-semibold mb-5">
            CONTACT
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1] tracking-tight">
            Let’s build
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              something amazing
            </span>
          </h1>

          <p className="mt-7 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Available for internships, freelance projects,
            collaborations, and creative opportunities.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="rounded-[40px] border border-cyan-400/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          {/* Top Contact Boxes (2x2 Grid) */}
          <div className="grid md:grid-cols-2 gap-7 mb-10">

            {/* Email Box */}
            <a
              href="mailto:mounikabandharu12@gmail.com"
              className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  Email
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white break-all group-hover:text-cyan-400 transition-colors">
                  mounikabandharu12@gmail.com
                </h3>
              </div>
            </a>

            {/* Phone Box */}
            <a
              href="tel:+916300993453"
              className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  Phone
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  +91 6300993453
                </h3>
              </div>
            </a>

            {/* GitHub Box */}
            <a
              href="https://github.com/Mounika4406"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                <FaGithub />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  GitHub
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  github.com/Mounika4406
                </h3>
              </div>
            </a>

            {/* LinkedIn Box */}
            <a
              href="https://linkedin.com/in/mounika-bandharu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition duration-300">
                <FaLinkedin />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  LinkedIn
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  mounika-bandharu
                </h3>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-7">

              {/* Name */}
              <div className="relative">
                <FaUser className="absolute top-1/2 -translate-y-1/2 left-5 text-cyan-400 text-lg" />

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full h-[78px] rounded-3xl border border-cyan-400/10 bg-white/[0.03] pl-14 pr-6 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-5 text-cyan-400 text-lg" />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-[78px] rounded-3xl border border-cyan-400/10 bg-white/[0.03] pl-14 pr-6 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="7"
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-[32px] border border-cyan-400/10 bg-white/[0.03] p-7 text-lg text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-cyan-400 transition-all"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-white text-lg font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] transition-all duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.35)] cursor-pointer"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;