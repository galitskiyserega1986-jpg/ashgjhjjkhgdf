import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

interface ToolCardProps {
  tool: {
    name: string;
    description: string;
    link: string;
    type: string;
  };
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className={cn("group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1")}>
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          {tool.type}
        </span>
        <a 
          href={tool.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {tool.description}
      </p>
    </div>
  );
};
