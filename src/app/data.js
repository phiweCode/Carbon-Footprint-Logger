const emissionFactors = {
  "Transportation": [
    {
      "mode": "Petrol Car",
      "icon": "<i class='fas fa-car'></i>",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving a petrol car",
      "default_input": 1
    },
    {
      "mode": "Diesel Car",
      "icon": "<i class='fas fa-car'></i>",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving a diesel car",
      "default_input": 1
    },
    {
      "mode": "Electric Car",
      "icon": "<i class='fas fa-car'></i>",
      "factor": 0.15,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from driving an electric car (SA grid)",
      "default_input": 1
    },
    {
      "mode": "Motorcycle",
      "icon": "<i class='fas fa-motorcycle'></i>",
      "factor": 0.11,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions from riding a motorcycle",
      "default_input": 1
    },
    {
      "mode": "City Bus",
      "icon": "<i class='fas fa-bus'></i>",
      "factor": 0.089,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on a city bus",
      "default_input": 1
    },
    {
      "mode": "Coach Bus",
      "icon": "<i class='fas fa-bus'></i>",
      "factor": 0.08,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on a coach bus",
      "default_input": 1
    },
    {
      "mode": "Commuter Rail",
      "icon": "<i class='fas fa-train'></i>",
      "factor": 0.035,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on commuter rail",
      "default_input": 1
    },
    {
      "mode": "Domestic Flight",
      "icon": "<i class='fas fa-plane'></i>",
      "factor": 0.25,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for domestic flights",
      "default_input": 100
    },
    {
      "mode": "International Flight",
      "icon": "<i class='fas fa-plane'></i>",
      "factor": 0.12,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for international flights",
      "default_input": 100
    },
    {
      "mode": "Subway/Metro",
      "icon": "<i class='fas fa-subway'></i>",
      "factor": 0.03,
      "unit_input": "passenger-km",
      "unit_output": "kg CO₂",
      "description": "Emissions per passenger-km on subway/metro",
      "default_input": 1
    },
    {
      "mode": "Taxi/Uber",
      "icon": "<i class='fas fa-taxi'></i>",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km for taxi or ride-hailing",
      "default_input": 1
    },
    {
      "mode": "Walking/Cycling",
      "icon": "<i class='fas fa-walking'></i>",
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
      "icon": "<i class='fas fa-drumstick-bite'></i>",
      "factor": 60,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of beef",
      "default_input": 0.1
    },
    {
      "item": "Lamb/Mutton",
      "icon": "<i class='fas fa-drumstick-bite'></i>",
      "factor": 30,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of lamb",
      "default_input": 0.1
    },
    {
      "item": "Pork",
      "icon": "<i class='fas fa-drumstick-bite'></i>",
      "factor": 7,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of pork",
      "default_input": 0.1
    },
    {
      "item": "Poultry",
      "icon": "<i class='fas fa-drumstick-bite'></i>",
      "factor": 6,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of poultry",
      "default_input": 0.1
    },
    {
      "item": "Cheese",
      "icon": "<i class='fas fa-cheese'></i>",
      "factor": 21,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of cheese",
      "default_input": 0.1
    },
    {
      "item": "Milk (Cow)",
      "icon": "<i class='fas fa-wine-bottle'></i>",
      "factor": 1.5,
      "unit_input": "liters",
      "unit_output": "kg CO₂e",
      "description": "Emissions per liter of milk",
      "default_input": 1
    },
    {
      "item": "Eggs",
      "icon": "<i class='fas fa-egg'></i>",
      "factor": 4,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of eggs",
      "default_input": 0.1
    },
    {
      "item": "Vegetables/Fruits",
      "icon": "<i class='fas fa-carrot'></i>",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of vegetables/fruits",
      "default_input": 0.1
    },
    {
      "item": "Legumes/Beans",
      "icon": "<i class='fas fa-seedling'></i>",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of legumes/beans",
      "default_input": 0.1
    },
    {
      "item": "Rice (paddy)",
      "icon": "<i class='fas fa-bread-slice'></i>",
      "factor": 2.7,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of rice",
      "default_input": 0.1
    },
    {
      "item": "Grains/Bread",
      "icon": "<i class='fas fa-bread-slice'></i>",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂e",
      "description": "Emissions per kg of grains/bread",
      "default_input": 0.1
    },
    {
      "item": "Coffee",
      "icon": "<i class='fas fa-coffee'></i>",
      "factor": 0.15,
      "unit_input": "cup",
      "unit_output": "kg CO₂e",
      "description": "Emissions per cup of coffee",
      "default_input": 1
    },
    {
      "item": "Tea",
      "icon": "<i class='fas fa-mug-hot'></i>",
      "factor": 0.03,
      "unit_input": "cup",
      "unit_output": "kg CO₂e",
      "description": "Emissions per cup of tea",
      "default_input": 1
    },
    {
      "item": "Beer",
      "icon": "<i class='fas fa-beer'></i>",
      "factor": 0.18,
      "unit_input": "500ml",
      "unit_output": "kg CO₂e",
      "description": "Emissions per 500ml of beer",
      "default_input": 1
    },
    {
      "item": "Wine",
      "icon": "<i class='fas fa-wine-glass-alt'></i>",
      "factor": 0.35,
      "unit_input": "liter",
      "unit_output": "kg CO₂e",
      "description": "Emissions per liter of wine",
      "default_input": 1
    },
    {
      "item": "Food Waste",
      "icon": "<i class='fas fa-trash'></i>",
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
      "icon": "<i class='fas fa-bolt'></i>",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh of electricity",
      "default_input": 1
    },
    {
      "activity": "Gas Heating (LPG)",
      "icon": "<i class='fas fa-fire'></i>",
      "factor": 2.7,
      "unit_input": "liter",
      "unit_output": "kg CO₂",
      "description": "Emissions per liter of LPG",
      "default_input": 1
    },
    {
      "activity": "Water Heating",
      "icon": "<i class='fas fa-water'></i>",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for water heating",
      "default_input": 1
    },
    {
      "activity": "Electric Stove/Oven",
      "icon": "<i class='fas fa-temperature-high'></i>",
      "factor": 0.97,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for electric cooking",
      "default_input": 1
    },
    {
      "activity": "Lighting (LED)",
      "icon": "<i class='fas fa-lightbulb'></i>",
      "factor": 0.05,
      "unit_input": "kWh",
      "unit_output": "kg CO₂",
      "description": "Emissions per kWh for LED lighting",
      "default_input": 0.05
    },
    {
      "activity": "Refrigerator",
      "icon": "<i class='fas fa-snowflake'></i>",
      "factor": 1,
      "unit_input": "kWh/day",
      "unit_output": "kg CO₂",
      "description": "Daily emissions of fridge",
      "default_input": 1
    },
    {
      "activity": "Washing Machine",
      "icon": "<i class='fas fa-tshirt'></i>",
      "factor": 0.4,
      "unit_input": "wash",
      "unit_output": "kg CO₂",
      "description": "Emissions per wash cycle",
      "default_input": 1
    },
    {
      "activity": "Tumble Dryer",
      "icon": "<i class='fas fa-wind'></i>",
      "factor": 2.5,
      "unit_input": "cycle",
      "unit_output": "kg CO₂",
      "description": "Emissions per dryer cycle",
      "default_input": 1
    },
    {
      "activity": "Dishwasher",
      "icon": "<i class='fas fa-utensils'></i>",
      "factor": 0.85,
      "unit_input": "load",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwasher load",
      "default_input": 1
    },
    {
      "activity": "Laptop",
      "icon": "<i class='fas fa-laptop'></i>",
      "factor": 0.05,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per laptop use hour",
      "default_input": 1
    },
    {
      "activity": "Smartphone",
      "icon": "<i class='fas fa-mobile-alt'></i>",
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
      "icon": "<i class='fas fa-tshirt'></i>",
      "factor": 7,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per T-shirt",
      "default_input": 1
    },
    {
      "item": "Jeans",
      "icon": "<i class='fas fa-tshirt'></i>",
      "factor": 22.5,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per pair of jeans",
      "default_input": 1
    },
    {
      "item": "Fast-fashion Garment",
      "icon": "<i class='fas fa-tshirt'></i>",
      "factor": 7.5,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Emissions per garment",
      "default_input": 1
    },
    {
      "item": "Smartphone",
      "icon": "<i class='fas fa-mobile-alt'></i>",
      "factor": 70,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per smartphone",
      "default_input": 1
    },
    {
      "item": "Laptop",
      "icon": "<i class='fas fa-laptop'></i>",
      "factor": 225,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per laptop",
      "default_input": 1
    },
    {
      "item": "Tablet",
      "icon": "<i class='fas fa-tablet-alt'></i>",
      "factor": 100,
      "unit_input": "item",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per tablet",
      "default_input": 1
    },
    {
      "item": "Plastic Bag",
      "icon": "<i class='fas fa-shopping-bag'></i>",
      "factor": 0.2,
      "unit_input": "bag",
      "unit_output": "kg CO₂",
      "description": "Emissions per plastic bag",
      "default_input": 1
    },
    {
      "item": "Paper Bag",
      "icon": "<i class='fas fa-shopping-bag'></i>",
      "factor": 0.125,
      "unit_input": "bag",
      "unit_output": "kg CO₂",
      "description": "Emissions per paper bag",
      "default_input": 1
    },
    {
      "item": "PET Bottle (500ml)",
      "icon": "<i class='fas fa-wine-bottle'></i>",
      "factor": 0.06,
      "unit_input": "bottle",
      "unit_output": "kg CO₂",
      "description": "Emissions per PET bottle",
      "default_input": 1
    },
    {
      "item": "Packaging",
      "icon": "<i class='fas fa-box-open'></i>",
      "factor": 1.5,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per packaging kg",
      "default_input": 1
    },
    {
      "item": "Paper",
      "icon": "<i class='fas fa-file-alt'></i>",
      "factor": 1.3,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of paper",
      "default_input": 1
    },
    {
      "item": "Disposable Cup",
      "icon": "<i class='fas fa-coffee'></i>",
      "factor": 0.05,
      "unit_input": "cup",
      "unit_output": "kg CO₂",
      "description": "Emissions per disposable cup",
      "default_input": 1
    },
    {
      "item": "Car Manufacturing",
      "icon": "<i class='fas fa-car'></i>",
      "factor": 6000,
      "unit_input": "car",
      "unit_output": "kg CO₂",
      "description": "Embodied emissions per car",
      "default_input": 1
    },
    {
      "item": "Cement",
      "icon": "<i class='fas fa-industry'></i>",
      "factor": 0.9,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of cement",
      "default_input": 1
    },
    {
      "item": "Steel",
      "icon": "<i class='fas fa-hammer'></i>",
      "factor": 1.85,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of steel",
      "default_input": 1
    },
    {
      "item": "Plastic Recycling",
      "icon": "<i class='fas fa-recycle'></i>",
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
      "icon": "<i class='fas fa-shower'></i>",
      "factor": 0.115,
      "unit_input": "minute",
      "unit_output": "kg CO₂",
      "description": "Emissions per shower minute",
      "default_input": 6
    },
    {
      "activity": "Bath",
      "icon": "<i class='fas fa-bath'></i>",
      "factor": 1.5,
      "unit_input": "bath",
      "unit_output": "kg CO₂",
      "description": "Emissions per bath",
      "default_input": 1
    },
    {
      "activity": "Handwashing Dishes",
      "icon": "<i class='fas fa-hand-holding-water'></i>",
      "factor": 0.6,
      "unit_input": "10L session",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwashing session",
      "default_input": 1
    },
    {
      "activity": "Dishwasher",
      "icon": "<i class='fas fa-utensils'></i>",
      "factor": 0.85,
      "unit_input": "load",
      "unit_output": "kg CO₂",
      "description": "Emissions per dishwasher load",
      "default_input": 1
    },
    {
      "activity": "Laundry (wash only)",
      "icon": "<i class='fas fa-tshirt'></i>",
      "factor": 0.4,
      "unit_input": "wash",
      "unit_output": "kg CO₂",
      "description": "Emissions per wash",
      "default_input": 1
    },
    {
      "activity": "Bottled Water",
      "icon": "<i class='fas fa-wine-bottle'></i>",
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
      "icon": "<i class='fas fa-film'></i>",
      "factor": 0.045,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of streaming",
      "default_input": 1
    },
    {
      "activity": "Music Streaming",
      "icon": "<i class='fas fa-music'></i>",
      "factor": 0.001,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of music",
      "default_input": 1
    },
    {
      "activity": "Email (short)",
      "icon": "<i class='fas fa-envelope'></i>",
      "factor": 0.00025,
      "unit_input": "email",
      "unit_output": "kg CO₂",
      "description": "Emissions per short email",
      "default_input": 1
    },
    {
      "activity": "Email (long)",
      "icon": "<i class='fas fa-envelope-open-text'></i>",
      "factor": 0.017,
      "unit_input": "email",
      "unit_output": "kg CO₂",
      "description": "Emissions per long email",
      "default_input": 1
    },
    {
      "activity": "Video Conferencing",
      "icon": "<i class='fas fa-video'></i>",
      "factor": 0.01,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of video call",
      "default_input": 1
    },
    {
      "activity": "Cloud Storage",
      "icon": "<i class='fas fa-cloud'></i>",
      "factor": 0.2,
      "unit_input": "GB-year",
      "unit_output": "kg CO₂",
      "description": "Emissions per GB per year of cloud storage",
      "default_input": 1
    },
    {
      "activity": "Web/Social",
      "icon": "<i class='fas fa-globe'></i>",
      "factor": 0.02,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of web use",
      "default_input": 1
    },
    {
      "activity": "Gaming",
      "icon": "<i class='fas fa-gamepad'></i>",
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
      "icon": "<i class='fas fa-car'></i>",
      "factor": 0.17,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km commute by car",
      "default_input": 30
    },
    {
      "activity": "Commute (Train)",
      "icon": "<i class='fas fa-train'></i>",
      "factor": 0.035,
      "unit_input": "km",
      "unit_output": "kg CO₂",
      "description": "Emissions per km commute by train",
      "default_input": 20
    },
    {
      "activity": "Business Flight",
      "icon": "<i class='fas fa-plane'></i>",
      "factor": 250,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per flight hour",
      "default_input": 1
    },
    {
      "activity": "Remote Work",
      "icon": "<i class='fas fa-home'></i>",
      "factor": 0.0,
      "unit_input": "day",
      "unit_output": "kg CO₂",
      "description": "Net zero by default",
      "default_input": 1
    },
    {
      "activity": "Office Lighting",
      "icon": "<i class='fas fa-lightbulb'></i>",
      "factor": 0.1,
      "unit_input": "hour",
      "unit_output": "kg CO₂",
      "description": "Emissions per hour of office lighting",
      "default_input": 8
    },
    {
      "activity": "Paper Use",
      "icon": "<i class='fas fa-file-alt'></i>",
      "factor": 1.3,
      "unit_input": "kg",
      "unit_output": "kg CO₂",
      "description": "Emissions per kg of paper used",
      "default_input": 0.1
    }
  ]
};

export default emissionFactors;