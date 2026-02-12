import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Calculator,
  BookOpen,
  Users,
  Calendar,
} from "lucide-react";

const PublisherSIAM = () => {
  const journals = [
    "Multiscale Modeling and Simulation",
    "SIAM Journal on Applied Dynamical Systems",
    "SIAM Journal on Applied Mathematics",
    "SIAM Journal on Computing",
    "SIAM Journal on Control and Optimization",
    "SIAM Journal on Discrete Mathematics",
    "SIAM Journal on Financial Mathematics",
    "SIAM Journal on Mathematical Analysis",
    "SIAM Journal on Matrix Analysis and Applications",
    "SIAM Journal on Numerical Analysis",
    "SIAM Journal on Optimization",
    "SIAM Journal on Scientific Computing",
    "SIAM/ASA Journal on Uncertainty Quantification",
    "SIAM Review",
    "Theory of Probability and Its Applications",
    "SIAM Journal on Imaging Sciences",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/siam.gif"
                alt="SIAM Logo"
                className="h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=SIAM";
                  e.currentTarget.className = "h-12 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Society for Industrial and Applied Mathematics
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Building cooperation between mathematics and the worlds of science
              and technology through research, publications, and community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.siam.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Calculator
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About SIAM
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-1/3">
                  <img
                    src="/images/CS08.jpg"
                    alt="Mathematics"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  The Society for Industrial and Applied Mathematics (SIAM) is
                  an international community of over 14,000 individual members.
                  Almost 500 academic, manufacturing, research and development,
                  service and consulting organizations, government, and military
                  organizations worldwide are institutional members.
                </p>
                <p>
                  SIAM fosters the development of applied mathematical and
                  computational methodologies needed in these various
                  application areas. Applied mathematics in partnership with
                  computational science is essential in solving many real-world
                  problems.
                </p>
              </div>
            </div>

            {/* Journals Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <BookOpen
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  SIAM Journals
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {journals.map((journal, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {journal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Books Subjects Section - NEW */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Book Subjects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                {[
                  "Applied Geometry",
                  "Applied Mathematics Education",
                  "Applied Probability",
                  "Astronomy, Planetary Sciences, and Optics",
                  "Atmospheric and Oceanographic Sciences",
                  "Biological Sciences",
                  "Chemical Kinetics",
                  "Communication Theory",
                  "Computational Mathematics",
                  "Computer Sciences",
                  "Control and Systems Theory",
                  "Data Mining and Information Retrieval",
                  "Discrete Mathematics and Graph Theory",
                  "Dynamical Systems",
                  "Economics and Finance",
                  "Electromagnetic Theory and Semiconductor and Circuit Analysis",
                  "Environmental Sciences",
                  "Fluid Mechanics",
                  "Functional Analysis",
                  "General Interest",
                  "Geophysical Sciences",
                  "Image Processing",
                  "Linear Algebra and Matrix Theory",
                  "Management Sciences and Operations Research",
                  "Materials Science",
                  "Math and Computation in Industrial Applications",
                  "Mathematical Physics",
                  "Mechanics of Solids",
                  "Nonlinear Waves and Coherent Structures",
                  "Numerical Analysis",
                  "Optimization Theory and Mathematical Programming",
                  "Ordinary Differential Equations",
                  "Partial Differential Equations",
                  "Real and Complex Analysis",
                  "Simulation and Modeling",
                  "Social Sciences",
                  "Statistics",
                ].map((subject, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conferences Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
                  <Calendar
                    className="text-amber-600 dark:text-amber-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Conferences
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                SIAM conferences focus on timely topics in applied and
                computational mathematics and applications and provide a place
                for members to exchange ideas and to expand their network of
                colleagues in both academia and industry. The SIAM Annual
                Meeting provides a broad view of the state of the art in applied
                mathematics, computational science and their applications.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">
                Proceedings
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SIAM publishes selected proceedings from its yearly meetings and
                conferences.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Workshop on Algorithm Engineering and Experiments (ALENEX)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The aim of the ALENEX workshop is to provide a forum for
                    presentation of original research in the implementation and
                    experimental evaluation of algorithms and data structures.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Workshop on Analytic Algorithmics and Combinatorics (ANALCO)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The aim of the ANALCO workshop is to provide a forum for the
                    presentation of original research in the analysis of
                    algorithms and associated combinatorial structures.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Data Mining
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Data mining is an important tool in science, engineering,
                    industrial processes, healthcare, business, and medicine.
                    This conference provides a venue for researchers who are
                    addressing these problems to present their work in a
                    peer-reviewed forum.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    ACM-SIAM Symposium on Discrete Algorithms (SODA)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    This symposium focuses on research topics related to
                    efficient algorithms and data structures for discrete
                    problems. In addition to the design of such methods and
                    structures, the scope also includes their use, performance
                    analysis, and the mathematical problems related to their
                    development or limitations.
                  </p>
                </div>
              </div>
            </div>

            {/* SIAM News Section - NEW */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                SIAM News & Reports
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to SIAM News, the news journal of the applied
                mathematics community! SIAM News offers:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Technical overview articles written by experts in a wide
                    range of disciplines
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reports of progress and breakthroughs in research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Commentaries on the issues -- political, ethical,
                    educational, and scientific -- that affect the mathematical
                    sciences community
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    News about legislation and funding issues, people, and
                    university programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive calendar of events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Professional opportunity advertisements from all over the
                    world
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                A subscription to SIAM News is provided FREE when you become a
                member of SIAM.
              </p>
            </div>
          </div>

          {/* Right Column - Stats/Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users size={20} className="mr-3 text-emerald-500" />
                  <span>14,000+ Members</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen size={20} className="mr-3 text-emerald-500" />
                  <span>16 Journals</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen size={20} className="mr-3 text-emerald-500" />
                  <span>400+ Books</span>
                </div>
              </div>
            </div>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_price.png"
                alt="Get a Quote"
                className="w-full h-auto"
              />
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src="/images/free_trail.png"
                alt="Free Trial"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherSIAM;
