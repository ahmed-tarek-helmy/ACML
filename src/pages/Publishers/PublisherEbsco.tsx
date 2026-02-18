import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Search, Database, Globe } from "lucide-react";

const PublisherEbsco: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const databases = [
    {
      name: "Academic Search Alumni Edition",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=167",
    },
    {
      name: "Academic Search Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=633",
    },
    {
      name: "Academic Search Elite",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=3",
    },
    {
      name: "Academic Search Premier",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=1",
    },
    {
      name: "AgeLine",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=23",
    },
    {
      name: "AGRICOLA",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=24",
    },
    {
      name: "Alt HealthWatch",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=25",
    },
    {
      name: "AMED",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=26",
    },
    {
      name: "American Bibliography of Slavic & Eastern European Studies",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=27",
    },
    {
      name: "Applied Science & Technology Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=29",
    },
    {
      name: "Art Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=30",
    },
    {
      name: "Art Index Retrospective",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=31",
    },
    {
      name: "ATLA Religion Database",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=32",
    },
    {
      name: "ATLA Religion Database with ATLASerials",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=33",
    },
    {
      name: "Auto Repair Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=35",
    },
    {
      name: "Avery Index to Architectural Periodicals",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=36",
    },
    {
      name: "BasicBIOSIS",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=37",
    },
    {
      name: "Bibliography of Native North Americans",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=402",
    },
    {
      name: "Biography Collection Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=705",
    },
    {
      name: "Biological Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=39",
    },
    {
      name: "Biological & Agricultural Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=40",
    },
    {
      name: "Blackwell Encyclopedia of Management Library",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=676",
    },
    {
      name: "Book Index with Reviews",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=46",
    },
    {
      name: "Book Review Digest",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=47",
    },
    {
      name: "British Nursing Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=48",
    },
    {
      name: "Business Source Alumni Edition",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=168",
    },
    {
      name: "Business Source Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=399",
    },
    {
      name: "Business Source Elite",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=4",
    },
    {
      name: "Business Source Premier",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=2",
    },
    {
      name: "CAB Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=49",
    },
    {
      name: "CAB Abstracts Archive",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=640",
    },
    {
      name: "Canadian Literary Centre",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=50",
    },
    {
      name: "Canadian Reference Centre",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=51",
    },
    {
      name: "Catholic Periodical and Literature Index Online",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=52",
    },
    {
      name: "Child Development & Adolescent Studies",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=169",
    },
    {
      name: "The CINAHL Database",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=53",
    },
    {
      name: "CINAHL with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=170",
    },
    {
      name: "CINAHL Plus",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=171",
    },
    {
      name: "CINAHL Plus with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=172",
    },
    {
      name: "Cochrane Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=54",
    },
    {
      name: "Coin Career Databases",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=679",
    },
    {
      name: "Coin Career Library",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=680",
    },
    {
      name: "Coin Career Community",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=681",
    },
    {
      name: "Columbia Granger's Poetry Database",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=55",
    },
    {
      name: "Communication & Mass Media Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=56",
    },
    {
      name: "Computer Science Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=60",
    },
    {
      name: "Computer Source",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=62",
    },
    {
      name: "Computers & Applied Sciences Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=635",
    },
    {
      name: "Consumer Health Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=541",
    },
    {
      name: "Current Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=67",
    },
    {
      name: "Current Biography Illustrated",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=68",
    },
    {
      name: "DynaMed",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=192",
    },
    {
      name: "EconLit",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=57",
    },
    {
      name: "EconLit with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=638",
    },
    {
      name: "Economía y Negocios",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=498",
    },
    {
      name: "Education Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=59",
    },
    {
      name: "Education Research Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=639",
    },
    {
      name: "Education Research Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=636",
    },
    {
      name: "Environment Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=623",
    },
    {
      name: "Environment Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=61",
    },
    {
      name: "ERIC",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=63",
    },
    {
      name: "Essay and General Literature Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=65",
    },
    {
      name: "Family & Society Studies Worldwide",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=70",
    },
    {
      name: "Film & Television Literature Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=627",
    },
    {
      name: "Film & Television Literature Index with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=628",
    },
    {
      name: "Fuente Academica",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=71",
    },
    {
      name: "GalleryWatch CRS Reports",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=774",
    },
    {
      name: "Garden, Landscape & Horticulture Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=173",
    },
    {
      name: "Gender Studies Database",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=72",
    },
    {
      name: "General Science Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=73",
    },
    {
      name: "GeoRef",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=75",
    },
    {
      name: "GIDEON",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=552",
    },
    {
      name: "Global Health",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=78",
    },
    {
      name: "Health Library",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=81",
    },
    {
      name: "Health Source: Consumer Edition",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=82",
    },
    {
      name: "Health Source: Nursing/Academic Edition",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=83",
    },
    {
      name: "History Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=84",
    },
    {
      name: "History Reference Online Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=810",
    },
    {
      name: "History Reference Online Elite",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=812",
    },
    {
      name: "History Reference Online Premier",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=811",
    },
    {
      name: "Hospitality & Tourism Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=85",
    },
    {
      name: "Hospitality & Tourism Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=418",
    },
    {
      name: "Humanities Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=86",
    },
    {
      name: "Humanities International Complete",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=87",
    },
    {
      name: "Humanities International Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=174",
    },
    {
      name: "ICON Global Intelligence",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=88",
    },
    {
      name: "Index Islamicus",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=637",
    },
    {
      name: "Index to Jewish Periodicals",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=89",
    },
    {
      name: "Index to Legal Periodicals & Books",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=90",
    },
    {
      name: "Information Science & Technology Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=91",
    },
    {
      name: "Inspec",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=92",
    },
    {
      name: "Inspec Archive - Science Abstracts 1898-1968",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=419",
    },
    {
      name: "Insurance Periodicals Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=175",
    },
    {
      name: "International Bibliography of Theatre & Dance",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=176",
    },
    {
      name: "International Bibliography of Theatre & Dance with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=177",
    },
    {
      name: "International Pharmaceutical Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=93",
    },
    {
      name: "International Political Science Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=94",
    },
    {
      name: "International Security & Counter-Terrorism Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=401",
    },
    {
      name: "Internet & Personal Computing Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=95",
    },
    {
      name: "Kiplinger Finance & Forecasts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=96",
    },
    {
      name: "The Left Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=178",
    },
    {
      name: "Legal Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=97",
    },
    {
      name: "LGBT Life",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=76",
    },
    {
      name: "LGBT Life with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=77",
    },
    {
      name: "Library, Information Science & Technology Abstracts (LISTA)",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=513",
    },
    {
      name: "Library, Information Science & Technology Abstracts with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=584",
    },
    {
      name: "Library Literature & Information Science",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=98",
    },
    {
      name: "LIBROS EN VENTA en América Latina y España",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=99",
    },
    {
      name: "Literary Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=548",
    },
    {
      name: "MagillOnHistory",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=420",
    },
    {
      name: "MagillOnLiterature Plus",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=100",
    },
    {
      name: "MedicLatina",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=106",
    },
    {
      name: "MEDLINE",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=107",
    },
    {
      name: "MEDLINE with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=614",
    },
    {
      name: "Mental Measurements Yearbook",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=108",
    },
    {
      name: "Middle Eastern & Central Asian Studies",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=109",
    },
    {
      name: "MLA International Bibliography",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=112",
    },
    {
      name: "The Music Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=179",
    },
    {
      name: "The Nation Digital Archive",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=113",
    },
    {
      name: "The National Review Archive",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=543",
    },
    {
      name: "Natural & Alternative Treatments",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=114",
    },
    {
      name: "The New Republic Archive",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=403",
    },
    {
      name: "New Testament Abstracts Online",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=180",
    },
    {
      name: "Newspaper Source",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=115",
    },
    {
      name: "NoveList",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=16",
    },
    {
      name: "NTIS",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=117",
    },
    {
      name: "Old Testament Abstracts Online",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=121",
    },
    {
      name: "PEP Archive",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=166",
    },
    {
      name: "Points of View Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=770",
    },
    {
      name: "Pregnancy & Birthing Center of Excellence",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=551",
    },
    {
      name: "Professional Development Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=123",
    },
    {
      name: "PsycARTICLES",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=124",
    },
    {
      name: "PsycBOOKS",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=125",
    },
    {
      name: "PsycCRITIQUES",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=181",
    },
    {
      name: "PsycEXTRA",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=126",
    },
    {
      name: "Psychology & Behavioral Sciences Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=127",
    },
    {
      name: "PsycINFO",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=128",
    },
    {
      name: "Readers' Guide Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=129",
    },
    {
      name: "Regional Business News",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=130",
    },
    {
      name: "Religion & Philosophy Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=131",
    },
    {
      name: "RILM Abstracts of Music Literature",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=132",
    },
    {
      name: "RIPM Retrospective Index to Music Periodicals",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=182",
    },
    {
      name: "Risk Management Reference Center",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=613",
    },
    {
      name: "The Scientific & Medical ART Imagebase",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=546",
    },
    {
      name: "Scientific American Archive Online",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=135",
    },
    {
      name: "Short Story Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=136",
    },
    {
      name: "Social Sciences Abstracts",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=137",
    },
    {
      name: "SocINDEX",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=138",
    },
    {
      name: "SocINDEX with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=139",
    },
    {
      name: "SPIN",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=140",
    },
    {
      name: "SPORTDiscus",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=141",
    },
    {
      name: "SPORTDiscus with Full Text",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=585",
    },
    {
      name: "The Serials Directory",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=142",
    },
    {
      name: "Tests in Print",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=813",
    },
    {
      name: "Textile Technology Index",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=143",
    },
    {
      name: "TOC Premier",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=144",
    },
    {
      name: "Vente et Gestion",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=400",
    },
    {
      name: "Vocational & Career Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=147",
    },
    {
      name: "Wildlife & Ecology Studies Worldwide",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=183",
    },
    {
      name: "Wilson Biographies Illustrated",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=148",
    },
    {
      name: "World History Collection",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=150",
    },
    {
      name: "Women's Studies International",
      url: "http://www.epnet.com/thisTopic.php?marketID=1&topicID=320",
    },
  ];

  const filteredDatabases = databases.filter((db) =>
    db.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            EBSCO Information Services
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="mr-20 ml-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
              <img
                src="/images/Ebsco_logo.jpg"
                alt="Ebsco"
                className="h-20 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              EBSCO Information Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              A worldwide leader in providing information access and management
              solutions through print and electronic journal subscription
              services and research databases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="http://www.ebscohost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} className="mr-2" />
                Visit Website
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg border border-emerald-500"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <Globe
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    About EBSCO
                  </h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/ebsco_2.jpg"
                      alt="Ebsco Services"
                      className="w-full h-auto object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <p>
                    EBSCO Information Services is a worldwide leader in
                    providing information access and management solutions
                    through print and electronic journal subscription services,
                    research database development and production, online access
                    to more than 100 databases and thousands of e-journals, and
                    e-commerce book procurement. EBSCO has served the library
                    and business communities for more than 60 years.
                  </p>
                  <p>
                    EBSCO Information Services' parent company, EBSCO Industries
                    Inc., is a diversified, financially stable company with
                    manufacturing and sales offices around the world. EBSCO's
                    International Headquarters in Birmingham, Ala., U.S.A.
                    provides support for all EBSCO operations.
                  </p>
                  <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                      EBSCO Publishing
                    </h4>
                    <p className="text-sm">
                      Unmatched content, usability and service make EBSCOhost®
                      databases the most-used, for-fee, online information
                      resources for tens of thousands of institutions worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Databases List */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4">
                      <Database
                        className="text-emerald-600 dark:text-emerald-400"
                        size={24}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Bibliographic & Full Text Databases
                    </h3>
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full md:w-64">
                    <input
                      type="text"
                      placeholder="Search databases..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    />
                    <Search
                      className="absolute left-3 top-2.5 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto max-h-[800px] pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                  {filteredDatabases.length > 0 ? (
                    filteredDatabases.map((db, index) => (
                      <a
                        key={index}
                        href={db.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group"
                      >
                        <ExternalLink
                          size={16}
                          className="text-gray-400 group-hover:text-emerald-500 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 font-medium text-sm">
                          {db.name}
                        </span>
                      </a>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 text-gray-500">
                      No databases found matching "{searchTerm}"
                    </div>
                  )}
                </div>
                <div className="mt-8 text-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <a
                    href="http://ejournals.ebsco.com/info/ejsTitles.asp?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center"
                  >
                    View Electronic Journals List{" "}
                    <ExternalLink size={14} className="ml-1" />
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

export default PublisherEbsco;
