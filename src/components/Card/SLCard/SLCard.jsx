import styles from './SLCard.module.css';

const SLCard = ({
    language = 'N/A',
    level = 'N/A'
}) => {
    return(
        <div className={styles.cardContainer}>
            <h3>{language}</h3>
            <p>{level}</p>
        </div>
    )
}

export default SLCard;