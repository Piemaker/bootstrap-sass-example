import logo from './logo.svg';
import bootstrap from "bootstrap";
import './App.scss';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Companies from './components/Companies';
function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Intro></Intro>
   <Companies></Companies>
</div>
  );
}

export default App;
