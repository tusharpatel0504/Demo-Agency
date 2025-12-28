import React from "react";

const projects = [
    {
        id: "(01)",
        title: "Enyugma Website",
        subtitle: "Official techno-cultural fest website of IIIT Bhagalpur.",
        description:
            "Designed and developed the official website for IIIT Bhagalpur’s annual techno-cultural fest using ReactJS and TailwindCSS, delivering a responsive interface and scalable backend services to support high traffic during the event.",
        tech: ["ReactJS", "TailwindCSS", "Node.js", "Express"],
        image: "/enyugma.png",
        live: "https://enyugma.iiitbh.ac.in",
    },
    {
        id: "(02)",
        title: "OPCODE Website",
        subtitle: "Open-source platform for collaborative development.",
        description:
            "Built an open-source platform focused on collaborative development and innovation, enabling developers to share, contribute, and scale community-driven projects through a clean and accessible web interface.",
        tech: [
            "ReactJS",
            "TailwindCSS",
            "Open Source",
            "Community Platform",
            "Node.js",
            "Express",
        ],
        image: "/OPCODE.png",
        live: "https://opcode.gymkhana.iiitbh.ac.in/",
    },
    {
        id: "(03)",
        title: "E-Summit Website",
        subtitle: "Official website for IIIT Bhubaneswar’s entrepreneurship summit.",
        description:
            "Developed the official website for IIIT Bhubaneswar’s annual entrepreneurship summit with a responsive frontend, real-time updates, and performance optimizations to handle large visitor traffic.",
        tech: [
            "ReactJS",
            "TailwindCSS",
            "Node.js",
            "Express",
            "SEO Optimization",
        ],
        image: "/esummit.png",
        live: "https://esummit.iiitbh.ac.in",
    },
];

const Project = () => {
    return (
        <section className="bg-black text-white px-20 pt-28">
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-6xl italic font-light mb-4">
                    With our services
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    We help you achieve more at every stage of business growth
                </p>
            </div>

            {projects.map((project, index) => (
                <div key={project.id}>
                    {/* PROJECT ROW */}
                    <div className="group grid grid-cols-[1.4fr_1.4fr_1fr] gap-16 py-20 items-start cursor-pointer">

                        {/* Left */}
                        <div>
                            <span className="text-gray-500 block mb-3">
                                {project.id}
                            </span>

                            <h2 className="text-4xl font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-sm mb-6">
                                {project.subtitle}
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-gray-300">
                                {project.description}
                            </p>

                            {/* Live Link */}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-sm text-white
                                           border-b border-transparent
                                           transition-all duration-300
                                           group-hover:border-white"
                            >
                                View Live
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>

                        {/* Middle – Tech Stack */}
                        <div className="pt-12">
                            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                                Tech Stack
                            </h4>

                            <ul className="flex flex-wrap gap-3">
                                {project.tech.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="px-3 py-1 border border-neutral-700 rounded-full text-xs text-gray-300
                                                   transition-colors duration-300 group-hover:border-neutral-500"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right – Image Card */}
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-96 rounded-xl overflow-hidden
                                       transition-transform duration-700
                                       ease-[cubic-bezier(0.16,1,0.3,1)]
                                       group-hover:scale-105
                                       group-hover:-translate-y-1
                                       group-hover:shadow-2xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                        </a>
                    </div>

                    {/* Divider */}
                    {index !== projects.length - 1 && (
                        <div className="h-px bg-neutral-800" />
                    )}
                </div>
            ))}
        </section>
    );
};

export default Project;
