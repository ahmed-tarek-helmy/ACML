import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Server,
  Database,
  Share2,
  BookOpen,
  Layers,
  Monitor,
  Users,
  Settings,
} from "lucide-react";

export default function PublisherOCLC() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-800 to-teal-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <span className="text-4xl font-bold text-green-800">OCLC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">OCLC</h1>
              <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                A nonprofit global library cooperative providing shared
                technology services, original research, and community programs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.oclc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-900 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  Founded in 1967, OCLC Online Computer Library Center is a
                  nonprofit, membership, computer library service and research
                  organization dedicated to the public purposes of furthering
                  access to the world's information and reducing information
                  costs.
                </p>
                <p className="mb-4">
                  More than 57,000 libraries in 112 countries use OCLC services
                  to locate, acquire, catalog, lend, and preserve library
                  materials. OCLC and its member libraries cooperatively produce
                  and maintain WorldCat—the OCLC Online Union Catalog.
                </p>
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Services & Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                <a
                  href="https://www.oclc.org/en/services.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  OCLC Services
                </a>{" "}
                Enhance processes. Extend collections and access. Strengthen
                your users' experience. Individually, our solutions create
                tangible benefits for nearly every aspect of library management.
                Combined, they offer unparalleled efficiencies, economy and a
                quality of service that will bring patrons back again and again
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Database
                    className="text-emerald-600 dark:text-emerald-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cataloging & Metadata
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Streamline cataloging workflows and improve data quality.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Layers
                    className="text-blue-600 dark:text-blue-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Collection Management
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Manage print and electronic collections efficiently.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Server
                    className="text-purple-600 dark:text-purple-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Digitization & Preservation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Digitize and preserve special collections for future access.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Share2
                    className="text-amber-600 dark:text-amber-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Resource Sharing
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Connect users with materials from libraries worldwide.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <BookOpen
                    className="text-red-600 dark:text-red-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Reference
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tools to help librarians answer user questions effectively.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Monitor
                    className="text-indigo-600 dark:text-indigo-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    eContent
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Electronic content management and access.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Users
                    className="text-teal-600 dark:text-teal-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Group Services
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solutions for library consortia and groups.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <Settings
                    className="text-gray-600 dark:text-gray-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Product Works
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    An inside look at products in development at OCLC.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <ArrowLeft
                    className="text-gray-600 dark:text-gray-400 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    RLG transition
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    RLG transition information.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
