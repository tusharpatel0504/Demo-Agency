import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "We craft brand identities, narratives, and digital experiences that keep up with your ambition. So you can focus on building what matters, while we shape how the world sees it.";

export default function ScrollLitHeading({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.h1
  className="
    max-w-6xl
    text-center
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
    italic
    tracking-wide
    leading-snug
    md:leading-tight
    flex
    flex-wrap
    justify-center
    pb-16
    pt-20
  "
>

      {text.split("").map((char, i, arr) => {
        const color = useTransform(
          scrollYProgress,
          [i / arr.length, (i + 1) / arr.length],
          ["#484745", "#DDDAD4"]
        );

        return (
          <motion.span key={i} style={{ color }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
