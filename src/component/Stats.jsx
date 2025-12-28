const Stats = () => {
  return (
    <section className="w-full bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        
        {/* Stat 1 */}
        <div className="flex flex-1 gap-6">
          <div className="text-7xl font-light text-neutral-300 leading-none">
            06+
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
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
        <div className="flex flex-1 gap-6">
          <div className="text-7xl font-light text-neutral-300 leading-none">
            10+
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
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
        <div className="flex flex-1 gap-6">
          <div className="text-7xl font-light text-neutral-300 leading-none">
            4+
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
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
