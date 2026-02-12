import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'ar', label: 'العربية', shortLabel: 'عربي' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Selection Language"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-full end-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden z-[100]">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left rtl:text-right px-4 py-2 text-sm transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/30 ${
                  i18n.language === lang.code
                    ? 'text-emerald-600 dark:text-emerald-500 font-medium'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
