
'use strict';
var Id=999;
        
        function Restaurant(FoodName,FoodID,Price,TypeOfFood)
        {
            this.FoodName=FoodName;
            this.FoodID=FoodID;
            this.Price=Price;
            this.TypeOfFood=TypeOfFood;
            
            this.uniqueId=function(counter){
                this.FoodID=counter +1;
                    ++Id;

            };
        }     
        
        
        
    

        Restaurant.prototype.render=function(){
           let table = document.getElementById("myTable");
       
            
                let row =document.createElement("tr");
                table.appendChild(row);
             let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
                     
                    td1.innerHTML = `${this.FoodID}`;
                    td2.innerHTML = `${this.FoodName}`;
                    td3.innerHTML = `${this.TypeOfFood}`;
                    td4.innerHTML = `${this.Price}`;
                    table.appendChild(td1);
                    table.appendChild(td2);
                    table.appendChild(td3);
                    table.appendChild(td4);




        }
        let form =document.getElementById('form');
        form.addEventListener("submit",handleFun);

        function handleFun(event){
            event.preventDefault();
            let name=event.target.FoodName.value;
            let price=event.target.Price.value;
            
            let selectedOption = event.target.type.options[type.selectedIndex];
            const selectedText = selectedOption.text;
            
            console.log(name,price,selectedText);
            const newfood =new Restaurant(name,Id,price,selectedText);
            newfood.uniqueId(Id);
            newfood.render();
        }



