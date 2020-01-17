import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (status) => {

    const [currentTheme, setCurrentTheme] = useLocalStorage("theme", 0);

    useEffect(() => {

        // remove all previous themes
        document.getElementById("root").classList.forEach(theme =>
            {
                if (theme.slice(0, 2) === "bg")
                    {
                        document.getElementById("root").classList.remove(theme)
                    }
            }
        )

        // add current theme
        if (currentTheme !== "0")
            { document.getElementById("root").classList.add("bg" + currentTheme) }

    }, [currentTheme]);

    return [currentTheme, setCurrentTheme];
}

export default useDarkMode;