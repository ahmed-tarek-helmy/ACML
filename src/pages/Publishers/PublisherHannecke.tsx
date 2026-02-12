import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Grid, Monitor, Eye } from "lucide-react";

const PublisherHannecke: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8"><div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-8 shadow-xl inline-block">
              <span className="text-4xl font-bold text-gray-800">Hannecke</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Hannecke
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              High-quality display systems for books, magazines, and media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="http://www.hannecke.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} className="mr-2" />
                Visit Website
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg border border-emerald-500"
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
              <Grid className="mr-3 text-gray-600 dark:text-gray-400" />
              Display Systems Excellence
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="leading-relaxed mb-6">
                  Hannecke is a leading provider of display systems specialized
                  for the presentation of books, magazines, brochures, cards,
                  and multimedia products. Their "Systems" range offers
                  versatile solutions for retail and library environments.
                </p>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <img
                  src="images/HANNEKE.JPG"
                  alt="Hannecke Logo"
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Detailed Product Specifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Grid className="mr-3 text-gray-600 dark:text-gray-400" />
              Product Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Display Spinner for Pocket Books",
                  specs: [
                    "Use: Pocket books (Wooden Base)",
                    "Shelf Plate: G1",
                    "Pockets per tier: 8",
                    "Number of tiers: 7",
                    "Capacity: 560",
                    "Dimensions: 530 x 530 x 1960mm",
                    "Order No: FSH17WG1NTR17",
                  ],
                },
                {
                  title: "Display Spinner for Non-Fiction",
                  specs: [
                    "Use: Non-fiction books (Wooden Base)",
                    "Shelf Plate: A4",
                    "Pockets per tier: 5",
                    "Number of tiers: 6",
                    "Capacity: 90",
                    "Dimensions: 500 x 500 x 2000mm",
                    "Order No: FSH08WA4NTR",
                  ],
                },
                {
                  title: "Display Spinner for Arabic Editions",
                  specs: [
                    "Use: Arabic editions (Round Base)",
                    "Shelf Plate: F5A",
                    "Pockets per tier: 5",
                    "Number of tiers: 5",
                    "Capacity: 75",
                    "Dimensions: 535 x 535 x 1845mm",
                    "Order No: FSR09WF5ANTR",
                  ],
                },
                {
                  title: "Lighthouse Display",
                  specs: [
                    "Shelf Plate: F55 / F44",
                    "Pockets per tier: 5 / 4",
                    "Number of tiers: 5",
                    "Capacity: 100",
                    "Dimensions: 680 x 680 x 2330mm",
                    "Order No: On Request",
                  ],
                },
                {
                  title: "Display Spinner for CD",
                  specs: [
                    "Use: CDs (Round Base)",
                    "Shelf Plate: CD5",
                    "Pockets per tier: 10",
                    "Number of tiers: 10",
                    "Capacity: 300",
                    "Dimensions: 440 x 440 x 1850mm",
                    "Order No: FSR04WCD5NTR",
                  ],
                },
                {
                  title: "Floor Display 'SC8/1'",
                  specs: [
                    "Use: Universal book pockets (stepped)",
                    "Number of tiers: 8",
                    "Pocket depth: 50mm",
                    "Dimensions: 715 x 690 x 1550mm",
                    "Order No: FPA58NTRGU",
                  ],
                },
                {
                  title: "Display Spinner for Pocket Books (Metal)",
                  specs: [
                    "Use: Pocket books (Metal Base)",
                    "Shelf Plate: U",
                    "Pockets per tier: 8",
                    "Number of tiers: 7",
                    "Capacity: 336",
                    "Dimensions: 570 x 460 x 1880mm",
                    "Order No: FSM48-UNTR",
                  ],
                },
                {
                  title: "Display Spinner for Magazines",
                  specs: [
                    "Use: Magazines (Metal Base)",
                    "Shelf Plate: RCR",
                    "Pockets per tier: 8",
                    "Number of tiers: 5",
                    "Capacity: 320",
                    "Dimensions: 630 x 485 x 1950mm",
                    "Order No: FSM53-RCRNTR",
                  ],
                },
                {
                  title: "Lighthouse Display (Arabic)",
                  specs: [
                    "Use: Arabic editions",
                    "Shelf Plate: F5A",
                    "Pockets per tier: 5",
                    "Number of tiers: 5",
                    "Capacity: 75",
                    "Dimensions: 680 x 680 x 2330mm",
                    "Order No: On Request",
                  ],
                },
                {
                  title: "Display Spinner for Video Cassettes",
                  specs: [
                    "Use: Video Cassettes (Arabic Edition)",
                    "Shelf Plate: G1",
                    "Pockets per tier: 8",
                    "Number of tiers: 6",
                    "Capacity: 192",
                    "Dimensions: 480 x 480 x 1750mm",
                    "Order No: FSM06-G1NTR19",
                  ],
                },
                {
                  title: "Comic Display Rocket",
                  specs: [
                    "Use: Comics",
                    "Header: Rocket ship shaped",
                    "Pockets per tier: 8",
                    "Number of tiers: 4",
                    "Capacity: 256",
                    "Dimensions: 600 x 600 x 2325mm",
                    "Order No: On Request",
                  ],
                },
                {
                  title: "Bestseller Table",
                  specs: [
                    "Use: New titles, bestsellers",
                    "Material: Wooden laminated / Metal",
                    "Dimensions: 780 x 780 x 820mm",
                    "Order No: FMT819BUNTR",
                  ],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 text-center border-b border-gray-100 dark:border-gray-700 pb-2">
                    {product.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Product Lines */}
          <div className="space-y-12">
            {/* 1. Childrens & Teenage Books */}
            <section>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                  <Eye className="text-gray-600 dark:text-gray-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  1. Children & Teenage Books
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Counter Spinner 8DK for children books",
                  "Counter Spinner 12DK for children books",
                  "Spinner 24A4 for children books",
                  "Spinner 28F for children books",
                  "Spinner 35A4 for children books",
                  "Spinner 24DK-XL for children books",
                  "Spinner 36A5 for teenage books",
                  "Spinner 40CH8 for teenage books",
                  "Spinner 56U for teenage books",
                  "Spinner 80H16M for painting books",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Presentation & Information */}
            <section>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                  <Monitor
                    className="text-gray-600 dark:text-gray-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  2. Presentation & Information
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Wall display PA4 4/1 for brochures",
                  "Floor display PA4 4/1",
                  "Floor display Vista PA4-6",
                  "Floor display Vista-8",
                  "Floor display Vista-12",
                  "Wall display PA4 Swing for brochures",
                  "Floor display SW5/2 for brochures/leaflets",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Vernissage */}
            <section>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                  <Grid
                    className="text-gray-600 dark:text-gray-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  3. Vernissage
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Acrylic floor display",
                  "Wall divider",
                  "Wall divider extension",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 4. In.Line Systems */}
            <section>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                  <Grid
                    className="text-gray-600 dark:text-gray-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  4. In.Line Systems
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Zig zag shelving, width 3'",
                  "Zig zag shelving, width 4'",
                  "Shelf and stair combination, width 3'",
                  "Shelf and stair combination, width 4'",
                  "Combination for magazines / pocket book comics, width 3'",
                  "Combination for magazines / pocket book comics, width 4'",
                  '"P11" book/DVD shelving, width 3\'',
                  '"P11" book/DVD shelving, width 4\'',
                  '"PA4" magazine shelving, width 3\'',
                  '"PA4" magazine shelving, width 4\'',
                  'Built-in Spinners Sample: "RCR" for magazines',
                  "Newspaper shelf, width 3'",
                  "Newspaper shelf, width 4'",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
        </div>
      </div>
    </div>
  );
};

export default PublisherHannecke;
