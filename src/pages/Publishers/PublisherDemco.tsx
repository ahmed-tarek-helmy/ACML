import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, PenTool, Layout } from "lucide-react";

export default function PublisherDemco() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between"><h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            Demco
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm inline-block p-6 rounded-2xl mb-8 border border-white/20 shadow-xl">
            <img
              src="images/Demco.png"
              alt="Demco Logo"
              className="h-12 w-auto brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            Demco
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Library Supplies, Furniture & Learning Materials. Since 1905,
            serving the needs of America's libraries and schools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="http://demco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-red-900 rounded-full font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <ExternalLink size={20} className="mr-2" />
              Visit Website
            </a>
            <a
              href="mailto:info@ACML-egypt.com"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg border border-emerald-500"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Layout className="mr-3 text-red-600 dark:text-red-400" />
            About Demco
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-1 space-y-6 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                For over a century, Demco has been serving the needs of
                America's libraries and schools. With a broad product offering
                of over 50,000 items including thousands of unique or
                hard-to-find supplies, furniture, and equipment, Demco offers
                more of what librarians need every day.
              </p>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Demco History: A Look at Today
                </h3>
                <p className="leading-relaxed">
                  Today the company has grown from four people in the Library
                  Department of the Democrat Printing Company in 1905 to over
                  250 coworkers in 2008, with offices in Madison, Wisconsin. The
                  catalog of products has grown from twelve pages to over one
                  thousand. The company added new services, including a
                  subscription service and a turnkey space management service
                  that includes both design and supply for the many different
                  kinds of libraries that exist today.
                </p>
                <p className="leading-relaxed mt-4">
                  Demco can now help libraries create inviting environments for
                  the changing demands of library patrons. We can do this
                  because in response to requests, the company added Demco
                  Library Interiors in 2003, which offers librarians and
                  educators all the interior design help they need from
                  measurement to installation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  A Look at the Future
                </h3>
                <p className="leading-relaxed">
                  Clearly libraries are changing…but they have been changing
                  since they began. They are also staying very much the same as
                  they change. After all, libraries have been a primary
                  community resource in the U.S. since they were first conceived
                  as a way to promote and preserve democracy. But change is
                  always unpredictable. Demco is prepared and looks with
                  enthusiasm toward the many new roles the company can play in
                  helping libraries continue to respond to their communities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  A Lasting Invitation
                </h3>
                <p className="leading-relaxed">
                  SELECTION, SATISFACTION, SERVICE - Experience the
                  Best!&ldquo;Making it easier for librarians and
                  educators&rdquo; …now we can call it a century-old tradition.
                  We have the best guarantee in the business. Your complete
                  satisfaction with Demco products is guaranteed. If you're not
                  happy, return it for replacement or full refund. No questions
                  asked! Orders of in-stock products ship the very next day.
                  Just call before noon CST. Save extra on large quantities by
                  contacting our Bids Department.
                </p>
                <p className="leading-relaxed mt-4">
                  In keeping with our tradition, we invite you to contact us for
                  whatever you need. One of us will personally answer your call,
                  take your order, answer your questions, or solve your problem.
                  Serving you is what we do best, and we have a hundred years of
                  practice at doing it better than anyone else!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <img
                  src="images/Demco.png"
                  alt="Demco Logo"
                  className="w-full h-auto rounded-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x100/e6e6e6/666666?text=Demco";
                  }}
                />
                <div className="border-t border-gray-100 pt-4 text-center text-sm text-gray-500">
                  Serving libraries since 1905
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <PenTool className="mr-3 text-red-600 dark:text-red-400" />
            Demco Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Archival",
              "Arts & Crafts",
              "Audio Visual",
              "Books",
              "Carpets",
              "Carts & Booktrucks",
              "Creative Play",
              "Educational Resources",
              "Facilities Management",
              "Decor",
              "Furniture",
              "Library Supplies",
              "Office Equipment",
              "Office Supplies",
              "Presentation",
              "Security",
              "Shelving",
              "Signage",
              "Upstart Promotions",
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-300 transition-colors cursor-default border border-transparent hover:border-red-100 dark:hover:border-red-800"
              >
                <span className="font-medium">{category}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
