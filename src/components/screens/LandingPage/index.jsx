import React, { useContext, useEffect, useState } from "react";

// API
import { getAllToDo } from "../../../patternScripts/managementAPI/getAllToDo";

// Components
import { ToDoForm } from "../../shared/ToDoForm";
import { ToDoListContainer } from "../../shared/ToDoList";
import { ToDoItem } from "../../shared/ToDoItem";

// Styles
import { StyledLanding } from "./styles";

const LandingPage = () => {
    const [todoList, setToDoList] = useState([])

    useEffect(() => {
        getAllToDo().then(data => {
            setToDoList(data)
        })
    }, [])

    async function createNewToDoItem(toDo) {
        await fetch('https://to-do-json-database-rhl19x6mh-amendes.vercel.app/toDo', {
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