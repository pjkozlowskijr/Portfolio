import Terminal from './Terminal'
import AboutMe from './AboutMe'
import Skills from './Skills'

export default function About() {
    return(
        <>
            <Terminal text={AboutMe()}/>
            <Terminal text={Skills()}/>
            <Terminal text={'hello'}/>
        </>
    )
}