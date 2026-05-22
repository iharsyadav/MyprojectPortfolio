import {
  Link,
} from "react-router-dom";

import {
  FaGithub,
  FaChevronDown,
  FaHome,
} from "react-icons/fa";

const DashboardNavbar = () => {

  return (

    <header className="relative z-50 h-24 px-8 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)] flex items-center justify-between">

      {/* LEFT */}

      <div className="flex items-center gap-4">

        {/* HOME BUTTON */}

        <Link
          to="/"
          className="w-14 h-14 rounded-[18px] bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.05] transition-all duration-300"
        >

          <FaHome />

        </Link>

        {/* TITLE */}

        <h1 className="text-3xl lg:text-4xl font-black text-white">

          Dashboard

        </h1>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* DASHBOARD */}

        <Link
          to="/dashboard"
          className="h-12 px-5 rounded-[16px] bg-white/10 border border-white/20 text-white shadow-[var(--shadow-skeuo-convex)] flex items-center hover:scale-[1.03] transition-all duration-300"
        >

          Dashboard

        </Link>

        {/* DROPDOWN */}

        <div className="relative group z-50">

          {/* BUTTON */}

          <button className="h-12 px-5 rounded-[16px] bg-white/10 border border-white/20 text-white shadow-[var(--shadow-skeuo-convex)] flex items-center gap-2 hover:scale-[1.03] transition-all duration-300">

            Projects

            <FaChevronDown className="text-xs" />

          </button>

          {/* MENU */}

          <div className="absolute top-16 right-0 z-50 w-60 p-3 rounded-[22px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[var(--shadow-skeuo-glass)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

            <div className="flex flex-col gap-2">

              {/* BASIC */}

              <Link
                to="/basic-projects"
                className="h-11 px-4 rounded-[14px] bg-white/10 border border-white/10 text-white flex items-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.02] transition-all duration-300"
              >

                Basic Projects

              </Link>

              {/* INTERMEDIATE */}

              <Link
                to="/intermediate-projects"
                className="h-11 px-4 rounded-[14px] bg-white/10 border border-white/10 text-white flex items-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.02] transition-all duration-300"
              >

                Intermediate Projects

              </Link>

              {/* ADVANCED */}

              <Link
                to="/advanced-projects"
                className="h-11 px-4 rounded-[14px] bg-white/10 border border-white/10 text-white flex items-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.02] transition-all duration-300"
              >

                Advanced Projects

              </Link>

            </div>

          </div>

        </div>

        {/* GITHUB */}

        <a
          href="https://github.com/iharsyadav"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-[16px] bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.05] transition-all duration-300"
        >

          <FaGithub />

        </a>

      </div>

    </header>

  );
};

export default DashboardNavbar;