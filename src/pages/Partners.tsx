import { Globe, BookOpen, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Partners() {
  const categories = [
    {
      title: "Academic Publishers",
      description:
        "Leading academic and scientific publishers from around the world",
      partners: [
        "Springer Nature",
        "Elsevier",
        "Wiley",
        "Taylor & Francis",
        "SAGE Publications",
        "Cambridge University Press",
        "Oxford University Press",
        "Pearson",
      ],
    },
    {
      title: "Professional Societies",
      description: "Technical and professional organizations worldwide",
      partners: [
        "IEEE (Institute of Electrical and Electronics Engineers)",
        "ACM (Association for Computing Machinery)",
        "ASME (American Society of Mechanical Engineers)",
        "ASTM International",
        "SAE International",
        "IET (Institution of Engineering and Technology)",
        "ACS (American Chemical Society)",
        "AIP (American Institute of Physics)",
      ],
    },
    {
      title: "Database Providers",
      description: "Comprehensive database and digital content providers",
      partners: [
        "ProQuest",
        "EBSCO Information Services",
        "Gale Cengage",
        "LexisNexis",
        "Thomson Reuters",
        "Web of Science",
        "Scopus",
        "JSTOR",
      ],
    },
    {
      title: "Standards Organizations",
      description: "International and national standardization bodies",
      partners: [
        "ISO (International Organization for Standardization)",
        "IEC (International Electrotechnical Commission)",
        "ANSI (American National Standards Institute)",
        "BSI (British Standards Institution)",
        "DIN (German Institute for Standardization)",
        "NFPA (National Fire Protection Association)",
        "UL Standards",
        "API (American Petroleum Institute)",
      ],
    },
    {
      title: "Technology Solutions",
      description: "Library automation and technology service providers",
      partners: [
        "Ex Libris",
        "OCLC",
        "SirsiDynix",
        "Innovative Interfaces",
        "Follett",
        "TLC (The Library Corporation)",
        "Auto-Graphics",
        "Book Systems",
      ],
    },
    {
      title: "Specialized Publishers",
      description: "Publishers in specialized fields and disciplines",
      partners: [
        "Medical Publishers",
        "Legal Information Providers",
        "Engineering & Technology Publishers",
        "Business & Management Publishers",
        "Social Sciences Publishers",
        "Arts & Humanities Publishers",
        "Science & Technology Publishers",
        "Educational Publishers",
      ],
    },
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Partnerships with publishers and providers from North America, Europe, Asia, and beyond",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Coverage",
      description:
        "Access to millions of books, journals, standards, and digital resources",
    },
    {
      icon: Award,
      title: "Exclusive Agent",
      description:
        "Official representative for multiple international companies in the region",
    },
    {
      icon: TrendingUp,
      title: "Growing Portfolio",
      description:
        "Continuously expanding our network to bring you the latest resources",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Partners & Publishers
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              As the exclusive agent for numerous international companies, ACML
              brings you direct access to the world's leading publishers,
              database providers, and technology solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon
                    size={32}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partner Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We represent leading organizations across multiple categories
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
                      >
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                IEEE Top 100 Documents
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
                As an authorized IEEE partner, we provide access to the most
                referenced and downloaded technical documents in electrical
                engineering, computer science, and electronics.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Featured Collections Include:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                      •
                    </span>
                    IEEE Conference Proceedings
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                      •
                    </span>
                    Technical Standards and Specifications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                      •
                    </span>
                    Journals and Magazines
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-emerald-600 dark:text-emerald-400">
                      •
                    </span>
                    Books and eBooks
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                >
                  View IEEE Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Looking for a Specific Publisher or Resource?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our partnership network is extensive and constantly growing. If
              you need access to a specific publisher, database, or resource
              that you don't see listed, please contact us. We may already have
              access or can work to establish a new partnership to meet your
              needs.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Contact Us About Publishers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
