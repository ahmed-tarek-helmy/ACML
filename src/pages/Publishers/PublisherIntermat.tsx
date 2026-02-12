import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const PublisherIntermat = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-green-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <span className="text-4xl font-bold text-emerald-800">
                IHS Intermat
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IHS Intermat Solutions
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Advanced solutions for engineering and physical science databases.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ihs.com/info/sc/e/intermat/about.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              About IHS Intermat Solutions
            </h2>

            <p className="text-center font-bold text-lg mb-6">
              Cleanse, Standardise and Enhance Industrial MRO Data
            </p>

            <p className="leading-relaxed mb-6">
              IHS Intermat Solutions specialises in the standardisation and
              enrichment of data used to identify a wide variety of maintenance,
              repair and operations (MRO) inventory items, such as pipes,
              valves, seals, bearings and associated plant equipment.
            </p>

            <p className="leading-relaxed mb-6">
              MRO parts and materials generally have very high procurement costs
              relative to their value. However, management and procurement of
              MRO supplies is usually outside the core competency of most
              businesses and is often neglected and poorly managed. IHS Intermat
              Solutions pioneered the standardisation of industrial MRO parts
              information 28 years ago, and since that time has remained the
              market leader in helping the Global 2000 optimise and manage their
              MRO data.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Clean Structured Data for ERP, EAM and MDM Systems
            </h3>

            <p className="leading-relaxed mb-6">
              IHS Intermat Solutions finds that MRO parts information of many
              asset-intensive organisations is composed of unstructured
              "free-form" text, entered in a variety of ways, resulting in parts
              descriptions that are incomplete, inconsistent and non-comparable.
            </p>

            <p className="leading-relaxed mb-6">
              With IHS Intermat Solutions you can restructure and redefine your
              MRO item data, so you can operate more efficiently, accurately,
              and cost-effectively. Our solutions improve the data that feeds
              Enterprise Resource Planning (ERP), Enterprise Asset Management
              (EAM), and Master Data Management (MDM) systems. For more
              information on how Intermat can help your company please see our{" "}
              <a
                href="http://a1024.g.akamai.net/f/1024/13859/1d/ihsgroup.download.akamai.com/13859/engineering//intermat/intermat-demo.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Product Demonstration
              </a>{" "}
              or view our{" "}
              <a
                href="http://www.ihs.com/info/sc/e/intermat/about.aspx#t4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Intermat brochures
              </a>
              .
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Reduce Inventory, Downtime, and Procurement Costs
            </h3>

            <p className="leading-relaxed mb-4">
              You'll realise tangible and sustainable cost benefits through:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Eliminating excess inventory and procurement costs</li>
              <li>
                Improving plant and equipment throughput, and reducing downtime
              </li>
              <li>
                Realising maximum benefits from your Enterprise Resource
                Planning (ERP), Enterprise Asset Management (EAM), and Master
                Data Management (MDM) systems
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Return on Investment (ROI)
            </h3>

            <p className="leading-relaxed mb-4">
              Our customers have realised strong internal rates of return (IRR)
              ranging from 150% to 350%.
            </p>

            <p className="leading-relaxed">
              Many of our customers have recognised this large ROI in just three
              to six months after project completion. IHS Intermat specialise in
              providing customers with immediate tangible benefits, as well as
              creating a sustainable environment to continue to capitalise on
              these benefits.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherIntermat;
