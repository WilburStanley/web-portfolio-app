import CertCard from '../../components/Card/CertCard/CertCard';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import styles from './Certificates.module.css';
import certificates from '../../data/certificates';

const Certificates = () => {
    return(
        <section id="certs">
            <HeaderCard headText="Credentials" subText="Certifications"/>
            <div className={styles.certCardContainer}>
                {certificates.map((cert) => (
                    <CertCard 
                        key={cert.id}
                        title={cert.title}
                        issuer={cert.issuer}
                        year={cert.year}
                        url={cert.url} />
                ))}
            </div>
        </section>
    )
}

export default Certificates;