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


addStyles();


