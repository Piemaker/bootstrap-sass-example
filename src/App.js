import logo from './logo.svg';
import bootstrap from "bootstrap";
import './App.scss';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Companies from './components/Companies';
import Services from './components/Services';
function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Intro></Intro>
   <Companies></Companies>
   <Services></Services>
</div>
  );
}

export default App;
