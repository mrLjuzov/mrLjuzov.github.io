import './index.css';
import { useDarkLightMode } from './DarkLightMode.jsx';

const Footer = () => {
    const darkMode = useDarkLightMode();

    return (
      <footer className={`footer ${darkMode ? 'dark-mode-text' : 'light-mode-text'}`}>
        <p>&copy; {new Date().getFullYear()} All rights reserved Jane Ljuzov</p>
      </footer>
    );
  }

export default Footer;