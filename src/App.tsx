import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DonationsGrantsMaster from "./pages/About/Donations&Grants/DonationsGrantsMaster";
import DrShawkyGrant from "./pages/About/Donations&Grants/DrShawkyGrant";
import KMIGrant from "./pages/About/Donations&Grants/KMIGrant";
import Mission from "./pages/About/ACML/Mission";
import Donations from "./pages/About/Donations&Grants/Donations";
import Represent from "./pages/About/ACML/Represent";

import ACMLAwards from "./pages/About/ACML/ACMLAwards";
import DonationsADAC from "./pages/About/Donations&Grants/DonationsADAC";
import Chairman from "./pages/About/Chairman/Chairman";
import ChairmanAwards from "./pages/About/Chairman/ChairmanAwards";
import ChairmanAccomplishments from "./pages/About/Chairman/ChairmanAccomplishments";
import ChairmanAr from "./pages/About/Chairman/ChairmanAr";
import Team from "./pages/About/Team/Team";
import Employees from "./pages/About/Team/Employees";
import SectorManagers from "./pages/About/Team/SectorManagers";
import ASAStandards from "./pages/About/ASA_Standards/ASAStandards";
import ASAStandardsAr from "./pages/About/ASA_Standards/ASAStandardsAr";
import Services from "./pages/Services";
import LMS from "./pages/Services/Products/LMS";
import DMS from "./pages/Services/Products/DMS";
import LawyerMAC from "./pages/Services/Products/LawyerMAC";
import Bookshop from "./pages/Services/Products/Bookshop";
import Partners from "./pages/Partners";
import Publishers from "./pages/Publishers";
import PublisherAIAA from "./pages/Publishers/PublisherAIAA";
import PublisherESDU from "./pages/Publishers/PublisherESDU";
import PublisherACM from "./pages/Publishers/PublisherACM";
import PublisherCABI from "./pages/Publishers/PublisherCABI";
import PublisherEbsco from "./pages/Publishers/PublisherEbsco";
import PublisherTaylorFrancis from "./pages/Publishers/PublisherTaylorFrancis";
import PublisherThieme from "./pages/Publishers/PublisherThieme";
import PublisherGlobalTradeTracker from "./pages/Publishers/PublisherGlobalTradeTracker";
import PublisherHeinOnline from "./pages/Publishers/PublisherHeinOnline";
import PublisherAASHTO from "./pages/Publishers/PublisherAASHTO";
import PublisherACI from "./pages/Publishers/PublisherACI";
import PublisherANSI from "./pages/Publishers/PublisherANSI";
import PublisherAPI from "./pages/Publishers/PublisherAPI";
import PublisherASCE from "./pages/Publishers/PublisherASCE";
import PublisherAWS from "./pages/Publishers/PublisherAWS";
import PublisherASME from "./pages/Publishers/PublisherASME";
import PublisherASMEBPVC from "./pages/Publishers/PublisherASMEBPVC";
import PublisherASTM from "./pages/Publishers/PublisherASTM";
import PublisherASTMPTP from "./pages/Publishers/PublisherASTMPTP";
import PublisherAVDATA from "./pages/Publishers/PublisherAVDATA";
import ChemwatchMaster from "./pages/Publishers/ChemWatch/ChemwatchMaster";
import ChemENG from "./pages/Publishers/ChemWatch/ChemENG";
import ChemArabic from "./pages/Publishers/ChemWatch/ChemArabic";
import PublisherHaystack from "./pages/Publishers/PublisherHaystack";
import PublisherICAO from "./pages/Publishers/PublisherICAO";
import PublisherNFPA from "./pages/Publishers/PublisherNFPA";
import PublisherPTC from "./pages/Publishers/PublisherPTC";
import PublisherSAE from "./pages/Publishers/PublisherSAE";
import PublisherSIAM from "./pages/Publishers/PublisherSIAM";
import PublisherAIP from "./pages/Publishers/PublisherAIP";
import PublisherILS from "./pages/Publishers/PublisherILS";
import Publisher3BScientific from "./pages/Publishers/Publisher3BScientific";
import PublisherPrimalPictures from "./pages/Publishers/PublisherPrimalPictures";
import PublisherJaypee from "./pages/Publishers/PublisherJaypee";
import PublisherEndNote from "./pages/Publishers/PublisherEndNote";
import PublisherPressReader from "./pages/Publishers/PublisherPressReader";
import PublisherLibraryOfCongress from "./pages/Publishers/PublisherLibraryOfCongress";
import PublisherOCLC from "./pages/Publishers/PublisherOCLC";
import PublisherFairplay from "./pages/Publishers/PublisherFairplay";
import PublisherJanes from "./pages/Publishers/PublisherJanes";
import PublisherMilitarySpecifications from "./pages/Publishers/PublisherMilitarySpecifications";
import PublisherASNT from "./pages/Publishers/PublisherASNT";
import PublisherEBSCODatabases from "./pages/Publishers/PublisherEBSCODatabases";
import PublisherEBSCOMilitary from "./pages/Publishers/PublisherEBSCOMilitary";
import PublisherStandardsSocieties from "./pages/Publishers/PublisherStandardsSocieties";
import PublisherIntermat from "./pages/Publishers/PublisherIntermat";
import PublisherLibrarian from "./pages/Publishers/PublisherLibrarian";
import PublisherDemco from "./pages/Publishers/PublisherDemco";
import PublisherGaylord from "./pages/Publishers/PublisherGaylord";
import PublisherHannecke from "./pages/Publishers/PublisherHannecke";
import PublisherArcticSecurity from "./pages/Publishers/PublisherArcticSecurity";
import PublisherBloomsbury from "./pages/Publishers/PublisherBloomsbury";
import PublisherHarmattan from "./pages/Publishers/PublisherHarmattan";
import TeachingStrategiesMaster from "./pages/Publishers/Teaching/TeachingStrategiesMaster";
import TeachingStrategiesEN from "./pages/Publishers/Teaching/TeachingStrategiesEN";
import TeachingStrategiesAR from "./pages/Publishers/Teaching/TeachingStrategiesAR";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

// Helper to handle legacy props navigation
const RouteAdapter = ({
  children,
}: {
  children: (navigate: (page: string) => void) => React.ReactNode;
}) => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "about-mission":
        navigate("/about/mission");
        break;
      case "about-represent":
        navigate("/about/represent");
        break;
      case "about-awards":
        navigate("/about/awards");
        break;
      case "about-chairman":
        navigate("/about/chairman");
        break;
      case "about-chairman-awards":
        navigate("/about/chairman/awards");
        break;
      case "about-chairman-accomplishments":
        navigate("/about/chairman/accomplishments");
        break;
      case "about-chairman-ar":
        navigate("/about/chairman/ar");
        break;
      case "about-team":
        navigate("/about/team");
        break;
      case "about-employees":
        navigate("/about/team/employees");
        break;
      case "about-sector-managers":
        navigate("/about/team/sector-managers");
        break;
      case "about-donations":
        navigate("/about/donations-grants");
        break;
      case "donations-list":
        navigate("/about/donations-grants/donations");
        break;
      case "donations-adac":
        navigate("/about/donations-grants/adac");
        break;
      case "dr-shawky-grant":
        navigate("/about/donations-grants/dr-shawky-grant");
        break;
      case "kmi-grant":
        navigate("/about/donations-grants/kmi-grant");
        break;
      case "about-asa-standards":
        navigate("/about/asa-standards");
        break;
      case "about-asa-standards-ar":
        navigate("/about/asa-standards-ar");
        break;
      case "services":
        navigate("/services");
        break;
      case "services-lms":
        navigate("/services/lms");
        break;
      case "services-dms":
        navigate("/services/dms");
        break;
      case "services-lawyer":
        navigate("/services/lawyer-mac");
        break;
      case "services-bookshop":
        navigate("/services/bookshop");
        break;
      case "partners":
        navigate("/partners");
        break;
      case "publishers":
        navigate("/publishers");
        break;
      case "publisher-aiaa":
        navigate("/publishers/aiaa");
        break;
      case "publisher-esdu":
        navigate("/publishers/esdu");
        break;
      case "publisher-acm":
        navigate("/publishers/acm");
        break;
      case "publisher-cabi":
        navigate("/publishers/cabi");
        break;
      case "publisher-ebsco":
        navigate("/publishers/ebsco");
        break;
      case "publisher-taylor-francis":
        navigate("/publishers/taylor-francis");
        break;
      case "publisher-thieme":
        navigate("/publishers/thieme");
        break;
      case "publisher-gtt":
        navigate("/publishers/gtt");
        break;
      case "publisher-hein":
        navigate("/publishers/hein");
        break;
      case "publisher-aashto":
        navigate("/publishers/aashto");
        break;
      case "publisher-aci":
        navigate("/publishers/aci");
        break;
      case "publisher-ansi":
        navigate("/publishers/ansi");
        break;
      case "publisher-api":
        navigate("/publishers/api");
        break;
      case "publisher-asce":
        navigate("/publishers/asce");
        break;
      case "publisher-aws":
        navigate("/publishers/aws");
        break;
      case "publisher-asme":
        navigate("/publishers/asme");
        break;
      case "publisher-asme-bpvc":
        navigate("/publishers/asme-bpvc");
        break;
      case "publisher-astm":
        navigate("/publishers/astm");
        break;
      case "publisher-astm-ptp":
        navigate("/publishers/astm-ptp");
        break;
      case "publisher-av-data":
        navigate("/publishers/av-data");
        break;
      case "publisher-chemwatch":
        navigate("/publishers/chemwatch");
        break;
      case "publisher-chemwatch-en":
        navigate("/publishers/chemwatch/en");
        break;
      case "publisher-chemwatch-ar":
        navigate("/publishers/chemwatch/ar");
        break;
      case "publisher-haystack":
        navigate("/publishers/haystack");
        break;
      case "publisher-icao":
        navigate("/publishers/icao");
        break;
      case "publisher-nfpa":
        navigate("/publishers/nfpa");
        break;
      case "publisher-ptc":
        navigate("/publishers/ptc");
        break;
      case "publisher-sae":
        navigate("/publishers/sae");
        break;
      case "publisher-siam":
        navigate("/publishers/siam");
        break;
      case "publisher-aip":
        navigate("/publishers/aip");
        break;
      case "publisher-ils":
        navigate("/publishers/ils");
        break;
      case "publisher-3b-scientific":
        navigate("/publishers/3b-scientific");
        break;
      case "publisher-primal-pictures":
        navigate("/publishers/primal-pictures");
        break;
      case "publisher-jaypee":
        navigate("/publishers/jaypee");
        break;
      case "publisher-endnote":
        navigate("/publishers/endnote");
        break;
      case "publisher-pressreader":
        navigate("/publishers/pressreader");
        break;
      case "publisher-loc":
        navigate("/publishers/loc");
        break;
      case "publisher-oclc":
        navigate("/publishers/oclc");
        break;
      case "publisher-fairplay":
        navigate("/publishers/fairplay");
        break;
      case "publisher-janes":
        navigate("/publishers/janes");
        break;
      case "publisher-milspecs":
        navigate("/publishers/milspecs");
        break;
      case "publisher-asnt":
        navigate("/publishers/asnt");
        break;
      case "publisher-ebsco-databases":
        navigate("/publishers/ebsco-databases");
        break;
      case "publisher-ebsco-military":
        navigate("/publishers/ebsco-military");
        break;
      case "publisher-standards":
        navigate("/publishers/standards");
        break;
      case "publisher-intermat":
        navigate("/publishers/intermat");
        break;
      case "publisher-librarian":
        navigate("/publishers/librarian");
        break;
      case "publisher-demco":
        navigate("/publishers/demco");
        break;
      case "publisher-gaylord":
        navigate("/publishers/gaylord");
        break;
      case "publisher-hannecke":
        navigate("/publishers/hannecke");
        break;
      case "publisher-arctic":
        navigate("/publishers/arctic");
        break;
      case "publisher-bloomsbury":
        navigate("/publishers/bloomsbury");
        break;
      case "publisher-harmattan":
        navigate("/publishers/harmattan");
        break;
      case "publisher-teaching":
        navigate("/publishers/teaching");
        break;
      case "publisher-teaching-en":
        navigate("/publishers/teaching/en");
        break;
      case "publisher-teaching-ar":
        navigate("/publishers/teaching/ar");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  return <>{children(handleNavigate)}</>;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <ScrollToTop />
          <Header />
          {/* We refactored Header to not need props, so we can just put it here */}

          <main className="flex-grow">
            <RouteAdapter>
              {(handleNavigate) => (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/about"
                    element={<About setCurrentPage={handleNavigate} />}
                  />
                  <Route path="/about/mission" element={<Mission />} />
                  <Route path="/about/represent" element={<Represent />} />
                  <Route path="/about/awards" element={<ACMLAwards />} />
                  <Route
                    path="/about/chairman"
                    element={<Chairman setCurrentPage={handleNavigate} />}
                  />
                  <Route
                    path="/about/chairman/awards"
                    element={<ChairmanAwards />}
                  />
                  <Route
                    path="/about/chairman/accomplishments"
                    element={<ChairmanAccomplishments />}
                  />
                  <Route path="/about/chairman/ar" element={<ChairmanAr />} />
                  <Route path="/about/team" element={<Team />} />
                  <Route path="/about/team/employees" element={<Employees />} />
                  <Route
                    path="/about/team/sector-managers"
                    element={<SectorManagers />}
                  />

                  {/* Donations & Grants */}
                  <Route
                    path="/about/donations-grants"
                    element={<DonationsGrantsMaster />}
                  />
                  <Route
                    path="/about/donations-grants/donations"
                    element={
                      <Donations
                        onBack={() => handleNavigate("about-donations")}
                      />
                    }
                  />
                  <Route
                    path="/about/donations-grants/adac"
                    element={
                      <DonationsADAC
                        onBack={() => handleNavigate("about-donations")}
                      />
                    }
                  />
                  <Route
                    path="/about/donations-grants/dr-shawky-grant"
                    element={
                      <DrShawkyGrant
                        onBack={() => handleNavigate("about-donations")}
                      />
                    }
                  />
                  <Route
                    path="/about/donations-grants/kmi-grant"
                    element={
                      <KMIGrant
                        onBack={() => handleNavigate("about-donations")}
                      />
                    }
                  />

                  <Route
                    path="/about/asa-standards"
                    element={<ASAStandards />}
                  />
                  <Route
                    path="/about/asa-standards-ar"
                    element={<ASAStandardsAr />}
                  />

                  <Route path="/services" element={<Services />} />
                  <Route path="/services/lms" element={<LMS />} />
                  <Route path="/services/dms" element={<DMS />} />
                  <Route path="/services/lawyer-mac" element={<LawyerMAC />} />
                  <Route path="/services/bookshop" element={<Bookshop />} />

                  <Route path="/partners" element={<Partners />} />
                  <Route path="/publishers" element={<Publishers />} />

                  <Route path="/publishers/aiaa" element={<PublisherAIAA />} />
                  <Route path="/publishers/esdu" element={<PublisherESDU />} />
                  <Route path="/publishers/acm" element={<PublisherACM />} />
                  <Route path="/publishers/cabi" element={<PublisherCABI />} />
                  <Route
                    path="/publishers/ebsco"
                    element={<PublisherEbsco />}
                  />
                  <Route
                    path="/publishers/taylor-francis"
                    element={<PublisherTaylorFrancis />}
                  />
                  <Route
                    path="/publishers/thieme"
                    element={<PublisherThieme />}
                  />
                  <Route
                    path="/publishers/gtt"
                    element={<PublisherGlobalTradeTracker />}
                  />
                  <Route
                    path="/publishers/hein"
                    element={<PublisherHeinOnline />}
                  />
                  <Route
                    path="/publishers/aashto"
                    element={<PublisherAASHTO />}
                  />
                  <Route path="/publishers/aci" element={<PublisherACI />} />
                  <Route path="/publishers/ansi" element={<PublisherANSI />} />
                  <Route path="/publishers/api" element={<PublisherAPI />} />
                  <Route path="/publishers/asce" element={<PublisherASCE />} />
                  <Route path="/publishers/aws" element={<PublisherAWS />} />
                  <Route path="/publishers/asme" element={<PublisherASME />} />
                  <Route
                    path="/publishers/asme-bpvc"
                    element={<PublisherASMEBPVC />}
                  />
                  <Route path="/publishers/astm" element={<PublisherASTM />} />
                  <Route
                    path="/publishers/astm-ptp"
                    element={<PublisherASTMPTP />}
                  />
                  <Route
                    path="/publishers/av-data"
                    element={<PublisherAVDATA />}
                  />
                  <Route
                    path="/publishers/chemwatch"
                    element={<ChemwatchMaster />}
                  />
                  <Route
                    path="/publishers/chemwatch/en"
                    element={<ChemENG />}
                  />
                  <Route
                    path="/publishers/chemwatch/ar"
                    element={<ChemArabic />}
                  />
                  <Route
                    path="/publishers/haystack"
                    element={<PublisherHaystack />}
                  />
                  <Route path="/publishers/icao" element={<PublisherICAO />} />
                  <Route path="/publishers/nfpa" element={<PublisherNFPA />} />
                  <Route path="/publishers/ptc" element={<PublisherPTC />} />
                  <Route path="/publishers/sae" element={<PublisherSAE />} />
                  <Route path="/publishers/siam" element={<PublisherSIAM />} />
                  <Route path="/publishers/aip" element={<PublisherAIP />} />
                  <Route path="/publishers/ils" element={<PublisherILS />} />
                  <Route
                    path="/publishers/3b-scientific"
                    element={<Publisher3BScientific />}
                  />
                  <Route
                    path="/publishers/primal-pictures"
                    element={<PublisherPrimalPictures />}
                  />
                  <Route
                    path="/publishers/jaypee"
                    element={<PublisherJaypee />}
                  />
                  <Route
                    path="/publishers/endnote"
                    element={<PublisherEndNote />}
                  />
                  <Route
                    path="/publishers/pressreader"
                    element={<PublisherPressReader />}
                  />
                  <Route
                    path="/publishers/loc"
                    element={<PublisherLibraryOfCongress />}
                  />
                  <Route path="/publishers/oclc" element={<PublisherOCLC />} />
                  <Route
                    path="/publishers/fairplay"
                    element={<PublisherFairplay />}
                  />
                  <Route
                    path="/publishers/janes"
                    element={<PublisherJanes />}
                  />
                  <Route
                    path="/publishers/milspecs"
                    element={<PublisherMilitarySpecifications />}
                  />
                  <Route path="/publishers/asnt" element={<PublisherASNT />} />
                  <Route
                    path="/publishers/ebsco-databases"
                    element={<PublisherEBSCODatabases />}
                  />
                  <Route
                    path="/publishers/ebsco-military"
                    element={<PublisherEBSCOMilitary />}
                  />
                  <Route
                    path="/publishers/standards"
                    element={<PublisherStandardsSocieties />}
                  />
                  <Route
                    path="/publishers/intermat"
                    element={<PublisherIntermat />}
                  />
                  <Route
                    path="/publishers/librarian"
                    element={<PublisherLibrarian />}
                  />
                  <Route
                    path="/publishers/demco"
                    element={<PublisherDemco />}
                  />
                  <Route
                    path="/publishers/gaylord"
                    element={<PublisherGaylord />}
                  />
                  <Route
                    path="/publishers/hannecke"
                    element={<PublisherHannecke />}
                  />
                  <Route
                    path="/publishers/arctic"
                    element={<PublisherArcticSecurity />}
                  />
                  <Route
                    path="/publishers/bloomsbury"
                    element={<PublisherBloomsbury />}
                  />
                  <Route
                    path="/publishers/harmattan"
                    element={<PublisherHarmattan />}
                  />

                  <Route
                    path="/publishers/teaching"
                    element={<TeachingStrategiesMaster />}
                  />
                  <Route
                    path="/publishers/teaching/en"
                    element={<TeachingStrategiesEN />}
                  />
                  <Route
                    path="/publishers/teaching/ar"
                    element={<TeachingStrategiesAR />}
                  />

                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              )}
            </RouteAdapter>
          </main>
          <RouteAdapter>
            {(handleNavigate) => <Footer setCurrentPage={handleNavigate} />}
          </RouteAdapter>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
