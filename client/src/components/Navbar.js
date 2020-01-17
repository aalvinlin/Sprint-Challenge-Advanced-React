import React from "react";
import useTheme from "./hooks/useTheme";

const Navbar = () => {

    const [theme, setTheme] = useTheme(0);

    const updateTheme = (event) => {
        event.preventDefault();
        setTheme(event.target.value);
    }

    return (
        <header>
            <h1>2019 Women's World Cup Data</h1>

            <div className="themeChooser">

                <p>{theme === "0" ? "No theme chosen" : "Theme " + theme + " chosen"}</p>
                
                <button onClick={updateTheme} value={0}>0</button>
                <button onClick={updateTheme} value={1}>1</button>
                <button onClick={updateTheme} value={2}>2</button>
                <button onClick={updateTheme} value={3}>3</button>
            </div>

        </header>
    )
}

export default Navbar;