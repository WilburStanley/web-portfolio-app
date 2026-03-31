import styles from './Hero.module.css';
import { Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const GitHubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const CONTACT_LINKS = [
  { href: 'mailto:wilburstanley.workspace@gmail.com', icon: <Mail size={16} />, label: 'wilburstanley.workspace@gmail.com' },
  { href: 'tel:+639072569430', icon: <Phone size={16} />, label: '+63 907 256 9430' },
  { href: 'https://github.com/WilburStanley', icon: <GitHubIcon size={16} />, label: 'GitHub', external: true },
];

const SOCIAL_LINKS = [
  { href: 'www.linkedin.com/in/wilbur-stanley-jimenez-660083383', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/wilburstanley.dev/', icon: <InstagramIcon />, label: 'Instagram' },
  { href: 'https://www.facebook.com/wilbur.stanley', icon: <FacebookIcon />, label: 'Facebook' },
];

const Hero = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    const profession = "Software Engineer | Multi-Platform Developer";
    const [typeProfession, setTypeProfession] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setTypeProfession(profession.slice(0, i + 1));
            i++;

            if (i === profession.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const highlight = (text) => (
        <span style={{ color: 'var(--color-accent)' }}>{text}</span>
    );

    return (
        <section className={styles.hero} id="hero">
            <div className={`${styles.blob} ${styles.blobTopCenter}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blobBottomRight}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blobTopLeft}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blobMidLeft}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blobBottomLeft}`} aria-hidden="true" />

            <div className={styles.inner}>
                <span className={`${styles.status} ${!isAvailable ? styles.statusUnavailable : ''}`}>
                    <span className={`${styles.dot} ${!isAvailable ? styles.dotUnavailable : ''}`} />
                    {isAvailable ? 'Available for work' : 'Not available'}
                </span>

                <h1 className={styles.name}>
                    Wilbur Stanley
                    <span className={styles.nameAccent}> Jimenez</span>
                </h1>

                <p className={styles.role}>{typeProfession}</p>

                <p className={styles.description}>
                    I build {highlight('Web')}, {highlight('Mobile')}, and {highlight('Desktop')} applications. I also work with {highlight('Automation')} to optimize processes and deliver {highlight('intuitive UI/UX experiences')}. I continuously learn new technologies to improve my work.
                </p>

                <nav className={styles.contact} aria-label="Contact links">
                    {CONTACT_LINKS.map(({ href, icon, label, external }) => (
                        <a key={href} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                            {icon}
                            <span>{label}</span>
                        </a>
                    ))}
                </nav>

                <div className={styles.socials} role="list" aria-label="Social media links">
                    {SOCIAL_LINKS.map(({ href, icon, label }) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer"
                           className={styles.socialIcon} aria-label={label} role="listitem">
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;