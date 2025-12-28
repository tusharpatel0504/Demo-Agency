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
              We've spent years solving complex product, design, and marketing
              challenges. From startups to global teams, our experience lets us
              move fast and build what truly matters.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 2 */}
        <div className="flex flex-1 gap-6">
          <div className="text-7xl font-light text-neutral-300 leading-none">
            70+
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
              Projects Delivered
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              We've shaped products that perform and scale, delivering
              everything from MVPs to enterprise platforms with clarity, speed,
              and intent.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 3 */}
        <div className="flex flex-1 gap-6">
          <div className="text-7xl font-light text-neutral-300 leading-none">
            18+
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium text-white">
              Industries Impacted
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400">
              Working across industries like AI, finance, fintech, fashion,
              gaming, education, and manufacturing, we bring fresh thinking by
              cross-pollinating ideas in every project.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
