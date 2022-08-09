"use strict";
let table = document.getElementById("table");
let arrayData = [];
let data = [];

function render() {
  for (let i = 0; i < data.length; i++) {
    let j = data[i];
    let newRow = document.createElement("tr");
    table.appendChild(newRow);
    let newId = document.createElement("td");
    newId.textContent = j.id;
    newRow.appendChild(newId);
    let newName = document.createElement("td");
    newName.textContent = j.name;
    newRow.appendChild(newName);
    let newType = document.createElement("td");
    newType.textContent = j.type;
    newRow.appendChild(newType);
    let newPrice = document.createElement("td");
    newPrice.textContent = j.price;
    newRow.appendChild(newPrice);
  
  }
}


function getData() {
  let retrievedData = localStorage.getItem("foods");

  arrayData = JSON.parse(retrievedData);
  return arrayData;
}
data = getData();
render();