import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Search,
  FolderOpen,
  PenTool,
  Users,
} from "lucide-react";

export default function PublisherEndNote() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="mr-20 ml-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation */}
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20 mb-12 rounded-3xl overflow-hidden shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
                <span className="text-4xl font-bold text-white">EndNote</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                EndNote
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
                The industry standard software tool for publishing and managing
                bibliographies, citations, and references on the Windows and
                Macintosh desktop.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="http://www.endnote.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Globe size={20} className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="mailto:info@ACML-egypt.com"
                  className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-lg border border-emerald-400"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About EndNote
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                Millions of researchers, scholarly writers, students, and
                librarians use EndNote to search online bibliographic databases,
                organize their references, images and PDFs in any language, and
                create bibliographies and figure lists instantly.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800">
                <p className="font-bold text-gray-900 dark:text-white mb-2">
                  ACML is the Authorized EndNote Distributor for the following
                  23 Arab countries:
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Afghanistan, Algeria, Bahrain, Djibouti, Egypt, Iraq, Iran,
                  Jordan, Kuwait, Lebanon, Libya, Mauritania, Moon Islands,
                  Morocco, Oman, Pakistan, Palestine, Qatar, Saudi Arabia,
                  Somalia, Tunisia, UAE, and Yemen.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <Search
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Search Online Databases
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Search bibliographic databases on the Internet just as easily as
                you search your own library. Access PubMed, Web of Science,
                Library of Congress, and hundreds more.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                  <FolderOpen
                    className="text-amber-600 dark:text-amber-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Organize References
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Create unlimited libraries, group references, and store up to 45
                files (PDFs, images) per reference. Find full text
                automatically.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <PenTool
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Cite While You Write™
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Create instant bibliographies in Microsoft Word, Apple Pages,
                and more. Watch the bibliography appear as you type. Includes
                over 5,000 bibliographic styles.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Users
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Collaborate
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Use EndNote Web to share groups, transfer references, and
                collaborate with colleagues and students seamlessly.
              </p>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="space-y-12 mb-12">
            {/* Search Features */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Search className="mr-3 text-blue-600 dark:text-blue-400" />
                Search Bibliographic Databases
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Search Internet
                  databases just as easily as your local library.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Open more than
                  4,300 predefined connection files.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Access hundreds
                  of remote databases (Web of Science, Ovid, PubMed, Library of
                  Congress).
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Support for MARC
                  formats and native language libraries.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Simple search
                  window for locating specific references.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Export directly
                  from Web of Science, Highwire Press, Ovid, OCLC, ProQuest.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Save and load
                  search strategies.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>Drag and drop
                  references between libraries (no importing required).
                </li>
              </ul>
            </section>

            {/* Organize Features */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FolderOpen className="mr-3 text-amber-600 dark:text-amber-400" />
                Organize References & Files
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Unlimited Libraries:</strong> Create libraries of any
                  size. 46 customizable reference types (Ancient Texts to Web
                  Pages) with up to 52 fields each. Unicode support.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Group References:</strong> Custom groups, smart groups
                  (auto-update), and combined groups. Drag-and-drop
                  organization.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Find Full Text:</strong> Automatically locate and
                  download full text PDF links to references.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Import & Search PDFs:</strong> Extract DOI data to
                  create records. Search contents of imported PDFs.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>File Attachments:</strong> Store up to 45 files (PDFs,
                  images) per reference.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Organize Images:</strong> Track charts, figures,
                  equations with captions and keywords.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Customize Display:</strong> Click-sort columns, choose
                  up to 8 fields to display.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Preview & Edit:</strong> Preview in 5,000+ styles.
                  Quick Edit tab for modifying while viewing PDFs.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Import Filters:</strong> Over 700 filters for online
                  providers (Ovid, EBSCO). Create custom filters.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Term Lists:</strong> Ensure consistent data entry with
                  glossaries for authors, journals (biomedicine, chemistry,
                  humanities included).
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <strong>Global Editing:</strong> Change Text, Change Field,
                  Move Field commands for mass updates.
                </li>
              </ul>
            </section>

            {/* Bibliography Features */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <PenTool className="mr-3 text-green-600 dark:text-green-400" />
                Cite While You Write™
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <strong>Instant Bibliographies:</strong> Works in Microsoft
                  Word, Apple Pages, OpenOffice, Mathematica. Citations appear
                  as you write.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <strong>Advanced Formatting:</strong> Handles tricky details
                  like:
                  <ul className="ml-6 mt-1 list-disc text-sm text-gray-600 dark:text-gray-400">
                    <li>Shortened forms in footnotes (e.g., "Ibid.")</li>
                    <li>Numbered text notes within bibliographies</li>
                    <li>Anonymous works options</li>
                    <li>Hanging indent options</li>
                    <li>Capitalization options for authors/titles</li>
                    <li>Composite styles (number and letter grouping)</li>
                  </ul>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <strong>5,000+ Styles:</strong> Predefined styles for leading
                  journals. Create or modify styles.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <strong>Word Templates:</strong> Built-in templates to guide
                  manuscript creation for publishers.
                </li>
              </ul>
            </section>

            {/* Collaboration Features */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="mr-3 text-purple-600 dark:text-purple-400" />
                Collaborate
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>Transfer
                  references between desktop and Web (including attachments).
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>Share EndNote
                  Web groups to simplify collaboration.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>Cite from local
                  and Web libraries in a single paper.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>Organize
                  publication lists for ResearcherID community.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>Work seamlessly
                  on desktop, Web, or both.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
