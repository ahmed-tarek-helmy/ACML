import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onNavigate: (page: string) => void;
}

export default function SearchBar({ onNavigate }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{ id: string; title: string; description: string }>
  >([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  // Search data - comprehensive website content
  const searchData = [
    // Main Pages
    {
      id: "home",
      title: t("home"),
      description: "ACML2I2S - Integrated Information Solutions & Systems",
      keywords: "home main landing page company overview",
    },
    {
      id: "about",
      title: t("about"),
      description: "Learn about our company history, mission, and values",
      keywords: "about us company history mission vision values team",
    },
    {
      id: "services",
      title: t("services"),
      description: "Library services, digital solutions, and consulting",
      keywords: "services library digital consulting solutions",
    },
    {
      id: "partners",
      title: t("partners"),
      description: "Publishing partners and collaborations worldwide",
      keywords: "partners publishers collaborations IEEE Springer Elsevier",
    },
    {
      id: "publishers",
      title: t("publishers"),
      description: "Standards and regulations information",
      keywords: "standards regulations compliance ISO ANSI BSI DIN",
    },
    {
      id: "contact",
      title: t("contact"),
      description: "Get in touch with our team",
      keywords: "contact email phone address location showroom",
    },

    // Services
    {
      id: "services",
      title: "Library Consulting",
      description: "Professional library consulting and advisory services",
      keywords: "consulting advisory library management",
    },
    {
      id: "services",
      title: "Digital Solutions",
      description: "Digital library solutions and automation",
      keywords: "digital automation technology software",
    },
    {
      id: "services",
      title: "Collection Development",
      description: "Building and managing library collections",
      keywords: "collection development books journals resources",
    },
    {
      id: "services",
      title: "Librarian Software",
      description: "Comprehensive library management system",
      keywords: "software system management cataloging circulation",
    },

    // Partners
    {
      id: "partners",
      title: "IEEE",
      description:
        "Institute of Electrical and Electronics Engineers publications",
      keywords: "IEEE engineering technology standards",
    },
    {
      id: "partners",
      title: "Springer",
      description: "Academic and scientific publisher",
      keywords: "Springer academic scientific research",
    },
    {
      id: "partners",
      title: "Elsevier",
      description: "Global information analytics business",
      keywords: "Elsevier research journals science",
    },
    {
      id: "partners",
      title: "Wiley",
      description: "Research and learning company",
      keywords: "Wiley research education learning",
    },

    // Standards Organizations
    {
      id: "publishers",
      title: "ISO Standards",
      description: "International Organization for Standardization",
      keywords: "ISO international standards quality",
    },
    {
      id: "publishers",
      title: "ANSI Standards",
      description: "American National Standards Institute",
      keywords: "ANSI american standards USA",
    },
    {
      id: "publishers",
      title: "BSI Standards",
      description: "British Standards Institution",
      keywords: "BSI british standards UK",
    },
    {
      id: "publishers",
      title: "DIN Standards",
      description: "German Institute for Standardization",
      keywords: "DIN german standards germany",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          (item.keywords && item.keywords.toLowerCase().includes(query)),
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleResultClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-full end-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden z-[100]">
          <div className="p-4">
            <div className="relative">
              <Search
                className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-10 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-gray-900 dark:text-gray-100 font-bold placeholder:font-bold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {searchQuery && (
            <div className="max-h-64 overflow-y-auto border-t border-gray-100 dark:border-gray-800">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result.id)}
                      className="w-full text-left rtl:text-right px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                    >
                      <div className="font-bold text-gray-900 dark:text-white">
                        {result.title}
                      </div>
                      <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mt-1">
                        {result.description}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400 font-bold">
                  No results found
                </div>
              )}
            </div>
          )}

          {!searchQuery && (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400 text-sm font-bold">
              Type to search pages...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
