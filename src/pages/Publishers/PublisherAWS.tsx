import React from "react";
import { ExternalLink, Flame, Target } from "lucide-react";

const PublisherAWS: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-700 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[299px] h-[73px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              AWS Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            American Welding Society - AWS
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Advancing the science, technology and application of welding and
            allied joining and cutting processes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.aws.org"
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

      {/* Main Content - Container */}
      {/* Main Content - Container */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden p-8 md:p-12 space-y-12 text-gray-700 dark:text-gray-300">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Flame className="mr-3 text-orange-600 dark:text-orange-400" />
              About AWS
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  The American Welding Society (AWS) was founded in 1919 as a
                  multifaceted, nonprofit organization with a goal to advance
                  the science, technology and application of welding and related
                  joining disciplines.
                </p>
                <p className="mb-4">
                  From factory floor to high-rise construction, from military
                  weaponry to home products, AWS continues to lead the way in
                  supporting welding education and technology development to
                  ensure a strong, competitive and exciting way of life for all
                  Americans.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="image-placeholder w-[155px] h-[136px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                  Welding Image Placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Target className="mr-3 text-emerald-600 dark:text-emerald-400" />
              AWS Mission
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
              <p className="text-gray-700 dark:text-gray-300">
                The mission of the American Welding Society is to advance the
                science, technology and application of welding and allied
                joining and cutting processes, including brazing, soldering and
                thermal spraying.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherAWS;
