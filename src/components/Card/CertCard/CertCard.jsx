import styles from './CertCard.module.css';
import { Medal } from 'lucide-react';

const CertCard = ({
    title = "Unknown",
    issuer = "N/A",
    year = "N/A",
    url = "#"
}) => {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cardLink}
        >
            <div className={styles.cardContainer}>
                <div className={styles.cardLogo}>
                    <Medal size={25} color='var(--color-accent-dim)' />
                </div>
                <div className={styles.cardDetails}>
                    <p className={styles.cardName}>{title}</p>
                    <p className={styles.description}>{issuer}</p>
                    <p className={styles.year}>{year}</p>
                </div>
            </div>
        </a>
    )
}

export default CertCard;