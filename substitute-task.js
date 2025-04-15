// Try to use a try catch block inside these functions or throw an error and call the function in a try catch block

//example 1
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input is not a valid array.");
    }

    console.log("Names in the list:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

try {
    printArray(['string', 'anotherString', notaSTring]);
} catch (err) {
    console.log('Error: ' + err.message);
}


//example 2
function calculateProduct(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    return a * b;
}

try {
    console.log(calculateProduct(5, notANumber));
} catch (err) {
    console.log('Error: ' + err.message);
}


//example 4
try {
    todos.filter((todo) => !todo.completed);
} catch (err) {
    console.log('Unexpected Error: ' + err.message);
}

//example 5

try {
    todos.sort((a, b) => a.priority - b.priority);
} catch (err) {
    console.log('Unexpected Error: ' + err.message);
}
