import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative mt-6 h-[93vh] overflow-hidden rounded-2xl text-white"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bghero.png')" }}
      />

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.6)_100%)]" />

      {/* Center Content */}
      <main className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl  text-4xl leading-tight md:text-5xl glow-text">
          Imagine a space <br />
          between vision &amp; impact
        </h1>
        <p className="mt-4 text-sm opacity-90 glow-text">
          That’s where we thrive.
        </p>
      </main>

      {/* Bottom UI */}
      <div className="pointer-events-none absolute bottom-6 left-6 z-10 text-xs tracking-wide opacity-80">
        {time}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] opacity-80">
        Scroll to explore
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 z-10 text-xs tracking-wide opacity-80">
        IND
      </div>
    </section>
  );
}
