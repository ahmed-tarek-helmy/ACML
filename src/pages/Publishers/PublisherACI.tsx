import React from "react";
import { ExternalLink, HardHat, BookOpen } from "lucide-react";

const PublisherACI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-gray-700 to-slate-800 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[240px] h-[45px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ACI Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            American Concrete Institute - ACI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advancing concrete knowledge by conducting seminars, managing
            certification programs, and publishing technical documents.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.concrete.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              <HardHat className="mr-3 text-gray-600 dark:text-gray-400" />
              About ACI
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  Founded in 1904 and headquartered in Farmington Hills,
                  Michigan, the American Concrete Institute is advancing
                  concrete knowledge by conducting 125 seminars annually,
                  managing 14 different certification programs, publishing
                  hundreds of technical documents, and offering scholarships to
                  students in the field. With 98 chapters, 37 student chapters,
                  and nearly 20,000 members spanning over 120 countries, the
                  American Concrete Institute has always retained the same basic
                  mission - to develop, share, and disseminate the knowledge and
                  information needed to utilize concrete to its fullest
                  potential.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[292px] h-[151px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  Concrete Plant Placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Introduction
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  The American Concrete Institute (ACI) is a nonprofit technical
                  and educational society organized in 1904 and is one of the
                  world's leading authorities on concrete technology. ACI is a
                  forum for the discussion of all matters related to concrete
                  and the development of solutions to problems. ACI conducts
                  this forum through conventions and meetings; the ACI
                  Structural Journal, the ACI Materials Journal, Concrete
                  International, and technical publications; chapter activities;
                  and technical committee work. As its mission states, its
                  purpose is to{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    “Provide knowledge and information for the best use of
                    concrete.”
                  </span>
                </p>
                <p className="mb-4">
                  This implies a willingness on the part of each member to
                  contribute from his or her training and knowledge to the
                  benefit of the public at large. By maintaining a high standard
                  of professional and technical ability in its committee
                  memberships and in the authorship of papers and publications,
                  as well as in local chapter programs, ACI has contributed to a
                  detailed knowledge of materials and their resulting
                  structures.
                </p>
                <p className="mb-4">
                  ACI publishes reliable information on concrete and its
                  applications, conducts educational seminars, provides a
                  standard certification program for the industry, provides
                  local forums for discussion through the Chapter program, and
                  encourages student involvement in the concrete field.
                  Committee members involved with these activities meet at
                  bi-annual conventions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[264px] h-[199px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  Bookstore Placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Publications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              The Institute has an extensive publications program, including
              national standards, committee reports, periodicals, symposia
              publications, certification manuals, educational publications, and
              videos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherACI;
