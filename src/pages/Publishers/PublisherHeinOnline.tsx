import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Layers,
  FileText,
} from "lucide-react";

const PublisherHeinOnline: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-900 to-amber-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/hein.jpg"
                alt="HeinOnline"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=HeinOnline";
                  e.currentTarget.className = "h-20 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">HeinOnline</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              The world’s largest image-based legal research collection
              containing more than 9 centuries of legal history.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://home.heinonline.org"
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
      </div>

      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                    <BookOpen
                      className="text-red-600 dark:text-red-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About HeinOnline
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/Heinonline.jpg"
                      alt="HeinOnline Library"
                      className="w-full h-auto object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p className="mb-4">
                    <a
                      href="http://heinonline.org/HeinDocs/HOLBrochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      HeinOnline
                    </a>{" "}
                    is Hein’s premier online research product with more than 60
                    million pages of legal history available in an online,
                    fully-searchable, image-based format. HeinOnline bridges the
                    gap in legal history by providing comprehensive coverage
                    from inception of more than 1,400 law and law-related
                    periodicals.
                  </p>
                  <p className="mb-4">
                    In addition to its vast collection of law journals,
                    HeinOnline also contains the Congressional Record Bound
                    volumes in entirety, complete coverage of the U.S. Reports
                    back to 1754, famous world trials dating back to the early
                    1700′s, legal classics from the 16th to the 20th centuries,
                    the United Nations and League of Nations Treaty Series, all
                    United States Treaties, the Federal Register from inception
                    in 1936, the CFR from inception in 1938, and much more.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">
                      Image is Everything!
                    </h4>
                    <p className="italic text-gray-700 dark:text-gray-300">
                      ALL Image-Based in PDF Format. HeinOnline provides exact
                      page images of the documents in PDF format just as they
                      appear in the original print. This means that all charts,
                      graphs, tables, pictures, hand written notes, photographs,
                      and footnotes appear where they belong!
                    </p>
                  </div>
                  <p>
                    Now, in more than 3,200 locations in over 150 countries,
                    HeinOnline is the world’s largest image-based legal research
                    collection. HeinOnline is a product of{" "}
                    <a
                      href="https://www.wshein.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      William S. Hein & Co., Inc.
                    </a>
                    , which has been serving the library community for nearly 90
                    years as a legal publisher, periodical subscription agent,
                    and the world’s largest distributor of legal periodicals.
                  </p>
                </div>
              </div>

              {/* Subscription Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <Layers
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Subscription Options
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      I. Core Subscription Package
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      HeinOnline offers a variety of subscription options,
                      including a core subscription package which includes the
                      Law Journal Library, Federal Register/CFR, U.S. Code, U.S.
                      Supreme Court Library, Legal Classics, U.S. Presidential
                      Library, Treaties & Agreements, English Reports, U.S.
                      Statutes at Large, U.S. Federal Legislative History
                      Library, U.S. Attorney General Opinions, European Center
                      for Minority Issues, Manual of Patent Examining Procedure,
                      Trends in Law Library Management and Technology, American
                      Association of Law Libraries, and Association of American
                      Law Schools.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      II. A-La-Carte Collections
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      There are also a variety of a-la-carte libraries that can
                      be added to a subscription to create a powerful legal
                      research collection. Some of these libraries include the
                      U.S. Congressional Documents, United Nations Law
                      Collection, Subject Compilations of State Laws, Kluwer Law
                      International Journal Library, and more!
                    </p>
                  </div>

                  <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400 text-center italic">
                    Subscription prices are based on the size and type of your
                    institution, as well as the length and content of the
                    subscription. A License Agreement is required.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="http://heinonline.org/HeinDocs/HOLBrochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
                  >
                    <FileText size={20} className="text-red-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Download Brochure
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/hein_clip_image002.jpg"
                  alt="HeinOnline Showcase"
                  className="w-full h-auto"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherHeinOnline;
