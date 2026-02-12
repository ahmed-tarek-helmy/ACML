import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ExternalLink, Globe, ArrowLeft } from "lucide-react";
import { standardsSocieties } from "../../data/standardsSocieties";

const PublisherStandardsSocieties = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSocieties = standardsSocieties.filter((soc) =>
    soc.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/standards.png"
                alt="Standards Logo"
                className="h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=Standards";
                  e.currentTarget.className = "h-12 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Standards and International Societies
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access to global standards developing organizations and industry
              specifications.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Standards Developing Organizations
          </h1>

          {/* Intro Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            <p className="leading-relaxed mb-4 text-center max-w-4xl mx-auto">
              IHS is a leading provider of technical standards, codes,
              specifications and related documents from hundreds of Standards
              Developing Organizations including professional societies, trade
              associations, corporations, military and government agencies, and
              national and international standards bodies.
            </p>
            <p className="text-center">
              <a
                href="http://www.ihs.com/products/industry-standards/organizations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Standards Developing Organizations website
              </a>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Standards Developing Organizations
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search societies..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSocieties.map((soc, index) => (
            <motion.a
              key={index}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {soc.name}
                </h3>
              </div>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-auto ml-11">
                <span className="mr-2">Visit Website</span>
                <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {filteredSocieties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No societies found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublisherStandardsSocieties;
