import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Settings,
  PenTool,
  BarChart,
} from "lucide-react";

const PublisherPTC = () => {
  const mainProducts = [
    {
      title: "PTC Creo",
      desc: "Scalable, interoperable suite of product design software leveraging 2D CAD, 3D CAD, parametric & direct modeling.",
      link: "http://www.ptc.com/product/creo",
    },
    {
      title: "PTC Windchill",
      desc: "Comprehensive PLM software to manage products through all phases of the product lifecycle.",
      link: "http://www.ptc.com/product-lifecycle-management/windchill",
    },
    {
      title: "PTC Arbortext",
      desc: "End-to-end dynamic publishing solution that streamlines how organizations create, manage and publish technical information.",
      link: "http://www.ptc.com/product/arbortext",
    },
    {
      title: "PTC Mathcad",
      desc: "Math software that allows you to solve, analyze and share your most vital engineering calculations.",
      link: "http://ptc.com/product/mathcad",
    },
    {
      title: "PTC Integrity",
      desc: "ALM and systems engineering capabilities that enable cross-discipline collaboration and improve time to market.",
      link: "http://www.ptc.com/application-lifecycle-management/integrity",
    },
    {
      title: "ThingWorx",
      desc: "First loT platform designed to build and run the applications of the connected world.",
      link: "http://ptc.com/product/thingworx",
    },
  ];

  const specialtyProducts = [
    {
      title: "Vuforia Studio",
      desc: "Author and publish scalable AR experiences.",
    },
    { title: "Vuforia Chalk", desc: "Real-time remote assistance with AR." },
    {
      title: "Vuforia Expert",
      desc: "Create step-by-step AR instructions for frontline workers.",
    },
    {
      title: "Kepware",
      desc: "Connect industrial equipment to IoT platforms.",
    },
    {
      title: "PTC FlexPLM",
      desc: "Retail PLM for merchandising and line planning.",
    },
    { title: "Servigistics", desc: "Service parts management capabilities." },
    {
      title: "PTC Warranty",
      desc: "Analytics to detect issues and anticipate service needs.",
    },
    {
      title: "ThingWorx IIoT",
      desc: "Industrial IoT Platform for rapid application development.",
    },
    { title: "Creo Elements", desc: "Direct modeling approach to 3D CAD." },
    {
      title: "ThingWorx Navigate",
      desc: "Role-based app for accessing product information.",
    },
    {
      title: "Creo CADDS 5",
      desc: "Specialized CAD/CAM software for shipbuilders.",
    },
    {
      title: "Developer Tools",
      desc: "Suite for developing complex, mission-critical systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/PTC.png"
                alt="PTC Logo"
                className="h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=PTC";
                  e.currentTarget.className = "h-12 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product & Service Innovation
            </h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Technology solutions that transform the way you create, operate,
              and service products in a smart, connected world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ptc.com/"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                  <Cpu
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About PTC
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  PTC delivers technology solutions that transform the way you
                  create, operate and service products. PTC solutions enable you
                  to achieve Product and Service Advantage in a smart, connected
                  world.
                </p>
                <p className="mb-4">
                  We're at the early stages of a fundamental transformation,
                  marking what could be one of the most significant disruptions
                  to the manufacturing industry since the Industrial Revolution.
                  As one of the world's largest and fastest-growing technology
                  companies, PTC helps manufacturing leaders address these
                  transformative forces to achieve and sustain product and
                  service advantage.
                </p>
                <p className="mb-4">
                  PTC solutions for Computer Aided Design (CAD), Product
                  Lifecycle Management (PLM), Application Lifecycle Management
                  (ALM), Service Lifecycle Management (SLM), and Internet of
                  Things (IoT) enable process transformation and deliver
                  closed-loop lifecycle management for products and services
                  that are increasingly smart and connected. Our solutions help
                  you optimize the activities within individual functions of
                  your organization, and align them across your entire
                  enterprise—from engineering to supply chain and manufacturing,
                  to sales and service.
                </p>
                <p>
                  Today, PTC works with more than 28,000 businesses around the
                  world to help them create, operate, and service products in
                  rapidly-evolving, globally distributed manufacturing
                  industries, including industrial equipment, automotive, high
                  tech and electronics, aerospace and defense, retail, consumer,
                  and medical devices.
                </p>
              </div>
            </div>

            {/* Main Products Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Settings
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Main Products
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {mainProducts.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-between">
                      {product.title}
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialty Products Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <PenTool
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Specialized Solutions
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {specialtyProducts.map((product, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200 block">
                        {product.title}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {product.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
                  <BarChart size={20} className="mr-3 text-emerald-500" />
                  <span>28,000+ Customers</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Settings size={20} className="mr-3 text-emerald-500" />
                  <span>IoT & AR Leaders</span>
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

export default PublisherPTC;
