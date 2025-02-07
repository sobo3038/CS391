// add 
function addition() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    
    let second = document.getElementById("second-number").value;
    second = Number(second);
    
    let result = first + second;
    outputResult(result);
}

// sub 
function subtraction() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    
    let second = document.getElementById("second-number").value;
    second = Number(second);
    
    let result = first - second;
    outputResult(result);
}

// mult 
function multiplication() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    
    let second = document.getElementById("second-number").value;
    second = Number(second);
    
    let result = first * second;
    outputResult(result);
}

// div 
function division() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    
    let second = document.getElementById("second-number").value;
    second = Number(second);
    
    let result = first / second;
    outputResult(result);
}

// power using for() loop 
function power() {
    let first = document.getElementById("first-number").value;
    first = Number(first);
    
    let second = document.getElementById("second-number").value;
    second = Number(second);
    
    let startNumber = 1;
    for (let i = 0; i < second; i++) {
        startNumber = first * startNumber;
    }

    outputResult(startNumber);
}

// clear 
function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

// output 
function outputResult(result) {
    let output = document.getElementById("output");
    if (result < 0) {
        output.innerHTML = `<h3 style="color: red">${result}</h3>`;  
    } else {
        output.innerHTML = `<h3 style="color: black">${result}</h3>`; 
    }
}





