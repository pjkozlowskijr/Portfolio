import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Route, Routes } from "react-router-dom";

export default function Base() {
    <Box>
        <Grid2 container sx={{minHeight: '100%'}}>
            <Grid2 xs={12}>
                <Navbar />
            </Grid2>
            <Grid2 xs={12}>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/skills' element={<Skills />}/>
                </Routes>
            </Grid2>
            <Grid2 xs={12}>
                <Footer />
            </Grid2>
        </Grid2>
    </Box>
}