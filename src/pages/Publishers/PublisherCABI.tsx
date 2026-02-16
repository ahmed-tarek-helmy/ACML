import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Leaf, Database, Globe } from "lucide-react";

const PublisherCABI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-900 to-green-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/cabi1.gif"
                alt="CABI"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=CABI";
                  e.currentTarget.className = "h-20 object-contain";
                }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CABI Publishing
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              A leading international, not-for-profit publisher in applied life
              sciences, including animal science, nutrition, integrated crop
              management and forestry.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.cabi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Leaf
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About CABI
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/CABI.jpg"
                    alt="About CABI"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  CABI Publishing is a leading international, not-for-profit
                  publisher in applied life sciences, including animal science,
                  nutrition, integrated crop management and forestry. Our
                  products have a global reputation for quality, relevance and
                  authority, and are used in over 100 countries.
                </p>
                <p className="mb-4">
                  Our long-established print publishing activities include a
                  substantial book and reference work list, and an expanding
                  primary and review journal programme. Our bibliographic
                  databases are renowned for combining authoritative selection
                  with comprehensive coverage and expert indexing.
                </p>
                <p className="mb-4">
                  CABI Publishing has always been at the forefront of electronic
                  publishing, from the advent of online and CD-ROM to the more
                  recent introduction of multimedia and Internet products.
                  Working independently or in collaboration with carefully
                  chosen content and technology partners, we are dedicated to
                  maintaining our programme of Internet publishing development.
                </p>
                <p>
                  CABI Publishing serves the needs of students, researchers,
                  professionals, educators and consultants working in academic,
                  government, corporate and higher education environments. We
                  are committed to the creation and distribution of the
                  knowledge resources demanded by applied life science
                  communities worldwide.
                </p>
              </div>
            </div>

            {/* Products & Databases */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Database className="mr-3 text-emerald-600" />
                Products & Databases
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">
                    Bibliographic Databases
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Including Global Health and individual abstract journals.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow block">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">
                      Compendia
                    </h4>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Online resources incorporating a vast amount of research and
                    practical information in one place.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow block">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">
                      CAB eBooks
                    </h4>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Proprietary titles in an easy-to-use format. Indexed
                    chapters ensure relevant search results.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">
                      CAB ABSTRACTS®
                    </h4>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    The leading abstracts database for agriculture, environment,
                    animal and veterinary sciences, tourism and human health.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">
                      Global Health / CAB HEALTH®
                    </h4>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    The only specialist bibliographic, abstracting and indexing
                    database dedicated to public health research and practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center">
                <Globe size={20} className="mr-2" />
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="http://www.cabi.org/?page=2049&site=170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm block hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      Internet Resources{" "}
                      <ExternalLink size={14} className="ml-2 text-gray-400" />
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">
                      Subject specific portals linked to relevant areas of CAB
                      Abstracts.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.cabi.org/?page=1029&site=170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm block hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      Full Text Resources{" "}
                      <ExternalLink size={14} className="ml-2 text-gray-400" />
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">
                      Available subscription or as part of CAB Abstracts Plus
                      package.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherCABI;
