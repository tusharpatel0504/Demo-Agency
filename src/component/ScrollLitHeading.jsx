import { memo, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "I build software institutions bet on not side projects that stay side projects. My alumni platform for IIIT Bhagalpur beat out other proposals across three rounds of review and now runs official authentication for 1,000+ users; it's one of four platforms of mine adopted into live college infrastructure. I've also shipped a role-based hospital booking system with AI-assisted triage, interned across two teams shipping production MERN code, and taken 1st at Congithon and 3rd at Smart India Hackathon (internal) against 60+ competing teams. I build for people who'll actually depend on it and that's the only work I want to keep doing.";

// Pre-compute the character layout once (module-level, zero cost on re-render)
const totalLen = text.length;
const words = text.split(" ");

function buildCharData() {
  const chars = [];
  let globalIndex = 0;

  words.forEach((word, wordIndex) => {
    const wordChars = word.split("").map((char) => ({
      char,
      globalIndex: globalIndex++,
      wordIndex,
    }));
    chars.push({ wordIndex, wordChars, isLast: wordIndex === words.length - 1 });
    // Account for the space between words
    if (wordIndex < words.length - 1) globalIndex++;
  });

  return chars;
}

const charData = buildCharData();

// Each character gets its own component so useTransform is called
// at the top level of a component (not inside a .map callback)
const CharSpan = memo(({ globalIndex, char, scrollYProgress }) => {
  const color = useTransform(
    scrollYProgress,
    [globalIndex / totalLen, (globalIndex + 1) / totalLen],
    ["#484745", "#DDDAD4"]
  );

  return <motion.span style={{ color }}>{char}</motion.span>;
});

CharSpan.displayName = "CharSpan";

export default function ScrollLitHeading({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.h1
      className="
        max-w-5xl
        mx-auto
        text-center
        text-sm
        sm:text-base
        md:text-lg
        lg:text-[1.35rem]
        xl:text-[1.55rem]
        font-light
        italic
        tracking-normal
        leading-relaxed
        md:leading-relaxed
        flex
        flex-wrap
        justify-center
        py-2
        sm:py-4
      "
    >
      {charData.map((wordGroup) => (
        <span
          key={wordGroup.wordIndex}
          className="whitespace-nowrap inline-flex"
        >
          {wordGroup.wordChars.map((c) => (
            <CharSpan
              key={c.globalIndex}
              globalIndex={c.globalIndex}
              char={c.char}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Space after each word except last */}
          {!wordGroup.isLast && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.h1>
  );
}
