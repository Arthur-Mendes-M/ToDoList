import { createContext, useEffect, useState } from "react";
import { getTheme, setTheme } from "../../styles/themes";
import { ThemeProvider } from "styled-components";

export const dataContext = createContext()

export const CustomDataProvider = ({children}) => {
    const [theme, setCurrentTheme] = useState(getTheme())

    const handleCurrentTheme = (themeName) => {
        setCurrentTheme(setTheme(themeName))
    }

    return (
        <dataContext.Provider value={{theme, handleCurrentTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </dataContext.Provider>
    )
}