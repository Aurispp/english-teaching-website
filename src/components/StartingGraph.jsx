const StartingGraph = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className="w-full h-auto">
        {/* Grid */}
        <defs>
          <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        
        {/* Starting Curve */}
        <path d="M 50 250 Q 150 250, 200 150" 
              fill="none" 
              stroke="#4f46e5" 
              stroke-width="3"
              stroke-linecap="round"
              stroke-dasharray="5,5"/>
        
        {/* Potential Curve */}
        <path d="M 50 250 Q 150 200, 350 50" 
              fill="none" 
              stroke="#4f46e5" 
              stroke-width="3"
              stroke-linecap="round"/>
        
        {/* Axes */}
        <line x1="50" y1="250" x2="350" y2="250" stroke="#666" stroke-width="2"/>
        <line x1="50" y1="250" x2="50" y2="50" stroke="#666" stroke-width="2"/>
        
        {/* Labels */}
        <text x="190" y="280" text-anchor="middle" fill="#666" font-size="14">Time</text>
        <text x="30" y="150" text-anchor="middle" transform="rotate(-90, 30, 150)" fill="#666" font-size="14">Progress</text>
      </svg>
    );
  };
  
  export default StartingGraph;