import React, { useEffect, useState, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

// API
import { getAllToDo } from "../../../patternScripts/managementAPI/getAllToDo";

// Components
import { PreviousButton } from "../../shared/Buttons/PreviousButton";
import { Title } from "./content/Title";
import { Description } from "./content/Description";
import { Container } from "../../shared/Container";
import { ThemeButtons } from "../../shared/Buttons/ThemeButtons";

// Styles
import { StyledToDoPage } from "./styles";

const ToDoPage = () => {
    const [toDo, setToDo] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const newToDo = {
        ...toDo
    }
    let toDoCreated = false

    useEffect(() => {
        getAllToDo().then(data => {
            const result = data.filter(item => item.id == id)[0]

            if(!result) {
                navigate('/')
            }
    
            setToDo(result)
        })
    }, [])

    const changeData = (newTextContent, field) => {
        const currentTextContent = event.target.textContent

        if(newTextContent === currentTextContent) {
            return
        }

        newToDo[field] = currentTextContent
        toDoCreated = true
    }

    const saveChanges = () => {
        if(!toDoCreated) {
            return
        }
        
        fetch(`https://to-do-json-database.vercel.app/toDo/${toDo.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newToDo)
        })

        event.target.style.borderColor = 'green'
    }

    return (
        <>
            <StyledToDoPage />
            
            <main>
                <PreviousButton container={false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>
                </PreviousButton>

                <Container>
                    <Title blurFunction={() => changeData(toDo.name, 'name')}>{toDo.name}</Title>

                    <p>Criado as <i>{toDo.time}</i> do dia {toDo.date}</p>
                </Container>

                <Container>
                    <Description blurFunction={() => changeData(toDo.description, 'description')}>
                        {toDo.description ? toDo.description : <i>{'Nenhuma descrição adicionada'}</i>}
                    </Description>
                </Container>

                <Container>
                    <button className="changeButton" onClick={saveChanges}>💾 Salvar alterações</button>
                </Container>

                <ThemeButtons></ThemeButtons>
            </main>
        </>
    )
}

export { ToDoPage }