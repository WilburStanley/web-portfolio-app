import styles from './SpokenLanguages.module.css';
import SLCard from '../../components/Card//SLCard/SLCard';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';

import spokenLang from '../../data/spokenLang';

const SpokenLanguages = () => {
    return (
        <section id="spoken-languages">
            <HeaderCard headText='Communication' subText='Languages'/>
            <div className={styles.slCardContainer}>
                {spokenLang.map((lang) => (
                    <SLCard
                        key={lang.id}
                        language={lang.language}
                        level={lang.level}
                    />
                ))}
            </div>
        </section>
    );
};

export default SpokenLanguages;