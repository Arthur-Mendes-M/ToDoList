import React from "react";
import { Link, useRouteError, useNavigate } from "react-router-dom";
import { PreviousButton } from "../shared/Buttons/PreviousButton";

const ErrorPage = () => {
    const error = useRouteError()
    const errorType = error.statusText

    return (
        <>
            <h1>Página de erro!!</h1>
            <p>Tipo de erro: {errorType}</p>
            <Link to="/"><p>Voltar para a <span >página inicial</span></p></Link>
            <PreviousButton></PreviousButton>
        </>
    )
}

export { ErrorPage }