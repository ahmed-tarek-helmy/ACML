import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Database, ListChecks } from "lucide-react";

const PublisherHaystack = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/hystack.jpg"
                alt="Haystack Logo"
                className="h-16 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/black?text=Haystack";
                  e.currentTarget.className = "h-16 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IHS Haystack Gold
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Premier Parts & Logistics Data. Maximize supply chain
              effectiveness with extensive search capabilities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/products/product-design-sourcing/component-supplier-data/haystack-military-government.aspx"
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
                  <Database
                    className="text-amber-600 dark:text-amber-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About Haystack Gold
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/4">
                  <img
                    src="/images/hystack2.jpg"
                    alt="Parts Data"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  IHS Haystack Gold® is our premier parts and logistics product
                  that enables users to find data using a wide range of search
                  criteria across multiple databases, reducing the time spent
                  researching hard-to-find parts while maximizing supply chain
                  effectiveness. This service also provides extensive report
                  capabilities to ensure your part information is
                  well-researched and documented.
                </p>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-4">
                  Capabilities
                </h4>
                <ul className="space-y-3">
                  {[
                    "Identify all aspects of an item and verify technical characteristics",
                    "Provide procurement history to estimate costs and availability",
                    "Supply suitable alternatives and replacements for hard-to-find or obsolete parts",
                    "Furnish primary and alternate sources of supply",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <ListChecks
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Benefits
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Daily updates to Federal Logistics Information System (FLIS)",
                  "Access to more than 70 additional military and commercial databases",
                  "Search tools for hard-to-find National Stock Numbers (NSNs)",
                  "Cross-referencing among databases",
                  "Robust user interface with context-sensitive help",
                  "Report functionality in spreadsheets and PDF",
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="mr-3 mt-1 text-emerald-500">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a
                  href="http://www.ihs.com/products/product-design-sourcing/component-supplier-data/haystack-military-government.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <ExternalLink size={20} className="mr-3" />
                  <span>Haystack Website</span>
                </a>
              </div>
            </div>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_price.png"
                alt="Get a Quote"
                className="w-full h-auto"
              />
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_trail.png"
                alt="Free Trial"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for icon
const CheckCircle = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default PublisherHaystack;
