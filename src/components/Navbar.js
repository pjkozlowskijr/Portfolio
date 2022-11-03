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
        name: 'Contact Me',
        to: '/contact'
    }
]

export default function Navbar() {
    return(
        <div className='container flex flex-row'>
            <Link to='/' className='basis-7/12'>
                <img
                    className='object-scale-down h-10'
                    src='https://res.cloudinary.com/detcvmtip/image/upload/v1663094645/coding_logo_wapvme.png'
                    alt='Coding logo'
                />
            </Link>
            {links.map((link, index) => (
                <Link to={link.to} key={index} className='basis-1/12'>{link.name}</Link>
            ))}
        </div>
    )
}