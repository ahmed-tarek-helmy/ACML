import React from "react";
import {
  ExternalLink,
  Book,
  FileText,
  Globe,
  Layers,
  Database,
  Search,
} from "lucide-react";
import { proceedings } from "../../data/acmProceedings";
import {
  journals,
  magazines,
  affiliated,
  sigNewsletters,
} from "../../data/acmPublications";

const PublisherACM: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProceedings = proceedings.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.range?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[300px] h-[100px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              ACM Logo Placeholder
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ACM Digital Library (DL)
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            The world’s largest computing society, strengthening the
            profession's collective voice through strong leadership, promotion
            of the highest standards, and recognition of technical excellence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.acm.org/publications/digital-library"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
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
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Database
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About ACM Digital Library
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p>
                  The ACM Digital Library is a research, discovery and
                  networking platform containing a richly interlinked set of
                  connections among authors, works, institutions, and
                  specialized communities.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                  <Globe
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  About the ACM Organization
                </h3>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
                <p>
                  ACM brings together computing educators, researchers, and
                  professionals to inspire dialogue, share resources, and
                  address the field's challenges. As the world's largest
                  computing society, ACM strengthens the profession's collective
                  voice through strong leadership, promotion of the highest
                  standards, and recognition of technical excellence. ACM
                  supports the professional growth of its members by providing
                  opportunities for life‐long learning, career development, and
                  professional networking.
                </p>
                <p>
                  Founded at the dawn of the computer age, ACM's reach extends
                  to every part of the globe, with more than half of its 100,000
                  members residing outside the U.S. Its growing membership has
                  led to Councils in Europe, India, and China, fostering
                  networking opportunities that strengthen ties within and
                  across countries and technical communities. Their actions
                  enhance ACM's ability to raise awareness of computing's
                  important technical, educational, and social issues around the
                  world.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                  Special Interest Groups (SIGs)
                </h4>
                <p>
                  Special Interest Groups Form around ACM's Powerful, Vibrant
                  Communities. Networking opportunities in ACM's 37 Special
                  Interest Groups (SIGs) are always expanding, reflecting the
                  growth of computing's discrete disciplines and technical
                  communities. The leading representatives of their fields, ACM
                  SIGs sponsor annual conferences, workshops, and symposia
                  serving practitioner‐ and research‐based constituencies.
                  Because they provide objective arenas for novel, often
                  competing ideas, many of these meetings have become premier
                  global events.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                  Chapters: ACM's "Local Neighborhoods"
                </h4>
                <p>
                  ACM's broad‐based infrastructure supports more than 860
                  professional and student chapters worldwide. These "local
                  neighborhoods" offer opportunities for members to gain access
                  to critical research and establish personal networking
                  systems.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                  ACM, Member-driven, Volunteer-led
                </h4>
                <p>
                  ACM offers volunteer opportunities for members and non‐members
                  that create networking possibilities and enhance career
                  development. At the grassroots level, ACM volunteers serve a
                  growing international community of researchers, practitioners
                  and students by lending valuable assistance at conferences,
                  publications, webinars, and other events.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                  ACM Publications - Advancing Research
                </h4>
                <p>
                  As a leading global source for scientific information, ACM
                  promotes computer research and innovation through its
                  journals, magazines, and the proceedings of more than 170
                  annual conferences and symposia. ACM authors are among the
                  world's leading thinkers in computing and information
                  technologies, providing original research and firsthand
                  perspectives.
                </p>
              </div>
            </div>

            {/* Products Sections */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <Book
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Publications & Services
                </h3>
              </div>

              <div className="space-y-8">
                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    ACM Journals
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ACM’s high-impact, peer-reviewed journals publish emerging
                    and established computing research for both practical and
                    theoretical applications. Available in print and online,
                    these subscription-based scholarly journals offer content of
                    the highest scientific quality in their respective fields.
                  </p>
                  <a
                    href="http://dl.acm.org/pubs.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                  >
                    Browse ACM Journals{" "}
                    <ExternalLink size={14} className="ml-1" />
                  </a>

                  <div className="mt-4 h-64 overflow-y-auto custom-scrollbar pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                    <ul className="space-y-2">
                      {journals.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </span>
                            {item.range && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                {item.range}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    ACM Magazines
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ACM’s print and on-line magazines include its flagship
                    Communications of the ACM (CACM), which features trusted
                    insights for computing's leading professionals. CACM
                    provides in-depth coverage of emerging research in computer
                    science, new trends in information technology, and practical
                    applications.
                  </p>

                  <div className="mt-4 h-48 overflow-y-auto custom-scrollbar pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                    <ul className="space-y-2">
                      {magazines.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </span>
                            {item.range && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                {item.range}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    ACM Books
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ACM Books is a new series of scholarly research monographs
                    and graduate-level texts, authored by computer scientists
                    and practitioners at the forefront of computing technology.
                  </p>
                  <a
                    href="http://books.acm.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                  >
                    Visit ACM Books <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>

                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    SIG Newsletters
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Newsletters from ACM's Special Interest Groups, covering
                    specific areas of computing including programming languages,
                    graphics, and interaction.
                  </p>
                  <div className="mt-4 h-64 overflow-y-auto custom-scrollbar pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                    <ul className="space-y-2">
                      {sigNewsletters.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </span>
                            {item.range && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                {item.range}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    Affiliated Publications
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Publications from ACM affiliated organizations and
                    conferences.
                  </p>
                  <div className="mt-4 h-48 overflow-y-auto custom-scrollbar pr-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                    <ul className="space-y-2">
                      {affiliated.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </span>
                            {item.range && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                {item.range}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    ACM Conference Proceedings
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Conference proceedings capture the cutting edge of
                    innovation across the spectrum of computing fields by
                    publishing refereed research findings and invited papers
                    from ACM conferences, workshops and symposia.
                  </p>
                  <a
                    href="http://dl.acm.org/proceedings.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                  >
                    Browse Conference Proceedings{" "}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Conference Proceedings List */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mt-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mr-4">
                    <Layers
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    All Conference Proceedings
                  </h3>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredProceedings.length} results
                </div>
              </div>

              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search proceedings..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-4 max-h-[800px] overflow-y-auto custom-scrollbar pr-2">
                {filteredProceedings.length > 0 ? (
                  filteredProceedings.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.range}
                        </p>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                    No proceedings found matching your search.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links & Categories */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                ACM Products Overview
              </h3>
              <div className="space-y-4">
                {/* Journals/Transactions */}
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center">
                    <FileText size={16} className="mr-2" />
                    Journals & Transactions
                  </h4>
                  <div className="h-48 overflow-y-auto pr-2 text-sm text-gray-600 dark:text-gray-400 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                    <ul className="space-y-2">
                      <li>ACM Computing Surveys (CSUR)</li>
                      <li>ACM Journal of Computer Documentation (JCD)</li>
                      <li>
                        ACM Journal on Emerging Technologies in Computing
                        Systems (JETC)
                      </li>
                      <li>
                        ACM Letters on Programming Languages and Systems
                        (LOPLAS)
                      </li>
                      <li>
                        ACM Transactions on Accessible Computing (TACCESS)
                      </li>
                      <li>ACM Transactions on Algorithms (TALG)</li>
                      <li>ACM Transactions on Applied Perception (TAP)</li>
                      <li>
                        ACM Transactions on Architecture and Code Optimization
                        (TACO)
                      </li>
                      <li>ACM Transactions on Database Systems (TODS)</li>
                      <li>ACM Transactions on Graphics (TOG)</li>
                      <li>ACM Transactions on Information Systems (TOIS)</li>
                      <li>ACM Transactions on Internet Technology (TOIT)</li>
                      <li>Journal of the ACM (JACM)</li>
                      {/* Truncated list for display, representing the huge list in original */}
                      <li className="italic text-xs mt-1">
                        ...and many more (see website for full list)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Magazines */}
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center">
                    <Layers size={16} className="mr-2" />
                    Magazines
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>ACM Inroads</li>
                    <li>Communications of the ACM</li>
                    <li>Computers in Entertainment (CIE)</li>
                    <li>Crossroads / XRDS</li>
                    <li>Queue</li>
                    <li>Ubiquity</li>
                    <li>eLearn</li>
                    <li>interactions</li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href="https://www.acm.org/publications/digital-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium py-3 rounded-lg transition-colors"
                  >
                    View All Publications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherACM;
