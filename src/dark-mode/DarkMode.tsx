import {useState} from "react";

export default function DarkMode () {
    const [darkModeOn, setDarkModeOn] = useState(false);

    function handleDarkModeClick() {
        setDarkModeOn(true);
    }

    function handleLightModeClick() {
        setDarkModeOn(false);
    }

    return (
        <div className={`page ${darkModeOn&& 'dark-mode'}`}>
            <button onClick={handleDarkModeClick} className='dark-mode-button'>Dark Mode</button>
            <button onClick={handleLightModeClick} className='light-mode-button'>Light Mode</button>
        </div>
    )
}
