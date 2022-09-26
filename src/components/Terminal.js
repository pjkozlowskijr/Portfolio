import styles from './Terminal.module.css'
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import classnames from 'classnames';

export default function Terminal({text}) {
    return(
        <>
            <div className={styles.terminalMenu}>
                <RemoveOutlinedIcon className={styles.fakeButtons}/>
                <CropSquareOutlinedIcon className={styles.fakeButtons}/>
                <CloseOutlinedIcon className={classnames(styles.fakeButtons, styles.closeButton)}/>
            </div>
            <div className={styles.terminalScreen}>
                {text}
            </div>
        </>
    )
}