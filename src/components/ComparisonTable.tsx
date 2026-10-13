import React from 'react';
import { motion } from 'framer-motion';

interface ComparisonTableProps {
  data: any[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm"
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-900/50">
            <th className="p-4 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Особенность</th>
            <th className="p-4 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Локальные LLM</th>
            <th className="p-4 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Облачные Сервисы</th>
            <th className="p-4 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">AI-Агенты</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <td className="p-4 text-slate-600 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-700">
                {row.feature}
              </td>
              <td className="p-4 text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700">
                {row.local}
              </td>
              <td className="p-4 text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700">
                {row.cloud}
              </td>
              <td className="p-4 text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700">
                {row.agent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
