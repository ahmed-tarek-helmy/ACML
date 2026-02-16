import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Flame,
  Shield,
  Users,
  BookOpen,
} from "lucide-react";

const PublisherNFPA = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/nfpa.png"
                alt="NFPA Logo"
                className="h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=NFPA";
                  e.currentTarget.className = "h-12 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              National Fire Protection Association
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Reducing the worldwide burden of fire and other hazards on the
              quality of life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.nfpa.org"
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                  <Shield
                    className="text-red-600 dark:text-red-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About NFPA
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/2">
                  <img
                    src="/images/article-new-ehow-images-a07-4t-th-nfpa-requirements-1.1-800x800.jpg"
                    alt="Fire Safety"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  The mission of the international nonprofit NFPA, established
                  in 1896, is to reduce the worldwide burden of fire and other
                  hazards on the quality of life by providing and advocating
                  consensus codes and standards, research, training, and
                  education.
                </p>
                <p>
                  The world's leading advocate of fire prevention and an
                  authoritative source on public safety, NFPA develops,
                  publishes, and disseminates more than 300 consensus codes and
                  standards intended to minimize the possibility and effects of
                  fire and other risks.
                </p>
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <BookOpen
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Codes & Standards
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="http://www.nfpa.org/codes-and-standards"
                  target="_blank"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <BookOpen
                    size={20}
                    className="mr-3 text-emerald-600 dark:text-emerald-400"
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Browse Codes & Standards
                  </span>
                  <ExternalLink
                    size={16}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600"
                  />
                </a>
                <a
                  href="http://www.nfpa.org/codes-and-standards"
                  target="_blank"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <Flame
                    size={20}
                    className="mr-3 text-red-600 dark:text-red-400"
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Research & Training
                  </span>
                  <ExternalLink
                    size={16}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600"
                  />
                </a>
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
                  <span>70,000+ Members</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen size={20} className="mr-3 text-emerald-500" />
                  <span>300+ Codes</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Shield size={20} className="mr-3 text-emerald-500" />
                  <span>Est. 1896</span>
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
  );
};

export default PublisherNFPA;
