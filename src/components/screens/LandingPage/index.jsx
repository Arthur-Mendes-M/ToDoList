import React, { createContext, useContext, useEffect, useState } from "react";

// Change the global style for a file with ".JSX" extension
import '../../../styles/main.scss'

// API
import { getAllToDo } from "../../../patternScripts/managementAPI/getAllToDo";

// Components
import { ToDoForm } from "../../shared/ToDoForm";
import { ToDoListContainer } from "../../shared/ToDoList";
import { ToDoItem } from "../../shared/ToDoItem";

// Styles
import { StyledLanding } from "./styles";
// ContextAPI
import { dataContext } from "../../context/CustomDataProvider";

const LandingPage = () => {
    const {theme, handleCurrentTheme} = useContext(dataContext)
    const [todoList, setToDoList] = useState([])

    useEffect(() => {
        getAllToDo().then(data => {
            setToDoList(data)
        })
    }, [])

    async function createNewToDoItem(toDo) {
        await fetch('http://localhost:3000/toDo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(toDo)
        })

        getAllToDo().then(data => setToDoList(data))
    }   

    const handleToDoList = () => {
        getAllToDo().then(data => {
            setToDoList(data)
        })
    }

    // Possível problemas

    const listItens = () => {
        if(!todoList[0]) {
            return (
                <p>Não existe nenhuma tarefa ainda, crie um! :)</p>
            )
        }

        return todoList.map((item, index) => (
            <ToDoItem 
                key={index} 
                id={item.id} 
                name={item.name} 
                description={item.description}
                deleteCallback={handleToDoList}
            ></ToDoItem>
        ))
    }

    return (
        <>
            <StyledLanding />
            <h1>To Do List</h1>

            <ToDoForm createNewToDoItem={createNewToDoItem}/>

            <ToDoListContainer>
                {
                    listItens()
                }
            </ToDoListContainer>
        </>
    )
}

export { LandingPage }