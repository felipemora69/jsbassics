function addStyles() {
    //h1 element
    let h1 = document.createElement("h1");

    //full name
    let fullName = "Felipe Mora";
    h1.textContent = fullName;

    // Styles
    h1.style.textAlign = "center";
    h1.style.color = "#A9A9A9";
    h1.style.fontFamily = "Arial, sans-serif";
    h1.style.fontSize = "60px";

    // Append the h1 element to the body
    document.body.appendChild(h1);
}

function addSum() {
    //input elements
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");

    // Create a button
    let addButton = document.createElement("button");
    addButton.textContent = "Calculate Sum";

    // Styles
    input2.style.marginLeft = "10px";
    input1.style.marginBottom = "10px";
    input2.style.marginBottom = "10px";
    addButton.style.display = "block";
    
    // Function to calculate and display the sum
    addButton.addEventListener("click", function() {
        // Get the values from the input elements
        let value1 = parseFloat(input1.value) || 0;
        let value2 = parseFloat(input2.value) || 0;

        // Calculate the sum
        let sum = value1 + value2;

        // Display the sum on the page
        alert("Sum: " + sum);
    });

    // Append the input elements and button to the body
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(addButton);
}


addStyles();
addSum();


