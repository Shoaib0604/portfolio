import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Job Portal Application",
    description:
      "A full-stack job portal that allows users to browse jobs, apply for positions, and manage applications with a clean and responsive interface.",
    image: "/projects/JobPortalApp.png",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "https://job-portal-client-ashen-ten.vercel.app/",
    githubUrl: "https://github.com/Shoaib0604/Job-Portal",
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    description:
      "A real-time messaging application built using WebSockets, enabling instant communication, user authentication, and responsive UI updates.",
    image: "/projects/RealTimeChatApp.png",
    tags: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    demoUrl: "https://github.com/Shoaib0604/real_time_chatting_application",
    githubUrl: "https://github.com/Shoaib0604/real_time_chatting_application",
  },
  {
    id: 3,
    title: "Blog App",
    description:
      "A server-rendered blog application built using EJS templates, focusing on dynamic content rendering, clean layout structure, and reusable views.",
    image: "/projects/BlogApp.png",
    tags: ["Node.js", "Express.js", "EJS", "HTML", "CSS"],
    demoUrl: "https://github.com/Shoaib0604/blog_app",
    githubUrl: "https://github.com/Shoaib0604/blog_app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, including frontend applications
          and server-rendered apps built using modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            href="https://github.com/Shoaib0604"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
