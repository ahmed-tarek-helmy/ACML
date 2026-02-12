import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Plane, ArrowLeft } from "lucide-react";

const PublisherAVDATA: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[168px] h-[125px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              AV DATA Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">AV DATA</h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Single source for aviation regulatory and compliance data.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.ihs.com/products/industry-standards/regulations/av-data.aspx"
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
      <div className="container mx-auto px-4 py-12 animate-fade-in-up"><div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden p-8 md:p-12 space-y-12 text-gray-700 dark:text-gray-300">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Plane className="mr-3 text-sky-600 dark:text-sky-400" />
              About AV-DATA
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  AV-DATA® is a single source for aviation regulatory and
                  compliance data and provides immediate access to relevant
                  information from the complex range of domestic and
                  international aviation authorities and agencies.
                </p>
                <p className="mb-4">
                  AV-DATA information ensures worldwide aircraft regulation
                  compliance, minimizes downtime for aircraft, controls
                  maintenance costs and reduces the risk of error. Engineers,
                  purchasing agents, technicians and quality specialists in
                  aviation and related industries, such as airframe and part
                  manufacturers and airframe maintenance and repair, rely on
                  AV-DATA.
                </p>
                <p className="mb-4">
                  AV-DATA contains critical information from the FAA and other
                  US agencies and is the only aviation product that includes
                  worldwide information from EASA, JAA, ICAO and UKCAA. AV-DATA
                  brings it all together, saving you time and money by using the
                  right information the first time. Whether you are at your
                  desk, in the hangar or at a remote site, AV-DATA is easily
                  accessible via the Internet.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[214px] h-[160px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  Aviation Image Placeholder
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherAVDATA;
