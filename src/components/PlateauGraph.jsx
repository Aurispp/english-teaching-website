const PlateauGraph = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className="w-full h-auto">
      {/* Grid */}
      <defs>
        <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#smallGrid)" />
      
      {/* Plateau Curve - Adjusted to reach middle height */}
      <path 
        d="M 50 250 C 100 250, 150 160, 180 150 C 210 140, 250 140, 350 138" 
        fill="none" 
        stroke="#7c3aed" 
        stroke-width="3"
        stroke-linecap="round"
      />
      
      {/* Axes */}
      <line x1="50" y1="250" x2="350" y2="250" stroke="#666" stroke-width="2"/>
      <line x1="50" y1="250" x2="50" y2="50" stroke="#666" stroke-width="2"/>
    </svg>
  );
};

export default PlateauGraph;