import React from "react"; 
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
