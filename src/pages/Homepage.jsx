import Navbar from "../components/Navbar";
import Header from "../components/Header"
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Homepage(){
    return(
        <>
        <Navbar/>
        <Header/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    );
}

export default Homepage;