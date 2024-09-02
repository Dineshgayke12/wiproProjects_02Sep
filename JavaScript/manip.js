document.body.onload = addElement;

function addElement(){

    const newDiv= document.createElement("div");

    const newContent = document.createTextNode("Hello all from new Div !!")

    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("d1");

    document.body.insertBefore(newDiv, currentDiv);
}