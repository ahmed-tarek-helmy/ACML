import { ExternalLink, Settings, BookOpen, Users, Globe } from "lucide-react";

const PublisherASME: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="mr-20 ml-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <div className="image-placeholder w-[150px] h-[75px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                ASME Logo Placeholder
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              American Society of Mechanical Engineers
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Enabling collaboration, knowledge sharing, career enrichment, and
              skills development across all engineering disciplines.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.asme.org"
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
      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Settings
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About ASME
                  </h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                  <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p className="mb-4">
                      ASME is a not-for-profit membership organization that
                      enables collaboration, knowledge sharing, career
                      enrichment, and skills development across all engineering
                      disciplines, toward a goal of helping the global
                      engineering community develop solutions to benefit lives
                      and livelihoods.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Founded in 1880 by a small group of leading
                        industrialists, ASME has grown through the decades to
                        include more than 130,000 members in 151 countries.
                        Thirty-two thousand of these members are students.
                      </p>
                    </div>
                    <p>
                      From college students and early-career engineers to
                      project managers, corporate executives, researchers and
                      academic leaders, ASME's members are as diverse as the
                      engineering community itself. ASME serves this
                      wide-ranging technical community through quality programs
                      in continuing education, training and professional
                      development, codes and standards, research, conferences
                      and publications, government relations and other forms of
                      outreach.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="image-placeholder w-full h-[174px] max-w-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                      ASME Training Placeholder
                    </div>
                  </div>
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
                    Key Resources
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="ASME e- books list.pdf"
                    target="_blank"
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                  >
                    <div className="mr-4 p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                      <BookOpen
                        className="text-emerald-600 dark:text-emerald-400"
                        size={20}
                      />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      ASME E-books List
                    </span>
                  </a>

                  <a
                    href="list of ASME journals + Dis..pdf"
                    target="_blank"
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"
                  >
                    <div className="mr-4 p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                      <BookOpen
                        className="text-emerald-600 dark:text-emerald-400"
                        size={20}
                      />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      List of ASME Journals
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.asme.org/publications-submissions/books"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    <ExternalLink size={20} className="mr-3" />
                    <span>
                      https://www.asme.org/publications-submissions/books
                    </span>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                    <Users size={20} className="mr-3 text-blue-500" />
                    <span>130,000+ Members</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Globe size={20} className="mr-3 text-blue-500" />
                    <span>151 Countries</span>
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

export default PublisherASME;
