document.addEventListener("DOMContentLoaded", function () {
    populateOptions("fishType", Object.keys(fishData));
    populateOptions("treeType", Object.keys(treeData));
    populateOptions("plantType", Object.keys(plantData));
    populateOptions("cropsType", Object.keys(cropdata));  // Fixed ID here
});

// Function to show the selected section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Fish Data
const fishData = {
    "Tilapia": { feed: "Pellets", period: 6 },
    "Catfish": { feed: "Insects & Pellets", period: 5 },
    "Carp": { feed: "Algae & Grains", period: 7 },
    "Salmon": { feed: "Protein Pellets", period: 12 },
    "Trout": { feed: "Aquatic Insects", period: 9 },
    "Bass": { feed: "Live Bait", period: 10 },
    "Perch": { feed: "Small Crustaceans", period: 8 },
    "Pike": { feed: "Smaller Fish", period: 11 },
    "Eel": { feed: "Worms & Crustaceans", period: 14 },
    "Cod": { feed: "Small Fish", period: 12 },
    "Snapper": { feed: "Shrimp & Squid", period: 13 },
    "Mackerel": { feed: "Plankton & Krill", period: 8 },
    "Grouper": { feed: "Crustaceans", period: 10 },
    "Haddock": { feed: "Small Fish & Worms", period: 9 },
    "Flounder": { feed: "Mollusks & Insects", period: 7 }
};

// Tree Data
const treeData = {
    
    "Mango": { spacing: 10, water: "Drip", soil: "Loamy" },
    "Apple": { spacing: 5, water: "Sprinkler", soil: "Clay" },
    "Orange": { spacing: 6, water: "Flood", soil: "Sandy" },
    "Coconut": { spacing: 8, water: "Rain-fed", soil: "Sandy" },
    "Banana": { spacing: 3, water: "Drip", soil: "Fertile" },
    "Pineapple": { spacing: 1.5, water: "Sprinkler", soil: "Loamy" },
    "Papaya": { spacing: 4, water: "Drip", soil: "Well-drained" },
    "Cherry": { spacing: 5, water: "Drip", soil: "Loamy" },
    "Peach": { spacing: 6, water: "Flood", soil: "Clay" },
    "Lemon": { spacing: 7, water: "Drip", soil: "Sandy" },
    "Guava": { spacing: 4, water: "Sprinkler", soil: "Loamy" },
    "Avocado": { spacing: 8, water: "Flood", soil: "Rich" },
    "Pear": { spacing: 5, water: "Drip", soil: "Well-drained" },
    "Fig": { spacing: 6, water: "Sprinkler", soil: "Sandy" },
    "Pomegranate": { spacing: 4, water: "Drip", soil: "Loamy" }
};

// Plant Data
const plantData = {
    "Tomato": { spacing: 0.5, water: "Drip", soil: "Loamy" },
    "Potato": { spacing: 0.3, water: "Sprinkler", soil: "Sandy" },
    "Carrot": { spacing: 0.2, water: "Drip", soil: "Sandy" },
    "Lettuce": { spacing: 0.25, water: "Sprinkler", soil: "Loamy" },
    "Corn": { spacing: 0.6, water: "Flood", soil: "Rich" },
    "Wheat": { spacing: 0.5, water: "Rain-fed", soil: "Loamy" },
    "Rice": { spacing: 0.4, water: "Flood", soil: "Clay" },
    "Beans": { spacing: 0.3, water: "Drip", soil: "Fertile" },
    "Peas": { spacing: 0.35, water: "Drip", soil: "Sandy" },
    "Spinach": { spacing: 0.2, water: "Sprinkler", soil: "Loamy" }
};

// Crop Data
const cropdata = {
    
    "Rice": { spacing: 0.2, water: "Flood", soil: "Clayey" },
    "Wheat": { spacing: 0.3, water: "Sprinkler", soil: "Loamy" },
    "Corn": { spacing: 0.4, water: "Drip", soil: "Sandy" },
    "Sugarcane": { spacing: 0.5, water: "Drip", soil: "Well-drained" },
    "Soybean": { spacing: 0.3, water: "Sprinkler", soil: "Loamy" },
    "Groundnut": { spacing: 0.4, water: "Minimal", soil: "Sandy" }
};

// Populate dropdown options
function populateOptions(selectId, options) {
    let select = document.getElementById(selectId);
    select.innerHTML = "";  // Clear existing options
    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.innerText = option;
        select.appendChild(opt);
    });
}

// Update fish information
function updateFishInfo() {
    let type = document.getElementById("fishType").value;
    document.getElementById("fishFeed").innerText = fishData[type].feed;
    document.getElementById("fishPeriod").innerText = fishData[type].period;
}

// Update tree information
function updateTreeInfo() {
    let type = document.getElementById("treeType").value;
    document.getElementById("treeSpacing").innerText = treeData[type].spacing;
    document.getElementById("treeWater").innerText = treeData[type].water;
    document.getElementById("treeSoil").innerText = treeData[type].soil;
}

// Update plant information
function updatePlantInfo() {
    let type = document.getElementById("plantType").value;
    document.getElementById("plantSpacing").innerText = plantData[type].spacing;
    document.getElementById("plantWater").innerText = plantData[type].water;
    document.getElementById("plantSoil").innerText = plantData[type].soil;
}

// Update crop information
function updatecropInfo() {
    let type = document.getElementById("cropsType").value;
    document.getElementById("cropSpacing").innerText = cropdata[type].spacing;
    document.getElementById("cropWater").innerText = cropdata[type].water;
    document.getElementById("cropSoil").innerText = cropdata[type].soil;
}

// Calculate pond area and fish capacity
function calculatePond() {
    let length = parseFloat(document.getElementById("pondLength").value) || 0;
    let width = parseFloat(document.getElementById("pondWidth").value) || 0;
    let area = length * width;
    let fishCapacity = Math.floor(area * 5);  // Assuming 5 fish per sq.m
    document.getElementById("pondArea").innerText = area.toFixed(2);
    document.getElementById("fishCount").innerText = fishCapacity;
}

// Calculate tree area and count
function calculateTree() {
    let length = parseFloat(document.getElementById("treeLength").value) || 0;
    let width = parseFloat(document.getElementById("treeWidth").value) || 0;
    let spacing = parseFloat(document.getElementById("treeSpacing").innerText) || 1;
    let area = length * width;
    let treeCount = Math.floor(area / (spacing * spacing));
    document.getElementById("treeArea").innerText = area.toFixed(2);
    document.getElementById("treeCount").innerText = treeCount;
}

// Calculate plant area and count
function calculatePlant() {
    let length = parseFloat(document.getElementById("plantLength").value) || 0;
    let width = parseFloat(document.getElementById("plantWidth").value) || 0;
    let spacing = parseFloat(document.getElementById("plantSpacing").innerText) || 1;
    let area = length * width;
    let plantCount = Math.floor(area / (spacing * spacing));
    document.getElementById("plantArea").innerText = area.toFixed(2);
    document.getElementById("plantCount").innerText = plantCount;
}

// Calculate crop area and count
function calculatecrop() {
    let length = parseFloat(document.getElementById("cropLength").value) || 0;
    let width = parseFloat(document.getElementById("cropWidth").value) || 0;
    let spacing = parseFloat(document.getElementById("cropSpacing").innerText) || 1;
    let area = length * width;
    let cropCount = Math.floor(area / (spacing * spacing));
    document.getElementById("cropArea").innerText = area.toFixed(2);
    document.getElementById("cropCount").innerText = cropCount;
}
