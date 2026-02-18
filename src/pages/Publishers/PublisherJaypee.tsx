import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Book,
  Video,
  FileText,
  ExternalLink,
  Globe,
} from "lucide-react";

export default function PublisherJaypee() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
                <img
                  src="/images/jaypee.png"
                  alt="Jaypee Logo"
                  className="h-20 object-contain brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/300x100/transparent/white?text=Jaypee";
                    e.currentTarget.className = "h-20 object-contain";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Jaypee Digital
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                A powerful, unparalleled comprehensive online health science
                platform for health care practitioners, educators, researchers,
                and students.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.jaypeedigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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

          {/* About Section - MISSING */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About Jaypee
            </h2>
            <p className="leading-relaxed mb-4">
              Jaypeedigital is powerful, unparalleled comprehensive online
              health science platform for health care practitioners, educators,
              researchers and students encompassing array of medical resource in
              the form of reference works, textbooks, videos, MCQs and journals.
              Jaypeedigital content reflect current, evidence based and expert
              information covering clinical diagnosis, laboratory studies,
              state-of-the-art surgical procedures, clinical techniques and
              cutting edge high quality videos from the best minds in the
              industry across the globe.
            </p>
            <p className="leading-relaxed">
              With Jaypeedigital, medical libraries can build a high quality
              collection of clinical and allied health science content from
              growing list of scholarly and award winning titles from Jaypee
              covering a broad range of medical, dentistry, nursing and allied
              health sciences subjects to meet the diverse need of health
              science students, academicians and professionals.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* E-Books */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Book className="mr-3 text-emerald-600" />
                E-Book Collection
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    800+ textbooks for medicine, dentistry, and nursing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    2200+ Professional and Reference books from the best minds
                    in the industry.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Thousands of MCQs, SBAs, SCE and other preparatory books
                    like USMLE, MRCP, FRCS, hands on guides to laboratory
                    studies, clinical diagnosis and experimental techniques.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Personalized features: bookmarking, notes, export.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Convenient and instant access to book content wherever and
                    whenever needed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Titles regularly reviewed by Doody’s and international top
                    class peer reviewed journals.
                  </span>
                </li>
              </ul>
            </div>

            {/* Videos */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Video className="mr-3 text-emerald-600" />
                Surgical Videos
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>4000+ high-quality videos of surgical procedures.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Specialties covered include cardiology, dermatology,
                    obstetrics and gynecology, ophthalmology, orthopedics,
                    otolaryngology, paediatrics, surgery (both general and
                    laparoscopy) and urology.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>fully downloadable videos in FLV and MP4 formats.</span>
                </li>
              </ul>
            </div>

            {/* MCQs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="mr-3 text-emerald-600" />
                MCQs & Testing
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Recently launched MCQ tab for Mock test.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Students get an opportunity to revise the syllabus before
                    their examinations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Trainees looking for postgraduate studies.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Academicians formulating tests.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Answer keys to the questions are provided with link to
                    explanations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    User may access the MCQs by logging into his or her sub user
                    account.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    The tests are saved in My Account tab of the user for future
                    reference.
                  </span>
                </li>
              </ul>
            </div>

            {/* E-Journals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Globe className="mr-3 text-emerald-600" />
                E-Journals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Partnerships with numerous international societies to deliver
                highly acclaimed journals.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  • Ian Donald Inter-University School of Medical Ultrasound
                </li>
                <li>• South Asia Federation of Obstetrics and Gynecology</li>
                <li>• International Federation of Gynecology & Obstetrics</li>
                <li>• International Society of Glaucoma Surgery</li>
                <li>• World Association of Laparoscopic Surgeons</li>
                <li>• Pan-American Trauma Society</li>
                <li>• Duke University Medical Centre</li>
                <li>• International Association of General Dentistry</li>
                <li>• and many more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
