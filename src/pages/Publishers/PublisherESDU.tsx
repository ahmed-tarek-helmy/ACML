import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const PublisherESDU: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
                <img
                  src="/images/esdu_logo.jpg"
                  width="200"
                  height="60"
                  alt="ESDU Logo"
                  className="h-12 w-auto brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Engineering Sciences Data Unit
              </h1>
              <h2 className="text-2xl text-cyan-100 mb-8 font-light">ESDU</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.ihs.com/products/product-design-sourcing/esdu/aerodynamics.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="mailto:info@ACML-egypt.com"
                  className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg border border-emerald-400"
                >
                  Request Free Trial
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
                About ESDU
              </h2>

              <div className="clearfix mb-8">
                <img
                  src="/images/ESDU.png"
                  width="126"
                  height="141"
                  className="float-right ml-6 mb-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                  alt="ESDU About"
                />
                <p className="mb-6 leading-relaxed">
                  Accuris ESDU provides engineering insight based on the
                  collective knowledge of hundreds of engineers from around the
                  world. It is actively managed and updated regularly to keep
                  abreast of the latest science and practices to deliver the
                  most advanced resources.
                </p>
                <p className="mb-6 leading-relaxed">
                  ESDU methods are regularly reviewed and validated by industry,
                  technical society and academic experts to provide current best
                  practices and data.
                </p>
              </div>

              {/* Design Guides Section */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mb-8">
                <p className="mb-4 font-semibold text-gray-900 dark:text-white">
                  This unique collection of design guides and methods will
                  minimize the time required to run complex calculations with:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>
                      Detailed descriptions of the principles on which methods
                      are based
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>
                      Analysis methods described with ranges of accuracy,
                      derivation lists, and worked examples
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>
                      Detailed calculation diagrams to show program data flows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>
                      The ability to capture conditions and reuse previous
                      calculations.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500 mb-8">
                <p className="leading-relaxed">
                  With the ESDU Aerodynamics Design Collection, your development
                  team can eliminate dependence on outdated or inaccurate
                  methods to move from research and development through design
                  and certification as effectively as possible.
                </p>
              </div>

              {/* Tools Collection Section */}
              <div className="mb-8">
                <p className="mb-4 font-semibold text-gray-900 dark:text-white">
                  It provides an extensive collection of tools to solve complex
                  aerodynamic and structural problems related to:
                </p>
                <ul className="grid md:grid-cols-3 gap-3">
                  {[
                    "Airfoils and Wings",
                    "Wing-Body Combinations",
                    "Controls and Flaps",
                    "Powerplant and Airframe Interactions",
                    "Stability of Aircraft",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Users Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Design Engineers worldwide rely on Accuris ESDU Aerodynamics
                  Design tools
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aerospace and defense industry contractors",
                    "Commercial aircraft manufacturers and suppliers",
                    "Government research and testing agencies",
                    "Academic institutions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-emerald-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
                  Benefits
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Achieve Greater Design Accuracy
                    </h3>
                    <p className="leading-relaxed">
                      Ensure your design calculations are accurate with
                      comprehensive, in-depth information for more than 1200
                      aerospace design and performance topics. Accuris ESDU is
                      the ideal complement to other design tools such as finite
                      element analysis, computational fluid dynamics programs as
                      well as in-house practices, codes and industry standards
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Optimize Designs
                    </h3>
                    <p className="leading-relaxed">
                      Accuris ESDU provides an in-depth discussion of the
                      relevant design parameters and the tools to research
                      alternative configurations to optimize the design
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Improve Collaboration
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Accuris ESDU methods and data enable cooperation on joint
                      development projects without compromising proprietary
                      methods and resources
                    </p>

                    <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2">
                      Reduce Rework or Redesign
                    </h4>
                    <p className="leading-relaxed mb-4">
                      Because Accuris ESDU methods are validated, calculations
                      will accurately predict performance with less rework or
                      reliance on costly prototypes
                    </p>

                    <h4 className="text-md font-bold text-gray-900 dark:text-white mb-2">
                      Meet Project Budgets and Schedules
                    </h4>
                    <p className="leading-relaxed">
                      Accuris ESDU helps engineers effectively solve complex
                      problems to shorten the initial design and development
                      phases and reduce research costs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherESDU;
