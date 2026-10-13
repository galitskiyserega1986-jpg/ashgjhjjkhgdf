import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Rocket } from 'lucide-react';

interface GoldenStackProps {
  stack: {
    title: string;
    items: { tool: string; role: string }[];
  };
}

export const GoldenStack: React.FC<GoldenStackProps> = ({ stack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden shadow-2xl"
    >
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="text-blue-200" size={32} />
          <h2 className="text-3xl font-bold">{stack.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stack.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle2 className="text-blue-300 shrink-0" size={20} />
              <div>
                <span className="font-bold">{item.tool}</span>
                <span className="mx-2 text-blue-200">—</span>
                <span className="text-blue-100">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
