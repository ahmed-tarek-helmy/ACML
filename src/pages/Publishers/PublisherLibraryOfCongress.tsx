import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Landmark,
  Book,
  Camera,
  Disc,
  ExternalLink,
} from "lucide-react";

export default function PublisherLibraryOfCongress() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <span className="text-4xl font-bold text-blue-900">LOC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Library of Congress
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The nation's oldest federal cultural institution and the largest
              library in the world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.loc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* About Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
            <div className="flex items-start">
              <Landmark
                className="text-emerald-600 dark:text-emerald-400 mr-4 mt-1"
                size={32}
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About the Library
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    The Library of Congress is the nation's oldest federal
                    cultural institution and serves as the research arm of
                    Congress. It is also the largest library in the world, with
                    millions of books, recordings, photographs, maps and
                    manuscripts in its collections.
                  </p>
                  <p>
                    The Library's mission is to make its resources available and
                    useful to the Congress and the American people and to
                    sustain and preserve a universal collection of knowledge and
                    creativity for future generations. The Office of the
                    Librarian is tasked to set policy and to direct and support
                    programs and activities to accomplish the Library's mission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Collections */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Vast Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <Book
                className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
                size={32}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Books
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Millions of books and printed materials.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <Camera
                className="text-amber-600 dark:text-amber-400 mx-auto mb-4"
                size={32}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Photographs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Historic photos, prints, and drawings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <Disc
                className="text-purple-600 dark:text-purple-400 mx-auto mb-4"
                size={32}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Recordings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Audio and video recordings, film, and music.
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Catalog Products
            </h2>
            <div className="space-y-4">
              <a
                href="http://catalog.loc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  Library of Congress Online Catalog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Search the diverse collections of the library.
                </p>
              </a>
              <div className="block p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Databases on CD-ROM
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Specialized bibliographic databases and records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
