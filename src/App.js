import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About/About";
import MyServices from "./components/MyServices/MyServices";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Carosel from "./components/Carosel/Carosel";
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from "./components/Skills/Skills";
import SkillPercent from "./components/SkillPercent/SkillPercent";
import ShowCase from "./components/ShowCase/ShowCase";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <MyServices />
      <Skills />
      <Testimonials />
      <SkillPercent />
      <Blogs />
      <ShowCase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
