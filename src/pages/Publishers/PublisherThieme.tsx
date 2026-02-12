import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Book,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

const PublisherThieme: React.FC = () => {
  const ebookSpecialties = [
    "Anatomy",
    "Audiology",
    "Basic Sciences",
    "Chemistry",
    "Clinical Sciences",
    "Dentistry",
    "Dermatology",
    "Internal Medicine",
    "Neurology",
    "Neurosurgery",
    "Nutrition",
    "Oncology",
    "Ophthalmology",
    "Orthopedic Surgery",
    "Osteopathy & Manual Medicine",
    "Otolaryngology",
    "Pathology",
    "Radiological Technology",
    "Radiology",
    "Student Education",
  ];

  const ejournalsSpecialties = [
    "Anesthesiology, Critical Care, and Emergency Medicine",
    "Biology",
    "Cardiology",
    "Chemistry",
    "Complementary Alternative Medicine",
    "Critical Care",
    "Dentistry and Dental Surgery",
    "Dermatology",
    "Endocrinology and Metabolism",
    "ENT - Audiology, Phoniatrics",
    "Gastroenterology, Hepatology",
    "General and Internal Medicine",
    "Geriatrics",
    "Hematology",
    "Homeopathy",
    "Kinesitherapy",
    "Manual Medicine",
    "Manual Therapy",
    "Naturopathy and Complementary Medicine",
    "Neurology, Psychiatry, Psychology",
    "Neurorehabilitation",
    "Neurosurgery",
    "Nursing",
    "Obstetrics, Gynecology, Perinatology",
    "Occupational Therapy",
    "Oncology",
    "Ophthalmology",
    "Orthopedics and Orthopedic Surgery",
    "Osteopathy",
    "Pediatrics",
    "Pharmacy",
    "Physiotherapy",
    "Phytotherapy",
    "Plastic Surgery",
    "Pneumology",
    "Politics, Man and Health",
    "Psychotherapy",
    "Radiology, Nuclear Medicine and Medical Imaging",
    "Rheumatology",
    "Speech Therapy",
    "Sports Medicine",
    "Sports Therapy",
    "Surgery",
    "Urology",
    "Veterinary Medicine",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">{/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-sky-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
              <img
                src="/images/thieme_clip_image001.jpg"
                alt="Thieme"
                className="h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/300x100/transparent/white?text=Thieme";
                  e.currentTarget.className = "h-12 object-contain";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thieme Publishers
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Award-winning international medical and science publisher serving
              health professionals and students for more than 125 years.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.thieme.com/index.php"
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
                  <Stethoscope
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About Thieme
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <div className="mb-6 rounded-xl overflow-hidden shadow-md float-right ml-6 w-full md:w-1/2">
                  <img
                    src="/images/Thieme4.png"
                    alt="Thieme Office"
                    className="w-full h-auto object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <p className="mb-4">
                  Thieme is an award-winning international medical and science
                  publisher serving health professionals and students for more
                  than 125 years. Thieme promotes the latest advancements in
                  clinical practice, publishes the latest research findings,
                  advocates medical education and is known for the high quality
                  and didactic nature of its books, journals, and electronic
                  products.
                </p>
                <p className="mb-4">
                  With more than 900 employees worldwide, Thieme maintains
                  offices in seven cities, including New York, Beijing, Delhi,
                  Stuttgart and three other locations in Germany.
                </p>
                <p className="mb-4">
                  In addition to publishing 70 new book titles every year,
                  Thieme publishes more than 130 medical and scientific journals
                  both in traditional print and electronic format, a number of
                  which are printed on behalf of professional societies, as well
                  as dozens of online products.
                </p>
                <p>
                  The Thieme Medical Publishing Group is one of the few
                  publishing firms that remains a family owned and run business.
                  With the same dedication that Georg Thieme had over a century
                  ago, Thieme still stands apart from its competitors by
                  emphasizing high standards of quality in content and
                  presentation in all of its products.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>

            {/* Products Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Book className="mr-3 text-emerald-600" />
                Products
              </h3>

              {/* E-Book Library */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                  1. Thieme E-Book Library
                  <a
                    href="http://ebooks.thieme.com/catalog/show/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </h4>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6">
                  <p>
                    The Thieme E-Book Library is an acclaimed online collection
                    of lavishly illustrated full-color downloadable textbooks
                    from Thieme’s renowned Color Atlases and Flexibook series.
                    It is exclusively available by institutional subscription.
                    Each electronic book retains the outstanding educational
                    utility of the print version, including exquisite full-color
                    illustrations and instructive text – plus a powerful search
                    function to help users easily locate topics across the
                    entire collection.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    <li>Focused coverage of every clinical course</li>
                    <li>
                      Practical two-page units with clear text & illustrations
                    </li>
                    <li>Ideal course supplement for students & educators</li>
                    <li>Essential research resource for scientists</li>
                    <li>Constant expansion with new topics</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                    Specialties Covered
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    {ebookSpecialties.map((spec, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* E-Journals */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
                  2. Thieme E-Journals
                  <a
                    href="http://www.thieme.com/journals/246-thieme-ejournals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </h4>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6">
                  <p className="font-medium">
                    The online journal service of the Thieme Publishing Group
                    giving you access to some 130 medical and scientific
                    journals.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                    Subject List
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {ejournalsSpecialties.map((spec, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Student Education
              </h3>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg mb-4">
                <GraduationCap
                  className="text-emerald-600 dark:text-emerald-400 mb-2"
                  size={32}
                />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Thieme E-Book Library covers every course in the medical
                  school curriculum to help students master critical subjects.
                </p>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 pt-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.thieme.com/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Thieme Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherThieme;
