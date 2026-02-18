import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import CookieConsent from "./components/CookieConsent";
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
import ClientsReference from "./pages/About/Chairman/ClientsReference";
import Team from "./pages/About/Team/Team";
import Employees from "./pages/About/Team/Employees";
import SectorManagers from "./pages/About/Team/SectorManagers";

import Services from "./pages/Services";

import LawyerMAC from "./pages/Services/Products/LawyerMAC";
import Bookshop from "./pages/Services/Products/Bookshop";
import Partners from "./pages/Partners";
import Publishers from "./pages/Publishers";
import PublisherAIAA from "./pages/Publishers/PublisherAIAA";
import PublisherESDU from "./pages/Publishers/PublisherESDU";
import PublisherACM from "./pages/Publishers/PublisherACM";

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

import ChemwatchMaster from "./pages/Publishers/ChemWatch/ChemwatchMaster";
import ChemENG from "./pages/Publishers/ChemWatch/ChemENG";
import ChemArabic from "./pages/Publishers/ChemWatch/ChemArabic";
import PublisherHaystack from "./pages/Publishers/PublisherHaystack";
import PublisherICAO from "./pages/Publishers/PublisherICAO";
import PublisherNFPA from "./pages/Publishers/PublisherNFPA";

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
import Librarian from "./pages/Services/Products/Librarian";
import MAC from "./pages/Services/Products/MAC";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <ScrollToTop />
          <Header />
          <FloatingActions />
          <CookieConsent />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/mission" element={<Mission />} />
              {/* Organization component is missing, linking to About for now or removing if not needed */}
              {/* <Route path="/about/organization" element={<Organization />} /> */}

              <Route path="/about/team" element={<Team />} />
              <Route
                path="/about/team/sector-managers"
                element={<SectorManagers />}
              />
              <Route path="/about/team/employees" element={<Employees />} />
              <Route path="/about/represent" element={<Represent />} />
              <Route path="/about/chairman" element={<Chairman />} />
              <Route
                path="/about/chairman/awards"
                element={<ChairmanAwards />}
              />
              <Route
                path="/about/chairman/accomplishments"
                element={<ChairmanAccomplishments />}
              />
              <Route
                path="/about/chairman/clients"
                element={<ClientsReference />}
              />
              <Route path="/about/chairman/ar" element={<ChairmanAr />} />
              <Route
                path="/about/donations-grants"
                element={<DonationsGrantsMaster />}
              />
              <Route
                path="/about/donations-grants/donations"
                element={<Donations />}
              />
              <Route
                path="/about/donations-grants/adac"
                element={<DonationsADAC />}
              />
              <Route
                path="/about/donations-grants/dr-shawky-grant"
                element={<DrShawkyGrant />}
              />
              <Route
                path="/about/donations-grants/kmi-grant"
                element={<KMIGrant />}
              />
              <Route path="/about/awards" element={<ACMLAwards />} />
              <Route path="/about/awards" element={<ACMLAwards />} />

              <Route path="/services" element={<Services />} />
              <Route path="/services/bookshop" element={<Bookshop />} />
              <Route path="/services/librarian" element={<Librarian />} />
              <Route path="/services/mac" element={<MAC />} />
              <Route path="/services/lawyer-mac" element={<LawyerMAC />} />

              <Route path="/partners" element={<Partners />} />
              <Route path="/publishers" element={<Publishers />} />

              <Route path="/publishers/aiaa" element={<PublisherAIAA />} />
              <Route path="/publishers/esdu" element={<PublisherESDU />} />
              <Route path="/publishers/acm" element={<PublisherACM />} />

              <Route path="/publishers/ebsco" element={<PublisherEbsco />} />
              <Route
                path="/publishers/taylor-francis"
                element={<PublisherTaylorFrancis />}
              />
              <Route path="/publishers/thieme" element={<PublisherThieme />} />
              <Route
                path="/publishers/gtt"
                element={<PublisherGlobalTradeTracker />}
              />
              <Route
                path="/publishers/hein"
                element={<PublisherHeinOnline />}
              />
              <Route path="/publishers/aashto" element={<PublisherAASHTO />} />
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
                path="/publishers/chemwatch"
                element={<ChemwatchMaster />}
              />
              <Route path="/publishers/chemwatch/en" element={<ChemENG />} />
              <Route path="/publishers/chemwatch/ar" element={<ChemArabic />} />
              <Route
                path="/publishers/haystack"
                element={<PublisherHaystack />}
              />
              <Route path="/publishers/icao" element={<PublisherICAO />} />
              <Route path="/publishers/nfpa" element={<PublisherNFPA />} />

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
              <Route path="/publishers/jaypee" element={<PublisherJaypee />} />
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
              <Route path="/publishers/janes" element={<PublisherJanes />} />
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
                path="/publishers/librarian"
                element={<PublisherLibrarian />}
              />
              <Route path="/publishers/demco" element={<PublisherDemco />} />
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
