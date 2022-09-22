import Terminal from './Terminal'
import AboutMe from './AboutMe'

export default function About() {
    return(
        <>
            <Terminal text={AboutMe()}/>
            <Terminal text={'hello'}/>
            <Terminal text={'hello'}/>
        </>
    )
}