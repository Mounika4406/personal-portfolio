import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <header className="text-center mb-20">

          <p className="text-cyan-400 text-lg font-medium mb-4 tracking-wide uppercase">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 text-lg leading-8 text-center max-w-3xl mx-auto">
  I specialize in building responsive and modern web applications using
  frontend technologies and development tools.
</p>

        </header>

        {/* Skills Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <li
                key={skill.name}
                className="w-full"
              >

                <div className="group flex min-h-[260px] flex-col items-center justify-center bg-[#0f172a] border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">

                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center mb-6 ${skill.color}`}
                  >
                    <Icon className="text-6xl group-hover:scale-110 transition duration-300" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-2xl font-semibold text-center">
                    {skill.name}
                  </h3>

                </div>

              </li>
            );
          })}

        </ul>

      </div>
    </section>
  );
}

export default Skills;