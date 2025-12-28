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
        <div className="text-lg text-white italic font-semibold nav-glow">
          Tushar.
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li className="hover:text-white nav-glow font-semibold glow-text">
            Services
          </li>
          <li className="hover:text-white nav-glow font-semibold glow-text">
            Featured Work
          </li>
          <li className="hover:text-white nav-glow font-semibold glow-text">
            Reviews
          </li>
        </ul>

        {/* CTA */}
        <button className="bg-white text-black text-sm px-4 py-2 rounded-lg">
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
