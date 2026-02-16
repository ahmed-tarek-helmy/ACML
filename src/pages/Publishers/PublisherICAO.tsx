import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Book } from "lucide-react";

const PublisherICAO = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/icao.jpg"
                alt="ICAO Logo"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=ICAO";
                  e.currentTarget.className = "h-20 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              International Civil Aviation Organization
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Developing international air law and regulating aviation practices
              for over 180 countries.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/products/industry-standards/organizations/icao/index.aspx"
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Globe
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About ICAO
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                  <img
                    src="/images/ICAO.png"
                    alt="ICAO Headquarters"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  The International Civil Aviation Organization (ICAO) publishes
                  regulations for aviation safety, security, efficiency and
                  regularity, as well as for aviation environmental protection.
                  The organization also regulates operating practices and
                  procedures covering the technical field of aviation,
                  leveraging its unifying influence in developing a code of
                  international air law for over 180 countries.
                </p>
                <p>
                  ICAO adopts international regulations and recommended
                  practices (SARPs), and incorporates these into the annexes to
                  the Convention on International Civil Aviation. The SARPs
                  cover air navigation, prevention of unlawful interference and
                  facilitation of border crossing procedures for international
                  civil aviation.
                </p>
              </div>
            </div>

            {/* Codes Collection Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Book
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ICAO Codes Collection
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Standards and recommended practices (SARPs)",
                      "Procedures for air navigation services (PANS)",
                      "Regional supplementary procedures (SUPPs)",
                      "Guidance material/guidelines",
                      "Manuals",
                      "Circulars",
                      "Technical publications",
                      "Legal agreements/arrangements/reports",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <img
                    src="/images/ICAO3.png"
                    alt="ICAO Documents"
                    className="max-h-48 object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a
                  href="http://www.ihs.com/products/industry-standards/organizations/icao/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <ExternalLink size={20} className="mr-3" />
                  <span>ICAO Website</span>
                </a>
              </div>
            </div>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_price.png"
                alt="Get a Quote"
                className="w-full h-auto"
              />
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_trail.png"
                alt="Free Trial"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherICAO;
