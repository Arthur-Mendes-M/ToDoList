import { useContext } from "react"
import { dataContext } from "../../../context/CustomDataProvider"
import { ButtonsThemeContainer } from "./styles"

export const ThemeButtons = () => {
    const {theme, handleCurrentTheme} = useContext(dataContext)
    
    return (
        <ButtonsThemeContainer>
            <button onClick={() => handleCurrentTheme("lightTheme")}>🌝</button>
            <button onClick={() => handleCurrentTheme("darkTheme")}>🌚</button>
        </ButtonsThemeContainer>
    )
}