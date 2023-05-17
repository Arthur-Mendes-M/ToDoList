import React from "react";
import { useNavigate } from "react-router-dom";

// import '../../../styles/components/previousButton.scss'
import { Button } from "../AlterData/style";
import { PreviousButtonContainer } from "./style";

const PreviousButton = (props) => {
    const navigate = useNavigate()

    const withContainer =() => {
        if(props.container) {
            return (
                <PreviousButtonContainer>
                    <button className={props.class} type="button" onClick={() => navigate(-1)}>
                        {
                            props.content ? props.content : 'Voltar para a página anterior!'
                        }
                    </button>
                </PreviousButtonContainer>
            )
        } else {
            return (
                <Button className={props.class} type="button" onClick={() => navigate(-1)}>
                    {
                        props.content ? props.content : 'Voltar para a página anterior!'
                    }
                </Button>
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