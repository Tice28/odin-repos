export default function storeTask(task){
    localStorage.setItem(task.index, task);
}

function deleteTask(task){
    localStorage.removeItem(task.index);
}