import styles from './HeaderCard.module.css';

const HeaderCard = ({
    headText = "N/A",
    subText = "N/A"
}) => {
    return(
        <div className={styles.headerGroup}>
            <header className={styles.headText}>{headText}</header>
            <p className={styles.subText}>{subText}</p>
        </div>
    )
}

export default HeaderCard;