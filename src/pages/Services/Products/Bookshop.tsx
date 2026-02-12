import React from 'react';

export default function Bookshop() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">'MBC' MANAGEMENT BOOKSHOPS CONTENT</h4>
          
          <div className="text-center mb-8">
            <div className="bg-gray-200 dark:bg-gray-700 w-48 h-32 mx-auto flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
               Image Placeholder: images/mbc.png
            </div>
             <p className="font-bold text-lg text-gray-900 dark:text-white">
               <span className="text-emerald-600 dark:text-emerald-400">'MBC'</span> Management Bookshops Content
             </p>
             <div className="flex justify-center gap-4 mt-4">
                <div className="bg-gray-200 dark:bg-gray-700 w-32 h-12 flex items-center justify-center text-xs">free_price.png</div>
                <div className="bg-gray-200 dark:bg-gray-700 w-32 h-12 flex items-center justify-center text-xs">free_trail.png</div>
             </div>
          </div>
          
          <div className="text-right mb-4">
             <a href="#" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">Back</a>
          </div>

          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WHAT IS MBC</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            <span lang="en">The Alexandria Center for Media and Libraries (ACML) to build this system to serve the sale of books and stationery supplies libraries, this
            Knowing that many bookshops in Egypt and the Arab world in need Severe for such electronic software, which manages and controls the libraries Sales, and provide appropriate reports, and of course the program applies all specifications Global required for this kind of libraries and the program works on environment Web Hosting and on the base of Microsoft, also deals with all programs<br/>
            Windows in Arabic and English, which is the basis Alalangelazah work.</span>
          </p>

          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2"><span lang="en">Work ِِArea</span></h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            <span lang="en">Place an order to allow the selling points libraries operate in a regulated environment, through the system cover<br/>
            Of all daily transactions, sales, purchases, stores, returns, financial control.<br/>
            The system works by focusing on the organization and help improve profits and success factors<br/>
            And planning and control, as does meet all the daily requirements and all work related to the Library<br/>
            Easily the sale, adding that the system implements all international specifications and standards.</span>
          </p>

          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2"><span lang="en">Features and characteristics of the system</span></h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span lang="en">MBC provides sales and POS to improve its system <span lang="en">through the following features.</span></span>
          </p>
          <div className="text-gray-700 dark:text-gray-300 mb-6 space-y-1">
            <p>1- Multi Branches.</p>
            <p>2- Security system.</p>
            <p>3- Sales.</p>
            <p>4- <span lang="en">Purchases.</span></p>
            <p>5- <span lang="en">Returns for (customers and suppliers).</span></p>
            <p>6- <span lang="en">Stores Managment.</span></p>
            <p>7- Reports.</p>
          </div>

          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2"><span lang="en">General Features</span></h4>
          <div className="text-gray-700 dark:text-gray-300 mb-6 space-y-1">
            <p>1- <span lang="en">Language program in English and Arabic supports.</span></p>
            <p>2- <span lang="en">The possibility of sales tax expense ratios discount automatically.</span></p>
            <p>3- <span lang="en">system software supports</span> Barcode & QR.</p>
            <p>4- <span lang="en">The program works in more than one branch</span>.</p>
            <p>5- <span lang="en">The software environment is the Web.</span></p>
            <p>6- <span lang="en">Take into account international standards and working environment in Egypt and Arab countries.</span></p>
            <p>7- <span lang="en">Base programs and data </span>SQL & MYSQL.</p>
          </div>

          <p className="font-bold text-gray-900 dark:text-white mt-8 mb-4">Please Download The PDF For More Information:</p>
          <div className="space-y-3">
             <p><strong><a href="#" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">MBC BROCHURE</a></strong></p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
