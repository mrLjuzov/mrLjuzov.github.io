import './LjuzovLogo.css';
import { useDarkLightMode } from './DarkLightMode.jsx';
import loadLjuzovLogoLight from '/src/assets/LjuzovLogoLightMode.png';
import loadLjuzovLogoDark from '/src/assets/LjuzovLogoDarkMode.png';

function LjuzovLogo () {
    const darkMode = useDarkLightMode();
    return (
        <img src={darkMode ? loadLjuzovLogoDark : loadLjuzovLogoLight} alt="Logo" id='LjuzovLogo' />
    )
}

export default LjuzovLogo