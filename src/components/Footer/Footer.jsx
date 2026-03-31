import style from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={style.footer}>
        <p>
            Built with <span>❤</span> by Wilbur Stanley Jimenez | &copy;{currentYear}
        </p>
        </footer>
    );
};

export default Footer;