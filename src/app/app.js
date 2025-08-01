const categories = [
  'Transportation',
  'Food and Diet',
  'Home Energy Use',
  'Consumption and Waste',
  'Water Usage',
  'Digital Habits',
  'Work and Commuting'
]

import emissionFactors from "./data.js";
const data = emissionFactors;
const selectedItems = [];
const form = document.getElementsByName('form'); 
const activityContext = document.getElementById('activity-chart'); 
const categoriesContext = document.getElementById('categories-chart'); 


const fromSections = document.querySelector('.form-sections'); 
const summaryAnalytics = (data) => { 

    const activityData = { 
      labels: Object.keys(data), 
      datasets: [{
        label: 'My carbon footprint activities', 
        data: Object.values(data).map(point=>point.split(',')[0]), 
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    } 
    const activityConfig = { 
      type: 'line', 
      data: activityData
    }  
    new Chart(activityContext, activityConfig)  


    const categoriesData = { 
      labels: categories, 
      datasets: [
        {
          label: 'My carbon footprint by categories', 
          data: categories.map(category => { 
              return Object.values(data).reduce((accum, curr) => {
                const [valueStr, cat] = curr.split(',');
                const value = parseFloat(valueStr);

                if (cat.trim() === category.trim()) {
                  return accum + value;
                }

                return accum;
              }, 0);
            }), 
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(139, 194, 28)',
            'rgb(142, 15, 77)'
          ]
        }
      ]
    } 

    const categoriesConfig = {
        type: 'polarArea',
        data: categoriesData,
        options: {}
      }; 

    new Chart(categoriesContext, categoriesConfig)  



    console.log("Categories Data", categoriesData)

}

for (const category in categories) {
  const heading = document.createElement('h4');
  const optionsArticle = document.createElement('article');
  const currentId = `scrollspyHeading${category}`;

  heading.textContent = categories[category];
  heading.id = currentId;
  fromSections.appendChild(heading);

  const emissionItems = data[categories[category]];

  emissionItems.forEach((categoryItem, index) => {
    const itemContainer = document.createElement('article')
    const id = `btn-check-${index + category}`;

    const emittingItem = document.createElement('input');
    emittingItem.type = "checkbox";
    emittingItem.classList.add('btn-check');
    emittingItem.id = id;
    emittingItem.autocomplete = "off";
    emittingItem.name = categoryItem.item || categoryItem.mode || categoryItem.activity;
    emittingItem.value = [categoryItem.factor, categories[category]];


    const label = document.createElement('label');
    label.classList.add('btn', 'd-flex',);
    label.setAttribute('for', id);

    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = categoryItem.icon || '';
    iconSpan.classList.add('me-2');

    const textSpan = document.createElement('span');
    textSpan.textContent = categoryItem.item || categoryItem.mode || categoryItem.activity;

    const carbonEmissionVal = document.createElement('h5');
    carbonEmissionVal.textContent = categoryItem.factor + categoryItem["unit_output"]

    itemContainer.appendChild(iconSpan)
    itemContainer.appendChild(carbonEmissionVal)
    itemContainer.appendChild(textSpan)
    itemContainer.classList.add('d-flex', 'flex-column', 'gap-3', 'justify-content-center', 'align-items-center')

    label.appendChild(itemContainer);

    optionsArticle.appendChild(emittingItem);
    optionsArticle.appendChild(label);

    optionsArticle.classList.add('optionArticle')
  });

  fromSections.appendChild(optionsArticle);
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries()); 


    console.log(Object.keys(data)); 

    summaryAnalytics(data) 

  });
});