import { Link } from "react-router-dom";
import {
  ExternalLink,
  Atom,
  History,
  Users,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

const PublisherAIP: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 pt-8"></div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[300px] h-[100px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              AIP Logo Placeholder
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The American Institute of Physics
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Promoting the advancement and diffusion of the knowledge of physics
            and its application to human welfare.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.aip.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mr-4">
                  <Atom
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Overview & Mission
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    The American Institute of Physics (AIP) is a not-for-profit
                    membership corporation created for the purpose of promoting
                    the advancement and diffusion of the knowledge of physics
                    and its application to human welfare. It is the mission of
                    the Institute to serve the sciences of physics and astronomy
                    by serving its Member Societies, individual scientists,
                    students and the general public.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl my-6">
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                      Our mission is accomplished through leadership and
                      cooperation within the scholarly publishing community, in
                      the dissemination of scientific information via
                      appropriate information services, and in support of
                      education and scientific research.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic mt-6">
                      "A society of societies"
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      AIP supports ten Member Societies, who collectively
                      represent a broad cross-section of more than 135,000
                      scientists, engineers, and educators in the global
                      physical science community.
                    </p>
                  </div>
                  <p>
                    With an extensive catalog of top-cited journals, AIP is one
                    of the world's leading publishers in the physical sciences.
                    AIP pursues innovation in electronic publishing of scholarly
                    journals and offers full-solution publishing services for
                    its Member Societies. Through the AIP Center for History of
                    Physics, the Institute preserves and shares the history of
                    the physical sciences and the people who have pioneered it.
                  </p>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
                  <History
                    className="text-amber-600 dark:text-amber-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AIP History
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    The American Institute of Physics (AIP) was founded in 1931
                    in response to funding problems brought on by the Great
                    Depression. To address these issues, the five major physics
                    societies of the time agreed to form a consortium to
                    coordinate publishing and information activities on a
                    cooperative basis. AIP's membership has grown to include ten
                    Member Societies, and more than 100,000 scientists and
                    students have joined this physics community.
                  </p>
                  <p className="mb-4">
                    AIP has developed essential research services and
                    information programs that are acknowledged worldwide. By
                    creating innovative partnerships, AIP provides access to
                    quality physics programs and services for a worldwide
                    community of more than 135,000 scientists, educators and
                    students. The Institute's visibility as the voice for the
                    physical sciences increases awareness among policymakers
                    regarding the value of physics and the pivotal role it plays
                    throughout society.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="image-placeholder w-[156px] h-[89px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                    AIP Archive Placeholder
                  </div>
                </div>
              </div>
            </div>

            {/* Service and Supply Companies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <BookOpen
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Service and Supply Companies
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  <strong>Advancing the physical sciences </strong> as publisher
                  of leading research journals and conference proceedings.
                </p>
                <p>
                  <strong>Advancing the AIP Member Societies </strong> by
                  providing efficient publishing services and systems for
                  essential society functions.
                </p>
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
                  <span>135,000+ Scientists</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen size={20} className="mr-3 text-emerald-500" />
                  <span>13 Journals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherAIP;
