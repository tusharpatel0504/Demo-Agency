import { useEffect, useState } from "react";

export default function Navbar() {
  const [style, setStyle] = useState({
    maxWidth: "1100px",
    backgroundColor: "rgba(0,0,0,0.85)",
  });

  useEffect(() => {
    const hero = document.getElementById("hero");

    const handleScroll = () => {
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      // 🔁 REVERSED progress (1 at top, 0 after hero)
      const rawProgress = 1 - scrollY / heroHeight;
      const progress = Math.max(0, Math.min(rawProgress, 1));

      // Width interpolation
      const maxWidth = 1100;
      const minWidth = 700;
      const width = minWidth + (maxWidth - minWidth) * progress;

      // Opacity interpolation
      const maxOpacity = 0.85;
      const minOpacity = 0.25;
      const opacity =
        maxOpacity - (maxOpacity - minOpacity) * progress;

      setStyle({
        maxWidth: `${width}px`,
        backgroundColor: `rgba(30,30,30,${opacity})`,
      });
    };

    // ✅ Sync on mount / refresh
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      style={style}
      className="
        fixed top-10 left-1/2 -translate-x-1/2 z-50
        w-full
        backdrop-blur-xl
        transition-all duration-300 ease-out
        rounded-lg px-3 py-3
        will-change-[max-width,background-color]
      "
    >
      <div className="flex items-center justify-between gap-10">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg text-white italic font-semibold nav-glow cursor-pointer hover:opacity-80 transition-opacity"
        >
          Tushar.
        </button>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li 
            onClick={() => scrollToSection("stats")}
            className="hover:text-white nav-glow font-semibold glow-text cursor-pointer transition-colors"
          >
            Services
          </li>
          <li 
            onClick={() => scrollToSection("projects")}
            className="hover:text-white nav-glow font-semibold glow-text cursor-pointer transition-colors"
          >
            Featured Work
          </li>
          <li 
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-white nav-glow font-semibold glow-text cursor-pointer transition-colors"
          >
            Reviews
          </li>
        </ul>

        {/* CTA */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="bg-white text-black text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
