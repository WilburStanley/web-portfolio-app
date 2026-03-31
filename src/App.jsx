import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import SpokenLanguages from './sections/SpokenLanguages/SpokenLanguages.jsx';
import TechnicalSkills from './sections/TechnicalSkills/TechnicalSkills.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Certificates from './sections/Certificates/Certificates.jsx';
import Contact from './sections/Contact/Contact.jsx';

const FadeIn = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><SpokenLanguages /></FadeIn>
      <FadeIn><TechnicalSkills /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Certificates /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <FadeIn><Footer /></FadeIn>
    </>
  );
};

export default App;