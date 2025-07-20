import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WorkCard.css';

function WorkCard({ title, description, icon, className }) {
  return (
    <motion.div
      drag
      // dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      className={`work-card text-white ${className || ''}`}
      // style={{ rotate: -15 }} 
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default WorkCard;
