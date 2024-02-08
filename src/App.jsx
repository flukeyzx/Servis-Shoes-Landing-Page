import { Home, Nav } from "./components";
import "./App.css";
import OurProducts from "./components/OurProducts";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Nav />
      <Home />
      <OurProducts />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
