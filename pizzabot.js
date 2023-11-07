//Constanterna 
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function checkOrderName(orderName) {
    const pizzaNames = [vegetarian.toLowerCase(), hawaiian.toLowerCase(), pepperoni.toLowerCase()];
    return pizzaNames.includes(orderName.toLowerCase().trim());
  } 
  
    function totalCost(orderQuantity) {
    return pizzaPrice * orderQuantity;
  }
  
    function cookingTime(orderQuantity) {
    if (orderQuantity > 0 && orderQuantity <= 2) {
      return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      return 15;
    } else if (orderQuantity > 5) {
      return 20;
    }
  }
  
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);
  
   let orderName = prompt("Enter the name of the pizza you want to order today.");
  let isValidPizza = checkOrderName(orderName);
  
  
  if (!isValidPizza) {
    alert("The pizza you have entered is not on our menu. Please choose from Vegetarian, Hawaiian, or Pepperoni.");
  } else {
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  
  if (orderQuantity === null || orderQuantity.trim() === "") {
      alert("You haven't entered any number of pizzas. Please start over.");
    } else {
      orderQuantity = parseInt(orderQuantity);
      if (isNaN(orderQuantity) || orderQuantity < 1 || orderQuantity > 6) {
        alert("You can only order between 1 and 6 pizzas.");
      } else {
        let orderTotal = totalCost(orderQuantity);
        let time = cookingTime(orderQuantity);
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
      }
    }
  }
  
  document.getElementById('pizzaOrderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const pizzaType = document.getElementById('pizzaType').value;
    let numberOfPizzas = document.getElementById('numberOfPizzas').value;
    numberOfPizzas = parseInt(numberOfPizzas); 
    
    if (checkOrderName(pizzaType) && numberOfPizzas >= 1 && numberOfPizzas <= 6) {
        const orderTotal = totalCost(numberOfPizzas);
        const time = cookingTime(numberOfPizzas);
        const orderSummary = `Great, I'll get started on your ${pizzaType} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`;
        document.getElementById('orderSummary').textContent = orderSummary;
    } else {
        
        document.getElementById('orderSummary').textContent = "Please enter a valid pizza type and a number between 1 and 6.";
    }
});