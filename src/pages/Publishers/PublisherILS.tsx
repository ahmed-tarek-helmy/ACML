import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Plane,
  Shield,
  Database,
  Wrench,
} from "lucide-react";

export default function PublisherILS() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/ILS.png"
                alt="ILS Logo"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=ILS";
                  e.currentTarget.className = "h-20 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inventory Locator Service
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The world's largest digital marketplace for parts and services in
              aviation, marine, and defense.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ilsmart.com"
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
      <div className="container mx-auto px-4 pb-12">
        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About ILS
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Since 1979, Inventory Locator Service,® LLC has provided
              information via its global electronic marketplace to enable
              subscribers in the aviation and defense industries to buy and sell
              parts, equipment, and services. With over 5 billion parts listed,
              60,000 customer accesses each day and 22,000 subscribers, ILS is
              the first, largest, and most active business-to-business
              electronic marketplace serving these industries.
            </p>
            <p className="mb-4">
              ILS is also focused on expanding its B-to-B electronic marketplace
              to give customers advanced business tools and services. ILS
              employs state-of-the-art technology to ensure rapid information
              distribution along with maximum security and reliability.
            </p>
            <p className="mb-4">
              Headquartered in Memphis, TN, ILS has offices in Atlanta, Boston,
              Dallas, Frankfurt, London, Los Angeles, Miami, New York, Paris,
              Philadelphia, Phoenix, San Diego, Seattle, Shanghai, Singapore,
              St. Louis, and Washington, D.C. ILS is a Boeing subsidiary.
            </p>
            <p>
              ILS supply chain solutions assist Aviation & Defense companies in
              managing their supply chain from sourcing to sale. Our solutions
              range from ILSmart, the most active aviation marketplace, to
              supply chain services that manage sales, inventory and MRO. ILS
              provides critical business intelligence regarding supply and
              demand of parts in the worldwide market.
            </p>
          </div>
        </div>

        {/* Solutions */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Industry Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Plane,
              title: "Owner / Operators",
              desc: "Sourcing parts and managing inventory.",
            },
            {
              icon: Wrench,
              title: "MRO",
              desc: "Maintenance, Repair, and Overhaul support.",
            },
            {
              icon: Database,
              title: "Manufacturers",
              desc: "Connecting with global buyers.",
            },
            {
              icon: Globe,
              title: "Suppliers",
              desc: "Expanding market reach.",
            },
            {
              icon: Shield,
              title: "Military / Defense",
              desc: "Mission-critical supply chain support.",
            },
            {
              icon: Shield,
              title: "Defense Contractors",
              desc: "Efficient procurement and logistics.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon
                  className="text-emerald-600 dark:text-emerald-400"
                  size={24}
                />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
