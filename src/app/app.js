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
const selectedItems = [];

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

for (const category in categories) {
  const heading = document.createElement('h4');
  const optionsArticle = document.createElement('article'); 

  
  const currentId = `scrollspyHeading${category}`;

  heading.textContent = categories[category];
  heading.id = currentId;
  fromSections.appendChild(heading);

  // Get the corresponding emission factors for this category
  const emissionItems = data[categories[category]];

  emissionItems.forEach((categoryItem, index) => {
    const itemContainer = document.createElement('article')
    const id = `btn-check-${index + category}`;
    
    // Create checkbox input
    const emittingItem = document.createElement('input');
    emittingItem.type = "checkbox";
    emittingItem.classList.add('btn-check');
    emittingItem.id = id;
    emittingItem.autocomplete = "off";
    
    // Create label with icon
    const label = document.createElement('label');
    label.classList.add('btn','d-flex',);
    label.setAttribute('for', id);
    
    // Create icon span
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = categoryItem.icon || ''; // Use the icon from your data
    iconSpan.classList.add('me-2'); // Add margin between icon and text
    
    // Create text span
    const textSpan = document.createElement('span');
    textSpan.textContent = categoryItem.item || categoryItem.mode || categoryItem.activity;  

    //add carbon-foot-print-text
    const carbonEmissionVal = document.createElement('h5'); 
    carbonEmissionVal.textContent = categoryItem.factor + categoryItem["unit_output"] 

    //item container 
    itemContainer.appendChild(iconSpan) 
    itemContainer.appendChild(carbonEmissionVal) 
    itemContainer.appendChild(textSpan)
    itemContainer.classList.add('d-flex', 'flex-column', 'gap-3','justify-content-center', 'align-items-center')
    
    // Append icon and text to label
    label.appendChild(itemContainer);
    // label.appendChild(textSpan);
    
    // Append elements to article
    optionsArticle.appendChild(emittingItem);
    optionsArticle.appendChild(label); 

    optionsArticle.classList.add('optionArticle')
    
    // Add click handler to store the selected item
    // label.addEventListener('click', () => {
    //   selectedItems.push({
    //     ...categoryItem,
    //     category: categories[category]
    //   });
    //   updateSelectedItemsDisplay();
    // });
  });

  fromSections.appendChild(optionsArticle);
}