// Grabing the  of elements in the form 
let laptopMakes = document.getElementById("makes");
let laptopSize = document.getElementById("size");
let laptopModel = document.getElementById("model");
let chargerSize = document.getElementById("chargerSize");
let screenSize = document.getElementById("screenSize");
let laptopColor = document.getElementById("color");
let button = document.getElementById("submit");
let count;

let laptops = [];
let hp = [];
let dell = [];
let zinox = [];
let apple = [];
let grape = [];
let microsoft =[];
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
    
  // Checking if the right items where pushed to the contructor
  console.log(laptopMakes.value, laptopSize, laptopModel.value, chargerSize.value, screenSize.value, )
  //Creating a new laptop intance with value from elements in the form   
  let lap = new Laptop(laptopMakes.value, laptopSize.value, laptopModel.value, chargerSize.value, screenSize.value)
  console.log(lap)
  // classifying the laptop items
  if (lap.company === "hp") {  
    hp.push(lap)    
  }
  if (lap.company === "dell") {  
    dell.push(lap)    
  }
  if (lap.company === "zinox") {  
    zinox.push(lap)    
  }
  
  if (lap.company === "apple") {  
    apple.push(lap)    
  }

  if (lap.company === "micro") {  
    microsoft.push(lap)    
  }
  if (lap.company === "grape") {  
    grape.push(lap)    
  }

  if(!localStorage.getItem("count")){
    localStorage.setItem("count",0);
  }

 count = Number(localStorage.getItem("count")) ;
 console.log(typeof(count))


//  //Pushing the laptop instance to an array   
//   // laptops.push(hp, dell, zinox, apple, grape, microsoft)
//   // save laptops to local storge
    localStorage.setItem(`laptop ${count}`,JSON.stringify(lap));
    count++;
    console.log(count);
    localStorage.setItem("count",JSON.stringify(count))
//   //  Checking if the pushing worked
//     console.log(laptops)
  // Preventing the button's default
    event.preventDefault()
});

// Adding an event listener to the search bar (search)
// The event is ran when the an key is down
search.addEventListener("keydown",(ev)=>{
// Gets the value of search and stores it in variable (search val) 
    let searchVal = search.value;
// Checks if the key being pressed is the enter key
    if(ev.code == "Enter"){
// Checks in the console if the enter key is being pressed
    console.log("The enter key is being pressed")
// Map through the array to check for the laptop make being searched for
    laptops.map((makes, index)=>{
// Checking the laptop make searched for
       if (searchVal == makes.company) {
// Compares the laptop models with what is being searched for
            laptop.company.filter((laptops, index)=>{
                if (searchVal === laptops.model) {
// Brings details about the searched laptop make arcoding to the
                  searchDisp.innerHTML =`
                  <p>size: ${laptop.size}</p>
                  <p>Colour: ${laptop.color}</p>
                  <p>ChargerSize: ${laptop.charger}</p>
                  <p>Screen size> ${laptop.screen}</p>`
                }
            })
      }
        ev.preventDefault()
    })
    }

})