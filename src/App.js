import './App.css';
import ContactForm from './components/contact-form/ContactForm';
import NavBar from './components/nav-bar/NavBar';
import Header from './components/header/Header'
import AboutMe from './components/about-me/AboutMe';
import FooterApp from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Skills from './components/skills/skills'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactForm />
      <FooterApp />
      
    </div>
  );
};

export default App;
