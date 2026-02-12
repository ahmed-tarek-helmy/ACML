import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    { label: "Books & Periodicals", id: "services-bookshop" },
    { label: "Electronic Journals", id: "services" },
    { label: "Library Automation", id: "services-lms" },
    { label: "Publishers", id: "publishers" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* ... (previous columns remain unchanged) ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ACML</h3>
            <p className="text-sm leading-relaxed mb-4">
              Your gateway to the information age. Leading provider of library
              media, technology solutions, and digital content management.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm hover:text-emerald-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(service.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm hover:text-emerald-400 transition-colors text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Alexandria, Egypt</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>Contact us for more info</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>info@acml-egypt.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ACML - Alex Centre for Multimedia
            & Libraries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
