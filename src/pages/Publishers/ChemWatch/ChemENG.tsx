import React from "react";
import {
  ArrowLeft,
  BookOpen,
  Search,
  FileText,
  Database,
  Shield,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function ChemENG() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/publishers/chemwatch"
          className="flex items-center text-emerald-600 dark:text-emerald-400 mb-8 hover:underline transition-colors w-fit"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to ChemWatch Master
        </Link>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="flex items-center mb-6">
                <div className="h-16 w-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 text-sm font-bold border border-dashed border-gray-400 rounded-lg mr-6">
                  CHEMWATCH Logo
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Chemwatch SDS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Chemwatch provides SDS management and SDS authoring to keep your
                chemical management systems up to date.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Chemwatch maintains the world’s largest database of chemicals,
                with over 3,215,992 substances, 140M SDS (Safety Data Sheet),
                and chemical regulatory solutions that support local and global
                requirements in over 90 countries. Chemwatch is the global
                leader in chemicals management solutions. The access to this
                comprehensive database gives clients a unique edge over other
                chemical management providers.
              </p>
            </div>
            <div className="md:w-1/3 bg-emerald-50 dark:bg-emerald-900/20 p-8 flex items-center justify-center">
              <Shield
                size={120}
                className="text-emerald-200 dark:text-emerald-800 opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Chemicals Management Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                Chemicals Management:
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                Chemwatch provides holistic solutions to chemicals management,
                with a range of software packages suitable for small businesses
                to global enterprises. This includes data services and
                integrations with third party ERPs such as SAP.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Chemwatch encompasses the following features:
              </h3>
              <ul className="space-y-3">
                {[
                  "SDS management",
                  "Chemical registers and manifest",
                  "Risk assessments",
                  "Reports and documentation",
                  "Data services",
                  "Labelling, and so much more!",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Zap
                      className="mr-3 text-amber-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-8">
                Chemwatch Products:
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    GoldFFX
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    Image Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Software offers complete chemicals inventory solutions. On
                    top of SDS, this includes risk assessment reports and label
                    generation, chemical registers, and manifests.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Backpack
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    Image Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Backpack is a user-friendly online library for your SDS,
                    with automatic weekly updates. Try it for free if you have
                    fewer than 50 SDS to maintain.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Backpack Limited
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    Image Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Free trial of Backpack, up to 50 chemicals. Create your own
                    Chemicals Inventory System for FREE
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    CHEMERITUS
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    Image Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chemeritus combines chemicals management with comprehensive
                    supply chain solutions. This includes approvals, reports and
                    documentation, SiSoT (Scan in Scan out Technology), and web
                    services API integration.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    COSHH COBRA
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-16 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    Image Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete extensive Risk Assessments in under 30 seconds!
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    AuthorITe
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    is the easy way to author SDS for the products you
                    manufacture.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Packed with pre-classified substances, helpful suggestion
                    tools and a step-by-step method for authoring, archiving and
                    updating your SDS, AuthorITe meets the needs of the modern
                    chemist.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Applications Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mt-8">
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center underline">
                Mobile Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Smarter Suite is Chemwatch’s chemicals management mobile app. It
                combines the features of our current apps, SmartSuite and SiSoT
                mobile, enabling accessibility from a single location. Smarter
                Suite is a one-stop-shop for clients to access extensive health
                and safety information, including Risk Assessments, and to
                manage their chemical inventory, using barcoding via SiSoT.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mr-2">
                      1
                    </span>
                    Smarter Suite App:
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-40 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    App Screenshot Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Our new mobile app that combines both Smart Suite and SiSoT
                    Mobile in one. Chemicals management and assets management in
                    one app.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mr-2">
                      2
                    </span>
                    Smart AaaS (Audit as a Service) app:
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-700 h-40 w-full mb-4 flex items-center justify-center text-gray-400 text-xs border border-dashed border-gray-400 rounded">
                    App Screenshot Placeholder
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Chemwatch’s new Smart Audit as a Service (AaaS) tool is the
                    easier way to audit your chemical and article inventories,
                    by removing the need to create proprietary barcodes
                    compatible with Chemwatch systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Chemical Management Systems backed by the world's largest
                database of chemicals
              </h3>
              <p className="text-lg mb-8 opacity-90">
                With access to more than 150 million Chemical SDS, you can't go
                wrong!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    14,500+
                  </div>
                  <div className="text-sm opacity-90">
                    Chemical families maintained
                  </div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400 mb-2">
                    3,215,992+
                  </div>
                  <div className="text-sm opacity-90">
                    Substances in our library
                  </div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    150M+
                  </div>
                  <div className="text-sm opacity-90">SDS & counting</div>
                </div>
              </div>

              <p className="text-lg mb-4 opacity-90">
                Chemical regulatory solutions that support both local and global
                requirements
              </p>
              <p className="text-lg mb-8 opacity-90">
                Chemwatch products and services are used globally by more than
                5,000 organizations.
              </p>

              <div className="pt-8 border-t border-blue-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-emerald-400 font-bold">49+</span>{" "}
                  Languages supported.
                </div>
                <div>
                  <span className="text-emerald-400 font-bold">9,096+</span>{" "}
                  Lists maintained by regulatory team.
                </div>
                <div>
                  <span className="text-emerald-400 font-bold">123+</span>{" "}
                  Countries supported.
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Chemwatch Functions & Modules
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    User Interface (UI) & Main Toolbar:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    It includes all the visual elements like settings,
                    eLearning, help, and language that users interact with the
                    system.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Materials Search Panel and Product Screen:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Allows users to find information about chemicals and
                    products by searching using various criteria like product
                    name, synonym, chemical formula, or manufacturer's name. The
                    "Product Screen" typically refers to the display of search
                    results, where you can view and select specific chemical or
                    product.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Materials Search Table Columns:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    These columns can be customized by right-clicking within the
                    table. This table provides a central location to view
                    chemical information relevant to your manifest, and allows
                    for tailored views to suit specific needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Folders Tree Panel:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Where you can store your materials so that you can quickly
                    and easily bring up the SDSs materials used by you
                    organization generally, users will use the Folders directory
                    when separating materials based on internal departments or
                    non-site-specific details.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Copy SDS Demonstration:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Once we have found our correct material with the correct CAS
                    (Chemical Abstracts Service) number, we need to select the
                    material, to go into the documents table, to specify a
                    vendor.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    You do not want to copy a material into your folders from
                    the material search table,
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    otherwise, you will copy all vendors and their corresponding
                    SDS for that material.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Risk Assessment:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The Risk Module determines whether you complete the risk
                    assessment based on the ILO standards for hazardous
                    materials or by the UN standards for dangerous goods.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Part Numbers & Preferred Names:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Preferred names can be given to a material or specific
                    vendor documents to replace the material name in the
                    material search table.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Filter Settings:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Allow users to refine search results and manage chemical
                    data based on various criteria.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    SDS Settings:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The SDS settings allow the user to set the type of
                    information to be shown in the Chemwatch Gold SDS as well as
                    set preferred vendors for these documents.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    User Access:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The user access settings contain all the necessary steps to
                    create new users, assign permissions and determine site
                    access for users.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Approvals:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Approvals enable businesses and organizations to establish a
                    workflow whereby new materials can be scrutinized and
                    subject to approvals.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    System Dashboard:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The System Dashboard is a data analytics tool that allows
                    administrators and superusers to view a visual
                    representation of information across the Chemwatch
                    application.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Report Generator:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The report generator tool allows the user to create a
                    customized report of their manifest using almost an
                    unlimited amount of data from the materials SDS Reports will
                    be generated from the database.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Distributed Generation (D-Gen) Module:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    In this module you can look for a material using the screen
                    panel or look for an existing material from your folders or
                    manifest using the tree panel.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Fourth-Party Logistics (4PL) Module:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The 4PL tool ensures safe transport of dangerous goods by
                    offering packaging guidance, labelling assistance, and
                    documentation generation for various transport routes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Waste Management Module:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Simplify tracking and compliance with automated waste SDS,
                    waste codes, and definitions provided by certified chemists.
                    Benefit from advanced life-cycle tracking, waste burden
                    assessments, and reporting aligned with CSRD and GRI 306.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">
                    Industrial Hygiene Module:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Elevate risk assessments with real-time monitoring,
                    dashboard insights, and immediate alerts when sites approach
                    regulatory limits. Full audit trails help with root cause
                    analysis, while risk-based alerts identify potential
                    reproductive hazards and suggest administrative controls.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-3">
                At CHEMWATCH
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 italic">
                we provide SDS management and SDS authoring to keep your
                chemical management systems up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
