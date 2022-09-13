import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import { Route, Routes } from "react-router";

export default function Base() {
    return(
        <div className='container columns-1'>
            <div>
                <Navbar />
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/skills' element={<Skills />}/>
                </Routes>
            </div>
            <div className='fixed bottom-0'>
                <Footer />
            </div>
        </div>
    )
}