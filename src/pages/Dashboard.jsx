import DashboardNavbar from "../components/dashboard/DashboardNavbar";


import ProjectGrid from "../components/dashboard/ProjectGrid";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gradient-portfolio overflow-hidden relative">
      {/* BACKGROUND */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-pink-300/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-3xl" />

      {/* CONTAINER */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        {/* NAVBAR */}

        <DashboardNavbar />

        {/* CONTENT */}

        {/* SIDEBAR */}

        {/* MAIN */}

        <div className="space-y-8 mt-8">

          <ProjectGrid />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
