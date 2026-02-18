import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Archive, Box } from "lucide-react";

const PublisherGaylord: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-teal-900 to-cyan-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-8 shadow-xl inline-block">
                <span className="text-4xl font-bold text-teal-700">
                  Gaylord
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Gaylord
              </h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Archival solutions and library supplies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.gaylord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-teal-900 rounded-full font-bold hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="mailto:info@ACML-egypt.com"
                  className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg border border-teal-500"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Archive className="mr-3 text-teal-600 dark:text-teal-400" />
                About Gaylord
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="leading-relaxed mb-6">
                    A leading American company strives to offer products that
                    assist you in serving your patrons and help you manage every
                    aspect of your library, from Model C book Chargers to the
                    latest in library automation.
                  </p>
                  <p className="leading-relaxed mb-6">
                    Gaylord is introducing 750 new products; including the first
                    all-steel paperback/video displayer on the market,
                    fire-resistant file cabinets and creative new solutions for
                    mixed circulation.
                  </p>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <img
                    src="/images/GAYLORD.JPG"
                    alt="Gaylord Logo"
                    className="mx-auto rounded-lg shadow-sm mb-4"
                  />
                </div>
              </div>
            </section>

            {/* Product Showcase */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Product Showcase
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://placehold.co/300x200/e6e6e6/666666?text=Gaylord+Product+${item}`}
                      alt={`Gaylord Product ${item}`}
                      className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle file download
                  }}
                >
                  <Box className="mr-2" size={20} />
                  Download Gaylord Products Catalog (PDF)
                </a>
              </div>
            </section>

            {/* Conservation Materials */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Gaylord Conservation Materials
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Binder/Barrier Board",
                  "Boards & Blotter",
                  "Bond, Text and End Papers",
                  "Cutters & Trimmers",
                  "Dry Mount Supplies",
                  "Dry Mount Tools",
                  "Encapsulation Supplies",
                  "Fabric",
                  "Flat Files",
                  "Folder and Envelope Stock",
                  "Interleaving",
                  "Mounting Supplies",
                  "Mounting Tools and Trimmers",
                  "Mounting/Mat Boards",
                  "Mylar & Specialty Materials",
                  "Preservation Journals",
                  "Labels",
                  "Shelving",
                  "Book Supports",
                  "Card Cabinets",
                  "Step Stools",
                  "Book Trucks and returns",
                  "Labeling Machines",
                  "Stickers labels",
                  "Labels Hangers",
                  "Barcode Rolls",
                  "Barcode Readers",
                  "Media Cabinet",
                  "Binding Tools",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <Box
                      size={16}
                      className="text-teal-500 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherGaylord;
