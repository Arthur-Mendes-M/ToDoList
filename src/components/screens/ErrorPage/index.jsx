import React, {useContext} from "react";
import { Link, useRouteError } from "react-router-dom";

// Components
import { PreviousButton } from "../../shared/Buttons/PreviousButton";

// Styles
import { StyledErrorPage } from "./styles";
// ContextAPI
import { dataContext } from "../../context/CustomDataProvider";

const ErrorPage = () => {
    const {theme, handleCurrentTheme} = useContext(dataContext)
    const error = useRouteError()
    const errorType = error.statusText

    return (
        <>
            <StyledErrorPage />
            <h1>Página de erro!!</h1>
            <p>Tipo de erro: {errorType}</p>
            <Link to="/"><p>Voltar para a <span >página inicial</span></p></Link>
            <PreviousButton></PreviousButton>
        </>
    )
}

export { ErrorPage }