import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Cog, Users, Globe } from "lucide-react";

const PublisherSAE = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <img
                  src="/images/sae_international.gif"
                  alt="SAE Logo"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/300x100/transparent/white?text=SAE";
                    e.currentTarget.className = "h-12 object-contain";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Society of Automotive Engineers
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Advancing mobility knowledge and solutions for the benefit of
                humanity.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.sae.org"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Cog
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About SAE International
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                    <img
                      src="/images/saeMain.jpg"
                      alt="Automotive Engineering"
                      className="w-full h-auto object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p className="mb-4">
                    SAE International is a global association of more than
                    128,000 engineers and related technical experts in the
                    aerospace, automotive and commercial-vehicle industries. SAE
                    International's core competencies are life-long learning and
                    voluntary consensus standards development.
                  </p>
                  <p>
                    SAE International's charitable arm is the SAE Foundation,
                    which supports many programs, including A World In Motion®
                    and the Collegiate Design Series.
                  </p>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <Globe
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Industries Served
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Aerospace", "Automotive", "Commercial Vehicle"].map(
                    (industry, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl text-center"
                      >
                        <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                          {industry}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users size={20} className="mr-3 text-emerald-500" />
                    <span>128,000+ Engineers</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe size={20} className="mr-3 text-emerald-500" />
                    <span>Global Association</span>
                  </div>
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
    </div>
  );
};

export default PublisherSAE;
