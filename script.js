// Get the elements from html ==
// Make a class and save it as Laptop ==
// Create a new varible named count
// Create a new instance laptop every time the button is clicked and save it as lap ==
// Check if there is keyword "count" on the local storage else it sets count to the localStorage ==
// Set the laptops to local storage ==
// Loop through the local storage ==
// Create a new varible named laptopz ==
// Get the items from local storage and stores them in laptopsArray ==
// Map through laptopsArray an save the items inside laptopsArray as array ==

// Filter through  array and check and save the items as laptope 
// Compare the laptope.company with the search value
// If the search value is equal to the laptope.company 
// return laptope
// console.log  array


// Grabing the  of elements in the form;
let laptopMakes = document.getElementById("makes");
let laptopSize = document.getElementById("size");
let laptopModel = document.getElementById("model");
let chargerSize = document.getElementById("chargerSize");
let screenSize = document.getElementById("screenSize");
let laptopColor = document.getElementById("color");
let button = document.getElementById("submit");
let hp = [];
let laptops = [];
let count;
let laptopsArray = []



let searchDisp = document.getElementById("searchDisp");
let search = document.getElementById("search"); 


// Forming a new  object: laptop
class Laptop{
    constructor(company, size, model, charger, screen, color){
        this.company = company;
        this.size = size;
        this.model = model;
        this.charger = charger;
        this.screen = screen;
        this.color = color;
    }
};

// Adding an event listener to make a new laptop intance
button.addEventListener('click', (event)=>{
  if (!localStorage.getItem('count')) {
    localStorage.setItem('cont',0) 
    count = 0;
  }else{
    count = Number(localStorage.getItem("count")) ;
  }
  console.log(count)  
    
  // Checking if the right items where pushed to the contructor
  console.log(laptopMakes.value, laptopSize, laptopModel.value, chargerSize.value, screenSize.value, );
  //Creating a new laptop intance with value from elements in the form   
  let lap = new Laptop(laptopMakes.value, laptopSize.value, laptopModel.value, chargerSize.value, screenSize.value, color.value);
//   // laptops.push(hp, dell, zinox, apple, grape, microsoft)
//   // save laptops to local storge
  localStorage.setItem(`laptop ${count}`,JSON.stringify(lap));
     console.log(typeof(count));
     count++
    console.log(count);
    localStorage.setItem("count",JSON.stringify(count))
    ;
//   //  Checking if the pushing worked
//     console.log(laptops)
  // Preventing the button's default
    event.preventDefault()
});

// Adding an event listener to the search bar (search)
// The event is ran when the an key is down
search.addEventListener("keydown",(ev)=>{
  let laptopsArray = []

  let searchVal = search.value;
    
  // Checks if the key being pressed is the enter key
  if(ev.code == "Enter"){
    console.log("The enter key is being pressed")
    // let laptopz = {}
    // console.log(count)
    for(let i = 0; i < localStorage.length; i++) {
      console.log('i entered count')
      
       laptopz = JSON.parse(localStorage.getItem(`laptop ${i}`)) ;
      if(laptopz){
        console.log("i entered if statment")
        laptopsArray.push(laptopz)
      }
      console.log(laptopsArray)
      console.log(laptopz)
      // Map through the array to check for the laptop make being searched for
      
    }
    console.log('i reached bottom')
    let i = laptopsArray.length
    console.log(i)
    console.log(laptopsArray)
    
   let filteredLaptops =  laptopsArray.filter((array) =>{
      if(array.company === searchVal){
        return array;
      }
      if (array.size === searchVal) {
        return array;
      }

    if (array.screen === searchVal) {
      return array;
    }
    if (array.charger === searchVal) {
      return array;
    }

    if (`${array.company},${array.color}` === searchVal) {
      return array;
    }
    if (`${array.company},${array.model}` === searchVal) {
      return array;
    }
      
    }) 
    console.log(filteredLaptops)
    // }
    
    
    
    
  }
  

})