import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, BarChart, Bell } from "lucide-react";

const PublisherGlobalTradeTracker: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/Global_Trade_Tracker_clip_image002.jpg"
                alt="Global Trade Tracker"
                className="h-16 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=GTT";
                  e.currentTarget.className = "h-16 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Trade Tracker
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Create accurate, timely, customized reports in seconds for any
              commercially traded product in the world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.globaltradetracker.com"
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
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Globe
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About Global Trade Tracker
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/Global_Trade_Tracker_clip_image002_0000.jpg"
                      alt="Global Trade Analytics"
                      className="w-full h-auto object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p className="mb-4">
                    With <strong>Global Trade Tracker</strong> you can create
                    accurate, timely, customized reports in seconds for any
                    commercially traded product in the world.
                  </p>
                  <p>
                    <strong>GlobalTradeTracker</strong> offers powerful
                    web-based access to original trade statistics from the
                    world’s leading trading nations, giving you a clear
                    objective picture of the trade flows you need to know about.
                    Lightning fast updating, flexible output options and
                    tailored payment plans makes Global Trade Tracker the
                    service of choice for business analysts worldwide.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <BarChart
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Services & Features
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Global Trade Data Timely & Accurate
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Some features of the Global Trade Tracker include:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Easy to use menu-driven searching
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Report formats for macro-economic research
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Output in either CSV or XML file formats
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Customer-friendly subscriptions models
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Searches and reports generated are saved for subsequent
                        reuse
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <img
                      src="/images/Global_Trade_Tracker_clip_image002_0001.jpg"
                      alt="GTT Interface"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex-shrink-0">
                      <Bell
                        className="text-amber-600 dark:text-amber-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Alerts
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you need to monitor data on a regular basis the most
                        convenient and cost effective method is to set up an
                        Alert.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Alerts are saved searches automatically run by Global
                        Trade Tracker as soon as data is available. This enables
                        you to set up a search for your required country (ies)
                        and product(s) then receive data on a regular basis
                        without going on line.
                      </p>
                      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          In addition to not searching, a key benefit of Alerts
                          is the significant reduction in report price. The same
                          report run on line can be as much as 33% cheaper as
                          part of a regular Standing Order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/Global_Trade_Tracker_clip_image002_0002.jpg"
                    alt="Global Map"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Global Trade Tracker offers you a state-of-the-art Web-based
                  service that gives access to original trade statistics from
                  the world's principal trading countries. Unlike some other
                  services, GTT does not manipulate the data in any way – giving
                  you a clear, objective picture of the trade flows you need to
                  know about.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently around 75 countries and growing report to Global
                  Trade Tracker. Statistics are obtained from the official
                  customs or national statistics office of each country.
                </p>
              </div>
            </div>

            {/* Right Column - Coverage Stats */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Available Countries
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Africa
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      9
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      North & Central America
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      7
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Asia
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      13
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      South America
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      9
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Europe
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      33
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Oceania
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      2
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Middle East
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-md text-sm font-bold">
                      1
                    </span>
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

export default PublisherGlobalTradeTracker;
