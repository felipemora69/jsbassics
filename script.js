const validateInput = (inputId) => {
    try {
        const inputElement = document.getElementById(inputId);
        const inputValue = parseFloat(inputElement.value);

        if (isNaN(inputValue)) {
            throw new Error("Please enter a valid number.");
        }

        //reset the border if it is correct
        document.getElementById("error-message").textContent = "";
        inputElement.style.border = "";
    } catch (error) {
        //set the border to red if an error occurs
        document.getElementById("error-message").textContent = error.message;
        document.getElementById(inputId).style.border = "2px solid red";
    }
};

function addStyles() {
    //h1 element
    let h1 = document.createElement("h1");

    //full name
    let fullName = "Felipe Mora";
    h1.textContent = fullName;

    // Styles
    h1.style.textAlign = "center";
    h1.style.color = "#A9A9A9";
    h1.style.fontSize = "60px";

    // Append the h1 element to the body
    document.body.appendChild(h1);

    //Body styles
    document.body.style.backgroundColor = "#5C8374";
    document.body.style.color = "#fff";
    document.body.style.fontFamily = "Arial, sans-serif";
}

function addSum() {
    //input elements
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");

    input1.id = "input1";
    input2.id = "input2";

    // Create a button
    let addButton = document.createElement("button");
    addButton.textContent = "Calculate Sum";

    //paragraph for displaying error messages   
    let errorMessage = document.createElement("p");
    errorMessage.id = "error-message";
    errorMessage.style.color = "red";

    let sumResult = document.createElement("p");
    sumResult.id = "sum-result";

    // Styles
    input2.style.marginLeft = "10px";
    input1.style.marginBottom = "10px";
    input2.style.marginBottom = "10px";
    input1.style.padding = "10px 20px";
    input2.style.padding = "10px 20px";
    input1.style.fontSize = "15px";
    input2.style.fontSize = "15px";
    addButton.style.display = "block";
    addButton.style.backgroundColor = "#183D3D";
    addButton.style.color = "#fff";
    addButton.style.padding = "10px 20px";
    
    //Validate input function
    addButton.onclick = function () {
        validateInput("input1");
        validateInput("input2");
        calcSum();
    };

    //display the sum
    function calcSum() {
        // Get the values from the input elements
        let value1 = parseFloat(input1.value) || 0;
        let value2 = parseFloat(input2.value) || 0;

        // Calculate the sum
        let sum = value1 + value2;

        if (!isNaN(sum)) {
            // Display the sum on the p1
            sumResult.textContent = "Sum: " + sum;

            input1.value = "";
            input2.value = "";
        } else {

            input1.value = "";
            input2.value = "";
        }
    }
    

    // Append the input elements and button to the body
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(addButton);
    document.body.appendChild(errorMessage);
    document.body.appendChild(sumResult);
};


addStyles();
addSum();