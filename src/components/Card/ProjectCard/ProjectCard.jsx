import styles from './ProjectCard.module.css';
import { Folder, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  name = "Unknown",
  description = "Unknown",
  stackList = [],
  image,
  IconComponent,
  visitLink
}) => {
  const hasVisual = Boolean(image || IconComponent);

  const CardContent = (
    <div className={styles.cardContainer}>
      {hasVisual && (
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image} alt={name} />
          ) : (
            IconComponent ? <IconComponent size={40} /> : <Folder size={40} />
          )}
        </div>
      )}

      <div className={styles.projectName}>{name}</div>
      <div className={styles.description}>{description}</div>

      <ul className={styles.stackList}>
        {stackList.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>

      {visitLink && (
        <div className={styles.visitButton}>
          See Project <ExternalLink size={14} />
        </div>
      )}
    </div>
  );

  return visitLink ? (
    <a
      href={visitLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLinkWrapper}
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;