const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const completedTaskContainer = document.getElementById('completed-tasks')
const todoForm = document.getElementById('todo-form')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})



async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


async function markIncomplete() {
    const todoId = this.parentNode.dataset.id;
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        });
        const data = await response.json();
        console.log(data);

       
        // Remove the task from the active tasks list
        const taskItem = this.parentNode;
        taskItem.remove();

        // Move the task to the completed tasks list
        const completedTasksList = document.getElementById('completed-tasks');
        completedTasksList.appendChild(taskItem);

        // Fucntion to save tasks to local storage
        localStorage.setItem('completed-tasks', JSON.stringify(tasks))

    } catch (err) {
        console.log(err)
    }
}
/*
// Fucntion to save tasks to local storage
function savaTaskToLocalStorage (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks)) 
}

// funciton to get tasks from local storage
function getTaskFromLocalStorage() {
    const tasks = localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : []
}

// get taks from local storage 

const tasks = getTaskFromLocalStorage()

// add a new task
*/



