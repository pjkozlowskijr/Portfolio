import styles from './About.module.css'

export default function Skills() {
    return(
        <>
            <p>
                <span className={styles.userMachine}>patrick@ubuntu</span> 
                <span className={styles.terminalText}>:</span>
                <span className={styles.terminalLocation}>~</span>
                <span className={styles.terminalText}>$ cd skills</span>
            </p>
            <p>
                <span className={styles.userMachine}>patrick@ubuntu</span> 
                <span className={styles.terminalText}>:</span>
                <span className={styles.terminalLocation}>~/skills</span>
                <span className={styles.terminalText}>$ ls</span>
            </p>
            <br/>
            <ul className={styles.terminalText}>
                <li>Python</li>
                <li>React</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}