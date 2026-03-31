import styles from './SpokenLanguages.module.css';
import SLCard from '../../components/Card//SLCard/SLCard';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';

const spokenLang = [
    {id: 1, language : "Filipino", level : "Native"},
    {id: 2, language : "English", level : "Fluent"},
    {id: 3, language : "Mandarin", level : "Studying"},
    {id: 4, language : "Japanese", level : "Studying"},
]

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