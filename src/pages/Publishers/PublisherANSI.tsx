import React from "react";
import { ExternalLink, ShieldCheck, Globe, Building2 } from "lucide-react";

const PublisherANSI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[261px] h-[77px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ANSI Logo Placeholder
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            American National Standards Institute
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Administrator and coordinator of the United States private sector
            voluntary standardization system for more than 90 years.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.ansi.org/"
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
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                  <ShieldCheck
                    className="text-red-600 dark:text-red-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About ANSI
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-6">
                    The American National Standards Institute (ANSI) has served
                    in its capacity as administrator and coordinator of the
                    United States private sector voluntary standardization
                    system for more than 90 years. Founded in 1918 by five
                    engineering societies and three government agencies, the
                    Institute remains a private, nonprofit membership
                    organization supported by a diverse constituency of private
                    and public sector organizations. ANSI also represents the
                    U.S. in international standardization forums, providing
                    access to global standards, guidelines, statistics and
                    international standards compiled by and/or its member
                    bodies.
                  </p>
                  <p className="mb-6">
                    Throughout its history, ANSI has maintained as its primary
                    goal the enhancement of global competitiveness of U.S.
                    business and the American quality of life by promoting and
                    facilitating voluntary consensus standards and conformity
                    assessment systems and promoting their integrity. The
                    Institute represents the interests of its nearly 1,000
                    company, organization, government agency, institutional and
                    international members through its office in New York City,
                    and its headquarters in Washington, D.C.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="image-placeholder w-[357px] h-[68px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                    ANSI About Image Placeholder
                  </div>
                </div>
              </div>
            </div>

            {/* Mission/Goal Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Globe
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium italic">
                  "To enhance both the global competitiveness of U.S. business
                  and the U.S. quality of life by promoting and facilitating
                  voluntary consensus standards and conformity assessment
                  systems, and safeguarding their integrity."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Building2 size={20} className="mr-3 text-emerald-500" />
                  <span>Founded in 1918</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Globe size={20} className="mr-3 text-emerald-500" />
                  <span>1,000+ Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherANSI;
