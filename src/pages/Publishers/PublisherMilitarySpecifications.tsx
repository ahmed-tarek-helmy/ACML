import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  FileText,
  Globe,
  Database,
  Building,
  Flag,
  Anchor,
} from "lucide-react";

const PublisherMilitarySpecifications = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <img
                src="/images/military_specs.png"
                alt="Military Specs"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=MilSpecs";
                  e.currentTarget.className = "h-20 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Military Specifications and Standards
            </h1>
            <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive source for U.S. Military and Federal key
              specifications and standards.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/products/industry-standards/solutions/military-specs.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-900 hover:bg-sky-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="mr-3 text-emerald-600 dark:text-emerald-400" />
              About Military Specifications and Standards
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="leading-relaxed mb-4">
                  The IHS Military product line offers a variety of
                  specifications and standards solutions needed for research and
                  design, purchasing, bidding, logistics and related
                  applications. It simplifies the complicated research
                  associated with military contracts and can help you comply
                  with ISO 9000 series standards and other quality initiatives.
                </p>
                <p className="leading-relaxed mb-4">
                  Access to military specifications and standards is driven by
                  powerful, easy-to-use search software and supporting tools.
                  All the collection documents are accessible through a single
                  source, whether online or "behind the firewall," and assist
                  the user to make quick decisions regarding military
                  guidelines.
                </p>
                <p className="leading-relaxed mb-4">
                  Over 400,000 U.S. Military and Federal specifications and
                  8,000 US Department of Defense (DoD) adopted standards from
                  multiple standards development organization are included in
                  the more than 1.3 M technical standards and related documents
                  in the Specs & Standards Index. Specs & standards is the
                  world's largest bibliographical database of active and
                  historical standards, specifications, drawings, handbooks and
                  related technical documents.
                </p>
              </div>
            </div>
          </section>

          {/* Collections Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Database className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Collections & Standards
            </h2>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Military specifications and standards are divided into the
                following collections:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FileText
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      Active mil specs
                    </strong>
                    <span className="text-sm">
                      Current active military specifications.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      DoD adopted standards
                    </strong>
                    <span className="text-sm">
                      Standards adopted by the Department of Defense.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      Historical mil specs
                    </strong>
                    <span className="text-sm">
                      Archive of historical military specifications.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Database
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      JTA referenced standards collection
                    </strong>
                    <span className="text-sm">
                      Joint Technical Architecture referenced standards.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Anchor
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      Naval instructions and directives
                    </strong>
                    <span className="text-sm">
                      Directives and instructions for naval operations.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      NASA documents
                    </strong>
                    <span className="text-sm">
                      Standards and documents from NASA.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      Federal construction regulations (FCR)
                    </strong>
                    <span className="text-sm">
                      Regulations for federal construction projects.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Flag
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      NATO documents
                    </strong>
                    <span className="text-sm">
                      Standardization agreements and publications from NATO.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      DoD directives
                    </strong>
                    <span className="text-sm">
                      Department of Defense directives.
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield
                    className="text-emerald-600 dark:text-emerald-400 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-white block">
                      Army regulations and pamphlets
                    </strong>
                    <span className="text-sm">
                      Regulations and pamphlets for the US Army.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherMilitarySpecifications;
