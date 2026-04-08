import { Send, Globe } from 'lucide-react';
import style from './Contact.module.css';

const Contact = () => {
    const highlight = (text) => (
        <span style={{ color: 'var(--color-accent)' }}>{text}</span>
    );
    return (
        <section className={style.contactContainer} id="contact">
            <div className={style.headText}>Get In Touch</div>
            <div className={style.subText}>
                Founder & Creator – Let's Build Something Together
            </div>
            <p className={style.description}>
                I’m {highlight('Wilbur Stanley Jimenez')}, founder of <strong>{highlight('BrightLabs')}</strong>. 
                I build {highlight('custom digital solutions')} for <strong>users</strong>, <strong>creators</strong>, and <strong>business owners</strong> to improve {highlight('everyday workflows')}. 
                I also create {highlight('quirky apps')} and {highlight('games')} for users. 
                I am currently <strong>open for freelance projects, collaborations, and full-time opportunities</strong>. 
                Let’s create something together
            </p>

            <div className={style.buttonGroup}>
                <a 
                    href="mailto:wilburstanley.workspace@gmail.com" 
                    className={style.contactButton} >
                    <Send size={20} />
                    Send Message
                </a>

                <a
                    href="https://brightlabs-official-website.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${style.contactButton} ${style.secondaryButton}`} >
                    <Globe size={20} />
                    Visit BrightLabs
                </a>
            </div>
        </section>
    );
};

export default Contact;