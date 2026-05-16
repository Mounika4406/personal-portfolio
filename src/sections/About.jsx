function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-cyan-400 text-lg mb-6">
          About Me
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-10">
          Passionate about creating clean frontend experiences.
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
          I am a frontend developer focused on building modern,
          responsive, and visually polished websites using React,
          Tailwind CSS, and JavaScript.

          <br /><br />

          I enjoy creating smooth user experiences, elegant UI,
          and responsive layouts that feel professional across
          all devices.
        </p>

      </div>

    </section>
  );
}

export default About;