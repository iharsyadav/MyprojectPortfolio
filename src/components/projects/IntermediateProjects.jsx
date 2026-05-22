/* =========================================
   src/pages/IntermediateProjects.jsx
========================================= */

import { FaArrowRight,  FaDatabase } from "react-icons/fa";

import DashboardNavbar from "../dashboard/DashboardNavbar";

const intermediateProjects = [
 {
  title: "codeDotin",

  tech: [
    "React",
    "Tailwind",
    "React Router",
    "UI Design",
  ],

  difficulty: "Intermediate",

  color: "bg-cyan-800",

  link: "https://codedotin.netlify.app/",
},

  {
    title: "Movie App",

    tech: ["API", "React"],

    difficulty: "Intermediate",

    color: "bg-cyan-300",
  },

  {
    title: "Weather Dashboard",

    tech: ["API", "Tailwind"],

    difficulty: "Intermediate",

    color: "bg-yellow-300",
  },

  {
    title: "Admin Panel",

    tech: ["Charts", "React Router"],

    difficulty: "Intermediate",

    color: "bg-pink-400",
  },

  {
    title: "Authentication UI",

    tech: ["Firebase", "Forms"],

    difficulty: "Intermediate",

    color: "bg-emerald-400",
  },
];

const IntermediateProjects = () => {
  return (
    <main className="min-h-screen bg-gradient-portfolio overflow-hidden relative">
      {/* BG */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-pink-300/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-3xl" />

      {/* CONTAINER */}

      <section className="relative z-10 max-w-6xl mx-auto px-5 py-5">
        <DashboardNavbar />

        {/* TOP */}

        <div className="flex items-center justify-between mt-6 mb-6">
          <div>
            <h2 className="text-3xl font-black text-white">
              Intermediate Projects
            </h2>

            <p className="text-white/70 mt-1 text-sm">
              Interactive frontend applications
            </p>
          </div>

        </div>

        {/* GRID */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {intermediateProjects.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-[22px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)]"
            >
              {/* TOP */}

              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-[16px] ${item.color} flex items-center justify-center text-xl text-white shadow-[var(--shadow-skeuo-convex)]`}
                >
                  <FaDatabase />
                </div>

                <div className="px-2 py-1 rounded-full bg-white/10 text-white/80 text-[10px] border border-white/10">
                  {item.difficulty}
                </div>
              </div>

              {/* TITLE */}

              <h3 className="mt-4 text-white text-lg font-bold">
                {item.title}
              </h3>

              {/* TECH */}

              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* PREVIEW */}
                  <div className="mt-4 h-32 rounded-[16px] bg-white/10 shadow-[var(--shadow-skeuo-concave)] p-4 overflow-hidden">
                {/* TOP */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-300" />

                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-300" />

                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>

                  <div className="w-12 h-3 rounded-full bg-white/10" />
                </div>

                {/* CONTENT */}

                <div className="mt-4 space-y-3">
                  <div className="h-3 rounded-full bg-white/20 w-full" />

                  <div className="h-3 rounded-full bg-white/10 w-[70%]" />

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="h-12 rounded-[12px] bg-white/10" />

                    <div className="h-12 rounded-[12px] bg-white/10" />
                  </div>
                </div>
              </div>

              {/* PREVIEW */}

          

              {/* FOOTER */}

              <div className="flex items-center justify-between mt-4">
                <p className="text-white/70 text-xs">Interactive UI</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 px-3 rounded-[12px] bg-white/10 border border-white/10 shadow-[var(--shadow-skeuo-convex)] text-white flex items-center gap-2 text-xs"
                >
                  Open
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default IntermediateProjects;
