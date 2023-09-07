import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles/ThemeSwitchButton.css';
import { useEffect, useState } from 'react';

const ThemeSwitchButton: React.FC = () => {
    const [ icon, setIcon ] = useState<any>(faMoon);

    useEffect(() => {
        if (localStorage) {
            theme = localStorage.getItem("theme");
        }

        if (theme === lightTheme || theme === darkTheme) {
            body.classList.add(theme);
        } else {
            body.classList.add(lightTheme);
        }
    }, []);

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme: string | null;

    const switchTheme = () => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            setIcon(faMoon);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            setIcon(faSun);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }

    return (
        <button className="themeSwitchButton" onClick={switchTheme}><FontAwesomeIcon icon={icon} /></button>
    )
}

export default ThemeSwitchButton;