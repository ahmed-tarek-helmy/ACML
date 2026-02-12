import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  BookOpen,
  Activity,
  Beaker,
  Gift,
  Heart,
  Zap,
  User,
  Leaf,
} from "lucide-react";

export default function Publisher3BScientific() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between"><h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            3B Scientific
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
            <span className="text-4xl font-bold text-white">3B Scientific</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            Medical Education Simplified
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
            The worldwide leader in the anatomy market, specializing in the
            manufacturing and marketing of didactic material for scientific,
            medical, and patient education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.3bscientific.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Globe size={20} className="mr-2" />
              Visit Website
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="inline-flex items-center px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all transform hover:scale-105 shadow-lg border border-emerald-700"
            >
              Request Free Trial
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Activity className="mr-3 text-emerald-600" />
              About 3B Scientific
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                The international group of companies 3B Scientific specializes
                in the manufacturing and marketing of didactic material for
                scientific, medical and patient education. The group’s oldest
                site in Budapest/Hungary began its manufacturing history in
                1819, making 3B Scientific the most experienced group of
                companies in the industry.
              </p>
              <p className="mb-4">
                The brand name 3B Scientific® is represented in over 100
                countries worldwide in the medical and educational sector.
                Achieving constantly growing sales, the 3B Scientific group is
                the worldwide leader in the anatomy market today.
              </p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                That is what 3B stands for today: Best quality, Best value, Best
                service!
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl shadow-sm p-8 border border-emerald-100 dark:border-emerald-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Product Line Highlights
            </h3>
            <ul className="space-y-3">
              {[
                "Artificial skeletons, torsos and human organ models",
                "Teaching aids for physics and technology",
                "Injection training arms & patient care mannequins",
                "Biology, zoology and chemistry models",
                "Anatomical charts and software",
                "SEIRIN® and Moxa Acupuncture Needles",
                "Therapy & Fitness products",
                "Massage & Treatment tables",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Categories */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center font-display">
          Comprehensive Product Range
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Acupuncture */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Zap
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Acupuncture
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Wide range of supplies including needles (Seirin, Moxom), charts,
              models, cupping glasses, and laser devices.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 ml-2">
              <li>• Needles & Accessories</li>
              <li>• Charts & Models</li>
              <li>• Laser Devices</li>
              <li>• Moxibustion</li>
            </ul>
          </div>

          {/* Anatomical Models */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <User className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Anatomical Models
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              World-renowned high-quality models for every part of the human
              body, from skeletons and musculature to organs and microanatomy.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 ml-2">
              <li>• Skeletons & Skulls</li>
              <li>• Torsos & Organs</li>
              <li>• Brain & Nervous System</li>
              <li>• Heart & Circulatory</li>
            </ul>
          </div>

          {/* Anatomical Charts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg mr-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900/50 transition-colors">
                <Activity
                  className="text-teal-600 dark:text-teal-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Anatomical Charts
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Extensive collection of charts and posters for anatomy, diseases,
              and medical education.
            </p>
          </div>

          {/* Anatomical Software */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg mr-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50 transition-colors">
                <BookOpen
                  className="text-cyan-600 dark:text-cyan-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Anatomical Software
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              3D anatomy software for detailed examination of the human body,
              including Primal Pictures.
            </p>
          </div>

          {/* Biology Supplies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Leaf
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Biology Supplies
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Zoology models, botany models, microscopes, slides, and lab
              equipment.
            </p>
          </div>

          {/* Chemistry */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                <Beaker
                  className="text-yellow-600 dark:text-yellow-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Molecular models, chemistry kits, and educational supplies for
              learning chemical structures.
            </p>
          </div>

          {/* Anthropological Findings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                <User
                  className="text-orange-600 dark:text-orange-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Anthropological Findings
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Replicas and models for anthropological study.
            </p>
          </div>

          {/* Geek Gifts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg mr-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors">
                <Gift className="text-pink-600 dark:text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Geek Gifts
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Fun scientific gifts, jewelry, T-shirts, mugs, and novelties.
            </p>
          </div>

          {/* Physics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                <Beaker
                  className="text-indigo-600 dark:text-indigo-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Physics
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Hands-on experiments for mechanics, optics, electricity,
              thermodynamics, and atomic physics.
            </p>
          </div>

          {/* Health Education */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                <Heart className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Health Education
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Visual aids and displays for nutrition, sex education, diabetes,
              substance abuse awareness, and patient education.
            </p>
          </div>

          {/* Simulators */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                <Activity
                  className="text-amber-600 dark:text-amber-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Simulators & Trainers
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Advanced tools for medical training including patient care
              Manikins, ALS trainers, and injection arms.
            </p>
          </div>

          {/* Therapy & Fitness */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-lime-100 dark:bg-lime-900/30 rounded-lg mr-4 group-hover:bg-lime-200 dark:group-hover:bg-lime-900/50 transition-colors">
                <BookOpen
                  className="text-lime-600 dark:text-lime-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Therapy & Fitness
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Equipment for physical therapy, rehabilitation, and fitness
              including massage tables, taping, and exercise gear.
            </p>
          </div>

          {/* Veterinary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-stone-100 dark:bg-stone-900/30 rounded-lg mr-4 group-hover:bg-stone-200 dark:group-hover:bg-stone-900/50 transition-colors">
                <Zap className="text-stone-600 dark:text-stone-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Veterinary
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Animal-specific specialization models and instrumentation.
            </p>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Global Presence
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With offices in Germany, USA, Japan, France, China, Italy, Spain,
            UK, Russia, Brazil, Thailand, South Korea, and Turkey, 3B Scientific
            serves customers in over 100 countries.
          </p>
        </div>
      </div>
    </div>
  );
}
