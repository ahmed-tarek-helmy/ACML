import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Newspaper,
  Globe2,
  Layers,
  Printer,
} from "lucide-react";

export default function PublisherPressReader() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <span className="text-4xl font-bold text-emerald-800">
                PressReader
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">PressReader</h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              The world leader in digital newspaper distribution. Delivering
              thousands of newspapers and magazines from around the world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.pressreader.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
          {/* About Section */}
          <section>
            <div className="flex items-start mb-6">
              <Newspaper
                className="text-emerald-600 dark:text-emerald-400 mr-4 mt-1"
                size={32}
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Connecting People Through News
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Founded in 1999, PressReader has become a centralized global
                  repository for content of daily newspapers. It offers the
                  largest and most comprehensive selection of newspaper titles
                  from around the world, displayed in their original design and
                  page layout.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-semibold">
                  You can find 225 newspapers from 55 countries
                </p>
              </div>
            </div>
          </section>

          {/* PressDisplay History */}
          <section className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              PressDisplay.com & Technology
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                In December of 2003, the company launched{" "}
                <a
                  href="http://www.pressdisplay.com/"
                  className="text-emerald-600 hover:underline"
                >
                  PressDisplay.com
                </a>
                , its market-leading internet service which provides users with
                the largest choice in online digital newspapers.
              </p>
              <p>
                The service, which is powered with the company's proprietary{" "}
                <strong>PrintToScreen™</strong> technology, leverages the
                company's content base and market presence. In addition to the
                consumer site PressDisplay.com, the company has launched
                applications of PressDisplay technology for the library,
                corporate, airline, hotel and OEM market segments.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2
                    className="text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access content from over 100 countries including Argentina,
                  Australia, Canada, China, UK, USA, and many more.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers
                    className="text-amber-600 dark:text-amber-400"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  PrintToScreen™
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Proprietary technology that presents digital content in a
                  familiar, easy-to-read newspaper format.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer
                    className="text-purple-600 dark:text-purple-400"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  On-Demand Printing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Global print network allowing for digitally imaged,
                  full-format newspapers printed at hotels, libraries, and
                  airlines.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-emerald-600 dark:bg-emerald-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Global Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold mb-2">7,000+</p>
                <p className="opacity-90">Publications</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">120+</p>
                <p className="opacity-90">Countries</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">60+</p>
                <p className="opacity-90">Languages</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
