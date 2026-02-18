import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Languages,
  FileText,
} from "lucide-react";

const PublisherHarmattan: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-8 shadow-xl inline-block">
                <span className="text-4xl font-bold text-purple-800">
                  L'Harmattan
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                L'Harmattan
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
                French Digital Library - Harmattan E-Books.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.harmatheque.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Harmathèque
                </a>
                <a
                  href="mailto:info@ACML-egypt.com"
                  className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg border border-purple-500"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            {/* About Section */}
            <section>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="mr-3 text-purple-600 dark:text-purple-400" />
                  The "Harmathèque" Platform
                </h2>
                <p className="leading-relaxed font-medium">
                  The Harmathèque platform offers online subscriptions to a vast
                  collection of digital works from L'Harmattan.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="leading-relaxed mb-4">
                    <strong>
                      <u>French Digital Library (FDL) - Harmattan:</u>
                    </strong>
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>
                      An unique Digital Library from the famous French publisher
                      The HARMATTAN – Paris- France.
                    </strong>
                  </p>
                  <p className="leading-relaxed mb-6">
                    <strong>The French </strong>
                    <a
                      href="https://www.harmatheque.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      <strong>Digital Libraray - Harmattan</strong>
                    </a>
                    <strong>
                      : is a digital multimedia platform, the Harmathèque,
                      offering 65,000 digitized books that can be consulted
                      online; 24000 articles; plenty of videos and Audio
                      produts. The Harmattan is leading the publishing in
                      French-speaking countries worldwide, concentrating on
                      humanities; social sciences & history
                    </strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>
                      This unique platform compound of the following categories
                      mentioned below, which is linked subject by subject to
                      Harmattan platform.
                    </strong>
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
                    <Languages
                      size={64}
                      className="mx-auto text-purple-600 dark:text-purple-400 mb-4"
                    />
                    <p className="font-semibold text-lg">
                      Francophone Collection
                    </p>
                    <p className="text-sm text-gray-500">
                      Wide coverage of French culture and research.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-100 dark:border-purple-800/30 text-center">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Download Full Catalog
              </h4>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle file download
                }}
              >
                <FileText className="mr-2" size={20} />
                FDL – Harmattan Total List of Books (Excel File)
              </a>
            </div>

            {/* Subject Collections */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                FDL Harmattan Categories
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    en: "Fine arts",
                    fr: "Beaux-arts",
                    url: "https://www.harmatheque.com/bouquet/4",
                  },
                  {
                    en: "Communication and Linguistics",
                    fr: "Communication et Linguistique",
                    url: "https://www.harmatheque.com/bouquet/9",
                  },
                  {
                    en: "Law",
                    fr: "Droit",
                    url: "https://www.harmatheque.com/bouquet/1",
                  },
                  {
                    en: "Economics and management",
                    fr: "Economie et management",
                    url: "https://www.harmatheque.com/bouquet/2",
                  },
                  {
                    en: "Education",
                    fr: "Education",
                    url: "https://www.harmatheque.com/bouquet/11",
                  },
                  {
                    en: "History - Geography",
                    fr: "Histoire - Géographie",
                    url: "https://www.harmatheque.com/bouquet/3",
                  },
                  {
                    en: "Youth",
                    fr: "Jeunesse",
                    url: "https://www.harmatheque.com/bouquet/13",
                  },
                  {
                    en: "Literature",
                    fr: "Littérature",
                    url: "https://www.harmatheque.com/bouquet/8",
                  },
                  {
                    en: "Philosophy",
                    fr: "Philosophie",
                    url: "https://www.harmatheque.com/bouquet/7",
                  },
                  {
                    en: "Psychoanalysis - Psychology",
                    fr: "Psychanalyse – Psychologie",
                    url: "https://www.harmatheque.com/bouquet/14",
                  },
                  {
                    en: "Sciences and Health",
                    fr: "Sciences et Santé",
                    url: "https://www.harmatheque.com/bouquet/10",
                  },
                  {
                    en: "Human Sciences - Ethnology",
                    fr: "Sciences Humaines - Ethnologie",
                    url: "https://www.harmatheque.com/bouquet/6",
                  },
                  {
                    en: "Sociology",
                    fr: "Sociologie",
                    url: "https://www.harmatheque.com/bouquet/6",
                  },
                  {
                    en: "Political and social sciences",
                    fr: "Sciences politiques et sociales",
                    url: "https://www.harmatheque.com/bouquet/5",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:shadow-md transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.en}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                      {item.fr}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* CTA Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherHarmattan;
