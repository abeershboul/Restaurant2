'use strict';
let id=999;
let submit = document.getElementById('submit');
let form = document.getElementById('form');
var allFoods = [];

var val = 0;
function food(val,name,type,price){
    this.id = val;
    this.name = name;
    this.type = type;
    this.price = price;

}


function saveData(data){
    var stringData = JSON.stringify(allFoods);
    localStorage.setItem("foods",stringData);

    
}



food.id;
form.addEventListener('submit',handleSubmit);
    function handleSubmit(event){
        event.preventDefault();
        let name = event.target.foodName.value;
        let type = event.target.foodType.value;
        let price = event.target.price.value;
        let Id = uniqueId(id);
        const newFood = new food(Id,name,type,price);
        
        allFoods.push(newFood);
        saveData(allFoods);

        
    }
    
function uniqueId(id){
    let FoodID=id +1;
    ++id;

    return FoodID;
}