async function getAllToDo() {
    return await fetch('https://json-database-kzd0.onrender.com/toDo').then(response => response.json())
}

export { getAllToDo }