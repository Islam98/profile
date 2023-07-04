import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';
//import Contact from './components/Contact';


function App() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="sections">
          <Home/>
          <Experience/>
          <Skills/>
          <Activities/>
          {/* <Contact/> */}
        </div>
        {/* <TestTabs/> */}
        {/*<Testvt/>*/}
        <p class='copyrightLink'><a href="https://github.com/Islam98/profile/" > REPO </a></p>
      </div>
  );
}

export default App;
