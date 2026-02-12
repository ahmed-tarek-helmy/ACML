import React from "react";
import { ExternalLink, Calculator, BookOpen, Users, Globe } from "lucide-react";

const PublisherASCE: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-sky-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[160px] h-[46px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ASCE Logo Placeholder
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            American Society of Civil Engineers
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The nation's oldest engineering society, representing more than
            150,000 members of the civil engineering profession.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.asce.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Visit Website
              <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Calculator
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About ASCE
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6">
                  <div className="image-placeholder w-[629px] h-[117px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400 mx-auto">
                    ASCE Standard Placeholder
                  </div>
                </div>
                <p className="mb-4 text-justify">
                  The American Society of Civil Engineers represents more than
                  150,000 members of the civil engineers profession in 177
                  countries.
                </p>
                <p className="mb-4 text-justify">
                  Founded in 1852, ASCE is the nation's oldest engineering
                  society.
                </p>
                <a
                  href="https://ascelibrary.org/journals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-medium hover:underline flex items-center"
                >
                  <ExternalLink size={16} className="mr-1" />
                  https://ascelibrary.org/journals
                </a>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Globe
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ASCE's Mission
                </h3>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl mb-6 text-center">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Deliver value to our members, advance civil engineering, and
                  protect the public health, safety, and welfare.
                </p>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300 font-medium text-center">
                In carrying out our mission, ASCE:
              </p>
              <ul className="space-y-3">
                {[
                  "Advances technology",
                  "Encourages lifelong learning",
                  "Promotes professionalism and the profession",
                  "Develops civil engineer leaders",
                  "Advocates infrastructure and environmental stewardship",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats/Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a
                  href="list of ASCE Journals + Dis.pdf"
                  target="_blank"
                  className="flex items-center text-emerald-600 hover:text-emerald-700 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
                >
                  <BookOpen size={20} className="mr-3" />
                  <span>List of ASCE Journals</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <Users size={20} className="mr-3 text-blue-500" />
                  <span>150,000+ Members</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Globe size={20} className="mr-3 text-blue-500" />
                  <span>177 Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherASCE;
