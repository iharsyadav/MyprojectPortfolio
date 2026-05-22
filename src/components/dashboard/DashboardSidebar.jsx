import { FaCode } from "react-icons/fa";

import { HiMiniSquares2X2 } from "react-icons/hi2";

const DashboardSidebar = () => {

  return (

    <aside className="h-fit p-6 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[var(--shadow-skeuo-glass)]">

      {/* PROFILE */}

      <div className="flex items-center gap-4 pb-6 border-b border-white/10">

        <div className="w-16 h-16 rounded-[20px] bg-white/10 border border-white/20 shadow-[var(--shadow-skeuo-convex)] flex items-center justify-center text-white text-2xl">

          <FaCode />

        </div>

        <div>

          <h3 className="text-white font-bold">
            Frontend Dev
          </h3>

          <p className="text-white/70 text-sm">
            Portfolio Dashboard
          </p>

        </div>

      </div>

      {/* MENU */}

      <div className="mt-6 space-y-4">

        {[
          "Overview",
          "Projects",
          "Categories",
          "Favorites",
        ].map((item) => (

          <button
            key={item}
            className="w-full h-14 px-5 rounded-[18px] bg-white/10 border border-white/10 shadow-[var(--shadow-skeuo-convex)] text-white flex items-center gap-3"
          >

            <HiMiniSquares2X2 />

            {item}

          </button>

        ))}

      </div>

    </aside>

  );
};

export default DashboardSidebar;