import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Plane,
  Globe,
  BookOpen,
  Truck,
} from "lucide-react";

const PublisherJanes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <span className="text-4xl font-bold text-emerald-800">Janes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Janes</h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              The trusted source for defense and security intelligence, as well
              as transportation news and reference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.janes.com/"
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

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="mr-3 text-emerald-600 dark:text-emerald-400" />
              IHS Jane's Defense & Security
            </h2>
            <p className="leading-relaxed mb-6">
              Offering intelligence, consultancy and advertising solutions to
              the defense, national security and transport sectors.
            </p>
          </section>

          {/* Transportation Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Truck className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Jane's Transportation News & Reference
            </h2>
            <p className="mb-6">
              Jane's Transportation News & Reference experts document and
              analyze major commercial transportation issues affecting air, land
              and sea.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                IHS Jane's Transportation News & Reference solutions enable you
                to:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Identify new market opportunities and potential partners",
                  "Compare equipment and locate and evaluate suppliers",
                  "Carry out competitor analysis",
                  "Conduct in-depth research on global infrastructure, technology, policy, legislation and finance",
                  "Track and assess technological advances",
                  "Understand regulations affecting transportation",
                  "Monitor transportation finance transactions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Products Detail Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Product Portfolio
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Plane size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Air Traffic Control
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Systematizes key ATC equipment, technology and market data for
                  more than 600 specialist manufacturers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Plane size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Airport Review
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The industry leading source for global developments in
                  aviation security and air traffic control.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Globe size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Airports & Handling Agents
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Details more than 2,100 major airports and over 3,800 handling
                  agents on six continents.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Jane's Airports and Handling Agents</strong> is an
                  in-depth flight planning publication providing all the details
                  you need regarding the world's major airports, fixed-based
                  operators and handling agents.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Truck size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Airports, Equipments & Services
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Definitive guide to products and services from more than 1,300
                  specialist suppliers.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Jane's Airports, Equipments and Services</strong> is
                  widely regarded as the industry reference for airport and
                  airline decision-makers.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reviews and analyzes of products and services from more than
                  1,300 specialist suppliers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Transport Finance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Detailed financial news and analysis covering aircraft,
                  airport, shipping and rail industries.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Jane's Transport Finance</strong> brings you need-to
                  know finance intelligence including debt pricing, structure,
                  arrangers and lenders for debt deals in the aircraft, airport,
                  shipping and rail rolling stock sectors.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Truck size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Urban Transport Systems
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Global synopsis of 1,500 manufacturers and city-by-city guide
                  of current fleets and future operations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Transport Library
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Combines 18 transport-related reference products covering air,
                  land and sea. Clients may create their own bespoke collection.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4 text-emerald-600 dark:text-emerald-400">
                  <Truck size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  World Railways
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extensive data on railways in nearly 140 countries, with
                  details for 2,000 manufacturers and suppliers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherJanes;
