import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Paritosh Anand",
    role: "Founder & Influencer, 650k+ Followers",
    quote:
      "Your contribution has been extremely valuable to us. The impact you made was clearly felt when you weren’t around — and that says everything. Truly grateful to have you as part of the journey.",
    image:
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=800",
  },
  {
    name: "Rohit Sharma",
    role: "Co-Founder, GrowthHive India",
    quote:
      "What stood out the most was the clarity of thought and execution. Every deliverable was timely, thoughtful, and aligned with our vision. Working together felt effortless.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    name: "Ananya Mehta",
    role: "Marketing Head, D2C Brands",
    quote:
      "Strategic, creative, and deeply invested in outcomes — not just deliverables. A partnership that truly felt collaborative.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
];

const CARD_OFFSET = 32;
const SCALE_STEP = 0.05;
const SWIPE_THRESHOLD = 100;

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const paginate = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-black text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Hear <span className="italic">from</span> our partners
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          With over 60 clients served, here's what they have to say
        </p>
      </div>

      {/* Cards */}
      <div
        className="relative h-[520px] sm:h-[460px] lg:h-[420px] flex justify-center items-center px-4"
        style={{ perspective: 1200 }}
      >
        {[0, 1, 2].map((stackIndex) => {
          const testimonial =
            testimonials[(index + stackIndex) % testimonials.length];

          return (
            <motion.div
              key={`${index}-${stackIndex}`}
              drag={stackIndex === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
              }}
              animate={{
                scale: 1 - stackIndex * SCALE_STEP,
                y: stackIndex * CARD_OFFSET,
                rotateY: stackIndex === 0 ? 0 : -6,
                opacity: stackIndex === 0 ? 1 : 0.8,
              }}
              transition={{
                duration: 0.45,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute w-full max-w-4xl"
              style={{ zIndex: 10 - stackIndex }}
            >
              {/* Card */}
              <div
                className="flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl"
                style={{
                  background: "rgba(15,15,15,0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "rgba(255,255,255,0.1) 0px 1px 2px inset, rgba(0,0,0,0.6) 0px 20px 40px",
                  userSelect: "none",
                }}
              >
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-xl object-cover w-full h-[220px] sm:h-[260px] md:h-[300px]"
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-5">
                    “{testimonial.quote}”
                  </p>

                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="
    hidden sm:flex
    absolute left-3 sm:left-6 lg:left-10
    top-[60%] -translate-y-1/2
    z-50
    items-center justify-center
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    bg-white/10 backdrop-blur-xl
    border border-white/20
    hover:bg-white/20
    active:scale-95
    transition
  "
      >
        ←
      </button>


      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="
    hidden sm:flex
    absolute right-3 sm:right-6 lg:right-10
    top-[60%] -translate-y-1/2
    z-50
    items-center justify-center
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    bg-white/10 backdrop-blur-xl
    border border-white/20
    hover:bg-white/20
    active:scale-95
    transition
  "
      >
        →
      </button>

    </section>
  );
};

export default Testimonial;
