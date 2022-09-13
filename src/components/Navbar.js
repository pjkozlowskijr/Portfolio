import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const links = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'About',
        to: '/about'
    },
    {
        name: 'Projects',
        to: '/projects'
    },
    {
        name: 'Skills',
        to: '/skills'
    },
    {
        name: 'Contact Me',
        to: '/contact'
    }
]

export default function Navbar() {
    return(
        <Box sx={{width: '100%', }}>
            <Link to='/'>
                <img
                    height='30px'
                    src='https://res.cloudinary.com/detcvmtip/image/upload/v1663094645/coding_logo_wapvme.png'
                    alt='Coding logo'
                />
            </Link>
            {links.map((link, index) => (
                <Link to={link.to} key={index}>{link.name}</Link>
            ))}
        </Box>
    )
}