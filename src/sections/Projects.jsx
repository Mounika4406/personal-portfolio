const projects = [
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200",
    description:
      "Modern portfolio website with responsive layouts, smooth animations, and premium UI design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
  },

  {
    title: "Job Portal",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    description:
      "Responsive job opportunities platform with save functionality and clean modern UI.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
  },

  {
    title: "Student Login",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    description:
      "Authentication system with frontend validation and responsive design implementation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
  },

  {
    title: "E-Commerce UI",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200",
    description:
      "Modern ecommerce frontend with responsive layouts and clean shopping experience.",
    tech: ["React", "Tailwind"],
    github: "#",
  },

  {
    title: "Admin Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    description:
      "Interactive dashboard interface with charts, analytics, and responsive design.",
    tech: ["React", "Chart.js"],
    github: "#",
  },

  {
    title: "Weather App",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200",
    description:
      "Weather forecasting application with API integration and responsive user interface.",
    tech: ["React", "API", "CSS"],
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-lg mb-4">
            Projects
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Featured Work
          </h2>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:-translate-y-3 hover:border-cyan-400/40 transition duration-300"
            >

              {/* IMAGE */}
              <div className="h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* BUTTON */}
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-cyan-400 text-black text-center px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300"
                >
                  View Project
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;