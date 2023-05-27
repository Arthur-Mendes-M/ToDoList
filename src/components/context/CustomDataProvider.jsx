import { createContext, useEffect, useState } from "react";
import { getTheme } from "../../styles/themes";
import { ThemeProvider } from "styled-components";

export const dataContext = createContext()

export const CustomDataProvider = ({children}) => {
    const [theme, setTheme] = useState(getTheme())

    const handleCurrentTheme = (themeName) => {
        setTheme(getTheme(themeName))
    }

    return (
        <dataContext.Provider value={{theme, handleCurrentTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </dataContext.Provider>
    )
}