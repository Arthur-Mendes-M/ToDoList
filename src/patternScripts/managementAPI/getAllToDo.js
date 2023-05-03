async function getAllToDo() {
    const result = await fetch('http://localhost:3000/toDo')
    const data = await result.json()
    return data
}

export { getAllToDo }