import styles from "./Terminal.module.css"

export default function Terminal({text}) {
    return(
        <>
            <div className={styles.terminalMenu}>
                <span className={styles.fakeButtons}></span>
                <span className='fakeButtons minimize'></span>
                <span className='fakeButtons expand'></span>
            </div>
            <div className={styles.terminalScreen}>
                {text}
            </div>
        </>
    )
}