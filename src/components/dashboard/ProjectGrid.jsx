import ProjectCard from "./ProjectCard";

const projectCategories = [

  {
    title: "Basic Projects",

    subtitle: "Beginner Friendly UI",

    difficulty: "Basic",

    tech: [
      "React",
      "Tailwind",
      "Responsive UI",
    ],

    projects: "15 Projects",

    color: "bg-emerald-400",

    progress: "40%",

    link: "/basic-projects",
  },

  {
    title: "Intermediate Projects",

    subtitle: "Interactive Frontend",

    difficulty: "Intermediate",

    tech: [
      "React Router",
      "API",
      "Animations",
    ],

    projects: "22 Projects",

    color: "bg-yellow-300",

    progress: "70%",

    link: "/intermediate-projects",
  },

  {
    title: "Advanced Projects",

    subtitle: "Complex Dashboards",

    difficulty: "Advanced",

    tech: [
      "Authentication",
      "State Management",
      "Charts",
    ],

    projects: "10 Projects",

    color: "bg-pink-400",

    progress: "90%",

    link: "/advanced-projects",
  },

];

const ProjectGrid = () => {

  return (

    <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">

      {projectCategories.map((item, index) => (

        <ProjectCard
          key={index}
          item={item}
        />

      ))}

    </div>

  );
};

export default ProjectGrid;