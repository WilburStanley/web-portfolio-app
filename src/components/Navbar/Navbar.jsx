import { useState } from 'react';
import style from './Navbar.module.css';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={style.topNavigation}>
      <div className={style.appLogo}>
        <Code2 size={20} style={{ color: 'var(--color-accent)' }} />
        WSJ.DEV
      </div>

      {/* Desktop Links */}
      <ul className={style.topNavigationLinks}>
        <li><a href="#hero">About</a></li>
        <li><a href="#technical-skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certs">Certs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Menu */}
      <div className={style.hamburger} onClick={toggleMenu}>
        {menuOpen ? <X size={28} style={{ color: 'var(--color-accent)' }} /> 
                  : <Menu size={28} style={{ color: 'var(--color-accent)' }} />}
      </div>

      {/* Mobile Dropdown */}
      <ul className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#technical-skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#certs" onClick={() => setMenuOpen(false)}>Certs</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;