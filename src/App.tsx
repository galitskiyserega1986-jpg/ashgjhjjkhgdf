
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Cpu, Globe, Code, Zap } from 'lucide-react';
import { GUIDE_CONTENT } from './data/content';
import { GuideStep } from './components/GuideStep';
import { ComparisonTable } from './components/ComparisonTable';
import { GoldenStack } from './components/GoldenStack';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <Sparkles size={20} />
            </div>
            <span>FreeAI<span className="text-blue-600">Web</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#guide" className="hover:text-blue-600 transition-colors">Инструкция</a>
            <a href="#compare" className="hover:text-blue-600 transition-colors">Сравнение</a>
            <a href="#stack" className="hover:text-blue-600 transition-colors">Стек</a>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25">
            Попробовать
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Руководство 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              {GUIDE_CONTENT.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              {GUIDE_CONTENT.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#guide" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 group"
              >
                {GUIDE_CONTENT.hero.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1"><Terminal size={16} /> Open-source</span>
                <span className="flex items-center gap-1"><Cpu size={16} /> Local LLMs</span>
                <span className="flex items-center gap-1"><Globe size={16} /> Free Cloud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Guide */}
      <main id="guide" className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как начать создавать сайты бесплатно</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {GUIDE_CONTENT.steps.map((step, index) => (
            <GuideStep key={index} step={step} index={index} />
          ))}
        </div>

        {/* Comparison Section */}
        <section id="compare" className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Сравнение подходов</h2>
            <p className="text-slate-600 dark:text-slate-400">Выберите вариант, который подходит под ваши ресурсы</p>
          </div>
          <ComparisonTable data={GUIDE_CONTENT.comparison} />
        </section>

        {/* Golden Stack Section */}
        <section id="stack" className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рекомендованный путь</h2>
            <p className="text-slate-600 dark:text-slate-400">Максимальный результат при нулевых затратах</p>
          </div>
          <GoldenStack stack={GUIDE_CONTENT.goldenStack} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="p-1.5 bg-blue-600 rounded-lg text-white">
                <Sparkles size={20} />
              </div>
              <span>FreeAI<span className="text-blue-600">Web</span></span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
              <p>© 2026 FreeAIWeb. Сделано для разработчиков.</p>
            </div>
            <div className="flex items-center gap-4">
               <Code size={20} className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
               <Globe size={20} className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
