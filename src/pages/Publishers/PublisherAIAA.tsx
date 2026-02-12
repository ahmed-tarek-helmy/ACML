import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";

const PublisherAIAA: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 shadow-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white inline-block p-6 rounded-2xl mb-6 shadow-xl border border-white/20">
            <div className="image-placeholder w-[158px] h-[66px] flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
              AIAA Logo Placeholder
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            American Institute of Aeronautics and Astronautics (AIAA)
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The world's largest technical society dedicated to the global
            aerospace profession.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="http://www.aiaa.org"
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

      {/* Main Content */}
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          {/* About Section */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
              About AIAA
            </h2>

            <div className="clearfix mb-8">
              <img
                src="/images/AIAA_2.jpg"
                width="160"
                height="128"
                className="mx-auto mb-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                alt="AIAA About"
              />
              <p className="mb-6 leading-relaxed">
                <strong className="text-gray-900 dark:text-white block mb-2">
                  One Remarkable Fact Says It All:
                </strong>
                Since 1963, members from a single professional society have
                achieved virtually every milestone in modern American flight.
                That society is the American Institute of Aeronautics and
                Astronautics. With more than 35,000 individual members and 90
                corporate members, AIAA is the world’s largest technical society
                dedicated to the global aerospace profession.
              </p>
              <p className="mb-6 leading-relaxed">
                Created in 1963 by the merger of the two great aerospace
                societies of the day, the American Rocket Society (founded in
                1930 as the American Interplanetary Society), and the Institute
                of the Aerospace Sciences (established in 1933 as the Institute
                of the Aeronautical Sciences), AIAA carries forth a proud
                tradition of more than 75 years of aerospace leadership.
              </p>
              <p className="leading-relaxed bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                This is the place for everything, from exploring our history and
                purpose … to catching up on the latest news.
                <br />
                <br />
                Recognizing excellence is one the most important contributions
                we make. <strong>Welcome to the heart of aerospace</strong>.
                With 35,000 members, AIAA is the world’s largest professional
                society devoted to the progress of engineering and science in
                aviation, space, and defense. Serving this elite audience and
                its historic mission is our commitment and our privilege. Now we
                invite you to learn more about AIAA – and share in the vision
                and excitement of this inspiring industry.
              </p>
            </div>

            {/* Mission Section */}
            <div className="clearfix mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
                AIAA Mission
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    AIAA’s mission is to address the professional needs and
                    interests of the past, current, and future aerospace
                    workforce and to advance the state of aerospace science,
                    engineering, technology, operations, and policy to benefit
                    our global society.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="image-placeholder w-[287px] h-[94px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-xs text-center border border-dashed border-gray-400">
                    AIAA Image Placeholder
                  </div>
                </div>
              </div>
            </div>

            {/* Did You Know Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
                Did You Know?
              </h2>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AIAA is the leading Aerospace Publisher
                  </h3>
                  <p className="leading-relaxed">
                    AIAA has earned an international reputation as the
                    preeminent publisher of cutting-edge aerospace books and
                    journals, and the leading source of aerospace industry
                    archives, dating back to the early 1900s. Over the past
                    eight decades, AIAA and its predecessor organizations have
                    published over 300 books and about 300,000 technical meeting
                    papers. AIAA’s current publications include seven technical
                    journals, a magazine, three book series, national and
                    international standards documents, a growing number of
                    e-books and other electronic products, and a full-service,
                    interactive Web site. For the most authoritative technical
                    publications, look to AIAA.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AIAA is the Wellspring for Information Exchange
                  </h3>
                  <p className="leading-relaxed">
                    AIAA organizes and hosts the aerospace industry’s most
                    important conferences and events, where aerospace
                    professionals exchange information, present findings,
                    network, and collaborate. Every year, AIAA organizes and
                    hosts some two dozen conferences on key aerospace topics.
                    Whether it’s science and engineering, exploration,
                    navigation, communication, or environmental applications,
                    AIAA brings the aerospace community together to bring the
                    world together.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AIAA serves a diverse community
                  </h3>
                  <p className="leading-relaxed">
                    By addressing the needs of scientists, engineers and allied
                    professionals who conceive, design, develop, test,
                    construct, and operate air and space vehicles, plus their
                    associated systems and subsystems. Equally important, we
                    reach out to the educators who train the professionals, to
                    the researchers who continuously renew the technology, to
                    the managers who lead their efforts, and to the innovators
                    who generate and nurture new concepts. For all of these
                    professionals, AIAA offers a wealth of benefits. These
                    include resources for practitioners, such as access to
                    market and management information, links to related
                    societies and businesses, career information, and
                    provocative articles with relevant industry insights.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AIAA is the Public Policy Voice of Aerospace
                  </h3>
                  <p className="leading-relaxed">
                    AIAA is the voice of the aerospace profession, giving its
                    members an effective say in policy decisions affecting
                    aerospace. Since 1972 AIAA has contributed technical
                    expertise to Congress and the executive branch, providing
                    accurate information to decision makers and highlighting the
                    crucial role aerospace plays in economic and national
                    security, and in our technological future.
                  </p>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
                Our History: Two Pioneering Traditions United
              </h2>
              <div className="bg-white dark:bg-gray-800 p-0 rounded-lg">
                <p className="mb-6 leading-relaxed">
                  For more than 70 years, AIAA has been the principal society of
                  the aerospace engineer and scientist. But we haven’t always
                  been AIAA, or even one organization.
                </p>
                <p className="mb-6 leading-relaxed">
                  In 1963, the two great aerospace societies of the day merged.
                  The American Rocket Society and the Institute of Aerospace
                  Science* joined to become AIAA. Both brought long and eventful
                  histories to the relationship – histories that stretched back
                  to 1930 and 1932 respectively, a time when rocketry was the
                  stuff of science fiction and the aviation business was still
                  in its infancy.
                </p>
                <p className="mb-6 leading-relaxed">
                  Each society left its distinct mark on AIAA. The merger
                  combined the imaginative, risk-taking, shoot-for-the-moon
                  outlook of Project Mercury-era rocket, missile, and space
                  professionals with the more established, well-recognized,
                  industry-building achievers of the aviation community. The
                  resulting synergy has benefited aerospace ever since.
                </p>
                <p className="mb-6 leading-relaxed">
                  Today, with more than 35,000 members, AIAA is the world's
                  largest professional society devoted to the progress of
                  engineering and science in aviation, space, and defense. The
                  Institute continues to be the principal voice, information
                  resource, and publisher for aerospace engineers, scientists,
                  managers, policymakers, students, and educators. AIAA is also
                  the go-to resource for stimulating professional accomplishment
                  and standards-driven excellence in all areas of aerospace for
                  prominent corporations and government organizations worldwide.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-8 border-t dark:border-gray-700 pt-4">
                  * The two societies were originally the American
                  Interplanetary Society and the Institute of Aeronautical
                  Science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherAIAA;
