import React from 'react';
import { ToolCard } from './ToolCard';
import { motion } from 'framer-motion';

interface GuideStepProps {
  step: {
    title: string;
    description: string;
    tools: any[];
  };
  index: number;
}

export const GuideStep: React.FC<GuideStepProps> = ({ step, index }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="py-16 border-b border-slate-200 dark:border-slate-800 last:border-0"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-500/30">
            {index + 1}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {step.title}
          </h2>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-3xl">
          {step.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {step.tools.map((tool, idx) => (
            <ToolCard key={idx} tool={tool} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
