const DashboardHero = () => {

  return (

    <div className="p-8 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)]">

      <div className="flex items-center justify-between flex-wrap gap-6">

        <div>

          <h2 className="text-4xl font-black text-white">
            Explore Projects
          </h2>

          <p className="mt-3 text-white/70 text-lg">
            Browse projects by difficulty and technologies.
          </p>

        </div>

        {/* SEARCH */}

        <div className="h-16 px-6 rounded-[20px] bg-white/10 border border-white/20 shadow-[var(--shadow-skeuo-convex)] flex items-center">

          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent outline-none placeholder:text-white/50 text-white"
          />

        </div>

      </div>

    </div>

  );
};

export default DashboardHero;