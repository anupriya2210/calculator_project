function addValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearVal() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function evaluateVal() {
    const display = document.getElementById('display');
    try {
        // Use eval to evaluate the expression in the input
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; // Handle any evaluation errors
    }
}

