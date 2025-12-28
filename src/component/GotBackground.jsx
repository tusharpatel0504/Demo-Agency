import Stats from "./Stats";

const GotBackground = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Tiled background */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div className="flex flex-col relative z-10 h-full items-center justify-center px-6">
        {children}  
         <Stats/>
      </div>
      
    </div>
  );
};

export default GotBackground;
