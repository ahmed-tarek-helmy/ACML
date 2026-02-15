import {
  Book,
  Library,
  Video,
  FileText,
  CheckSquare,
  Award,
  Monitor,
  Mail,
} from "lucide-react";

export default function Librarian() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="w-[891px] h-[259px] max-w-full flex items-center justify-center text-gray-400 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg">
              <span className="text-sm font-medium">
                Image Placeholder (3.png)
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Librarian</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {/* No direct Call to Action buttons in original HTML, but keeping design consistency with Request Demo if acceptable. 
                 However, instruction is 1:1 content. I will only keep the Back button or links presented in the HTML.
                 Wait, the original HTML has no "Request Demo" or "Back" buttons except header/footer links which are not part of content.
                 Actually, the other pages had a "Back" link. Librarian.html does NOT have a back link in the content area I read.
                 It just listed links.
                 I will keep the "Request Demo" and "Back" from the DESIGN I implemented because the user said "Keep the design you already applied". 
                 The content inside the grid is what needs to be 1:1.
             */}
            <a
              href="mailto:info@ACML-egypt.com"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              Request Free Trial
              <Mail size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              {/* Introduction */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Introduction
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="English introduction after revision , received from Ibrahim.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      English introduction
                    </a>
                  </p>
                  <p>
                    <a
                      href="Introduction A.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Arabic Introduction
                    </a>
                  </p>
                  <p>
                    <a
                      href="PDF/1-Introduction_Fre.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      French Introduction
                    </a>
                  </p>
                </div>
              </div>

              {/* Librarian A Modules */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Librarian A Modules
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="Librarian E.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Librarian English
                    </a>
                  </p>
                  <p>
                    <a
                      href="Librarian A.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Librarian Arabic
                    </a>
                  </p>
                </div>
              </div>

              {/* Presentation */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Presentation
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="Small Presentation EE.pptx"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      English Presentation
                    </a>
                  </p>
                  <p>
                    <a
                      href="PresentationLibA1.pptx"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Arabic Presentation
                    </a>
                  </p>
                </div>
              </div>

              {/* Video Presentation */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Video Presentation
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="Videos/Video-Librarian.flv"
                      className="text-emerald-600 hover:underline"
                    >
                      Presentation Librarain Video
                    </a>
                  </p>
                  <div className="aspect-w-16 aspect-h-9 mt-4">
                    <iframe
                      width="854"
                      height="480"
                      src="https://www.youtube.com/embed/7VsiDFaEENc"
                      frameBorder="0"
                      allowFullScreen
                      className="w-full rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Checklist
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="ChecklistE.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      English Checklist
                    </a>
                  </p>
                  <p>
                    <a
                      href="ChecklistA.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Arabic Checklist
                    </a>
                  </p>
                </div>
              </div>

              {/* Brochoure */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Brochoure
                </h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>
                    English Brochoure "
                    <a
                      href="flyer front .jpg"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Front
                    </a>
                    ,{" "}
                    <a
                      href="flayer front  1copy.jpg"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Back
                    </a>
                    "
                  </p>
                  <p>
                    Arabic Brochoure "
                    <a
                      href="brochour-front - Copy .jpg"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Front
                    </a>
                    ,{" "}
                    <a
                      href="brochour-back .jpg"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Back
                    </a>
                    "
                  </p>
                </div>
              </div>

              {/* librarian Clients */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  librarian Clients
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="Librarian Client.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      librarian Clients
                    </a>
                  </p>
                </div>
              </div>

              {/* مزايا وخصائص */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  مزايا وخصائص تتوفر في نظام المكتبي عن غيره من النظم
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="مزايا وحصائص تتوفر في نظام المكتبي عن غيره من النظم.pdf"
                      className="text-emerald-600 hover:underline"
                    >
                      مزايا وخصائص تتوفر في نظام المكتبي عن غيره من النظم
                    </a>
                  </p>
                </div>
              </div>

              {/* HW, SW & Accessories */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  HW, SW & Accessories
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="HW & SW  Aspects.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      HW, SW & Accessories
                    </a>
                  </p>
                </div>
              </div>

              {/* Evaluation Questionnaire */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Evaluation Questionnaire
                </h4>
                <div className="space-y-1">
                  <p>
                    <a
                      href="Eval_ques_Eng.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      English Evaluation Questionnaire
                    </a>
                  </p>
                  <p>
                    <a
                      href="Eval-Ques-ara.pdf"
                      target="_blank"
                      className="text-emerald-600 hover:underline"
                    >
                      Arabic Evaluation Questionnaire
                    </a>
                  </p>
                </div>
              </div>

              {/* PH.D. degree on ILMS “LIBRARIAN A” */}
              <div className="mb-6 text-center">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  PH.D. degree on ILMS “LIBRARIAN A”
                </h4>
                <p>
                  <a
                    href="رسالة دكتوراة المكتبى.pdf"
                    className="text-emerald-600 hover:underline"
                  >
                    PH.D. degree on ILMS “LIBRARIAN A”
                  </a>
                </p>
              </div>

              {/* "رسالة دكتوراة عن نظام "المكتبى */}
              <div className="mb-6 text-center">
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  "رسالة دكتوراة عن نظام "المكتبى
                </h4>
                <p>
                  <a
                    href="رسالة دكتوراة المكتبى.pdf"
                    className="text-emerald-600 hover:underline"
                  >
                    رسالة دكتوراة عن النظام المكتبى
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Quick Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Quick Links
              </h3>
              <p className="text-gray-500 text-sm">
                Select a section from the main content to view details or
                download resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
