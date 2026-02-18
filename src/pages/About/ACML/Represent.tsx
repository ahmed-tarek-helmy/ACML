import { Globe, ExternalLink } from "lucide-react";

export default function Represent() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const publishers = [
    {
      name: "American Institute of Physics (AIP) & APS",
      description:
        "The American Institute of Physics (AIP) is a membership corporation chartered in New York State in 1931 for the purpose of promoting the advancement and diffusion of the knowledge of physics and its application to human welfare.",
      territory: "Egypt, Sudan and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/AIP.htm",
      logo: "AIP",
    },
    {
      name: "American Petroleum Institute (API)",
      description:
        "The American Petroleum Institute (API) is the only national trade association that represents all aspects of America's oil and natural gas industry. API nearly 400 corporate members, from the largest major oil company to the smallest of independents, come from all segments of the industry.",
      territory: "Egypt",
      url: "http://www.api.org/",
      logo: "API",
    },
    {
      name: "American Society of Civil Engineers (ASCE)",
      description:
        "Founded in 1852, the American Society of Civil Engineers (ASCE) represents more than 133,000 members of the civil engineering profession worldwide, and is America's oldest national engineering society. ASCE's vision is to position engineers as global leaders building a better quality of life.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/ASCE.htm",
      logo: "ASCE",
    },
    {
      name: "ASLIB",
      description:
        "The English association provides consultancy and information services, publishes primary & secondary journals, conference proceedings, directories, and monographs.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20info/ACML-Publications.htm",
      logo: "ASLIB",
    },
    {
      name: "American Society Of Mechanical Engineers (ASME)",
      description:
        "ASME is the American Society Of Mechanical Engineers the publisher who can provide you and respond to all your requests about all the publications in printed and electronic form, in the field of mechanical engineers.",
      territory: "Egypt, Sudan and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/ASME.htm",
      logo: "ASME",
    },
    {
      name: "Association of Subscription Agents And Intermediaries -Middle East Branch (ASA)",
      description:
        "The ASA exists to achieve the highest standards of service for both customers and publishers, and to improve relationships and terms with publishers. The ASA aims to foster the use of a 'best practice' approach to customer and publisher service and to represent members' common interests to publishers, customers, representative and governmental organizations and associations worldwide.",
      territory: "Middle East Branch",
      url: "http://www.ACML-egypt.com/ASA-MEB/ASA_standards.htm",
      logo: "ASA",
    },
    {
      name: "ASTM",
      description:
        "Is one of the largest voluntary standards development organizations in the world-a trusted source for technical standards for materials, products, systems, and services. Known for their high technical quality and market relevancy, ASTM International standards have an important role in the information infrastructure that guides design, manufacturing and trade in the global economy.",
      territory: "Egypt",
      url: "http://www.astm.org/index.shtml",
      logo: "ASTM",
    },
    {
      name: "BCI",
      description:
        "One of the leading Danish companies that designs and delivers library furniture for more than 700 sites all over the world.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/BCI.htm",
      logo: "BCI",
    },
    {
      name: "Bentham Science",
      description:
        "A major STM journal publisher of 89 online and print journals, 200 plus open access journals, and related print/online book series, Bentham Science answers the informational needs of the pharmaceutical, biomedical and medical research community.",
      territory: "Egypt and Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/bentham.htm",
      logo: "Bentham",
    },
    {
      name: "Beta Verlag",
      description:
        "The German medical publishing house provides his products in Arabic language for Arab medical doctors, pharmacists, and dentists.",
      territory: "Egypt",
      url: "http://www.beta-publishing.com/",
      logo: "Beta",
    },
    {
      name: "Bowker",
      description:
        "The famous English publisher specialized in bibliographies, directories, abstracting, indexing services, library & information science abstracts 'LISA', and also books, journals, microfiche, and CD's.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/BowkerSAUR.htm",
      logo: "Bowker",
    },
    {
      name: "CAB International Publishing",
      description:
        "CABI is the successor organization to the Commonwealth Agricultural Bureau, the International Institute of Biological Control, the International Mycological Institute, the International Institute of Entomology and the International Institute of Parasitology... It is now an independent international organization with the registered name CAB International.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/CABI.htm",
      logo: "CABI",
    },
    {
      name: "ContentScan",
      description:
        "ContentScan's Dome™ product line employs advanced automated search and selection processes, strong content partnerships, and discipline-specific expert editorial input to provide a focused and productive search experience...",
      territory: "Egypt",
      url: "#",
      logo: "ContentScan",
    },
    {
      name: "Cambridge Scientific Abstracts (CSA)",
      description:
        "A privately owned American information company located in Bethesda, Maryland. Widely read print journals, Cambridge Scientific Abstracts (CSA) offers precision tools engineered to make conducting your research precise, quick, and cost-effective.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/CSA.htm",
      logo: "CSA",
    },
    {
      name: "ChemWatch",
      description:
        "ChemWatch provides full chemical management systems for any user of chemicals. ChemWatch is the world's largest supplier of independently researched material safety data sheets (MSDS) and other related documents. ChemWatch is an ISO9000 quality certified company.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/chemwatch/chemwatch.htm",
      logo: "ChemWatch",
    },
    {
      name: "Credo Reference (Formerly Xrefer)",
      description:
        "Credo Reference is a completely customizable ready-reference solution for learners and librarians. Its full-text, aggregated content covers every major subject... Formerly known as Xrefer, Credo's Ready-Reference and Specialist Reference services combine extensive content from multiple publishers...",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/credoreference.htm",
      logo: "Credo",
    },
    {
      name: "Conservation by Design",
      description:
        "A company dedicated to the design and supply of high quality conservation storage and display products all grouped together under the banner of the Time care collection.",
      territory: "Egypt",
      url: "http://www.conservation-by-design.co.uk/",
      logo: "CBD",
    },
    {
      name: "Dialog Corporation",
      description:
        "A leading American provider of innovative information, knowledge management, technology and eCommerce solutions to the corporate market.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Dialog.htm",
      logo: "Dialog",
    },
    {
      name: "EBSCO",
      description:
        "The famous American publisher specialized in directories, abstracting and indexing services, in most fields on CD-ROM and On-Line.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Ebsco.htm",
      logo: "EBSCO",
    },
    {
      name: "Economist Intelligence Unit (EIU)",
      description:
        "An American Company part of the same group that publishes The Economist, they take an international and impartial view of the world. They provide truly global context, explaining how regional and international trends affect developments in individual countries.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/eiu.htm",
      logo: "EIU",
    },
    {
      name: "End Note",
      description:
        "Millions of researchers, scholarly writers, students, and librarians use Endnote (patent pending) to search online bibliographic databases, organize their references, images and PDFs in any language, and create bibliographies and figure lists instantly.",
      territory: "Egypt, Sudan and Middle East",
      url: "http://www.endnote.com",
      logo: "EndNote",
    },
    {
      name: "Gas-Matters",
      description:
        "Gas Matters is a publications, database and research business dedicated to delivering industry defining insight and expert analysis on the global natural gas and LNG industry.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/gas-matters.htm",
      logo: "GasMatters",
    },
    {
      name: "Gateway World",
      description:
        "Gateway Worldwide is an Online Store, which provides Journals, Back Issues, Magazines, Audio Visuals, eBooks, Reference & Text Books, Scientific Equipments, Physical Training Materials, Library Supplies & Educational Materials.",
      territory: "Egypt, Sudan",
      url: "http://www.gateway-worldwide.com",
      logo: "Gateway",
    },
    {
      name: "Gaylord",
      description:
        "A leading American company strives to offer products that assist you in serving your patrons and help you manage every aspect of your library, from Model C book Chargers to the latest in library automation. Gaylord is introducing 750 new products...",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/Gaylord.htm",
      logo: "Gaylord",
    },
    {
      name: "Hannecke",
      description:
        "One of the largest international companies that specializes in library furniture, and all your library needs, from book stands, carousels, shelves,..etc., and all could be customized to your requirements.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/Hannecke.htm",
      logo: "Hannecke",
    },
    {
      name: "Hitachi",
      description:
        "Hitachi will breathe new life into the next era as symbolized by our corporate statement 'Inspire the Next' and will contribute to achieving a comfortable and abundant society as a 'Best Solutions Partner'.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/projectors.htm",
      logo: "Hitachi",
    },
    {
      name: "H.W.Wilson",
      description:
        "Get more of the Who, What, When, Where & Why…… How?! H.W. Wilson Full-Text. They are a leading American company specialized in international Full-text databases online and off line.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/HW-wilson.htm",
      logo: "HWWilson",
    },
    {
      name: "IEEE",
      description:
        "The IEEE and its predecessors, the AIEE and the IRE, date to 1884. From its earliest origins, the IEEE has advanced the theory and application of electro technology and allied sciences... ACML is Distributor for IEEE Electronic Library.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/IEEE/ieee_xplore.htm",
      logo: "IEEE",
    },
    {
      name: "IFLA",
      description:
        "A worldwide federation created to provide librarians around the world with a forum for exchanging ideas, promoting international co-operation, research and development in all fields of library activities.",
      territory: "Egypt",
      url: "http://www.ifla.org",
      logo: "IFLA",
    },
    {
      name: "Accuris",
      description:
        "A unique organization provides standards & specs from 450 organizations, the top 80 organizations, such as: ISO, ASTM, IEEE, BSI, DIN, JIS,….etc.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/IHS.htm",
      logo: "Accuris",
    },
    {
      name: "Information Today",
      description: "For details of this publisher please visite this web site.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/InfoToday.htm",
      logo: "InfoToday",
    },
    {
      name: "ISSN",
      description:
        "The ISSN (International Standard Serial Number) is an eight-digit number which identifies periodical publications as such, including electronic serials.",
      territory: "Egypt",
      url: "http://www.issn.org/",
      logo: "ISSN",
    },
    {
      name: "Jane's",
      description:
        "Jane's Information Group is a world-leading provider of intelligence and analysis on national and international defence, security and risk developments. Jane's is an independent organisation with an unrivalled reputation for accuracy, authority and impartiality",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/janes.htm",
      logo: "Janes",
    },
    {
      name: "Jaypee",
      description:
        "As one of the leading medical publishers Jaypee is committed to providing quality health science content to its readers. Jaypee publish all its books in English language and have translated many books in Arabic, Chinese, Portuguese, Italian, Spanish, Turkish etc...",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/jaypee.htm",
      logo: "Jaypee",
    },
    {
      name: "Knovel",
      description:
        "is aggregator web-based application in engineering fields. Knovel can build profile for engineering interested topics or any client engineering profile.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Knovel/KNOVEL.htm",
      logo: "Knovel",
    },
    {
      name: "Kno-Tech",
      description:
        "Kno-Tech specialist since 1996 in the area of product safety in general sense. Initially formed the basis for the retail-oriented technical Kno-Tech today. By looking at trends, such as RF-ID, and listen to (potential) clients Kno-Tech has a spectacular growth.",
      territory: "Egypt",
      url: "http://www.kno-tech.nl",
      logo: "KnoTech",
    },
    {
      name: "Leadership directory",
      description:
        "Leadership Directories, Inc. (LDI) provides high-quality contact information for the leaders of major United States government, business, professional, and nonprofit organizations.",
      territory: "Egypt, Sudan, Libya and Middle East",
      url: "http://www.leadershipdirectories.com/",
      logo: "Leadership",
    },
    {
      name: "LexisNexis",
      description:
        "LexisNexis Professional, the flagship European web research tool, is available with English, French & German interfaces. With a multitude of search and source options, this flexible product is ideal for the non-specialist end-user and the information professional alike.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/lexis.htm",
      logo: "LexisNexis",
    },
    {
      name: "Lift",
      description:
        "a system conquest the world. it all started with an idea. Otto Schubert invented an aluminium profile beam for browsing through cds. based on this brilliant idea, a company was formed which has now expanded to encompass all forms of media/entertainment software presentation.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/LIFT.htm",
      logo: "Lift",
    },
    {
      name: "LIBRARIAN (Integrated Library Management System)",
      description:
        "Software is a complete Library Management Software capable to manage all the functionalities of library and dissemination of information at the right time to the right people. Suitable for small to big libraries including medical and legal libraries, colleges, schools, universities...",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/Libraian/Librarian%20Main%20Page.htm",
      logo: "Librarian",
    },
    {
      name: "Library of Congress",
      description:
        "Who does not know the Library of Congress, the American Governmental organization that generates a wealth of bibliographic and cataloging information.",
      territory: "Egypt, Sudan and Middle East",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/libraryofcongress.htm",
      logo: "LoC",
    },
    {
      name: "Lloyd's Register",
      description:
        "IHS Fairplay is ISO certified for the provision of publishing and information services for the shipping industry including the provision of global on-line maritime asset tracking.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/lloyed.htm",
      logo: "Lloyds",
    },
    {
      name: "Nature Publishing Group (NPG)",
      description:
        "Nature Publishing Group (NPG) is the scientific publishing arm of Macmillan Publishers Ltd, combining the excellence of: Nature, Nature Research Journals, Nature Reviews, NPG Academic Journals and NP Reference publications...",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Nature.htm",
      logo: "Nature",
    },
    {
      name: "Neschen",
      description:
        "A German company, for over 50 years the name of filmolux has been synonymous with high quality book protection films, strengthening films, protection films, textile tape, marking tapes or book pockets for libraries.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Library%20Furniture/Neschen.htm",
      logo: "Neschen",
    },
    {
      name: "NewspaperDirect",
      description:
        "NewspaperDirect is the world leader in digital newspaper distribution. Founded in 1999... The company offers this service PressDisplay™.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/newspaperdirect.htm",
      logo: "NewspaperDirect",
    },
    {
      name: "NET Library",
      description:
        "NetLibrary® is a leading eBook platform and service acquired by EBSCO from OCLC... OCLC most famous integrated databases in e.book from more than 100 international publisher world wide.",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/ebsco%20net%20library.htm",
      logo: "NetLibrary",
    },
    {
      name: "LPI",
      description:
        "LPI, a steel fabricating company under the trade name 'STEELER' was founded in 1966. The company’s main objective was to utilize its steel fabricating technology in product development for the local market while becoming leading pioneer of innovate steel product and storage systems in the region.",
      territory: "Egypt",
      url: "http://lpi.co.th",
      logo: "LPI",
    },
    {
      name: "ProQuest",
      description:
        "The famous American organization. ProQuest provides global access to one of the largest online content repositories in the world. With it, users will find answers to their questions in fields that range from genealogy to the latest scientific breakthrough to emerging business strategies.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/PROQUEST.htm",
      logo: "ProQuest",
    },
    {
      name: "Profound",
      description:
        "The premier corporate market research service. Profound provides you with state-of-the-art searching capabilities; helps you find the most accurate and targeted research for your needs; and enables you to succeed with the most extensive collection of continually updated global market research.",
      territory: "Egypt",
      url: "http://www.profound.com/Default.aspx?AspxAutoDetectCookieSupport=1",
      logo: "Profound",
    },
    {
      name: "Reference Manager",
      description:
        "It's highly recommended for anyone needing a powerful reference tool. The industry standard software tools for publishing and managing bibliographies on the Windows and Macintosh® desktop.",
      territory: "Egypt, Sudan and Middle East",
      url: "http://www.refman.com",
      logo: "RefMan",
    },
    {
      name: "Nedaplibrary",
      description:
        "Nedap Librix supports libraries in an innovative way to maintain and improve their relevance in the current age of information... We guide you in your journey towards the smart library.",
      territory: "Egypt",
      url: "http://www.nedaplibrary.com/pages/en",
      logo: "Nedap",
    },
    {
      name: "SAE",
      description:
        "is a global association of more than 128,000 engineers and related technical experts in the aerospace, automotive and commercial-vehicle industries. SAE International's core competencies are life-long learning and voluntary consensus standards development.",
      territory: "Egypt",
      url: "http://www.sae.org",
      logo: "SAE",
    },
    {
      name: "Stouls",
      description:
        "This company specializes in restoration and archival equipment, for all libraries, we invite for a glance on the world of restoration and archiving.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/Restoration/stouls-headlines.htm",
      logo: "Stouls",
    },
    {
      name: "Swets",
      description:
        "The famous Dutch international supplier and collector of journals, reports, and CD's for information services at libraries worldwide.",
      territory: "Egypt",
      url: "http://www.swets.com/web/show/id=89423/langid=42",
      logo: "Swets",
    },
    {
      name: "World Bank",
      description:
        "The World Bank Group’s mission is to fight poverty and improve the living standards of people in the developing world. It is a development Bank which provides loans, policy advice, technical assistance and knowledge sharing services...",
      territory: "Egypt",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/worldbank.htm",
      logo: "WorldBank",
    },
    {
      name: "World Tourism Organization (WTO)",
      description:
        "The World Tourism Organization is the leading international organization in the field of travel and tourism. It serves as a global forum for tourism policy issues and a practical source of tourism know-how.",
      territory: "Egypt, Sudan",
      url: "http://www.ACML-egypt.com/ACML%20Publishers/wto.htm",
      logo: "WTO",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ACML Represents
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Exclusive representation of leading international publishers and
            organizations
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-20 z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-600 hover:text-white transition-colors text-gray-600 dark:text-gray-400 font-medium text-sm"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {publishers.map((pub, index) => (
              <div
                key={index}
                id={pub.name.charAt(0)}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-48 h-24 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center p-4">
                    <span className="text-gray-400 font-medium text-center">
                      {pub.logo} Logo
                    </span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 inline-flex items-center gap-2"
                      >
                        {pub.name}
                        {pub.url !== "#" && <ExternalLink size={18} />}
                      </a>
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Globe size={14} />
                      {pub.territory}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {pub.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
