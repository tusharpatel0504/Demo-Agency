const Stats = () => {
  return (
    <section className="w-full bg-black/30 pb-12">
      <div
        className="
          mx-auto
          max-w-7xl
          flex flex-col
          gap-12
          lg:flex-row
          lg:items-start
          lg:gap-16
          px-4 sm:px-6 lg:px-0
        "
      >
        {/* Stat 1 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            06+
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text">
              Years of Experience
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Over six years of building, shipping, and refining digital
              products. I’ve worked end-to-end across design, development, and
              strategy — focusing on clarity, performance, and real outcomes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 2 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            10+
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text">
              Projects Delivered
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              From fast MVPs to polished production builds, I’ve delivered
              projects that scale, ship on time, and solve real problems — not
              just look good.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 3 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            4+
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text">
              Industries Impacted
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              I’ve worked across AI, fintech, fashion, gaming, education, and
              manufacturing — bringing insights from different domains to build
              smarter, more adaptable products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
