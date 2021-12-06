import bootstrap from "bootstrap";
import './App.scss';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Companies from './components/Companies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from "./components/FAQ";
import Portfolio from "./components/Portfolio";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Intro></Intro>
   <Companies></Companies>
   <Services></Services>
   <Testimonials></Testimonials>
   <FAQ></FAQ>
   <Portfolio></Portfolio>
   <GetStarted></GetStarted>
   <Footer></Footer>
   <BackToTop></BackToTop>
</div>
  );
}

export default App;
