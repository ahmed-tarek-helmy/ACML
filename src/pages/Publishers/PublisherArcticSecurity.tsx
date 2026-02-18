import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";

const PublisherArcticSecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8"></div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-16 shadow-lg relative z-10">
        <div className="mr-20 ml-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
              <div className="image-placeholder w-[200px] h-[80px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                Arctic Security Logo
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Arctic Security
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Early Warning Service for cybersecurity. Identifying vulnerable
              services and compromised assets before others do.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.arcticsecurity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Visit Website
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="mailto:info@ACML-egypt.com"
                className="bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-20 ml-20">
        <div className="container mx-auto px-4 py-12 animate-fade-in-up">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="space-y-12 text-gray-700 dark:text-gray-300">
              {/* Main Header Image Placeholder */}
              <div className="flex justify-center mb-8">
                <div className="image-placeholder w-full max-w-[905px] h-[314px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm text-center border border-dashed border-gray-400">
                  Arctic Security Cybersecurity Image Placeholder
                  <br />
                  (905x314)
                </div>
              </div>

              {/* Main Content */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  It's time to preact
                </h2>

                {/* Arctic EWS Image Placeholder */}
                <div className="mb-6">
                  <div className="image-placeholder w-full max-w-[906px] h-[184px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-sm text-center border border-dashed border-gray-400">
                    Arctic EWS Image Placeholder
                    <br />
                    (906x184)
                  </div>
                </div>

                <p className="leading-relaxed mb-6">
                  Monitoring cybersecurity, day and night
                </p>
                <p className="leading-relaxed mb-6">
                  When it comes to vulnerable services and compromised assets,
                  you should know about yours before others do. Early warnings
                  about your cybersecurity issues reduce time-to-discovery.
                </p>
                <p className="leading-relaxed mb-6">
                  Every day, we observe 15 million cyber threat observations
                  across 80,000 organizations from around the world
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Simplifying cybersecurity
                </h2>
                <p className="leading-relaxed mb-6">
                  Improving cybersecurity and reducing cyber risk doesn’t have
                  to be mysterious or complicated – the goal is to reach as few
                  and as insignificant notifications as possible. Many issues
                  can and should be solved by IT staff in the course of their
                  routine tasks.
                </p>
                <p className="leading-relaxed mb-6">
                  As a change agent in cybersecurity, Arctic Security designed
                  Early Warning Service to provide its clients with
                  easy-to-digest and actionable information. Not only does this
                  systematically build up the capabilities of staff, but it
                  helps you to achieve the goal of improving stakeholder
                  cybersecurity posture.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  A cybersecurity service with a proven track record
                </h2>
                <p className="leading-relaxed mb-6">
                  Early warning services for cybersecurity issues are not a new
                  idea. They have been successfully used in cyber defense to
                  protect critical national infrastructure and improve
                  cybersecurity for companies. Until now, these have been
                  implemented by National Cyber Security Centers (NCSCs) and
                  Computer Emergency Response Teams (CERTs) in many countries.
                  Arctic Security developed the technology platform used in many
                  of the established warning systems, and we have seen in
                  practice how beneficial that can be.
                </p>
                <p className="leading-relaxed">
                  When you perform a cybersecurity assessment for your company,
                  it is crucial to have access to a reliable source of
                  information. For companies with assets spread over multiple
                  countries, for example, Early Warning Service provides
                  additional information and improved coverage compared to even
                  national services. Now, our Early Warning Service is
                  commercially available to any company in the world.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherArcticSecurity;
