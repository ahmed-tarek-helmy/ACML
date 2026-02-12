import React from "react";
import { ExternalLink, Shield, BookOpen } from "lucide-react";

const PublisherASTM: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[300px] h-[100px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ASTM Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            American Society for Testing and Materials - ASTM
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Globally recognized leader in the development and delivery of
            international voluntary consensus standards.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.astm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-900 hover:bg-red-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              <Shield className="mr-3 text-red-600 dark:text-red-400" />
              About American Society for Testing and Materials
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  ASTM International, formerly known as the American Society for
                  Testing and Materials (ASTM), is a globally recognized leader
                  in the development and delivery of international voluntary
                  consensus standards. Today, some 12,000 ASTM standards are
                  used around the world to improve product quality, enhance
                  safety, facilitate market access and trade, and build consumer
                  confidence.
                </p>
                <p className="mb-4">
                  ASTM’s leadership in international standards development is
                  driven by the contributions of its members: more than 30,000
                  of the world’s top technical experts and business
                  professionals representing 135 countries. Working in an open
                  and transparent process and using ASTM’s advanced electronic
                  infrastructure, ASTM members deliver the test methods,
                  specifications, guides and practices that support industries
                  and governments worldwide.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[167px] h-[167px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  Training Image Placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Document Link */}
          <section>
            <h3 className="text-xl font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
              <a
                href="PDF/BOS-Summary-Form-2021.pdf"
                target="_blank"
                className="flex items-center"
              >
                <BookOpen size={24} className="mr-2" />
                ASTM Digital Libaray for International Standards & Codes
              </a>
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherASTM;
