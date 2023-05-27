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

// export const toDoContext = createContext()

const LandingPage = () => {
    const {theme, handleCurrentTheme, dataset, handleDataset} = useContext(dataContext)

    console.log(dataset)

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

    const listItens = () => {
        if(!todoList[0]) {
            return (
                <p>Não existe nenhuma tarefa ainda, crie um! :)</p>
            )
        }

        return todoList.map((item, index) => (
            // <div key={index} className="toDoItem">
            //     <div className="toDoDetails">
            //         <div className="title">
            //             <h5>{item.name}</h5>
            //         </div>

            //         <div className="description">
            //             <p>{item.description}</p>
            //         </div>
            //     </div>

            //     <div className="options">
            //         <AlterData link={`/toDo/${item.id}`} />
            //         <DeleteButton deleteFunction={() => deleteToDo(item.id)} />
            //     </div>
            // </div>

            <ToDoItem key={index} id={item.id} name={item.name} description={item.description}></ToDoItem>
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