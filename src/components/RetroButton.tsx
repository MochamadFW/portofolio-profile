"use client";

import { motion } from 'framer-motion';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function RetroButton({ children, onClick }: RetroButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="font-retro bg-retro-green text-retro-yellow px-6 py-3 border-2 border-retro-blue hover:bg-retro-blue hover:text-retro-pink transition-all pixelated"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}