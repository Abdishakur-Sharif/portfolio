import React, { useState, useEffect } from "react";
import { Slab } from "react-loading-indicators";
import "./Loader.css";

const Loader = () => {
  const colors = [
    "#7DD3FC", // sky-300
    "#F9A8D4", // pink-300
    "#86EFAC", // green-300
    "#FDE047", // yellow-300
    "#F87171", // red-300
    "#C084FC", // purple-300
    "#60A5FA", // blue-300
    "#818CF8", // indigo-300
    "#A78BFA", // violet-300
    "#E879F9", // fuchsia-300
    "#FB7185", // rose-300
    "#22D3EE", // cyan-300
    "#2DD4BF", // teal-300
    "#10B981", // emerald-300
    "#FB923C", // orange-300
    "#F59E0B", // amber-300
    "#84CC16", // lime-300
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 200); // Change color every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <Slab
        color={colors[colorIndex]} // Dynamic color change
        size="large" // Larger loader size
        text="Welcome to my Portfolio"
        textColor="#22D3EE" // Text color cyan-400
        className="custom-loader" // Apply custom class for styling
      />
    </div>
  );
};

export default Loader;
