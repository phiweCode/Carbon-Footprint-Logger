const emissionFactors = {
  "Transportation": [
    {
      "mode": "Petrol Car",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving a petrol car",
      "default_input": 1
    },
    {
      "mode": "Diesel Car",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving a diesel car",
      "default_input": 1
    },
    {
      "mode": "Electric Car",
      "factor": 0.15,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving an electric car (SA grid)",
      "default_input": 1
    },
    {
      "mode": "Motorcycle",
      "factor": 0.11,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from riding a motorcycle",
      "default_input": 1
    },
    {
      "mode": "City Bus",
      "factor": 0.089,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on a city bus",
      "default_input": 1
    },
    {
      "mode": "Coach Bus",
      "factor": 0.08,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on a coach bus",
      "default_input": 1
    },
    {
      "mode": "Commuter Rail",
      "factor": 0.035,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on commuter rail",
      "default_input": 1
    },
    {
      "mode": "Domestic Flight",
      "factor": 0.25,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for domestic flights",
      "default_input": 100
    },
    {
      "mode": "International Flight",
      "factor": 0.12,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for international flights",
      "default_input": 100
    },
    {
      "mode": "Subway/Metro",
      "factor": 0.03,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on subway/metro",
      "default_input": 1
    },
    {
      "mode": "Taxi/Uber",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for taxi or ride-hailing",
      "default_input": 1
    },
    {
      "mode": "Walking/Cycling",
      "factor": 0.0,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Negligible direct emissions",
      "default_input": 1
    }
  ],
  "Food and Diet": [
    {
      "item": "Beef",
      "factor": 60,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of beef",
      "default_input": 0.1
    },
    {
      "item": "Lamb/Mutton",
      "factor": 30,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of lamb",
      "default_input": 0.1
    },
    {
      "item": "Pork",
      "factor": 7,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of pork",
      "default_input": 0.1
    },
    {
      "item": "Poultry",
      "factor": 6,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of poultry",
      "default_input": 0.1
    },
    {
      "item": "Cheese",
      "factor": 21,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of cheese",
      "default_input": 0.1
    },
    {
      "item": "Milk (Cow)",
      "factor": 1.5,
      "unit_input": "liters",
      "unit_output": "kg CO₂e",
      "description": "Emissions per liter of milk",
      "default_input": 1
    },
    {
      "item": "Eggs",
      "factor": 4,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of eggs",
      "default_input": 0.1
    },
    {
      "item": "Vegetables/Fruits",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of vegetables/fruits",
      "default_input": 0.1
    },
    {
      "item": "Legumes/Beans",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of legumes/beans",
      "default_input": 0.1
    },
    {
      "item": "Rice (paddy)",
      "factor": 2.7,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of rice",
      "default_input": 0.1
    },
    {
      "item": "Grains/Bread",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of grains/bread",
      "default_input": 0.1
    },
    {
      "item": "Coffee",
      "factor": 0.15,
      "unit_input": "cup",
      "unit_output": "kg CO₂e",
      "description": "Emissions per cup of coffee",
      "default_input": 1
    },
    {
      "item": "Tea",
      "factor": 0.03,
      "unit_input": "cup",
      "unit_output": "kg CO₂e",
      "description": "Emissions per cup of tea",
      "default_input": 1
    },
    {
      "item": "Beer",
      "factor": 0.18,
      "unit_input": "500ml",
      "unit_output": "kg CO₂e",
      "description": "Emissions per 500ml of beer",
      "default_input": 1
    },
    {
      "item": "Wine",
      "factor": 0.35,
      "unit_input": "liter",
      "unit_output": "kg CO₂e",
      "description": "Emissions per liter of wine",
      "default_input": 1
    },
    {
      "item": "Food Waste",
      "factor": 21,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "CO₂e per kg of food waste",
      "default_input": 1
    }
  ],
  "Home Energy Use": [
    {
      "activity": "Electricity Use (SA Grid)",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh of electricity",
      "default_input": 1
    },
    {
      "activity": "Gas Heating (LPG)",
      "factor": 2.7,
      "unit_input": "liter",
      "unit_output": "kg CO₂",
      "description": "Emissions per liter of LPG",
      "default_input": 1
    },
    {
      "activity": "Water Heating",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for water heating",
      "default_input": 1
    },
    {
      "activity": "Electric Stove/Oven",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for electric cooking",
      "default_input": 1
    },
    {
      "activity": "Lighting (LED)",
      "factor": 0.05,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for LED lighting",
      "default_input": 0.05
    },
    {
      "activity": "Refrigerator",
      "factor": 1,
      "unit_input": "kWh/day",
      "unit_output": "kg CO₂",
      "description": "Daily emissions of fridge",
      "default_input": 1
    },
    {
      "activity": "Washing Machine",
      "factor": 0.4,
      "unit_input": "wash",
      "unit_output": "kg CO₂",
      "description": "Emissions per wash cycle",
      "default_input": 1
    },
    {
      "activity": "Tumble Dryer",
      "factor": 2.5,
      "unit_input": "cycle",
      "unit_output": "kg CO₂",
      "description": "Emissions per dryer cycle",
      "default_input": 1
    },
    {
      "activity": "Dishwasher",
      "factor": 0.85,
      "unit_input": "load",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwasher load",
      "default_input": 1
    },
    {
      "activity": "Laptop",
      "factor": 0.05,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per laptop use hour",
      "default_input": 1
    },
    {
      "activity": "Smartphone",
      "factor": 0.005,
      "unit_input": "charge",
      "unit_output": "kg CO₂",
      "description": "Emissions per smartphone charge",
      "default_input": 1
    }
  ],
  "Consumption and Waste": [
    {
      "item": "T-shirt",
      "factor": 7,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per T-shirt",
      "default_input": 1
    },
    {
      "item": "Jeans",
      "factor": 22.5,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per pair of jeans",
      "default_input": 1
    },
    {
      "item": "Fast-fashion Garment",
      "factor": 7.5,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per garment",
      "default_input": 1
    },
    {
      "item": "Smartphone",
      "factor": 70,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per smartphone",
      "default_input": 1
    },
    {
      "item": "Laptop",
      "factor": 225,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per laptop",
      "default_input": 1
    },
    {
      "item": "Tablet",
      "factor": 100,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per tablet",
      "default_input": 1
    },
    {
      "item": "Plastic Bag",
      "factor": 0.2,
      "unit_input": "bag",
      "unit_output": "kg CO₂",
      "description": "Emissions per plastic bag",
      "default_input": 1
    },
    {
      "item": "Paper Bag",
      "factor": 0.125,
      "unit_input": "bag",
      "unit_output": "kg CO₂",
      "description": "Emissions per paper bag",
      "default_input": 1
    },
    {
      "item": "PET Bottle (500ml)",
      "factor": 0.06,
      "unit_input": "bottle",
      "unit_output": "kg CO₂",
      "description": "Emissions per PET bottle",
      "default_input": 1
    },
    {
      "item": "Packaging",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per packaging kg",
      "default_input": 1
    },
    {
      "item": "Paper",
      "factor": 1.3,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of paper",
      "default_input": 1
    },
    {
      "item": "Disposable Cup",
      "factor": 0.05,
      "unit_input": "cup",
      "unit_output": "kg CO₂",
      "description": "Emissions per disposable cup",
      "default_input": 1
    },
    {
      "item": "Car Manufacturing",
      "factor": 6000,
      "unit_input": "car",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per car",
      "default_input": 1
    },
    {
      "item": "Cement",
      "factor": 0.9,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of cement",
      "default_input": 1
    },
    {
      "item": "Steel",
      "factor": 1.85,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of steel",
      "default_input": 1
    },
    {
      "item": "Plastic Recycling",
      "factor": -2.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂ saved",
      "description": "CO₂ saved per kg of plastic recycled",
      "default_input": 1
    }
  ],
  "Water Usage": [
    {
      "activity": "Shower",
      "factor": 0.115,
      "unit_input": "minute",
      "unit_output": "kg CO₂",
      "description": "Emissions per shower minute",
      "default_input": 6
    },
    {
      "activity": "Bath",
      "factor": 1.5,
      "unit_input": "bath",
      "unit_output": "kg CO₂",
      "description": "Emissions per bath",
      "default_input": 1
    },
    {
      "activity": "Handwashing Dishes",
      "factor": 0.6,
      "unit_input": "10L session",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwashing session",
      "default_input": 1
    },
    {
      "activity": "Dishwasher",
      "factor": 0.85,
      "unit_input": "load",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwasher load",
      "default_input": 1
    },
    {
      "activity": "Laundry (wash only)",
      "factor": 0.4,
      "unit_input": "wash",
      "unit_output": "kg CO₂",
      "description": "Emissions per wash",
      "default_input": 1
    },
    {
      "activity": "Bottled Water",
      "factor": 0.5,
      "unit_input": "liter",
      "unit_output": "kg CO₂",
      "description": "Emissions per liter of bottled water",
      "default_input": 1
    }
  ],
  "Digital Habits": [
    {
      "activity": "Video Streaming",
      "factor": 0.045,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of streaming",
      "default_input": 1
    },
    {
      "activity": "Music Streaming",
      "factor": 0.001,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of music",
      "default_input": 1
    },
    {
      "activity": "Email (short)",
      "factor": 0.00025,
      "unit_input": "email",
      "unit_output": "kg CO₂",
      "description": "Emissions per short email",
      "default_input": 1
    },
    {
      "activity": "Email (long)",
      "factor": 0.017,
      "unit_input": "email",
      "unit_output": "kg CO₂",
      "description": "Emissions per long email",
      "default_input": 1
    },
    {
      "activity": "Video Conferencing",
      "factor": 0.01,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of video call",
      "default_input": 1
    },
    {
      "activity": "Cloud Storage",
      "factor": 0.2,
      "unit_input": "GB-year",
      "unit_output": "kg CO₂",
      "description": "Emissions per GB per year of cloud storage",
      "default_input": 1
    },
    {
      "activity": "Web/Social",
      "factor": 0.02,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of web use",
      "default_input": 1
    },
    {
      "activity": "Gaming",
      "factor": 0.2,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of gaming",
      "default_input": 1
    }
  ],
  "Work and Commuting": [
    {
      "activity": "Commute (Car)",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km commute by car",
      "default_input": 30
    },
    {
      "activity": "Commute (Train)",
      "factor": 0.035,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km commute by train",
      "default_input": 20
    },
    {
      "activity": "Business Flight",
      "factor": 250,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per flight hour",
      "default_input": 1
    },
    {
      "activity": "Remote Work",
      "factor": 0.0,
      "unit_input": "day",
      "unit_output": "kg CO₂",
      "description": "Net zero by default",
      "default_input": 1
    },
    {
      "activity": "Office Lighting",
      "factor": 0.1,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of office lighting",
      "default_input": 8
    },
    {
      "activity": "Paper Use",
      "factor": 1.3,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of paper used",
      "default_input": 0.1
    }
  ]
}; 

export default emissionFactors; 