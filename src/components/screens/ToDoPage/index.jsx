import React, { useEffect, useState, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

// API
import { getAllToDo } from "../../../patternScripts/managementAPI/getAllToDo";

// Components
import { PreviousButton } from "../../shared/Buttons/PreviousButton";

// Styles
import { StyledToDoPage } from "./styles";
// ContextAPI
import { dataContext } from "../../context/CustomDataProvider";

const ToDoPage = () => {
    const {theme, handleCurrentTheme} = useContext(dataContext)
    const [toDo, setToDo] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllToDo().then(data => {
            const result = data.filter(item => item.id == id)[0]

            if(!result) {
                navigate('/')
            }
    
            setToDo(result)
        })
    }, [])

    return (
        <>
            <StyledToDoPage />
            
            <PreviousButton container={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>
            </PreviousButton>
            
            <main>
                <div className="title">
                    <h1>{toDo.name}</h1>
                    <p>Criado as <i>{toDo.time}</i> do dia {toDo.date}</p>
                </div>

                <div className="content">
                    <p>{
                        toDo.description ? toDo.description : <i>{'Nenhuma descrição adicionada'}</i>
                    }</p>
                </div>
            </main>
        </>
    )
}

export { ToDoPage }