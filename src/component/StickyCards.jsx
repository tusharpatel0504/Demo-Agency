import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
  const cardContainerRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    let gapDone = false;
    let flipDone = false;

    const init = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky-section",
          start: "top top",
          end: `+=${window.innerHeight * 4}`,
          scrub: 1,
          pin: true,

          onUpdate: (self) => {
            const p = self.progress;

            // Header
            gsap.set(stickyHeaderRef.current, {
              y: p < 0.1 ? 40 : 0,
              opacity: p < 0.1 ? 0 : 1,
            });

            // Container width
            gsap.set(cardContainerRef.current, {
              width: `${gsap.utils.mapRange(
                0,
                0.25,
                75,
                60,
                Math.min(p, 0.25)
              )}%`,
            });

            // Gap animation
            if (p > 0.35 && !gapDone) {
              gsap.to(cardContainerRef.current, {
                gap: 20,
                duration: 0.4,
              });
              gapDone = true;
            }

            if (p < 0.35 && gapDone) {
              gsap.to(cardContainerRef.current, {
                gap: 0,
                duration: 0.4,
              });
              gapDone = false;
            }

            // Flip animation
            if (p > 0.7 && !flipDone) {
              gsap.to(".card", {
                rotationY: 180,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: 0.1,
              });

              gsap.to(["#card-1", "#card-3"], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.75,
              });

              flipDone = true;
            }

            if (p < 0.7 && flipDone) {
              gsap.to(".card", {
                rotationY: 0,
                duration: 0.75,
                stagger: -0.1,
              });

              gsap.to(["#card-1", "#card-3"], {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
              });

              flipDone = false;
            }
          },
        });
      });
    };

    init();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <section id="services" className="sticky-section h-screen flex items-center justify-center relative">
        <h1
          ref={stickyHeaderRef}
          className="absolute top-[18%] text-6xl italic font-light opacity-0 glow-text"
        >
          What we Offer
        </h1>

        <div
          ref={cardContainerRef}
          className="flex w-[75%] perspective-1000 translate-y-24"
        >
         <Card
  id="card-1"
  img="/PrimaryLeft.png"
  title="Website development"
  desc="High-performance, scalable websites built with modern technologies, tailored to your business goals."
  color="bg-neutral-300 text-black"
/>

<Card
  id="card-2"
  img="/PrimaryC.png"
  title="Mobile app development"
  desc="End-to-end mobile and web application development, from concept to deployment and scaling."
  color="bg-red-700 text-white"
/>

<Card
  id="card-3"
  img="/primaryR.png"
  title="Custom technical solutions for clients"
  desc="Intuitive, user-centric design experiences that balance aesthetics, usability, and conversion."
  color="bg-neutral-900 text-white"
/>

        </div>
      </section>
    </main>
  );
}

/* ---------------- CARD ---------------- */

function Card({ id, img, title, desc, color }) {
  return (
    <div
      id={id}
      className="card flex-1 aspect-[5/7] relative preserve-3d origin-top rounded-[24px]"
    >
      {/* FRONT */}
      <div className="absolute inset-0 backface-hidden">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* BACK */}
      <div
        className={`absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center items-start gap-3 p-8 ${color}`}
      >
        <div>
          <h3 className="text-3xl font-medium leading-tight glow-text">{title}</h3>
          <p className="text-base leading-relaxed opacity-80 max-w-[83%] glow-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}
