import styles from './Projects.module.css';
import HeaderCard from '../../components/Card/HeaderCard/HeaderCard';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';

const projects = [
    {id : 1, name : "Social Media Video Downloader (TikTok & Facebook)", 
        description : "Web application that allows users to download videos from platforms like TikTok and Facebook using a simple URL. The backend is powered by Python, handling video processing and API requests. I implemented Google OAuth for secure authentication and created a freemium system with Free and Pro tiers using Polar.sh for payments. The app is deployed on Vercel and Render, with additional services on Google Cloud. I also used UptimeRobot to monitor uptime and prevent cold starts, ensuring better reliability and faster response times.", 
        stackList : ["Website", "ReactJS", "Python", "Vercel (Deployment)", "Render (Backend)", "Polar.sh (Payment)", "UpTimeRobot (Monitoring)"],
        visitLink : "https://brightlabs-downloader.vercel.app"},
    {id : 2, name : "Student Database Management", 
        description : "Java Swing desktop application with secure hashed authentication and MySQL integration for reliable data management. The system supports live search, interactive dashboards, inline editing, auto-generated student and admin IDs, school emails, and audit trail logging. The database is type-safe, modular, and configurable, with constraints on age, year level, and unique emails. Despite Java Swing’s UI limitations, the interface has been extensively modified with modern designs, reusable components, and polished visual elements for a professional look.", 
        stackList : ["Desktop App", "Java", "JavaSwing", "MySQL", "XAMPP"],
        visitLink : "https://github.com/WilburStanley/windows-app-java-student-record-management-system",},
    {id : 3, name : "Chill Math Game", 
        description : "Android app with endless mode math challenges, featuring addition, subtraction, multiplication, and division. It provides instant feedback, a custom number pad, smooth transitions, and auto-regenerating problems for continuous learning. Built with Kotlin and native Android UI components, it combines interactive gameplay with a clean, modern interface.", 
        stackList : ["Android App", "Kotlin", "XML"],
        visitLink : "https://github.com/WilburStanley/android-kotlin-chillmath"},
    {id : 4, name : "FileOrganizerPro – Intelligent File Automation", 
        description : "Desktop app that automatically organizes files into categories (Images, Documents, Audio, Video, Code, etc.) and date-based folders. It features real-time file monitoring, preview mode, undo functionality, duplicate protection, and deep folder scanning, providing a fast, hands-free, and safe file organization experience.", 
        stackList : ["Python", "Tkinter"],
        visitLink : "https://brightlabs.gumroad.com/l/FileOrganizerPro"},
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