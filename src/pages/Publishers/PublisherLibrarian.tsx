import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Library,
  Monitor,
  FileText,
} from "lucide-react";

const PublisherLibrarian: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-900 to-violet-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <span className="text-4xl font-bold text-purple-800">
                  Librarian
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Librarian</h1>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Integrated Library Management System.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:info@ACML-egypt.com"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
                >
                  Contact for Demo
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Library className="mr-3 text-indigo-600 dark:text-indigo-400" />
                About Librarian
              </h2>
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <img
                  src="images/3.png"
                  alt="Librarian Interface"
                  className="rounded-lg shadow-md mx-auto max-w-full h-auto"
                />
              </div>
              <p className="leading-relaxed mb-6">
                Librarian is a complete Integrated Library Management System
                designed to streamline library operations, from cataloging to
                circulation.
              </p>
            </section>

            {/* Video Presentation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Monitor className="mr-3 text-indigo-600 dark:text-indigo-400" />
                Video Presentation
              </h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/7VsiDFaEENc"
                  title="Librarian Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </section>

            {/* Introductions */}
            <section className="grid md:grid-cols-2 gap-8">
              <a
                href="mailto:info@ACML-egypt.com?subject=Request Librarian Introduction (English)"
                className="block p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <FileText
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={24}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    English Introduction
                  </h3>
                </div>
                <p className="text-sm">
                  Request the detailed introduction in English.
                </p>
              </a>
              <a
                href="mailto:info@ACML-egypt.com?subject=Request Librarian Introduction (Arabic)"
                className="block p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <FileText
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={24}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Arabic Introduction
                  </h3>
                </div>
                <p className="text-sm">طلب المقدمة باللغة العربية.</p>
              </a>
            </section>

            {/* Modules */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Monitor className="mr-3 text-indigo-600 dark:text-indigo-400" />
                Key Modules
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Circulation",
                  "Cataloging",
                  "Pubic Access (OPAC)",
                  "Reports",
                  "Inventory",
                  "Administration",
                ].map((module, i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                    <span className="font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features List */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                System Features
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">✓</span>
                  <span>Works with diverse databases (SQL, Oracle, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">✓</span>
                  <span>Built on open standards (MARC 21, Z39.50)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">✓</span>
                  <span>Multilingual support (English, Arabic, French)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">✓</span>
                  <span>Web-based interface for easy access</span>
                </li>
              </ul>
            </section>

            {/* Resources & Downloads */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="mr-3 text-indigo-600 dark:text-indigo-400" />
                Resources & Downloads
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "English Introduction", type: "PDF" },
                  { title: "Arabic Introduction", type: "PDF" },
                  { title: "French Introduction", type: "PDF" },
                  { title: "Librarian English Module", type: "PDF" },
                  { title: "Librarian Arabic Module", type: "PDF" },
                  { title: "English Presentation", type: "PPT" },
                  { title: "Arabic Presentation", type: "PPT" },
                  { title: "English Checklist", type: "PDF" },
                  { title: "Arabic Checklist", type: "PDF" },
                  { title: "English Brochure", type: "Scanned" },
                  { title: "Arabic Brochure", type: "Scanned" },
                  { title: "Librarian Clients", type: "PDF" },
                  { title: "System Advantages (Arabic)", type: "PDF" },
                  { title: "HW, SW & Accessories", type: "PDF" },
                  { title: "English Evaluation Questionnaire", type: "PDF" },
                  { title: "Arabic Evaluation Questionnaire", type: "PDF" },
                  { title: "PH.D. Degree on ILMS (English)", type: "PDF" },
                  { title: "PH.D. Degree on ILMS (Arabic)", type: "PDF" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle download
                    }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
                  >
                    <div className="mr-3 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <FileText size={20} className="text-indigo-500" />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-900 dark:text-white text-sm">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.type}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherLibrarian;
