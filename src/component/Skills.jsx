import React, { memo } from "react";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

// Static data defined outside to prevent recreation on every render
const skills = [
  { title: "UI/UX", desc: "Designing user interfaces", icon: MdOutlineDesignServices },
  { title: "HTML", desc: "Web structure language", icon: FaHtml5 },
  { title: "CSS", desc: "Designs web appearance", icon: FaCss3Alt },
  { title: "JavaScript", desc: "Makes web interactive", icon: FaJs },
  { title: "TypeScript", desc: "JavaScript with types", icon: SiTypescript },
  { title: "React.js", desc: "UI component library", icon: FaReact },
  { title: "Redux Toolkit", desc: "State management", icon: SiRedux },
  { title: "MySQL", desc: "Relational database", icon: SiMysql },
  { title: "MongoDB", desc: "NoSQL document database", icon: SiMongodb },
  { title: "Node.js", desc: "JS server runtime", icon: FaNodeJs },
  { title: "C", desc: "System programming", icon: HiOutlineCode },
  { title: "C++", desc: "Object-oriented programming", icon: TbBrandCpp },
  { title: "Java", desc: "Object-oriented programming", icon: FaJava },
  { title: "DSA", desc: "Data Structures & Algorithms", icon: HiOutlineCode },
  { title: "RESTful APIs", desc: "Web service design", icon: SiPostman },
  { title: "Bootstrap", desc: "CSS framework", icon: FaBootstrap },
  { title: "Tailwind CSS", desc: "Utility-first CSS", icon: SiTailwindcss },
  { title: "Git", desc: "Version control tool", icon: FaGit },
  { title: "Figma", desc: "Design tool", icon: SiFigma },
  { title: "Postman", desc: "API testing tool", icon: SiPostman },
  { title: "Firebase", desc: "Auth & Backend", icon: SiFirebase },
  { title: "Express.js", desc: "Defining routes", icon: SiExpress },
  { title: "Socket.io", desc: "Real-time communication", icon: SiSocketdotio },
];

// Memoized Card Component for performance
const SkillCard = memo(({ title, desc, Icon }) => (
  <div className="group text-center p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-out will-change-transform">
    <Icon className="mx-auto mb-3 text-2xl sm:text-3xl text-gray-400 group-hover:text-white transition-colors duration-300" />
    <h4 className="text-sm sm:text-base font-semibold mb-1 text-white">
      {title}
    </h4>
    <p className="text-xs sm:text-sm text-gray-400">
      {desc}
    </p>
  </div>
));

SkillCard.displayName = "SkillCard";

const Skills = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl italic font-light">
          Skills & <span className="italic">Expertise</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Technologies and tools I use to build scalable, performant, and
          user-focused applications.
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "rgba(15, 15, 15, 0.8)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.05), 0 30px 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill) => (
              <SkillCard 
                key={skill.title} 
                title={skill.title} 
                desc={skill.desc} 
                Icon={skill.icon} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;