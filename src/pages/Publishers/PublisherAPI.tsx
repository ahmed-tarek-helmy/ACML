import React from "react";
import { ExternalLink, Droplets, History, Briefcase } from "lucide-react";

const PublisherAPI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[300px] h-[100px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              API Logo Placeholder
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            American Petroleum Institute
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The only national trade association that represents all aspects of
            America’s oil and natural gas industry.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.api.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Visit Website
              <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                  <Droplets
                    className="text-red-600 dark:text-red-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Overview and Mission
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  The American Petroleum Institute (API) is the only national
                  trade association that represents all aspects of America’s oil
                  and natural gas industry.
                </p>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
                  <History
                    className="text-amber-600 dark:text-amber-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  API History
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    <strong>Our Origins:</strong> The American Petroleum
                    Institute traces its beginning to World War I, when Congress
                    and the domestic oil and natural gas industry worked
                    together to help the war effort.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="image-placeholder w-[127px] h-[165px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                    API History Placeholder
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Briefcase
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Service and Supply Companies
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p>
                  Service and supply companies are an integral part of the oil
                  and natural gas industry. In the United States, there are more
                  than 10,000 companies identified as providing oil and natural
                  gas services and supplies to the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links/Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a
                  href="http://www.api.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <ExternalLink size={20} className="mr-3" />
                  <span>API Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherAPI;
