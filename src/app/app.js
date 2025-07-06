// import { readFileSync } from 'fs';
// const rawData = readFileSync('resources/emission_factors.json', 'utf8');
// const data = JSON.parse(rawData);
// console.log(data); 

const categories = [
  'Transportation',
  'Food and Diet',
  'Home Energy Use',
  'Consumption and Waste',
  'Water Usage',
  'Digital Habits',
  'Work and Commuting'
]

// console.log(categories)
import emissionFactors from "./data.js";

const data = emissionFactors; 

// console.log("data", data)
// console.log(data['Transportation'].map(item=>item))

// console.log(categories) 
const fromSections = document.querySelector('.form-sections'); 

// const generateModesBy = () => {  

//     for(const category in categories)
//     {   
//     const heading = document.createElement('h4') 
//     const optionsArticle = document.createElement('article'); 
//     const optionElement = document.createElement('')  

    
//     const currentId = `scrollspyHeading${category + 1}`

//     heading.textContent = categories[category]
//     heading.id = currentId;   
//     optionsArticle.appendChild(heading)

//     data[categories[category]].map((categoryItem, index) =>{ 
   
//     const id = `btn-check-${index+1}`
//     const emittingItem = document.createElement('input'); 
     
//     emittingItem.type = "checkbox";
//     emittingItem.classList.add('btn-check'); 
//     emittingItem.id = id;
//     emittingItem.autocomplete = "off";  

//     const label = document.createElement('label');
//     label.classList.add('btn'); 
//     label.for = id; 
//     label.textContent = categoryItem.item 

//     optionsArticle.appendChild(emittingItem); 
//     optionsArticle.appendChild(label) 

//     })

 

    


//         console.log("-->", categories[category], category, data[categories[category]]) 
        
//     }
    

// }  

// generateModesBy() 

  for(const category in categories)
    {   
    const heading = document.createElement('h4') 
    const optionsArticle = document.createElement('article'); 
    // const optionElement = document.createElement('')  

    
    const currentId = `scrollspyHeading${category}`

    heading.textContent = categories[category]
    heading.id = currentId;   
    fromSections.appendChild(heading) 

    // console.log(data[categories[category]])

    data[categories[category]].map((categoryItem, index) =>{ 

    const id = `btn-check-${index}`
    const emittingItem = document.createElement('input'); 
     
    emittingItem.type = "checkbox";
    emittingItem.classList.add('btn-check'); 
    emittingItem.id = id;
    emittingItem.autocomplete = "off";  

    const label = document.createElement('label');
    label.classList.add('btn'); 
    label.setAttribute('for', id); 
    label.textContent = categoryItem.item || categoryItem.mode || categoryItem.activity 

    optionsArticle.appendChild(emittingItem); 
    optionsArticle.appendChild(label) 
    
    }) 

    fromSections.appendChild(optionsArticle)

        // console.log("-->", categories[category], category, ) 
        
    }