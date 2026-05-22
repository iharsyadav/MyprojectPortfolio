import { Link } from "react-router-dom";

import { FaArrowRight, FaGithub, FaReact, FaCode } from "react-icons/fa";

import { IoColorPaletteOutline } from "react-icons/io5";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-portfolio overflow-hidden relative">
      {/* BACKGROUND */}

      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-200/20 blur-3xl" />

      {/* CONTAINER */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        {/* NAVBAR */}

        <header className="h-24 px-8 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)] flex items-center justify-between">
          {/* LOGO */}

          <h1 className="text-3xl lg:text-4xl font-black text-white">
            Project Showcase
          </h1>

          {/* NAV */}

          <nav className="hidden md:flex items-center gap-4">
            <Link
              to="/dashboard"
              className="h-12 px-5 rounded-[16px] bg-white/10 border border-white/20 text-white shadow-[var(--shadow-skeuo-convex)] flex items-center hover:scale-[1.03] transition-all duration-300"
            >
              Dashboard
            </Link>
            <a
              href="https://github.com/iharsyadav"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-[16px] bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-[var(--shadow-skeuo-convex)] hover:scale-[1.05] transition-all duration-300"
            >
              <FaGithub />
            </a>
          </nav>
        </header>

        {/* HERO */}

        <section className="grid lg:grid-cols-[55%_45%] items-center gap-16 pt-20">
          {/* LEFT */}

          <div>
            {/* BADGE */}

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-convex)] mb-10">
              <div className="w-3 h-3 rounded-full bg-[var(--color-brand-mint)]" />

              <span className="uppercase tracking-[4px] text-xs text-white">
                Frontend Developer Portfolio
              </span>
            </div>

            {/* TITLE */}

            <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.9] font-black text-white">
              Showcase.
              <br />
              Explore.
              <br />
              Inspire.
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-white/80 max-w-xl">
              Discover beautiful frontend projects, React applications,
              animations, landing pages and modern UI experiments.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap items-center gap-5 mt-12">
              {/* EXPLORE BUTTON */}

              <Link
                to="/dashboard"
                className="h-16 px-8 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-convex)] active:shadow-[var(--shadow-skeuo-concave)] flex items-center gap-3 text-white font-medium hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                Explore Projects
                <FaArrowRight />
              </Link>

              {/* GITHUB BUTTON */}

              <a
                href="https://github.com/iharsyadav"
                target="_blank"
                rel="noreferrer"
                className="h-16 px-8 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-convex)] active:shadow-[var(--shadow-skeuo-concave)] flex items-center gap-3 text-white font-medium hover:scale-105 transition-all duration-300"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div className="relative p-8 rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[var(--shadow-skeuo-glass)]">
            {/* TOP */}

            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-20 rounded-[24px] bg-white/10 border border-white/20 shadow-[var(--shadow-skeuo-convex)]" />

              <button className="h-16 px-8 rounded-[20px] bg-white/10 border border-white/20 text-white shadow-[var(--shadow-skeuo-convex)] active:shadow-[var(--shadow-skeuo-concave)] transition-all">
                Go Premium
              </button>
            </div>

            {/* PROJECT CARDS */}

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <FaReact />,
                  color: "bg-[var(--color-brand-lavender)]",
                },

                {
                  icon: <IoColorPaletteOutline />,
                  color: "bg-[var(--color-brand-pink)]",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[28px] bg-white/10 border border-white/20 shadow-[var(--shadow-skeuo-convex)]"
                >
                  {/* ICON */}

                  <div
                    className={`w-14 h-14 rounded-[18px] ${item.color} flex items-center justify-center text-white text-2xl shadow-[var(--shadow-skeuo-convex)]`}
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-6 text-white text-lg font-bold">
                    UI Project
                  </h3>

                  {/* PREVIEW */}

                  <div className="mt-6 h-40 rounded-[22px] bg-white/10 shadow-[var(--shadow-skeuo-concave)]" />
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="flex justify-center mt-12">
              <Link
                to="/dashboard"
                className="w-52 h-52 rounded-full bg-white/10 border border-white/20 shadow-[var(--shadow-skeuo-convex)] active:shadow-[var(--shadow-skeuo-concave)] text-white text-3xl font-black hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Explore
              </Link>
            </div>

            {/* FLOAT CARD */}

            <div className="absolute -bottom-8 -left-8 px-6 py-5 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[18px] bg-[var(--color-brand-mint)] flex items-center justify-center text-black text-xl">
                  <FaCode />
                </div>

                <div>
                  <h4 className="text-white font-bold">50+ Projects</h4>

                  <p className="text-white/70 text-sm">Modern Frontend UI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
