import { Link } from "react-router-dom";
import { ArrowLeft, Layers, Monitor, Book } from "lucide-react";

export default function PublisherPrimalPictures() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <span className="text-4xl font-bold text-white">
                Primal Pictures
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Primal Pictures
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Primal Pictures was established in 1991 with the goal of creating
              the only complete and medically accurate 3D model of the human
              anatomy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="http://www.primalpictures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ArrowLeft className="ml-2 rotate-180" size={18} />
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
          {/* Products Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Key Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Book className="mr-3 text-emerald-600" />
                  Anatomy & Physiology Online
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold">
                  – Laying the foundations!
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>
                    Make learning anatomy and physiology more engaging and
                    effective for your students with Anatomy & Physiology
                    Online!
                  </strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>
                    Published as 19 comprehensive modules based on a body system
                    approach:
                  </strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>
                    Body Plan & Organization – Homeostatis – Chemistry – Cell
                    Biology – Histology – Integumentary – Skeletal – Muscular –
                    Nervous – Special Senses – Endocrine – Blood –
                    Cardiovascular – Lymphatics & Immunity – Respiratory –
                    Digestive – Metabolism – Urinary – Fluid, Electrolyte &
                    Acid-Base Balance – Reproductive.
                  </strong>
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Each module has been designed to function as a stand-alone
                    resource – as well as part of a compressive program - so
                    students can work through modules in the order that best
                    fits with the curriculum of their particular course
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Monitor className="mr-3 text-emerald-600" />
                  Anatomy.tv
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>
                    – Enhancing teaching and learning for hundreds of health
                    science programs.
                  </strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>
                    Engaging – Easy to use – Accurate – Comprehensive – Flexible
                    – Fun
                  </strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Anatomy.tv utilizes Primal's renowned library of accurate and
                  engaging 3D anatomy models to convey complex anatomy in an
                  easy-touse and interactive format. This fabulous 3D anatomy is
                  complemented and given context by a vast library of other
                  content – labeled dissection slides, clear and easy to use
                  biomechanics and muscle function animations, annotated
                  illustrations, movie clips of surgical procedures, treatment
                  and rehabilitation, clinical photographs, MRI linked to cross
                  sectional anatomy and more! From detailed and accurate
                  regional and system based anatomy models to specialty specific
                  titles for dentistry, speech language pathology, kinesiology,
                  surgery and therapy there is an array of titles to suit
                  hundreds of medical and health science courses.
                </p>
                <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-decimal list-inside">
                  <li>
                    <strong>
                      Faculty has access to literally thousands of accurate
                      images, slides, illustration, animations and movies to
                      enhance and enliven lectures.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Students can learn and revise more effectively using the
                      wide variety of engaging multimedia content including
                      interactive, fully labeled 3D anatomy models – anytime,
                      anywhere.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Easily accessible through a login and password or IP
                      address anatomy.tv can be made available wherever and
                      whenever it is needed – for class or lab use, preparing
                      lectures, for study and revision.
                    </strong>
                  </li>
                </ol>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Layers className="mr-3 text-emerald-600" />
                  Primal Interactive Human
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Real-time 3D Body spanning 11 detailed regional models:
                  Head & Neck, Spine, Shoulder, Hand, Thorax, Abdomen, Pelvis
                  (Male/Female), Hip, Knee, and Foot & Ankle.
                </p>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Available Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Premier Library Package",
                  desc: "Comprehensive package with 50+ titles",
                },
                {
                  name: "Human Anatomy Package",
                  desc: "Regional, Systemic, and Interactive Human",
                },
                {
                  name: "Dentistry Package",
                  desc: "Dentistry, Dental Hygiene, Real-time 3D",
                },
                {
                  name: "Sports & Rehab",
                  desc: "Functional Anatomy, Resistance Training, Yoga, Pilates",
                },
                {
                  name: "Pelvic Health",
                  desc: "Male & Female Pelvis, Urology",
                },
                {
                  name: "Regional Anatomy Series",
                  desc: "Focused regional anatomy titles",
                },
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {pkg.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Formats */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Available Formats
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Products are available as Online Subscriptions (Anatomy.tv),
              DVD-ROMs, and CD-ROMs to suit various institutional needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
