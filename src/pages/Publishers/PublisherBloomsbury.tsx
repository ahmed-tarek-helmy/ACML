import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  BookOpen,
  Award,
  Globe,
  Book,
  ArrowLeft,
} from "lucide-react";

const PublisherBloomsbury = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
              <img
                src="https://www.bloomsbury.com/images/bloomsbury-logo.svg"
                alt="Bloomsbury Logo"
                className="h-12 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Bloomsbury Publishing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              A leading independent publishing house with a global reputation
              for excellence in academic, professional, adult, and children's
              publishing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.bloomsbury.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} className="mr-2" />
                Visit Website
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg border border-emerald-500"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Key Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-50 rounded-lg text-red-600 mr-4">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Adult Trade</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Includes immense commercial success with authors like Khaled
              Hosseini (The Kite Runner) and William Boyd. Houses the absolute
              list of cookery books including Heston Blumenthal and Hugh
              Fearnley-Whittingstall. Also includes successful sports books and
              the manicured list of high-quality paperbacks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 mr-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Children's Division
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Featuring the global phenomenon <strong>Harry Potter</strong>{" "}
              series by J.K. Rowling. Other successful authors include Neil
              Gaiman, Debi Gliori, and Benjamin Zephaniah.
            </p>
            <a
              href="https://www.bloomsbury.com/uk/childrens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
            >
              Visit Children's Section <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-50 rounded-lg text-green-600 mr-4">
                <Book className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Academic & Professional
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Specializing in the humanities, social sciences, and law. Winner
              of the Independent Academic, Educational & Professional Publisher
              of the Year two years running (2013 & 2014). Includes prestigious
              imprints like Methuen Drama, The Arden Shakespeare, and T&T Clark.
            </p>
            <a
              href="https://www.bloomsbury.com/uk/academic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
            >
              Visit Academic Section <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-50 rounded-lg text-purple-600 mr-4">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Global Reach</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Bloomsbury now has offices in London, New York, Sydney, and New
              Delhi. Our mission is to publish works of excellence and
              originality across all our divisions.
            </p>
          </motion.div>
        </div>

        {/* Additional Info / Values */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are an independent publisher with a strong entrepreneurial
            spirit. We value creativity, originality, and excellence. We are
            committed to our authors, our employees, and our readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublisherBloomsbury;
