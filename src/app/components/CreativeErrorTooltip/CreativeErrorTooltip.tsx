"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CreativeErrorTooltipProps {
  errorMessage: string;
}

const CreativeErrorTooltip: React.FC<CreativeErrorTooltipProps> = ({
  errorMessage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Error information"
      >
        <motion.span
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          !
        </motion.span>
        <motion.span
          className="absolute"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          ×
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -10 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute left-1/2 top-full mt-2 w-56 transform -translate-x-1/2"
          >
            <motion.div
              className="w-3 h-3 bg-red-500 transform rotate-45 absolute left-4 -top-1.5 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white text-sm rounded-lg p-4 shadow-lg">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="h-1 bg-white mb-2"
              />
              {errorMessage}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="h-1 bg-white mt-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreativeErrorTooltip;
