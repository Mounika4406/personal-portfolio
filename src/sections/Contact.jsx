import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUser,
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

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white px-6 py-24 flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl">
        
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

          {/* Top Contact Boxes */}
          <div className="grid md:grid-cols-2 gap-7 mb-8">

            {/* Email Box */}
            <div className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  Email
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white break-all">
                  mounikabandharu12@gmail.com
                </h3>
              </div>
            </div>

            {/* Phone Box */}
            <div className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-7 py-7 hover:border-cyan-400/40 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-cyan-300 mb-2">
                  Phone
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-white">
                  +91 6300993453
                </h3>
              </div>
            </div>
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
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-white text-lg font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] transition-all duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;