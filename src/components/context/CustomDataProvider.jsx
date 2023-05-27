import { createContext, useEffect, useState } from "react";
import { getTheme } from "../../styles/themes";
import { ThemeProvider } from "styled-components";

export const dataContext = createContext()

import {getAllToDo} from '../../patternScripts/managementAPI/getAllToDo'

export const CustomDataProvider = ({children}) => {
    const [theme, setTheme] = useState(getTheme())
    const [dataset, setDataset] = useState([])

    useEffect(() => {
        getAllToDo().then(data => setDataset(data))
    }, [])

    const handleCurrentTheme = (themeName) => {
        setTheme(getTheme(themeName))
    }

    const handleDataset = (data) => {
        setDataset(data)
    }

    return (
        <dataContext.Provider value={{theme, handleCurrentTheme, dataset, handleDataset}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </dataContext.Provider>
    )
}