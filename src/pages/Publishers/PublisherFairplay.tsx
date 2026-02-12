import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Anchor,
  Globe,
  Database,
} from "lucide-react";

const PublisherFairplay: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8"><div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
              <span className="text-4xl font-bold text-white">
                IHS Fairplay
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Fairplay (IHS)
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
              The largest maritime database in the world, covering ship
              characteristics, movements, ownership, casualties, ports, news,
              and research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/products/maritime-information"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} className="mr-2" />
                Visit Website
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="inline-flex items-center px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all transform hover:scale-105 shadow-lg border border-emerald-700"
              >
                Contact for Access
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="mr-3 text-emerald-600 dark:text-emerald-400" />
              About IHS Fairplay
            </h2>
            <p className="leading-relaxed mb-6">
              IHS Fairplay brings you the largest maritime database in the
              world, evolved from the Lloyd's Register of Ships published since
              1764, covering ship characteristics, movements, ownership,
              casualties, ports, news and research.
            </p>
          </section>

          {/* Products Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Anchor className="mr-3 text-emerald-600 dark:text-emerald-400" />
              IHS Fairplay Products
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Movement Information */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Movement Information
                </h3>
                <p className="mb-4 text-sm">
                  Track live ship positions with unrivalled AIS coverage,
                  analyse risk profiles, and watch global energy commodity
                  flows.
                </p>
                <ul className="space-y-2">
                  {["AISLive", "Sea-web", "MDA WatchKeeper", "LNGLive"].map(
                    (item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Ship & Company Info */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ship & Company Information
                </h3>
                <p className="mb-4 text-sm">
                  Complete characteristics of 180,000 ships and 200,000 maritime
                  company records including owners, managers, and operators.
                </p>
                <ul className="space-y-2">
                  {[
                    "Sea-web",
                    "World Register of Ships",
                    "World Shipping Encyclopaedia",
                    "Register of Ships",
                    "List of Shipowners",
                    "World Shipping Directory",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Port Information */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Port Information
                </h3>
                <p className="mb-4 text-sm">
                  Plan port calls with up-to-date news, analysis of global port
                  security, and detailed data on over 10,000 ports.
                </p>
                <ul className="space-y-2">
                  {[
                    "Sea-Sentinel",
                    "Sea-web – Ports",
                    "Ports Guide CD-ROM",
                    "Ports & Terminals Guide",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Energy Trading */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Energy Trading
                </h3>
                <p className="mb-4 text-sm">
                  Market intelligence tools to track vessels carrying oil
                  products, coal, and LNG.
                </p>
                <ul className="space-y-2">
                  {[
                    "LNGLive",
                    "Vessel Movement Service",
                    "Market Intelligence Network",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Global Maritime Statistics */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Maritime Statistics & Forecasting
                </h3>
                <p className="mb-4 text-sm">
                  Unique analysis of clean and renewable energy markets, market
                  studies, and advisory services.
                </p>
                <ul className="space-y-2">
                  {[
                    "World Shipbuilding Statistics",
                    "World Fleet Statistics",
                    "World Casualty Statistics",
                    "Shipping Markets Forecast",
                    "Shipbuilding Market Forecast",
                    "Shipbuilding Orders Monthly",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Guides */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Practical Guides & Handbooks
                </h3>
                <p className="mb-4 text-sm">
                  Practical guidance on a wide range of topics for marine
                  professionals.
                </p>
                <ul className="space-y-2">
                  {[
                    "DPA Handbook",
                    "Docking Handbook",
                    "Superintendent's Handbook",
                    "Pollution Prevention Handbook",
                    "Ship Repair and Maintenance Handbook",
                    "Safety and Environmental Handbook",
                    "Classification and Statutory Surveys",
                    "Port Security Handbook",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Research & News Section */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Database className="mr-2 text-emerald-600 dark:text-emerald-400" />
                Research & Consultancy
              </h3>
              <p className="mb-4">
                Maximize your value gain from the data through expert data
                analysis and forecasting services.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Research and Forecasting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Emissions Model
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="mr-2 text-emerald-600 dark:text-emerald-400" />
                Maritime News & Analysis
              </h3>
              <p className="mb-4">
                Daily breaking maritime news regarding profitable, safe and
                efficient shipping methods and marine technology.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    IHS Fairplay News Service
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Daily Newbuilding News
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Safety at Sea
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    IHS Dredging & Port Construction
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherFairplay;
