import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Route, Routes } from "react-router";

export default function Base() {
    return(
        <Box>
        <Grid container sx={{minHeight: '100%'}}>
            <Grid xs={12}>
                <Navbar />
            </Grid>
            <Grid xs={12}>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/skills' element={<Skills />}/>
                </Routes>
            </Grid>
            <Grid xs={12}>
                <Footer />
            </Grid>
        </Grid>
    </Box>
    )
}