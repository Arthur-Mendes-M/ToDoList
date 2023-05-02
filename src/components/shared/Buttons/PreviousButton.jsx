import React from "react";
import { useNavigate } from "react-router-dom";

import '../../../styles/components/previousButton.scss'

const PreviousButton = (props) => {
    const navigate = useNavigate()

    const withContainer =() => {
        if(props.container) {
            return (
                <div className="previousButtonContainer">
                    <button className={props.class} type="button" onClick={() => navigate(-1)}>
                        {
                            props.content ? props.content : 'Voltar para a página anterior!'
                        }
                    </button>
                </div>
            )
        } else {
            return (
                <button className={props.class} type="button" onClick={() => navigate(-1)}>
                    {
                        props.content ? props.content : 'Voltar para a página anterior!'
                    }
                </button>
            )
        }
    }

    return (
        <>
            {withContainer()}
        </>
    )
}

export { PreviousButton }