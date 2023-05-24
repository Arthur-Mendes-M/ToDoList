import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import { AbsoluteTopLeftContainer, PrevButton } from "./style";

const PreviousButton = (props) => {
    const navigate = useNavigate()

    const withContainer =() => {
        if(props.container) {
            return (
                <AbsoluteTopLeftContainer>
                    <PrevButton className="prevButton history" type="button" onClick={() => navigate(-1)}>
                        {
                            props.children ? props.children : 'Voltar para a página anterior!'
                        }
                    </PrevButton>
                </AbsoluteTopLeftContainer>
            )
        } else {
            return (
                <PrevButton className="prevButton history" type="button" onClick={() => navigate(-1)}>
                    {
                        props.children ? props.children : 'Voltar para a página anterior!'
                    }
                </PrevButton>
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