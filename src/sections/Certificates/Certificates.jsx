import CertCard from '../../components/Card/CertCard/CertCard';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import styles from './Certificates.module.css';

const certificates = [
  { 
    id: 1, 
    title: "CCNA: Introduction to Networks", 
    issuer: "Cisco Networking Academy", 
    year: 2026,
    url: '/certs/CCNA-_Introduction_to_Networks_certificate.pdf',
  },
  { 
    id: 2, 
    title: "Inventi Hackthon Challenge", 
    issuer: "Inventi", 
    year: 2025,
    url: '/certs/JimenezHackathonInventi.png',
  },
  { 
    id: 3, 
    title: "CodeFest : Local Level", 
    issuer: "STI College", 
    year: 2023,
    url: '/certs/CodeFest-2023.png',
  },
];

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