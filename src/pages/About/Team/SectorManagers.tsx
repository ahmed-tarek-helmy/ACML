import { Mail, UserCircle, Monitor } from 'lucide-react';

export default function SectorManagers() {
  const managers = [
    { title: "Manager, Accounting Sector", email: "accounting@ACML-egypt.com" },
    { title: "Manager, Chairman Office Sector", email: "admin@ACML-egypt.com" },
    { title: "Manager, Databases Sector", email: "databases@ACML-egypt.com" },
    { title: "Manager, Standards Sector", email: "standards@ACML-egypt.com" },
    { title: "Manager, Electronic Periodicals Sector", email: "periodical@ACML-egypt.com" },
    { title: "Manager, Electronic Bookshop Sector", email: "info@ACML-egypt.com" },
    { title: "Manager, Supplies Sector", email: "supplies@ACML-egypt.com" },
    { title: "Manager, Library Automation Sector", email: "automation@ACML-egypt.com" }
  ];

  const itManagers = [
    { title: "Manager, Development & Programming Sector", email: "info@ACML-2i2s.com" },
    { title: "Manager, Technical Support & Customer Services", email: "info@ACML-2i2s.com" },
    { title: "Manager, HW & SW Marketing Sector", email: "info@ACML-2i2s.com" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sector Managers</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Leadership across our operational divisions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">ACML Sector Managers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {managers.map((manager, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4">
                    <UserCircle className="text-emerald-500" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{manager.title}</h3>
                  <a href={`mailto:${manager.email}`} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    {manager.email}
                  </a>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
                <Monitor className="text-blue-500" />
                Acml-2i2s Sister Company Information Technology (IT)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itManagers.map((manager, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100 dark:border-blue-800">
                  <div className="w-12 h-12 bg-white dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <UserCircle className="text-blue-500" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{manager.title}</h3>
                  <a href={`mailto:${manager.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    {manager.email}
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
