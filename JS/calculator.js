function calculate() {
    const n1 = document.querySelector("#n1").value
    const n2 = document.querySelector("#n2").value
    const operation = document.querySelector("#operation").value
    let result = 0

    switch (operation) {
        case "+":
            result = "The addition is: " + (parseInt(n1) + parseInt(n2))
            break;
        case "-":
            result = "The substraction is: " + (parseInt(n1) - parseInt(n2))
            break;
        case "*":
            result = "The product is: " + (parseInt(n1) * parseInt(n2))
            break;
        case "/":
            result = "The quotient is: " + (parseInt(n1) / parseInt(n2))
            break;       
    }

    const divResult = document.querySelector("#result") 
    divResult.innerHTML = result

    console.log(n1, n2, operation, result)
}

function clean() {
    const n1 = document.querySelector("#n1").value=""
    const n2 = document.querySelector("#n2").value=""
}