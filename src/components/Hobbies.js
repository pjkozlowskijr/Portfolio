import styles from './About.module.css'
import classnames from 'classnames'

export default function Hobbies() {
    return(
        <>
            <p>
                <span className={styles.userMachine}>patrick@ubuntu</span> 
                <span className={styles.terminalText}>:</span>
                <span className={styles.terminalLocation}>~</span>
                <span className={styles.terminalText}>$ cd hobbies</span>
            </p>
            <p>
                <span className={styles.userMachine}>patrick@ubuntu</span> 
                <span className={styles.terminalText}>:</span>
                <span className={styles.terminalLocation}>~/hobbies</span>
                <span className={styles.terminalText}>$ ls</span>
            </p>
            <br/>
            <div className={styles.aboutColumns}>
                <ul className={classnames(styles.terminalText, styles.aboutLists)}>
                    <li>&#129406; Hiking with my wife and dog</li>
                    <li>&#127790; Cooking a good meal</li>
                    <li>&#128747; Traveling somewhere new</li>
                </ul>
                <ul className={classnames(styles.terminalText, styles.aboutLists)}>
                    <li>&#9971; Playing a round of golf</li>
                    <li>&#9917; Chelsea FC</li>
                    <li>&#127944; Daaaaa Chicago Bears</li>
                </ul>
            </div>
        </>
    )
}