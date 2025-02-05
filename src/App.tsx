import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Hero />
              <Sponsors />
              <About />
              <Features />
              <Services />
              <Team />
              <FAQ />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
