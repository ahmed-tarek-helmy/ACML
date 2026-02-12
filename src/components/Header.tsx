import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";

interface NavItem {
  id: string; // Used for key and active state matching if path matches
  path: string;
  label: string;
  hasDropdown: boolean;
  isWide?: boolean;
  megaMenu?: {
    title: string;
    links: { label: string; path: string; description?: string }[];
  }[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    {
      id: "home",
      path: "/",
      label: t("home"),
      hasDropdown: false,
    },
    {
      id: "about",
      path: "/about",
      label: t("about"),
      hasDropdown: true,
      isWide: true,
      megaMenu: [
        {
          title: "Organization",
          links: [
            {
              label: "Mission & Vision",
              path: "/about/mission",
              description: "Learn about our core purpose and future goals.",
            },
            {
              label: "Board of Advisors",
              path: "/about/team",
              description: "Meet the experts guiding our strategic direction.",
            },
            {
              label: "Sector Managers",
              path: "/about/team/sector-managers",
              description:
                "Get to know the leaders of our key operational sectors.",
            },
            {
              label: "Employees",
              path: "/about/team/employees",
              description: "Our dedicated team driving success every day.",
            },
            {
              label: "ACML Represents",
              path: "/about/represent",
              description: "Entities and organizations we proudly represent.",
            },
          ],
        },
        {
          title: "Leadership",
          links: [
            {
              label: "The Chairman",
              path: "/about/chairman",
              description: "A message from our leadership.",
            },
            {
              label: "Chairman Awards",
              path: "/about/chairman/awards",
              description: "Recognition of excellence and achievement.",
            },
            {
              label: "Accomplishment",
              path: "/about/chairman/accomplishments",
              description: "Milestones and successes of our leadership.",
            },
          ],
        },
        {
          title: "Standards",
          links: [
            {
              label: "ASA Standards (En)",
              path: "/about/asa-standards",
              description: "Access American standards in English.",
            },
            {
              label: "ASA Standards (Ar)",
              path: "/about/asa-standards-ar",
              description: "Access American standards in Arabic.",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              label: "Donations & Grants",
              path: "/about/donations-grants",
              description: "Our contributions to the community.",
            },
            {
              label: "ACML Awards",
              path: "/about/awards",
              description: "Celebrating excellence in our field.",
            },
          ],
        },
      ],
    },
    {
      id: "services",
      path: "/services",
      label: t("services"),
      hasDropdown: true,
      isWide: true,
      megaMenu: [
        {
          title: "Professional Services",
          links: [
            {
              label: "Library Consultancy",
              path: "/services",
              description: "Expert guidance for modern library management.",
            },
            {
              label: "Digital Content",
              path: "/services",
              description: "Comprehensive digital solutions and resources.",
            },
            {
              label: "Building & Furniture",
              path: "/services",
              description: "Design and equipment for optimal learning spaces.",
            },
            {
              label: "Training Programs",
              path: "/services",
              description: "Professional development and skill enhancement.",
            },
          ],
        },
        {
          title: "Specialized",
          links: [
            {
              label: "Chemical Management",
              path: "/services",
              description: "Safe and compliant chemical handling solutions.",
            },
            {
              label: "Museum Restoration",
              path: "/services",
              description: "Preserving heritage with advanced techniques.",
            },
          ],
        },
        {
          title: "Our Software Products",
          links: [
            {
              label: "LMS - Library Management",
              path: "/services/lms",
              description:
                "Integrated systems for efficient library operations.",
            },
            {
              label: "DMS - Document Management",
              path: "/services/dms",
              description: "Streamline your document workflows.",
            },
            {
              label: "LawyerMAC",
              path: "/services/lawyer-mac",
              description:
                "Specialized management solutions for legal professionals.",
            },
            {
              label: "Bookshop",
              path: "/services/bookshop",
              description: "Browse our extensive collection of publications.",
            },
          ],
        },
      ],
    },
    {
      id: "partners",
      path: "/partners",
      label: t("partners"),
      hasDropdown: false,
    },
    {
      id: "publishers",
      path: "/publishers",
      label: t("publishers"),
      hasDropdown: false,
    },
    {
      id: "contact",
      path: "/contact",
      label: t("contact"),
      hasDropdown: false,
    },
  ];

  const isActive = (itemPath: string) => {
    if (itemPath === "/") return location.pathname === "/";
    return location.pathname.startsWith(itemPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
            onClick={onLinkClick}
          >
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 tracking-tight">
              ACML
            </div>
            <div className="ms-3 text-sm text-gray-600 dark:text-gray-400 hidden md:block border-l border-gray-300 dark:border-gray-700 pl-3">
              {t("brandSubtitle")}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.id)}
              >
                <Link
                  to={item.path}
                  onClick={onLinkClick}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                    (
                      activeDropdown
                        ? activeDropdown === item.id
                        : isActive(item.path)
                    )
                      ? "text-emerald-600 dark:text-emerald-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 mt-0.5 ${(activeDropdown ? activeDropdown === item.id : isActive(item.path)) ? "rotate-180 text-emerald-600 dark:text-emerald-500" : "text-gray-400"}`}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {item.hasDropdown && activeDropdown === item.id && (
                  <div
                    className={`pt-0 animate-in fade-in slide-in-from-top-1 duration-200 z-40 ${
                      item.isWide
                        ? "fixed top-20 left-0 w-full mt-[1px]"
                        : "absolute top-full left-0 min-w-[280px]"
                    }`}
                  >
                    <div
                      className={`bg-white dark:bg-gray-800 shadow-xl border-t border-gray-100 dark:border-gray-700 ${item.isWide ? "" : "rounded-b-lg border-x border-b"}`}
                    >
                      {item.isWide && (
                        <div className="h-0.5 bg-emerald-500 w-full" />
                      )}

                      <div
                        className={`px-4 pb-8 ${item.isWide ? `container mx-auto grid ${item.megaMenu?.length === 3 ? "grid-cols-3" : "grid-cols-4"} gap-12 py-8` : "flex flex-col gap-4 p-6"}`}
                      >
                        {item.megaMenu?.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h4
                              className={`${
                                item.isWide
                                  ? "text-lg font-semibold text-gray-900 dark:text-white border-l-4 border-emerald-500 pl-4 py-0.5 leading-none"
                                  : "text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider pb-2 border-b border-gray-100 dark:border-gray-700"
                              }`}
                            >
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    to={link.path}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onLinkClick();
                                    }}
                                    className={`text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 text-left block w-full group flex items-start flex-col ${item.isWide ? "pl-5" : ""}`}
                                  >
                                    <span
                                      className={
                                        item.isWide
                                          ? "font-medium block mb-1"
                                          : ""
                                      }
                                    >
                                      {link.label}
                                    </span>
                                    {item.isWide && (
                                      <span className="text-xs text-gray-400 dark:text-gray-500 font-normal leading-relaxed overflow-hidden text-ellipsis line-clamp-2">
                                        {link.description ||
                                          `Learn more about ${link.label.toLowerCase()}`}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-3 border-l border-gray-200 dark:border-gray-700 pl-4">
              <SearchBar onNavigate={(page) => handleNavClick(page)} />
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <SearchBar onNavigate={(page) => handleNavClick(page)} />
            <button
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 absolute top-full left-0 w-full h-[calc(100vh-80px)] border-t border-gray-200 dark:border-gray-800 overflow-y-auto pb-32">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <Link
                  to={item.path}
                  onClick={onLinkClick}
                  className={`w-full text-left py-3 px-2 text-base font-medium flex items-center justify-between ${
                    isActive(item.path)
                      ? "text-emerald-600 dark:text-emerald-500"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="text-gray-400" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg mb-2 px-4 py-2 space-y-4">
                    {item.megaMenu?.map((section, idx) => (
                      <div key={idx}>
                        <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-2 mt-2">
                          {section.title}
                        </h5>
                        <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-emerald-100 dark:border-emerald-900/30">
                          {section.links.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              to={link.path}
                              onClick={onLinkClick}
                              className="text-left py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 block"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-6 flex justify-between items-center px-2 pt-4 border-t border-gray-100 dark:border-gray-800">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
