import React from "react";
import { ExternalLink, Activity } from "lucide-react";

const PublisherAASHTO: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[164px] h-[53px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              AASHTO Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            American Association of State Highway and Transportation Officials
            (AASHTO)
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Standard specifications, test methods, and guidelines used in
            highway design and construction throughout the United States.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.ihs.com/en/uk/products/industry-standards/organizations/aashto/index.aspx"
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

      {/* Main Content - Container */}
      {/* Main Content - Container */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden p-8 md:p-12 space-y-12 text-gray-700 dark:text-gray-300">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Activity className="mr-3 text-blue-600 dark:text-blue-400" />
              About AASHTO
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  AASHTO standards and specifications include provisional
                  standards, standard test methods, recommended practices, guide
                  specifications, and manuals.
                </p>
                <p className="mb-4">
                  General subject categories covered by AASHTO standards
                  include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Administration and economics</li>
                  <li>Bridges and structures</li>
                  <li>Construction and right-of-way</li>
                  <li>Design and traffic</li>
                  <li>Maintenance</li>
                  <li>Materials</li>
                  <li>Planning and environment</li>
                  <li>Rail and highway transport</li>
                </ul>
                <p className="mb-4">
                  The AASHTO Standards Collection contains more than +1,500
                  documents.
                </p>
                <p className="mb-4">
                  Designers, engineers, researchers, construction managers, and
                  inspectors use standards and documents from AASHTO to support
                  quality and safe design and execution of road construction and
                  transportation projects.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[305px] h-[237px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  AASHTO Image Placeholder
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PublisherAASHTO;
