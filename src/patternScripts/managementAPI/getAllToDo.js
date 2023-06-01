async function getAllToDo() {
    return await fetch('https://to-do-json-database-rhl19x6mh-amendes.vercel.app/toDo').then(response => response.json())
}

export { getAllToDo }