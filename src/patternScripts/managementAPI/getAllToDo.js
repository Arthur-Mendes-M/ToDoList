async function getAllToDo() {
    return await fetch('https://to-do-json-database.vercel.app/toDo').then(response => response.json())
}

export { getAllToDo }