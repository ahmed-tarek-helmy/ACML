import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Users,
  BookOpen,
  Target,
} from "lucide-react";

const PublisherASNT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8"></div>
        {/* Hero Section - Full Width */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-900 text-white py-16 shadow-lg relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <div className="image-placeholder w-[285px] h-[115px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                ASNT Logo Placeholder
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              American Society for Nondestructive Testing (ASNT)
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              The world's largest technical society for Nondestructive Testing
              (NDT) professionals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.asnt.org/"
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

        {/* Main Content - Container */}
        {/* Main Content - Container */}
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden p-8 md:p-12 space-y-12 text-gray-700 dark:text-gray-300">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="mr-3 text-emerald-600 dark:text-emerald-400" />
                About American Society for Nondestructive Testing (ASNT)
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    The American Society for Nondestructive Testing, Inc. (ASNT)
                    is the world's largest technical society for NonDestructive
                    Testing (NDT) professionals. Through our organization and
                    partners membership, we provide a forum for exchange of NDT
                    technical information; NDT educational materials and
                    programs; and standards and services for the qualification
                    and certification of NDT personnel. ASNT promotes the
                    discipline of NDT as a profession and facilitates NDT
                    research and technology applications.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="image-placeholder w-[229px] h-[153px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                    Training Image Placeholder
                  </div>
                </div>
              </div>
            </section>

            {/* Partners Membership Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="mr-3 text-emerald-600 dark:text-emerald-400" />
                Partners Membership
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <p className="mb-4">
                  ASNT was founded in 1941 (under the name of The American
                  Industrial Radium and X-Ray Society) and currently boasts a
                  membership of more than 16,000 including nearly{" "}
                  <a
                    href="https://www.asnt.org/MajorSiteSections/Membership/JoinASNT/Directory_of_ASNT_Corporate_Partners.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline font-bold"
                  >
                    700 Corporate Partner
                  </a>{" "}
                  affiliated companies. The Society is structured into local
                  Sections (or chapters) throughout the world. There are over 90
                  chartered local Sections in over 10 countries. Our membership
                  represents a wide cross-section of NDT practitioners working
                  in manufacturing, construction, education, research,
                  consulting, services, and the military.
                </p>
              </div>
            </section>

            {/* Structure Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="mr-3 text-emerald-600 dark:text-emerald-400" />
                Structure
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <p className="mb-4">
                  ASNT is a nonprofit corporation governed by a board of
                  directors and national officers. The Society is organized into
                  councils which govern issues related to 1) Technical and
                  Education, 2) Research, 3) Section Operations and 4)
                  Certification. These councils meet regularly to achieve the
                  goals and objectives of the overall organization. Day to day
                  operations and activities are managed by the ASNT
                  International Service Center staff in Columbus.
                </p>
              </div>
            </section>

            {/* Society Activities Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
                Society Activities
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <p className="mb-4">
                  In terms of specific activities, ASNT is the world leader in
                  organizing and sponsoring conferences and meetings pertaining
                  to NDT. Our Annual Conference, Research Symposium, and
                  numerous topical conferences attract thousands of participants
                  each year. The Society also maintains an extensive
                  publications operation which produces and distributes NDT
                  related books, standards, technical journals, and training
                  materials
                </p>
                <p className="font-bold mt-4">
                  FOR MORE DETAILS OF "ASNT" PRODUCTS , PLEAS E CONTACT :
                </p>
                <p>
                  <a
                    href="mailto:info@ACML-egypt.com"
                    className="text-emerald-600 hover:underline"
                  >
                    info@ACML-egypt.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherASNT;
