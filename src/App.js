import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Exp from './Components/Exp/Exp';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Education/>
      <Project/>
      <Exp/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
