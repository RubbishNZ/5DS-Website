import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CornerPeel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth');
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-16 h-16 cursor-pointer z-50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Corner peel shape */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full origin-top-right"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
          background: "linear-gradient(135deg, rgba(79, 106, 245, 0.1) 0%, rgba(79, 106, 245, 0.05) 100%)",
          borderLeft: "1px solid rgba(79, 106, 245, 0.2)",
          borderBottom: "1px solid rgba(79, 106, 245, 0.2)",
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? -5 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      {/* Shadow underneath */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full origin-top-right"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
          background: "rgba(0, 0, 0, 0.05)",
          filter: "blur(4px)",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </motion.div>
  );
};

export default CornerPeel;
