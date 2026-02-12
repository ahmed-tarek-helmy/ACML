import React from "react";
import { ExternalLink, Award, CheckCircle } from "lucide-react";

const PublisherASTMPTP: React.FC = () => {
  const programs = [
    {
      name: "#2 Diesel Fuel",
      url: "https://www.astm.org/STATQA/DieselFuel.htm",
    },
    {
      name: "Concrete Masonry Units",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#concrete-masonry",
    },
    { name: "#6 Fuel Oil", url: "https://www.astm.org/STATQA/FuelOil.htm" },
    { name: "Cetane Testing", url: "https://www.astm.org/STATQA/Cetane.htm" },
    {
      name: "Aluminum (Chemical Analysis)",
      url: "https://www.astm.org/STATQA/aluminum.htm",
    },
    { name: "Crude Oil", url: "https://www.astm.org/STATQA/Crude_Oil.htm" },
    {
      name: "Aromatic Hydrocarbons",
      url: "https://www.astm.org/STATQA/AH.htm",
    },
    {
      name: "Engine Coolants Testing",
      url: "https://www.astm.org/STATQA/engine_coolants.htm",
    },
    {
      name: "Engine Oil Lubricants",
      url: "https://www.astm.org/STATQA/Engine_Oil.htm",
    },
    {
      name: "Elemental Analyses of Thermoplastics",
      url: "https://www.astm.org/STATQA/Elemental_Analyses.htm",
    },
    {
      name: "Flammability Plastics Testing",
      url: "https://www.astm.org/STATQA/FlamPlas.htm",
    },
    {
      name: "General Gas Oils",
      url: "https://www.astm.org/STATQA/gas_oil.htm",
    },
    {
      name: "Hydraulic Fluids & Oils",
      url: "https://www.astm.org/STATQA/hydraulicfluid.htm",
    },
    {
      name: "Dissolved Gas Analysis (DGA)",
      url: "https://www.astm.org/STATQA/DGA_WebText.htm",
    },
    {
      name: "Fuel Ethanol",
      url: "https://www.astm.org/STATQA/ETHANOL_ILCP.htm",
    },
    {
      name: "Diesel Exhaust Fluid Testing",
      url: "https://www.astm.org/STATQA/DieselExhaust.htm",
    },
    {
      name: "Insulating Fluid Quality (IFQ)",
      url: "https://www.astm.org/STATQA/IFQ.htm",
    },
    { name: "Gear Oil", url: "https://www.astm.org/STATQA/Gear_Oil.htm" },
    {
      name: "Base Oil Testing",
      url: "https://www.astm.org/STATQA/Base_Oil.htm",
    },
    {
      name: "Concrete",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#concrete",
    },
    {
      name: "Industrial Gear Oil",
      url: "https://www.astm.org/STATQA/Indus_GearOil.htm",
    },
    { name: "Biodiesel", url: "https://www.astm.org/STATQA/biodiesel.htm" },
    {
      name: "Petroleum Wax",
      url: "https://www.astm.org/STATQA/petroleum_wax.htm",
    },
    {
      name: "Portland Cement",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#portland",
    },
    {
      name: "Blended Cement",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#blended",
    },
    {
      name: "In-Service Oil Monitoring",
      url: "https://www.astm.org/STATQA/In_Service.htm",
    },
    {
      name: "In-Service Oil Monitoring Hydraulic Fluids/Oils",
      url: "https://www.astm.org/STATQA/hydro.htm",
    },
    {
      name: "Knit Fabrics",
      url: "https://www.astm.org/STATQA/Knit_Fabrics.htm",
    },
    {
      name: "Liquefied Petroleum Gas",
      url: "https://www.astm.org/STATQA/liquid_petro.htm",
      isNew: true,
    },
    {
      name: "Lubricating Grease",
      url: "https://www.astm.org/STATQA/Lub_Grease.htm",
    },
    {
      name: "Masonry Cement",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#masonry-cement",
    },
    {
      name: "Masonry Mortar",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#masonry-mortar",
    },
    {
      name: "Mechanical Testing of Metals",
      url: "https://www.astm.org/STATQA/steel.htm",
    },
    {
      name: "Motor Gasoline",
      url: "https://www.astm.org/STATQA/Motor_Gas.htm",
    },
    {
      name: "Multiplastics Using Centrally Prepared Specimens",
      url: "https://www.astm.org/STATQA/plastics_mech.htm",
    },
    { name: "Naphtha", url: "https://www.astm.org/STATQA/Naphtha.htm" },
    { name: "Octane Testing", url: "https://www.astm.org/STATQA/Octane.htm" },
    {
      name: "Pozzolan",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#pozzolan",
    },
    {
      name: "Plain Carbon & Low-Alloy Steel (Chemical Analysis)",
      url: "https://www.astm.org/STATQA/ptpcarbon.htm",
    },
    {
      name: "Plastic Film Testing",
      url: "https://www.astm.org/STATQA/Plastic_Film.htm",
    },
    {
      name: "Polyethylene Plastics Testing",
      url: "https://www.astm.org/STATQA/plastics_poly.htm",
    },
    {
      name: "Polypropylene Characterization Testing",
      url: "https://www.astm.org/STATQA/polyprop_mech.htm",
    },
    {
      name: "Reformulated Gasoline",
      url: "https://www.astm.org/STATQA/Reform_Gas.htm",
    },
    {
      name: "Stainless Steel (Chemical Analysis)",
      url: "https://www.astm.org/STATQA/ptpsteel.htm",
    },
    {
      name: "Steel Reinforcing Bar",
      url: "http://www.ccrl.us/Psp/PspProgramDescriptions.html#steel",
    },
    {
      name: "Thermal Analysis of Plastics (DSC, DSC (OIT) & TGA)",
      url: "https://www.astm.org/STATQA/ThermalAnalysis.htm",
    },
    { name: "Turbine Oil", url: "https://www.astm.org/STATQA/Turbine_Oil.htm" },
    {
      name: "Ultra-Low Sulfur Diesel Fuel",
      url: "https://www.astm.org/STATQA/SulfurDiesel.htm",
    },
    {
      name: "Water Activity in Whole Hemp Flower",
      url: "https://www.astm.org/STATQA/waterActivity.htm",
      isNew: true,
    },
    { name: "Woven Fabrics", url: "https://www.astm.org/STATQA/textiles.htm" },
    {
      name: "Yarn & Thread Performance Testing",
      url: "https://www.astm.org/STATQA/Yarn_Web.htm",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[150px] h-[50px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ASTM Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            ASTM Proficiency Testing Program (PTP)
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Statistical quality assurance programs enabling laboratories to
            assess their performance worldwide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.astm.org"
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
              Request Information
            </a>
          </div>
        </div>
      </div>

      {/* Main Content - Container */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden p-8 space-y-12 text-gray-700 dark:text-gray-300">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Award className="mr-3 text-blue-600 dark:text-blue-400" />
              About ASTM Proficiency Testing Programs
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                ACML is now the local agent for ASTM Proficiency Testing
                programs PTP which are statistical quality assurance programs
                that enable laboratories to assess their performance in
                conducting test methods within their own laboratories when their
                data are compared against other laboratories that participate
                worldwide in the same program.
              </p>
              <p className="mb-4">
                As a program participant, you receive different samples
                (representative of the product line) for each test cycle,
                electronic data submission forms, and test instructions. Your
                laboratory performs the test that you normally conduct within
                your own facility using the specified ASTM methods cited in the
                program. Upon completing the tests, each laboratory
                electronically submits their test data to ASTM for use in
                generating statistical summary reports. Final summary reports,
                provided in electronic format, contain:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Each participating laboratory's test results (coded for
                  confidentiality)
                </li>
                <li>Statistical analysis of test data</li>
                <li>Charts plotting test results versus laboratory code</li>
                <li>Other pertinent information</li>
              </ul>
              <p className="mb-4">
                The final statistical summary reports will help your laboratory:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Monitor strengths and weaknesses of your laboratory's
                  performance
                </li>
                <li>
                  Periodically compare test results and calculated statistical
                  parameters with other laboratories worldwide
                </li>
                <li>
                  Demonstrate proficiency in the specific analysis to meet
                  laboratory accreditation requirements
                </li>
              </ul>
              <p className="mb-4 font-semibold text-emerald-600 dark:text-emerald-400">
                Worldwide participation allows every laboratory to achieve a
                competitive edge in the marketplace!
              </p>
            </div>
          </section>

          {/* Programs List Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <CheckCircle className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Proficiency Testing Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {programs.map((program, index) => (
                <a
                  key={index}
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <ExternalLink
                    size={16}
                    className="mr-2 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {program.isNew && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-1">
                        NEW -{" "}
                      </span>
                    )}
                    {program.name}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Download Form Section */}
          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Please download the form from here:
            </p>
            <a
              href="mailto:info@ACML-egypt.com?subject=ASTM PTP Form Request"
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
            >
              Request PTP Form
              <ExternalLink size={18} className="ml-2" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PublisherASTMPTP;
