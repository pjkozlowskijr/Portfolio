import styles from './About.module.css'

export default function AboutMe() {
    return(
        <>
            <p>
                <span className={styles.terminalLocation}>C:\Users\patrick&gt; </span> 
                <span className={styles.terminalText}>cd aboutme</span>
            </p>
            <p>
                <span className={styles.terminalLocation}>C:\Users\patrick\aboutme&gt; </span>
                <span className={styles.terminalText}>I'm a Full Stack Software Engineer based in Indianapolis, IN, who enjoys solving complex problems and bringing ideas to life through code. I appreciate you taking time to visit my profile and getting to know more about me. If you like my work, please reach out so we can connect!</span>
            </p>
        </>
    )
}