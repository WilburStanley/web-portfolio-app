import style from './TechnicalSkills.module.css';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import TechnicalSkillCard from '../../components/Card/TechnicalSkillCard/TechnicalSkillCard';
import { Globe, Tablet, Monitor, Bot, Wrench } from 'lucide-react';

const technicalSkills = [
    { id : 1, icon : Globe, title : "Web Development", categories : ["HTML5", "CSS3", "JavaScript", "React", "Firebase", "Supabase", "SQL"]},
    { id : 2, icon : Tablet, title : "Native Mobile Development | Android", categories : ["Java", "Kotlin", "XML", "SQL", "SQLite", "Firebase"]},
    { id : 3, icon : Tablet, title : "Cross-Platform Mobile Development | Android & IOS", categories : ["ReactNative", "Flutter", "Firebase", "SQL"]},
    { id : 4, icon : Monitor, title : "Desktop Development", categories : ["Java Swing", "SQL", "MySQL", "Python Tkinter"]},
    { id : 5, icon : Bot, title : "Automation | Python", categories : ["Web Scrapping", "OpenCV", "Task Automation", "Data Processing"]},
    { id : 6, icon : Wrench, title : "Developer Tools", categories : ["Github", "VSCode", "Android Studio", "PyCharm", "IntelliJ", "Vercel", "Render", "Google Auth (Google Cloud)"]},
]

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