import styles from './Projects.module.css';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';

const projects = [
    {id : 1, name : "Student Database Management", 
        description : "Java Swing desktop application with secure hashed authentication and MySQL integration for reliable data management. The system supports live search, interactive dashboards, inline editing, auto-generated student and admin IDs, school emails, and audit trail logging. The database is type-safe, modular, and configurable, with constraints on age, year level, and unique emails. Despite Java Swing’s UI limitations, the interface has been extensively modified with modern designs, reusable components, and polished visual elements for a professional look.", 
        stackList : ["Desktop App", "Java", "JavaSwing", "MySQL", "XAMPP"],
        visitLink : "https://github.com/WilburStanley/windows-app-java-student-record-management-system",},
    {id : 2, name : "Chill Math Game", 
        description : "Android app with endless mode math challenges, featuring addition, subtraction, multiplication, and division. It provides instant feedback, a custom number pad, smooth transitions, and auto-regenerating problems for continuous learning. Built with Kotlin and native Android UI components, it combines interactive gameplay with a clean, modern interface.", 
        stackList : ["Android App", "Kotlin", "XML"],
        visitLink : "https://github.com/WilburStanley/android-kotlin-chillmath"},
]

const Projects = () => {
    return(
        <section id="projects">
            <HeaderCard headText='Portfolio' subText='Featured Projects'/>
            <div className={styles.projectCardsContainer}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        stackList={project.stackList}
                        visitLink={project.visitLink} />
                ))}
            </div>
        </section>
    )
}

export default Projects;