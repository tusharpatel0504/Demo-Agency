import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
  const cardContainerRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    /* ---------------- LENIS ---------------- */
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    /* ---------------- GSAP ---------------- */
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-section",
          start: "top top",
          end: "+=400%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* Header */
      tl.fromTo(
        stickyHeaderRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 }
      );

      /* Container width */
      tl.fromTo(
        cardContainerRef.current,
        { width: "75%" },
        { width: "60%", duration: 0.6 },
        0
      );

      /* GAP + CORNER STATE */
      tl.to(
        cardContainerRef.current,
        {
          gap: 20,
          duration: 0.4,
          ease: "power2.out",
          onStart: () => {
            cardContainerRef.current.classList.add("cards-separated");
          },
          onReverseComplete: () => {
            cardContainerRef.current.classList.remove("cards-separated");
          },
        },
        0.35
      );

      /* Flip cards */
      tl.to(
        ".card",
        {
          rotationY: 180,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        0.7
      );

      /* Tilt side cards */
      tl.to(
        ["#card-1", "#card-3"],
        {
          y: 30,
          rotationZ: (i) => [-15, 15][i],
          duration: 0.7,
          ease: "power3.out",
        },
        0.7
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="sticky-section h-screen flex items-center justify-center relative">
        <h1
          ref={stickyHeaderRef}
          className="absolute top-[18%] text-6xl italic font-light opacity-0 glow-text"
        >
          What we Offer
        </h1>

        <div
          ref={cardContainerRef}
          className="cards flex w-[75%] translate-y-24"
          style={{ perspective: "1000px", gap: 0 }}
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
            title="Custom technical solutions"
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
      className="card flex-1 aspect-[5/7] relative"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "top",
        willChange: "transform",
      }}
    >
      {/* FRONT */}
      <div className="absolute inset-0 backface-hidden overflow-hidden">
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
        <h3 className="text-3xl font-medium glow-text">{title}</h3>
        <p className="text-base opacity-80 max-w-[83%] glow-text">{desc}</p>
      </div>
    </div>
  );
}
