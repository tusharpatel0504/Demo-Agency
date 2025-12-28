import React from "react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-6xl italic font-light">
          Get in <span className="italic">touch</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Whether you have a project in mind, a question, or just want to say hello —
          we’d love to hear from you.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 rounded-2xl p-10"
          style={{
            background: "rgba(15,15,15,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "rgba(255,255,255,0.1) 0px 1px 2px inset, rgba(0,0,0,0.6) 0px 30px 60px",
          }}
        >
          {/* Left: Info */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Let’s build something meaningful
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              We partner with founders, creators, and teams who care about quality,
              clarity, and long-term impact. Tell us about your idea and we’ll take it
              from there.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                working.tusharpatel@gmail.com
              </p>
              <p>
                <span className="text-white font-medium">Location:</span>{" "}
                India (Remote-friendly)
              </p>
              <p>
                <span className="text-white font-medium">Availability:</span>{" "}
                Monday – Friday, 10am – 7pm IST
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Tushar Patel"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="working.tusharpatel@gmail.com"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                bg-white text-black text-sm px-4 py-2 rounded-lg
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
