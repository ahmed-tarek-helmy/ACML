import React from 'react';
import { Award, Star } from 'lucide-react';

export default function ACMLAwards() {
  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Acquired Awards</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Recognition of Excellence: Local & Foreign Awards
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Local Awards */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <Star className="text-emerald-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Local Awards</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={`local-${i}`} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group">
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                        <Award size={48} className="opacity-50" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Award Title {i + 1}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Award description and details placeholder.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foreign Awards */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <GlobeIcon className="text-emerald-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Foreign Awards</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(5)].map((_, i) => (
                  <div key={`foreign-${i}`} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group">
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                        <Award size={48} className="opacity-50" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">International Award {i + 1}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">International recognition description placeholder.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function GlobeIcon({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
