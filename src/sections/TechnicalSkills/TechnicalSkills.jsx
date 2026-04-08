import style from './TechnicalSkills.module.css';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import TechnicalSkillCard from '../../components/Card/TechnicalSkillCard/TechnicalSkillCard';

import technicalSkills from '../../data/technicalskills';

const TechnicalSkills = () => {
    return(
        <section id="technical-skills">
            <HeaderCard headText='Expertise' subText='Technical Skills'/>
            <div className={style.technicalSkillCardContainer}>
                {technicalSkills.map((skills) => (
                    <TechnicalSkillCard
                        key={skills.id}
                        icon={skills.icon}
                        title={skills.title}
                        categories={skills.categories}
                    />
                ))}
            </div>
        </section>
    )
}

export default TechnicalSkills;