import React, { useEffect, useState } from "react";

import '../../styles/main.scss'
import { ToDoForm } from "../shared/ToDoForm";

import { getAllToDo } from "../../patternScripts/managementAPI/getAllToDo";

import { DeleteButton } from '../shared/Buttons/DeleteButton';
import { AlterData } from '../shared/Buttons/AlterData'

// import { ThemeProvider } from "styled-components";

import { StyleGlobal } from "./globalStyle";

const LandingPage = () => {
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

    function deleteToDo(id) {
        const deleteConfirm = confirm('Deseja mesmo deletar o to do?')

        if(!deleteConfirm)
            return
        
        fetch(`http://localhost:3000/toDo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            getAllToDo().then(data => {
                setToDoList(data)
            })
        })
    }

    const listItens = () => {
        if(!todoList[0]) {
            return (
                <p>Não existe nenhuma tarefa ainda, crie um! :)</p>
            )
        }

        return todoList.map((item, index) => (
            <div key={index} className="toDoItem">
                <div className="toDoDetails">
                    <div className="title">
                        <h5>{item.name}</h5>
                    </div>

                    <div className="description">
                        <p>{item.description}</p>
                    </div>
                </div>

                <div className="options">
                    <AlterData link={`/toDo/${item.id}`} />
                    <DeleteButton deleteFunction={() => deleteToDo(item.id)} />
                </div>
            </div>
        ))
    }

    return (
        <>
            <StyleGlobal />
            <h1>To Do List</h1>

            <ToDoForm createNewToDoItem={createNewToDoItem}/>

            <div id="toDoList">
                {
                    listItens()
                }
            </div>
        </>
    )
}

export { LandingPage }