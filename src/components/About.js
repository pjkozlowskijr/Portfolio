import Terminal from './Terminal'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Hobbies from './Hobbies'

export default function About() {
    return(
        <>
            <Terminal text={AboutMe()}/>
            <Terminal text={Skills()}/>
            <Terminal text={Hobbies()}/>
        </>
    )
}