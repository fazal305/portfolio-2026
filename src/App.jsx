import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import EngineeringNotes from "./components/EngineeringNotes";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SelectedWork from "./components/SelectedWork";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <EngineeringNotes />
      </main>
      <Contact />
    </div>
  );
}

export default App;
