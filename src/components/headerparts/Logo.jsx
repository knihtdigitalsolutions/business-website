import React from "react";
import { Sparkle } from "lucide-react";

const Logo = ({ size = 40, className = "" }) => (
  <div className={`flex items-center gap-2 select-none ${className}`}>
    <Sparkle size={size} className="text-yellow-400 drop-shadow-lg" />
    <span className={`font-extrabold text-xl md:text-2xl lg:text-2xl text-black dark:text-white`}>KNIHT Technologies</span>
  </div>
);

export default Logo;
