async function getAllToDo() {
    return await fetch('http://localhost:3000/toDo').then(response => response.json())
}

export { getAllToDo }