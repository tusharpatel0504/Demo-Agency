import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

function TufIcon({ size = 19, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        strokeWidth="1.8"
      />
      <text
        x="4.2"
        y="14.8"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.3px"
        fill="currentColor"
        stroke="none"
      >
        tuf
      </text>
      <path
        d="M17.8 9.2v4.6M15.5 11.5h4.6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodolioIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 118 93"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="hero-codolio-mask">
        <rect width="118" height="93" fill="white" />
        <circle cx="38.5" cy="50.1" r="8.5" fill="black" />
        <circle cx="79.2" cy="50.1" r="8.5" fill="black" />
        <ellipse cx="58.9" cy="65" rx="4" ry="6" fill="black" />
        <path
          d="M116.771 39.8978C116.271 39.3984 115.58 39.1135 114.875 39.1135H102.412C101.817 39.1135 101.233 39.3138 100.762 39.6806L99.575 40.6059C99.4622 40.369 99.3409 40.1348 99.2112 39.9006C99.3042 39.8442 99.3973 39.7878 99.496 39.7257C100.534 39.0683 101.834 38.095 102.897 36.7182C103.289 36.2104 103.326 35.5192 102.996 34.969C102.663 34.4189 102.034 34.1339 101.403 34.244C100.568 34.3907 99.6032 34.5035 98.7007 34.5007C98.2946 34.5007 97.9025 34.4781 97.5443 34.4302C95.7168 34.1904 93.6889 33.6543 91.4863 33.1578C89.2836 32.6641 86.9004 32.2126 84.3339 32.2126C82.323 32.2126 80.1992 32.4948 78.005 33.2452C76.5779 33.7333 75.1226 34.4245 73.6448 35.3443C73.3289 35.5361 73.0158 35.7336 72.7141 35.9424C72.5166 36.0778 72.3277 36.2217 72.1359 36.3627C72.1246 36.3712 72.1105 36.3797 72.0992 36.391C71.8821 36.5518 71.6649 36.7154 71.4562 36.8819C71.3885 36.9326 71.3236 36.9806 71.256 37.0342L71.2616 37.0398C69.2309 38.6818 67.6092 40.5608 66.4416 42.5949C65.886 43.5655 65.4319 44.5698 65.085 45.5968C61.7401 45.4557 58.8126 45.4501 58.79 45.4501H58.7759C58.7534 45.4501 55.8259 45.4585 52.4809 45.5968C52.134 44.5698 51.6828 43.5655 51.1243 42.5949C49.9567 40.5608 48.335 38.6818 46.3044 37.0398L46.31 37.0342C46.2423 36.9806 46.1775 36.9326 46.1098 36.8819C45.9011 36.7154 45.6839 36.5518 45.4667 36.391C45.4555 36.3825 45.4414 36.374 45.4301 36.3656C45.2383 36.2245 45.0493 36.0806 44.8519 35.9452C44.5473 35.7364 44.2371 35.5389 43.9212 35.3471C42.4461 34.4245 40.9909 33.7361 39.5609 33.2481C37.3667 32.4976 35.243 32.2155 33.2321 32.2155C30.6656 32.2155 28.2824 32.6669 26.0797 33.1606C23.877 33.6571 21.8492 34.1932 20.0216 34.433C19.6634 34.481 19.2686 34.5035 18.8653 34.5035C17.9628 34.5035 16.9982 34.3935 16.1634 34.2468C15.5316 34.1368 14.8999 34.4217 14.5699 34.9719C14.2371 35.522 14.2766 36.2132 14.6686 36.721C15.7319 38.0978 17.032 39.0712 18.0699 39.7285C18.1658 39.7906 18.2617 39.847 18.3548 39.9034C18.2279 40.1348 18.1066 40.3718 17.991 40.6088L16.8036 39.6834C16.3326 39.3166 15.7516 39.1163 15.1537 39.1163H2.67933C1.97424 39.1163 1.28326 39.4013 0.784055 39.9006C0.284855 40.4 0 41.0912 0 41.7965V44.2143C0 44.9197 0.284855 45.6109 0.784055 46.1102C1.28326 46.6096 1.97424 46.8946 2.67933 46.8946H6.19911C6.9465 46.8946 7.64877 46.5899 8.15925 46.0425L9.62019 44.4767H14.223L16.5272 46.2739C16.5046 46.6209 16.4934 46.9707 16.4934 47.3177C16.4934 50.3873 17.3225 53.4625 18.7891 56.2471C20.2557 59.0289 22.3625 61.5257 24.9657 63.4244C28.3585 65.8987 32.2309 67.061 35.9904 67.061C38.8389 67.061 41.6226 66.398 44.1102 65.1426C46.5949 63.8871 48.7835 62.0307 50.408 59.6552C52.2694 56.9411 53.234 53.9393 53.3016 50.9375C54.5257 50.8923 55.6792 50.8613 56.6071 50.8443C57.2699 50.8331 57.817 50.8246 58.2006 50.8218C58.3924 50.8218 58.5418 50.819 58.6406 50.819C58.6913 50.819 58.728 50.819 58.7534 50.819H58.7816H58.8098C59.1285 50.819 61.506 50.8331 64.2615 50.9375C64.332 53.9393 65.2966 56.9411 67.1552 59.6552C68.7797 62.0307 70.9683 63.8871 73.453 65.1426C75.9377 66.398 78.7242 67.061 81.5728 67.061C85.3323 67.061 89.2046 65.9015 92.5975 63.4244C95.2006 61.5257 97.3074 59.0289 98.774 56.2471C100.238 53.4653 101.067 50.3901 101.07 47.3177C101.07 46.9707 101.058 46.6209 101.036 46.2739L103.34 44.4767H107.943L109.404 46.0425C109.912 46.587 110.617 46.8946 111.364 46.8946H114.884C115.589 46.8946 116.28 46.6096 116.779 46.1102C117.278 45.6109 117.563 44.9197 117.563 44.2143V41.7965C117.563 41.0912 117.278 40.4 116.779 39.9006L116.771 39.8978Z"
          fill="black"
        />
      </mask>
      <path
        d="M115.583 44.1071C113.961 39.026 111.485 34.7123 109.414 31.6512C108.309 30.0177 107.319 28.7425 106.628 27.9017C108.433 26.6265 110.018 25.1623 111.279 23.4582C112.926 21.2379 114.006 18.6056 114.294 15.584C114.344 15.0536 114.062 14.5515 113.58 14.3201C113.101 14.086 112.534 14.1791 112.15 14.5486H112.147L112.142 14.5543C112.867 12.6922 113.456 10.2603 113.456 7.28386C113.456 5.67009 113.284 3.89833 112.875 1.97704C112.759 1.441 112.317 1.04038 111.772 0.981131C111.228 0.919063 110.709 1.21248 110.481 1.71184C108.825 5.30332 106.583 8.40955 103.213 10.9938C101.1 12.6132 98.5308 14.0295 95.3607 15.1975C90.5154 12.5427 84.9424 11.4622 79.4371 11.4622C75.4688 11.4622 71.5288 12.0208 67.8878 12.98C64.5823 13.849 61.5307 15.0508 58.9191 16.4784C56.3074 15.0508 53.2558 13.849 49.9504 12.98C46.3093 12.0208 42.3693 11.4622 38.4011 11.4622C32.8901 11.4622 27.3143 12.5427 22.4662 15.2032C19.2905 14.0323 16.7155 12.6161 14.6002 10.9938C11.2271 8.40955 8.98774 5.30332 7.3322 1.71184C7.10375 1.21248 6.58481 0.919063 6.04048 0.981131C5.49334 1.04038 5.05336 1.441 4.93773 1.97704C4.52878 3.89833 4.35674 5.67009 4.35674 7.28386C4.35674 10.2603 4.94337 12.6922 5.67102 14.5543L5.66256 14.5486C5.42001 14.3145 5.10413 14.1932 4.78261 14.1932C4.59647 14.1932 4.40751 14.2327 4.22982 14.3201C3.75037 14.5515 3.46833 15.0536 3.5191 15.584C3.80677 18.6056 4.88696 21.2379 6.53404 23.4582C7.76653 25.1256 9.30926 26.5673 11.0663 27.8199C11.1058 27.8481 11.1509 27.8763 11.1932 27.9074C10.4938 28.7622 9.53771 30.0036 8.4829 31.5553C6.37046 34.6643 3.85472 39.0232 2.2302 44.1071C0.918742 48.2206 0.233398 52.6076 0.233398 56.9947C0.233398 63.0492 1.53922 69.1065 4.35674 74.3992C5.48488 76.5151 6.85838 78.5098 8.48572 80.321C8.76775 80.637 9.05825 80.9473 9.35721 81.2492C9.48412 81.3818 9.61386 81.5088 9.74641 81.6386C9.91845 81.8078 10.0933 81.9743 10.271 82.1379C11.6163 83.3934 13.1083 84.5332 14.7441 85.5376C15.6268 86.0821 16.5519 86.5871 17.5165 87.0469C18.2723 87.4081 19.0225 87.7269 19.7614 88.0118C23.521 89.4563 27.0718 89.967 30.3631 89.9641C34.0831 89.9613 37.4788 89.3293 40.5587 88.7199C43.6385 88.1077 46.4109 87.5294 48.8505 87.535C49.6825 87.535 50.4778 87.5999 51.2393 87.7438C52.3843 87.961 53.4561 88.3532 54.5222 89.0049C55.5403 89.6312 56.5528 90.503 57.5738 91.7246C57.8558 92.1788 58.3522 92.4638 58.8937 92.4638H58.9191C59.4634 92.4638 59.9598 92.176 60.239 91.719C61.6181 90.0742 62.9747 89.0641 64.3595 88.4378C65.0787 88.1106 65.8092 87.8877 66.5735 87.7438C67.335 87.5999 68.1275 87.535 68.9595 87.535C71.3991 87.5294 74.1715 88.1077 77.2541 88.7199C80.3339 89.3293 83.7268 89.9613 87.4497 89.9641C90.8284 89.967 94.478 89.4281 98.3503 87.8933C98.9905 87.6394 99.6392 87.3573 100.293 87.0469C102.067 86.2034 103.698 85.2131 105.187 84.0987C106.098 83.4244 106.955 82.6993 107.762 81.932C107.863 81.836 107.965 81.7373 108.066 81.6386C108.269 81.4382 108.47 81.2379 108.667 81.032C108.96 80.7245 109.251 80.4113 109.524 80.0925C112.071 77.2007 113.975 73.8631 115.289 70.2999C116.843 66.0792 117.579 61.537 117.579 56.9947C117.579 52.4525 116.894 48.2206 115.583 44.1071Z"
        mask="url(#hero-codolio-mask)"
      />
    </svg>
  );
}

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative mt-4 md:mt-6 h-[92vh] md:h-[93vh] overflow-hidden rounded-xl md:rounded-2xl text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bghero1.png')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <main className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 md:px-20 text-center md:text-left md:-translate-y-6">
        <h1 className="max-w-xl mx-auto md:mx-0 text-3xl sm:text-4xl md:text-6xl leading-tight glow-text">
          Imagine a space <br />
          between vision &amp; impact
        </h1>

        <p className="mt-4 sm:mt-5 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg font-medium opacity-90 glow-text">
          That’s where I thrive.
        </p>

        <p className="mt-3 max-w-lg mx-auto md:mx-0 text-sm md:text-base leading-relaxed opacity-80 glow-text">
          Full-stack engineer who's shipped 4 platforms officially adopted by IIIT Bhagalpur, including an alumni system serving 1,000+ users.
        </p>

        {/* Resume Button & Profile Links */}
        <div className="mt-5 w-fit mx-auto md:mx-0 flex flex-col items-center">
          <a
            href="/Tushar_Patel_Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90 shadow-sm"
          >
            Download Resume
          </a>

          {/* Profile Links */}
          <div className="mt-3.5 w-full flex items-center justify-center gap-5 text-white">
            <a
              href="https://github.com/tusharpatel0504"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="text-white hover:opacity-75 transition-all duration-200 hover:scale-110"
            >
              <Github size={20} />
            </a>

            <a
              href="https://leetcode.com/u/tusharpatel0504/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              aria-label="LeetCode Profile"
              className="text-white hover:opacity-75 transition-all duration-200 hover:scale-110"
            >
              <SiLeetcode size={19} />
            </a>

            <a
              href="https://takeuforward.org/profile/tusharpatel0504"
              target="_blank"
              rel="noopener noreferrer"
              title="TUF+ (takeUforward)"
              aria-label="TUF+ Profile"
              className="text-white hover:opacity-75 transition-all duration-200 hover:scale-110"
            >
              <TufIcon size={20} />
            </a>

            <a
              href="https://codolio.com/profile/tusharpatel0504"
              target="_blank"
              rel="noopener noreferrer"
              title="Codolio"
              aria-label="Codolio Profile"
              className="text-white hover:opacity-75 transition-all duration-200 hover:scale-110"
            >
              <CodolioIcon size={22} />
            </a>
          </div>
        </div>
      </main>

      {/* Signature (desktop only) */}
      <div className="absolute bottom-20 right-8 z-10 hidden md:block text-right opacity-80">
        <p className="text-xl -mb-2 font-medium tracking-wide">Tushar Patel</p>
        <p className="text-base opacity-70">IIITBH ’27</p>
      </div>

      {/* Footer UI */}
      <div className="absolute inset-x-4 md:inset-x-6 bottom-4 md:bottom-6 z-10 flex flex-col md:flex-row items-center md:justify-between gap-2 text-xs tracking-wide opacity-80">
        <span>{time}</span>
        <span className="uppercase tracking-[0.3em]">Scroll to explore</span>
        <span>IND</span>
      </div>
    </section>
  );
}
