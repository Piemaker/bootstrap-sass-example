import bootstrap from "bootstrap";
import './App.scss';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Companies from './components/Companies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Intro></Intro>
   <Companies></Companies>
   <Services></Services>
   <Testimonials></Testimonials>
</div>
  );
}

export default App;
