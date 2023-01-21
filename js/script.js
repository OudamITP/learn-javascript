
//title
const message = 'Calculator'
document.querySelector('#header').innerHTML = message
document.querySelector('#header').style.color = "green"

//sum function
document.getElementById("sum_btn").addEventListener("click", function() {
    let firstPar = document.getElementById("firstPar").value
    let secondPar = document.getElementById("secondPar").value
    let total = parseFloat(firstPar) + parseFloat(secondPar)
    if(isNaN(total)){
        document.getElementById("result_message").innerHTML = "Invalid!" 
        document.getElementById("result_message").style.color = "red" 
        document.getElementById("firstPar").value = ''
        document.getElementById("secondPar").value = ''    
    }
    else{
        document.getElementById("result_message").innerHTML = "The total is " + total  
    }
});

//substract function
document.getElementById("min_btn").addEventListener("click", function() {
    let firstPar = document.getElementById("firstPar").value
    let secondPar = document.getElementById("secondPar").value
    let total = parseFloat(firstPar) - parseFloat(secondPar)
    if(isNaN(total)){
        document.getElementById("result_message").innerHTML = "Invalid!" 
        document.getElementById("result_message").style.color = "red" 
        document.getElementById("firstPar").value = ''
        document.getElementById("secondPar").value = ''    
    }
    else{
        document.getElementById("result_message").innerHTML = "The total is " + total  
    }
});

//Multiply function
document.getElementById("multi_btn").addEventListener("click", function() {
    let firstPar = document.getElementById("firstPar").value
    let secondPar = document.getElementById("secondPar").value
    let total = parseFloat(firstPar) * parseFloat(secondPar)
    if(isNaN(total)){
        document.getElementById("result_message").innerHTML = "Invalid!" 
        document.getElementById("result_message").style.color = "red" 
        document.getElementById("firstPar").value = ''
        document.getElementById("secondPar").value = ''    
    }
    else{
        document.getElementById("result_message").innerHTML = "The total is " + total  
    }
});

//Divide function
document.getElementById("divide_btn").addEventListener("click", function() {
    let firstPar = document.getElementById("firstPar").value
    let secondPar = document.getElementById("secondPar").value
    let total = parseFloat(firstPar) / parseFloat(secondPar)
    if(isNaN(total)){
        document.getElementById("result_message").innerHTML = "Invalid!" 
        document.getElementById("result_message").style.color = "red" 
        document.getElementById("firstPar").value = ''
        document.getElementById("secondPar").value = ''    
    }
    else{
        document.getElementById("result_message").innerHTML = "The total is " + total  
    }
});

//clear function
document.getElementById("clear_btn").addEventListener("click", function(){
    document.getElementById("firstPar").value = ''
    document.getElementById("secondPar").value = ''
    document.getElementById("result_message").innerHTML = ''
});
