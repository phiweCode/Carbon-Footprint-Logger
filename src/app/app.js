import { readFileSync } from 'fs';
const rawData = readFileSync('resources/emission_factors.json', 'utf8');
const data = JSON.parse(rawData);
// console.log(data); 

const categories = Object.keys(data);  

console.log(data['Transportation'].map(item=>item))

// console.log(categories) 

const generateModesBy = (category) => { 
    
} 