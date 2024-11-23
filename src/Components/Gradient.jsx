const GradientBackgrounds = () => {
    return (
      <div className="space-y-8">
        {/* Gradient Background 1: Coral to Orange */}
        <div className="w-full h-64 bg-gradient-to-r from-gradient-start-1 to-gradient-end-1 bg-[length:400%_400%] animate-gradient rounded-lg">
          <h2 className="text-white text-center pt-24 text-2xl">Gradient Background 1</h2>
        </div>
  
        {/* Gradient Background 2: Purple to Blue */}
        <div className="w-full h-64 bg-gradient-to-r from-gradient-start-2 to-gradient-end-2 bg-[length:400%_400%] animate-gradient rounded-lg">
          <h2 className="text-white text-center pt-24 text-2xl">Gradient Background 2</h2>
        </div>
  
        {/* Gradient Background 3: Red to Yellow */}
        <div className="w-full h-64 bg-gradient-to-r from-gradient-start-3 to-gradient-end-3 bg-[length:400%_400%] animate-gradient rounded-lg">
          <h2 className="text-white text-center pt-24 text-2xl">Gradient Background 3</h2>
        </div>
      </div>
    );
  };
  
  export default GradientBackgrounds;
  