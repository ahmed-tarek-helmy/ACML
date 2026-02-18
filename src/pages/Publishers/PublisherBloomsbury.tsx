import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Book,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

const PublisherBloomsbury: React.FC = () => {
  const bloomsburyProducts = [
    {
      name: "Bloomsbury Collections",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-collections/",
    },
    {
      name: "Bloomsbury Cultural History",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-cultural-history/",
    },
    {
      name: "Bloomsbury Education and Childhood Studies",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-education-and-childhood-studies/",
    },
    {
      name: "Bloomsbury Fashion Central",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-fashion-central/",
    },
    {
      name: "Bloomsbury Food Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-food-library/",
    },
    {
      name: "Bloomsbury History: Theory & Method",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-history-theory-method/",
    },
    {
      name: "Bloomsbury Medieval Studies",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-medieval-studies/",
    },
    {
      name: "Bloomsbury Music and Sound",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-music-and-sound/",
    },
    {
      name: "Bloomsbury Philosophy Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-philosophy-library/",
    },
    {
      name: "Bloomsbury Video Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-video-library/",
    },
    {
      name: "Bloomsbury Visual Arts",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/bloomsbury-visual-arts/",
    },
    {
      name: "Churchill Archive",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/churchill-archive/",
    },
    {
      name: "Cite Them Right",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/cite-them-right/",
    },
    {
      name: "Drama Online",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/drama-online/",
    },
    {
      name: "Fairchild Books Interior Design Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/fairchild-books-interior-design-library/",
    },
    {
      name: "Human Kinetics Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/human-kinetics-library/",
    },
    {
      name: "Jessica Kingsley Publishers Library",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/jessica-kingsley-publishers-library/",
    },
    {
      name: "Maths Engine",
      url: "https://www.bloomsburyonlineresources.com/maths-engine/home",
    },
    { name: "Research Right", url: "https://bloomsburyresearchright.com/" },
    {
      name: "Screen Studies",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/screen-studies/",
    },
    {
      name: "Skills for Study",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/skills-for-study/",
    },
    { name: "Social Work Toolkit", url: "https://www.socialworktoolkit.com/" },
    {
      name: "Theology and Religion Online",
      url: "https://www.bloomsbury.com/us/discover/bloomsbury-digital-resources/products/theology-and-religion-online/",
    },
  ];

  const institutionBenefits = [
    "No limit on the number of simultaneous users",
    "Access by IP address, proxy server, Shibboleth, WAYFless URL and other standard authentication methods",
    "Convenient online account management service",
    "Support for outbound OpenURL linking from citations",
    "Digital Object Identifiers (DOIs)",
    "COUNTER 5 usage statistics",
    "MARC records at volume level for all book titles",
    "Institutional logo displayed on interface",
    "Conforms to accessibility standards for most Level A (Priority 1) and AA (Priority 2) success criteria of the Web Content Accessibility Guidelines (WCAG 2.0) developed by the Worldwide Web Consortium (W3C)",
    "Promotional materials available",
  ];

  const harryPotterLinks = [
    {
      name: "Accessible Editions and Other Languages",
      url: "https://www.bloomsbury.com/uk/harry-potter/accessible-editions-and-other-languages/",
    },
    {
      name: "Adult Editions",
      url: "https://www.bloomsbury.com/uk/harry-potter/adult-editions/",
    },
    {
      name: "Box Sets and Gift Editions",
      url: "https://www.bloomsbury.com/uk/harry-potter/box-sets-and-gift-editions/",
    },
    {
      name: "Companion Books",
      url: "https://www.bloomsbury.com/uk/harry-potter/companion-books/",
    },
    {
      name: "Hogwarts House Editions",
      url: "https://www.bloomsbury.com/uk/harry-potter/hogwarts-house-editions/",
    },
    {
      name: "Illustrated Editions",
      url: "https://www.bloomsbury.com/uk/harry-potter/illustrated-editions/",
    },
    {
      name: "The Classic Harry Potter Series",
      url: "https://www.bloomsbury.com/uk/harry-potter/the-classic-harry-potter-series/",
    },
  ];

  // Image placeholders from original Bloomsbury.htm
  const harryPotterImages = [
    {
      src: "Bloomsbury_files/image004.jpg",
      alt: "Harry Potter and the Philosopher's Stone (Welsh) cover",
      label: "Accessible Editions",
    },
    {
      src: "Bloomsbury_files/image005.jpg",
      alt: "Harry Potter and the Philosopher's Stone cover",
      label: "Adult Editions",
    },
    {
      src: "Bloomsbury_files/image006.jpg",
      alt: "Harry Potter Ravenclaw House Edition Paperback Box Set cover",
      label: "Box Sets & Gift Editions",
    },
    {
      src: "Bloomsbury_files/image007.jpg",
      alt: "The Harry Potter Wizarding Almanac cover",
      label: "Companion Books",
    },
    {
      src: "Bloomsbury_files/image008.jpg",
      alt: "Harry Potter Boxed Set: The Complete Collection (Adult Paperback) cover",
      label: "Hogwarts House Editions",
    },
    {
      src: "Bloomsbury_files/image009.jpg",
      alt: "Harry Potter and the Philosopher's Stone Illustrated cover",
      label: "Illustrated Editions",
    },
    {
      src: "Bloomsbury_files/image010.jpg",
      alt: "Harry Potter and the Prisoner of Azkaban cover",
      label: "Classic Series",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              {/* Logo image placeholder */}
              <div className="bg-white p-6 rounded-2xl mb-6 shadow-xl inline-block">
                <img
                  src="Bloomsbury_files/image001.png"
                  alt="Bloomsbury Publishing"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/300x80/7C3AED/white?text=Bloomsbury";
                    e.currentTarget.className = "h-12 object-contain";
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bloomsbury Publishing Plc.
              </h1>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                A leading independent publishing house, established in 1986,
                with authors who have won the Nobel, Pulitzer and Booker Prizes,
                and the originating publisher of the Harry Potter series.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.bloomsbury.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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

          {/* Back Link */}
          <div className="mb-6">
            <Link
              to="/publishers"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Publishers
            </Link>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Bloomsbury */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                    <BookOpen
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About Bloomsbury
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Bloomsbury Publishing is a leading independent publishing
                  house, established in 1986, with authors who have won the
                  Nobel, Pulitzer and Booker Prizes, and is the originating
                  publisher and custodian of the{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/harry-potter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-bold hover:underline"
                  >
                    Harry Potter
                  </a>{" "}
                  series. Bloomsbury has offices in{" "}
                  <strong>London, New York, New Delhi, Oxford</strong> and{" "}
                  <strong>Sydney</strong>. Within Bloomsbury's Academic
                  division, it publishes under Bloomsbury, as well as under a
                  number of prestigious and historic imprint names.{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Our Story
                  </a>{" "}
                  for how it all began.
                </p>
              </div>

              {/* Harry Potter Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mr-4">
                    <Award
                      className="text-red-600 dark:text-red-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    <a
                      href="https://www.bloomsbury.com/uk/harry-potter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 dark:text-red-400 hover:underline"
                    >
                      Harry Potter
                    </a>
                  </h2>
                </div>
                <p className="text-blue-700 dark:text-blue-300 font-semibold mb-3">
                  Bloomsbury is the originating publisher and custodian of the
                  Harry Potter series.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Welcome to the home of Harry Potter books! From children's
                  paperbacks to stunning illustrated editions and gorgeous
                  boxsets, magic is only the turn of a page away..
                </p>

                {/* Harry Potter Image Placeholders Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {harryPotterImages.map((img) => (
                    <div key={img.label} className="flex flex-col items-center">
                      <div
                        className="image-placeholder w-full aspect-[2/3] bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden"
                        data-original={img.src}
                        title={img.alt}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              e.currentTarget.style.display = "none";
                              parent.innerHTML = `<span class="text-xs text-gray-400 dark:text-gray-500 text-center px-2">${img.alt}</span>`;
                            }
                          }}
                        />
                      </div>
                      <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Harry Potter Links */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {harryPotterLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium hover:underline"
                      >
                        <ExternalLink
                          size={14}
                          className="mr-1 flex-shrink-0"
                        />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission and Values */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                    <Users
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Mission and Values
                  </h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Our mission is to be a creative, entrepreneurial,
                    independent publisher of books, audiobooks and digital
                    content of excellence and originality and to bring these
                    works to a worldwide audience. Our purpose is to inform,
                    educate, entertain and inspire readers of all ages and
                    backgrounds. We champion a life-long love of reading and
                    learning and seek to help build a reading culture with all
                    the benefits which that brings society.
                  </p>
                  <p>
                    We want to create a working environment that stimulates
                    creativity and collaboration, is respectful of difference,
                    inclusive and ethical in its practice and supports
                    well-being. We are determined to nurture and develop our
                    authors and our employees to their highest potential and
                    know that our success is down to the passion, commitment and
                    hard work of our talented people. We recognize the urgent
                    need to help people from all backgrounds and identities to
                    become part of the global publishing industry, allowing
                    diverse voices to both reflect and shape our culture and
                    society.
                  </p>
                  <p>
                    We are committed to helping authors, both new and
                    established, to bring original and powerful works across an
                    array of genres and subjects to readers and learners
                    worldwide, sharing ideas, knowledge and experience, and
                    sometimes challenging convention. Our editorial decisions
                    are informed by a belief in the freedom of speech.
                  </p>
                </div>
              </div>

              {/* Adult Special Interest */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mr-4">
                    <Book
                      className="text-indigo-600 dark:text-indigo-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Adult Special Interest
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  Our special interest division was shortlisted for the British
                  Book Awards' Publisher of the Year, 2018 (in conjunction with
                  our trade list) and includes the following imprints:
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/nautical/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Adlard Coles
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/series/bbc-proms-guides"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    BBC Proms
                  </a>
                  , Bloomsbury Caravel, Bloomsbury China, Bloomsbury Continuum,
                  Bloomsbury Wildlife, Bloomsbury Reader,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/popular-science/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Sigma
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/sport-fitness/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Sport
                  </a>
                  , Burns &amp; Oates, Helm, Herbert Press, Conway, Green Tree,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Osprey Games
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Osprey Publishing
                  </a>
                  , Philip Wilson Publishers, Shire Publications, T&amp;A D
                  Poyser,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/discover/reeds-nautical-almanac/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Reeds
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/wisden/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Wisden
                  </a>
                  ,{" "}
                  <a
                    href="https://www.bloomsbury.com/uk/non-fiction/reference/"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Bloomsbury Yearbooks
                  </a>
                  .
                </p>
              </div>

              {/* Children's Division */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl mr-4">
                    <BookOpen
                      className="text-pink-600 dark:text-pink-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Children's Division
                  </h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Shortlisted for Children's Publisher of the Year 2018 for
                    both the Independent Publishing Group Award and the British
                    Book Awards, our children's consumer division includes the
                    bestselling authors J.K. Rowling, Michael Rosen, Sarah J.
                    Maas, Debi Gliori, Sarah Crossan, Lucy Worsley, Sibeal
                    Pounder, Louis Sachar and Neil Gaiman. The imprints in the
                    division are{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Children's Books
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/young-adult/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury YA
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/childrens/books-for-0-5/activity-sticker-books/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Activity Books
                    </a>
                    .
                  </p>
                  <p>
                    Our education division incorporates the imprints{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/education/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Education
                    </a>
                    , Featherstone and Andrew Brodie.
                  </p>
                </div>
              </div>

              {/* Academic & Professional Division */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Award
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Bloomsbury Academic and Professional Division
                  </h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    The Academic &amp; Professional division has lifelong
                    learning at the heart of our business, publishing works of
                    excellence and originality to inspire, educate and inform,
                    and believing that intellectual curiosity and educational
                    achievement go hand-in-hand.
                  </p>
                  <p>
                    The{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Academic
                    </a>{" "}
                    division specialises in the arts, humanities and social
                    sciences, law, business and management, and study skills. It
                    includes{" "}
                    <a
                      href="https://www.bloomsburyfashioncentral.com/products/fairchild-books"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Fairchild Books
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/law/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Hart Publishing
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/middle-east/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      I.B. Tauris
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/drama-performance-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Methuen Drama
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/drama-performance-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      The Arden Shakespeare
                    </a>
                    ,{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/discover/superpages/academic/celebrating-200-years-of-t-t-clark/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      T&amp;T Clark
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/academic/african-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Zed Books
                    </a>
                    . In 2021 we acquired{" "}
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-academic/red-globe-press/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Red Globe Press
                    </a>{" "}
                    from Macmillan Education Limited, as well as{" "}
                    <a
                      href="https://www.abc-clio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      ABC-CLIO
                    </a>
                    .
                  </p>
                  <p>
                    <a
                      href="https://www.bloomsburyprofessional.com/uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Professional
                    </a>{" "}
                    leads in UK and Ireland law, tax and accounting.
                  </p>
                  <p>
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-digital-resources/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Bloomsbury Digital Resources
                    </a>{" "}
                    provides creative online research and learning environments
                    that deliver excellence and originality.
                  </p>
                  <p>
                    The division has won the Bookseller Industry Award for
                    Academic, Educational &amp; Professional Publisher of the
                    Year three times: in 2013, 2014 and 2021.
                  </p>
                </div>
              </div>

              {/* About Products & Benefits */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                    <Book
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About Products
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
                  Our products cover a range of disciplines in the Humanities,
                  Social Sciences, Visual Arts, and Performing Arts.
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-4">
                  All of Bloomsbury's Digital Resources offer these benefits for
                  institutions:
                </p>
                <ul className="space-y-2">
                  {institutionBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* end left column */}

            {/* Right Column - Quick Links & Products */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
                {/* Logo placeholder */}
                <div
                  className="image-placeholder w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center mb-6 overflow-hidden"
                  data-original="Bloomsbury_files/image001.png"
                >
                  <img
                    src="Bloomsbury_files/image001.png"
                    alt="Bloomsbury Logo"
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        e.currentTarget.style.display = "none";
                        parent.innerHTML = `<span class="text-sm text-gray-400 dark:text-gray-500">Bloomsbury Logo</span>`;
                      }
                    }}
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <a
                      href="https://www.bloomsbury.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Bloomsbury Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/connect/about-us/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/academic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Academic Division
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/discover/bloomsbury-digital-resources/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Digital Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bloomsbury.com/uk/harry-potter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 font-semibold transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Harry Potter
                    </a>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-100 dark:border-gray-700 pb-2 underline">
                  Bloomsbury Products
                </h3>
                <ul className="space-y-2">
                  {bloomsburyProducts.map((product) => (
                    <li key={product.name}>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-1.5 text-sm text-gray-700 dark:text-gray-300 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors hover:underline"
                      >
                        <ExternalLink
                          size={13}
                          className="flex-shrink-0 mt-0.5 text-purple-500"
                        />
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* end grid */}
        </div>
      </div>
    </div>
  );
};

export default PublisherBloomsbury;
