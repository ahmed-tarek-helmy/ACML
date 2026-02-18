import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChemwatchMaster() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                {/* Logo Placeholder */}
                <div className="h-20 w-48 flex items-center justify-center bg-gray-200 text-gray-400 text-sm font-bold border border-dashed border-gray-400">
                  CHEMWATCH Logo
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Chemwatch</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Comprehensive SDS management and chemical regulatory solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://chemwatch.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                >
                  Visit Website
                  <ExternalLink size={18} className="ml-2" />
                </a>
                <a
                  href="mailto:databases@acml-egypt.com"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                >
                  Request Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Language Selection Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Select Language Version
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/publishers/chemwatch/en"
                  className="group p-8 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col items-center hover:shadow-lg bg-gray-50 dark:bg-gray-700/30"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-600 dark:text-emerald-400">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    English Version
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access ChemWatch products and services in English
                  </p>
                </Link>

                <Link
                  to="/publishers/chemwatch/ar"
                  className="group p-8 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col items-center hover:shadow-lg bg-gray-50 dark:bg-gray-700/30"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-600 dark:text-emerald-400">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
                    الإصدار باللغة العربية
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access ChemWatch products and services in Arabic
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer/Contact Section (retained from original concept) */}
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>
              For more information, contact{" "}
              <a
                href="mailto:databases@acml-egypt.com"
                className="text-emerald-600 hover:underline"
              >
                databases@acml-egypt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
