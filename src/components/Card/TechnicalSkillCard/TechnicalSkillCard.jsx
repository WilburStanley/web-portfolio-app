import style from './TechnicalSkillCard.module.css';
import { ExternalLink } from 'lucide-react';

const TechnicalSkillCard = ({
  title = 'Web Development',
  categories = [],
  icon: Icon = ExternalLink,
  iconSize = 25,
  iconColor = 'var(--color-accent-dim)',
}) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardHeaderContainer}>
        <div className={style.cardLogo}>
          <Icon size={iconSize} color={iconColor} />
        </div>
        <div className={style.cardName}>{title}</div>
      </div>

      <ul className={style.skillList}>
        {categories.map((category) => (
          <li key={category} className={style.skillTag}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkillCard;