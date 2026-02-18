import { ExternalLink } from "lucide-react";

const PublisherASMEBPVC: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="mr-20 ml-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <div className="image-placeholder w-[98px] h-[60px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                ASME Logo Placeholder
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ASME Boiler & Pressure Vessel Code (ASME BPVC)
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/products/industry-standards/organizations/asme-bpvc/index.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
      </div>

      {/* Main Content */}
      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mr-4">
                    <div className="text-orange-600 dark:text-orange-400 font-bold text-xl">
                      BPVC
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About ASME BPVC
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 mx-auto max-w-full">
                    <div className="image-placeholder w-full h-[153px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                      ASME Training Image Placeholder
                    </div>
                  </div>
                  <p className="mb-4">
                    The ASME Boiler & Pressure Vessel Code (BPVC) establishes
                    rules of safety governing the design, fabrication,
                    maintenance and inspection of boilers and pressure vessels,
                    power producing machines (and associated subsystems) and
                    nuclear power plant components. The objective of the rules
                    is to provide a margin for deterioration in service.
                  </p>
                  <p className="mb-4">
                    The ASME BPVC today encompasses 14 sections, 30 volumes and
                    more than 16,000 pages in total.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl my-6 clear-right">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Between BPVC release dates, addendums and supplements are
                      added when advancements are achieved in design and
                      materials and real world experience provides valuable
                      insight.
                    </p>
                  </div>
                  <p className="mb-4">
                    BPVC purchasers receive further value through ASME's ongoing
                    conformity-assessment programs, referenced and related
                    standards, training courses, technical publications and
                    industry conferences.
                  </p>
                  <p className="mb-4">
                    Originating in 1914, ASME BPVC is now adopted in part or in
                    its entirety by all 50 states and numerous municipalities
                    and territories of the United States and all the provinces
                    of Canada. More than 92,000 copies of the BPVC Codes are in
                    use in 100 countries around the world.
                  </p>
                  <p>
                    The Code is kept current by the Boiler and Pressure
                    Committee, a volunteer group of more than 950 engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherASMEBPVC;

