import { Link } from "react-router-dom";

import { FaLayerGroup } from "react-icons/fa";

const ProjectCard = ({ item }) => {

  return (

    <div className="p-6 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)] hover:scale-[1.02] transition-all duration-300">

      {/* TOP */}

      <div className="flex items-start justify-between">

        <div className={`w-16 h-16 rounded-[20px] ${item.color} flex items-center justify-center text-3xl text-white shadow-[var(--shadow-skeuo-convex)]`}>

          <FaLayerGroup />

        </div>

        <div className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs border border-white/10">

          {item.difficulty}

        </div>

      </div>

      {/* TITLE */}

      <h3 className="mt-6 text-white text-2xl font-bold">
        {item.title}
      </h3>

      {/* SUBTITLE */}

      <p className="mt-2 text-white/60 text-sm">
        {item.subtitle}
      </p>

      {/* TECH */}

      <div className="flex flex-wrap gap-2 mt-5">

        {item.tech.map((tech, i) => (

          <span
            key={i}
            className="px-3 py-2 rounded-full bg-white/10 border border-white/10 text-xs text-white"
          >
            {tech}
          </span>

        ))}

      </div>

      {/* PROGRESS */}

      <div className="mt-6">

        <div className="flex items-center justify-between mb-2">

          <span className="text-white/70 text-sm">
            Difficulty
          </span>

          <span className="text-white text-sm">
            {item.progress}
          </span>

        </div>

        <div className="h-3 rounded-full bg-white/10 overflow-hidden">

          <div
            className={`${item.color} h-full rounded-full`}
            style={{
              width: item.progress
            }}
          />

        </div>

      </div>

      {/* FOOTER */}

      <div className="flex items-center justify-between mt-6">

        <p className="text-white/70 text-sm">
          {item.projects}
        </p>

        {/* LINK BUTTON */}

        <Link
          to={item.link}
          className="px-5 py-2 rounded-[14px] bg-white/10 border border-white/10 shadow-[var(--shadow-skeuo-convex)] text-white text-sm"
        >

          View

        </Link>

      </div>

    </div>

  );
};

export default ProjectCard;