import { createContext, useState } from "react";
import { getTheme } from "../../patternScripts/themes";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext()

export const CustomThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getTheme())

    const handleCurrentTheme = (themeName) => {
        setTheme(getTheme(themeName))
    }

    return (
        <ThemeContext.Provider value={{theme, handleCurrentTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}