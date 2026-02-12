import React from 'react';
import { Users, Briefcase } from 'lucide-react';

export default function Team() {
  const advisors = [
    "Advisor of Library Automation & Archives",
    "Advisor of E-Content & Media Applications",
    "Advisor of International Electronic Resources",
    "Advisor of Military E-Content Databases",
    "Advisor of Marine Databases",
    "Advisor for Academia Applications",
    "Advisor of Industrial Applications",
    "Advisor for Economic & Risk Applications",
    "Advisor of ICT",
    "Advisor of Communications & Telemarketing"
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACML Managers & Advisors</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Experts guiding our vision and strategy
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Group of Advisors</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              ACML has appointed a distinguished group of advisors in all fields related to its activities to advise and inspire ACML staff and clients.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{index + 1}</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{advisor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
