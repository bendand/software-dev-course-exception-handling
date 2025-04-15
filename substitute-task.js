// Try to use a try catch block inside these functions or throw an error and call the function in a try catch block

//example 1
function printArray(array) {
    console.log("Names in the list:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//example 2
function calculateProduct(a, b) {
    return a * b;
}


//example 3
function calculateProduct(a, b) {
    return a * b;
}

//example 4
// const incompleteTasks = 
try {
    todos.filter((todo) => !todo.completed);
} catch (err) {
    console.log('Unexpected Error: ' + err.message);
}

//example 5
// const sortedByPriority = 

try {
    todos.sort((a, b) => a.priority - b.priority);
} catch (err) {
    console.log('Unexpected Error: ' + err.message);
}
