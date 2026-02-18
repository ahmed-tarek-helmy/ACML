import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, Layers } from "lucide-react";

const PublisherTaylorFrancis = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-red-800 to-rose-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <img
                  src="/images/Taylor & Francis _clip_image002.jpg"
                  alt="Taylor & Francis"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/300x100/transparent/white?text=Taylor+%26+Francis";
                    e.currentTarget.className = "h-12 object-contain";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Taylor & Francis Group
              </h1>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                Informing Academics from Past to Present. A leading
                international academic publisher.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.taylorandfrancisgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-rose-900 hover:bg-rose-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded-xl mr-4">
                    <BookOpen
                      className="text-rose-600 dark:text-rose-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About Taylor & Francis
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/Taylor & Francis _clip_image002_0000.jpg"
                      alt="Taylor & Francis"
                      className="w-full h-auto object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p className="mb-4">
                    Taylor & Francis has grown rapidly over the last two decades
                    to become a leading international academic publisher. With
                    offices in London, Brighton, Basingstoke and Abingdon in the
                    UK, New York and Philadelphia in the USA and Singapore and
                    Melbourne in the Pacific Rim, the Taylor & Francis Group
                    publishes more than 1000 journals and around 1,800 new books
                    each year, with a books backlist in excess of 20,000
                    specialist titles.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    Publishing Groups
                  </h4>
                  <ul className="space-y-4">
                    <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <strong className="block text-emerald-600 dark:text-emerald-400 mb-1">
                        Taylor & Francis Books:
                      </strong>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        Including imprints Routledge, Taylor & Francis, Europa
                        Publications, Garland Science, RoutledgeFalmer, Spon
                        Press, Gordon & Breach, Harwood Academic,
                        RoutledgeCurzon, CRC Press, Frank Cass and BIOS
                        Scientific Publishers.
                      </span>
                    </li>
                    <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <strong className="block text-emerald-600 dark:text-emerald-400 mb-1">
                        Specialist Divisions:
                      </strong>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        Martin Dunitz including the Isis medical titles.
                        Psychology Press (UK and North America).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Products Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <Layers
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Key Products
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* CRCnetBASE */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0001.jpg"
                        alt="CRCnetBASE"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        CRCnetBASE
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Allows access to full text handbooks, references, and
                        monographs published by CRC Press.
                      </p>
                      <a
                        href="http://www.crcnetbase.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center text-sm"
                      >
                        Visit Website{" "}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Taylor & Francis eBooks */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0003.jpg"
                        alt="Taylor & Francis eBooks"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Taylor & Francis eBooks
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Over 23,000 eBook titles in the Humanities, Social
                        Science, Behavioural Sciences, STM and Law.
                      </p>
                    </div>
                  </div>

                  {/* EuropaWorld */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0004.jpg"
                        alt="EuropaWorld"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        EuropaWorld
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        An interactive online library for all of the countries
                        and territories of each of the world regions.
                      </p>
                    </div>
                  </div>

                  {/* The Europa World of Learning */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0005.jpg"
                        alt="The Europa World of Learning"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        The Europa World of Learning
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A unique and invaluable online source of global
                        educational contents.
                      </p>
                    </div>
                  </div>

                  {/* World Who's Who */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0006.jpg"
                        alt="World Who's Who"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        World Who's Who
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A Comprehensive directory of almost 60,000 of the
                        world's most eminent personalities.
                      </p>
                    </div>
                  </div>

                  {/* IISS */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0007.jpg"
                        alt="IISS"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        IISS: Armed Conflict Database
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        An Authoritative and unique online source of data and
                        independent analysis on current and recent conflicts.
                      </p>
                    </div>
                  </div>

                  {/* Routledge Encyclopedia */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0008.jpg"
                        alt="Routledge Encyclopedia"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Routledge Encyclopedia of Philosophy Online
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A dynamic online resource for researching, teaching and
                        studying philosophy and related disciplines.
                      </p>
                    </div>
                  </div>

                  {/* Routledge Reference Resources */}
                  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img
                        src="/images/Taylor & Francis _clip_image002_0009.jpg"
                        alt="Routledge Reference Resources"
                        className="rounded-lg w-full object-contain"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Routledge Reference Resources
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        The very best reference works available online across 9
                        diverse subject areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="http://www.taylorandfrancisgroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Official Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherTaylorFrancis;
