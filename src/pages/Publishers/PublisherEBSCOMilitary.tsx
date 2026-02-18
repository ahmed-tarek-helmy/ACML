import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  FileText,
  Database,
  Globe,
} from "lucide-react";

const PublisherEBSCOMilitary = () => {
  const titles = [
    "Air Force Comptroller",
    "Defence Studies",
    "Combat Edge",
    "FBI Law Enforcement Bulletin",
    "Foreign Affairs",
    "JFQ: Joint Force Quarterly",
    "Military Technology",
    "Naval Forces",
  ];

  const contentIncludes = [
    "Full text for nearly 300 journals and periodicals",
    "Indexing and abstracts for more than 400 journals and periodicals",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <img
                  src="/images/ebsco.png" // Placeholder, assuming common EBSCO logo or similar
                  alt="EBSCO Logo"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/300x100/transparent/white?text=EBSCO+Military";
                    e.currentTarget.className = "h-12 object-contain";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                EBSCO (Military & Government Collections)
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Current news pertaining to all branches of the military and
                government, offering a thorough collection of periodicals,
                academic journals, and other pertinent content.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.ebscohost.com/"
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
                    <Shield
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About the Collection
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    Designed to offer current news pertaining to all branches of
                    the military and government, this database offers a thorough
                    collection of periodicals, academic journals and other
                    content pertinent to the increasing needs of these sites.
                  </p>
                  <p>
                    <em>Military & Government Collection™</em> provides full
                    text for nearly 300 journals and periodicals. The database
                    also offers indexing and abstracts for more than 400
                    journals.
                  </p>
                  <p>
                    Publications covered in this database include{" "}
                    <em>
                      Air Force Comptroller, Defence Studies, JFQ: Joint Force
                      Quarterly, Military Technology, Combat Edge, FBI Law
                      Enforcement Bulletin, Foreign Affairs, Naval Forces
                    </em>
                    , and many more. Additionally, many full-text titles are
                    available in native (searchable) PDF, or scanned-in-color.
                  </p>
                </div>
              </div>

              {/* Content Includes Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <Database
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Content Includes
                  </h3>
                </div>
                <ul className="space-y-3">
                  {contentIncludes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Titles Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                    <FileText
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Titles Include
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {titles.map((title, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 italic">
                        {title}
                      </span>
                    </div>
                  ))}
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
                    <FileText size={20} className="mr-3 text-emerald-500" />
                    <span>300+ Full Text Journals</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Database size={20} className="mr-3 text-emerald-500" />
                    <span>400+ Indexed Journals</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe size={20} className="mr-3 text-emerald-500" />
                    <span>International Coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherEBSCOMilitary;
