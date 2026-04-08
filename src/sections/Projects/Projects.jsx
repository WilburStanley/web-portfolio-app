import styles from './Projects.module.css';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';
import projects from '../../data/projects';


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