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
      "We’ve worked with multiple teams before, but this experience was different. Strategic, creative, and deeply invested in outcomes — not just deliverables.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
  {
    name: "Kunal Verma",
    role: "Product Lead, Fintech Startup",
    quote:
      "The attention to detail and ownership mindset really impressed us. It felt less like an external partnership and more like an in-house extension of our team.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800",
  },
  {
    name: "Priya Nair",
    role: "Founder, Wellness & Lifestyle Brand",
    quote:
      "From ideation to execution, everything was seamless. They understood our brand voice instantly and helped us scale with confidence.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },
  {
    name: "Aman Khurana",
    role: "Growth Manager, SaaS Company",
    quote:
      "Results-driven, proactive, and incredibly reliable. The kind of partner every growing business needs when speed and quality both matter.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

const CARD_OFFSET = 40;
const SCALE_STEP = 0.06;
const SWIPE_THRESHOLD = 120;

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
    <section className="bg-black text-white py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-6xl font-serif">
          Hear <span className="italic">from</span> our partners
        </h2>
        <p className="text-gray-400 mt-3">
          With over 60 clients served, here's what they have to say
        </p>
      </div>

      {/* Perspective wrapper */}
      <div
        className="relative h-[420px] flex justify-center items-center"
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
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
              }}
              animate={{
                scale: 1 - stackIndex * SCALE_STEP,
                y: stackIndex * CARD_OFFSET,
                rotateY: stackIndex === 0 ? 0 : -8,
                opacity: stackIndex === 0 ? 1 : 0.75,
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute w-full max-w-5xl"
              style={{ zIndex: 10 - stackIndex }}
            >
              {/* Glass Card */}
              <div
                className="flex flex-col md:flex-row gap-10 p-8 rounded-2xl"
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
                    className="rounded-xl object-cover w-full h-[300px]"
                    draggable={false}
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-6">
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

      {/* Extreme Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition"
      >
        ←
      </button>

      {/* Extreme Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition"
      >
        →
      </button>
    </section>
  );
};

export default Testimonial;
