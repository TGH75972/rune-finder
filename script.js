const runeCampingData = {
    "Limgrave": [
        {"name": "Rune Farm 1", "location": "Near the Gatefront Ruins, defeat enemies for runes."},
        {"name": "Rune Farm 2", "location": "South of the Starting Point, in the forest area."},
        {"name": "Five Giants", "location": "Behind the Warmaster's Shack at Stormhill."},
        {"name": "Third Church of Marika", "location": "Follow the road to a portal in the water."},
        {"name": "Gatefront Ruins", "location": "Clear out the enemies for a decent rune gain."},
        {"name": "Dragonburnt Ruins", "location": "Explore for hidden enemies with runes."}
    ],
    "Stormveil Castle": [
        {"name": "Rooftop Area", "location": "Defeat enemies on rooftops for runes."},
        {"name": "Lower Levels", "location": "Clear the lower levels for rune pickups."},
        {"name": "Castle Courtyard", "location": "Defeat the enemies in the courtyard."},
        {"name": "Rampart Tower", "location": "Farm runes by defeating the enemies on the tower."},
        {"name": "Secluded Cell", "location": "Loot for runes from enemies here."}
    ],
    "Caelid": [
        {"name": "Abandoned Cave", "location": "Farm runes from the enemies inside."},
        {"name": "Rotten Stray", "location": "Defeat the Rotten Stray for quick runes."},
        {"name": "Lenne's Rise", "location": "Dodge magic balls to earn runes."},
        {"name": "Greyoll's Dragonbarrow", "location": "Defeat small enemies for high rune yield."},
        {"name": "Caelid Boulder Farm", "location": "Near the Lenne's Rise Site of Grace, dodge the magic boulder for runes."},
        {"name": "Smoldering Wall", "location": "Defeat enemies for a steady rune income."},
        {"name": "Fort Gael", "location": "Clear out enemies for a good rune farm."}
    ],
    "Liurnia of the Lakes": [
        {"name": "Lake Shore", "location": "Enemies along the shore drop runes."},
        {"name": "Carian Manor", "location": "Defeat knights for good rune yield."},
        {"name": "Albinauric Village", "location": "Slay Albinaurics for runes."},
        {"name": "Liurnia Highway", "location": "AFK rune farm spot."},
        {"name": "Three Sisters", "location": "Explore the area for hidden rune opportunities."},
        {"name": "Ruins of Rennala", "location": "Defeat enemies for runes."}
    ],
    "Altus Plateau": [
        {"name": "Plateau Ridge", "location": "Farm from the enemies on the ridge."},
        {"name": "Grace Site", "location": "Enemies near the grace site drop runes."},
        {"name": "Windmill Village", "location": "Defeat witches for runes."},
        {"name": "Canyon", "location": "Farm enemies along the canyon for a good yield."},
        {"name": "Stormveil Cliff", "location": "Defeat enemies near the cliffs for runes."},
        {"name": "Mt. Gelmir", "location": "Farm from the enemies on the mountain."}
    ],
    "Moghwyn Palace": [
        {"name": "Moghwyn's Palace", "location": "Use the jump bug for efficient farming."},
        {"name": "Palace Rooftops", "location": "Defeat enemies on rooftops for easy runes."},
        {"name": "Moghwyn's Dynasty", "location": "Farm the enemies for high rune yield."}
    ],
    "Weeping Peninsula": [
        {"name": "Castle Morne", "location": "Defeat enemies for solid rune gains."},
        {"name": "Weeping Evergaol", "location": "Farm enemies within for runes."},
        {"name": "Church of Pilgrimage", "location": "Clear out the area for runes."}
    ],
    "Mountaintops of the Giants": [
        {"name": "Snow Valley Ruins", "location": "Farm from the enemies around the ruins."},
        {"name": "Giant's Gravepost", "location": "Defeat the giants for high rune yields."},
        {"name": "Ancient Snow Valley", "location": "Defeat enemies for runes."}
    ],
    "Consecrated Snowfield": [
        {"name": "Cave of the Forlorn", "location": "Farm runes from enemies within."},
        {"name": "Snowfield Catacombs", "location": "Defeat enemies for steady runes."}
    ],
    "Leyndell, Royal Capital": [
        {"name": "Capital Outskirts", "location": "Farm runes from enemies around the outskirts."},
        {"name": "Royal Garden", "location": "Clear out the enemies for rune pickups."},
        {"name": "Erdtree Sanctuary", "location": "Defeat enemies for runes."}
    ],
    "Ashen Capital": [
        {"name": "Ashen Ruins", "location": "Farm enemies for steady rune income."},
        {"name": "Fallen Leaves", "location": "Defeat enemies for a good yield."}
    ],
    "Nokron, Eternal City": [
        {"name": "Nokron Ruins", "location": "Farm from the enemies within the ruins."},
        {"name": "Night's Sacred Ground", "location": "Defeat enemies for rune drops."}
    ],
    "Siofra River": [
        {"name": "Siofra Basin", "location": "Farm enemies for steady runes."},
        {"name": "Below the Well", "location": "Defeat enemies for good rune gains."}
    ],
    "Deeproot Depths": [
        {"name": "Nameless Eternal City", "location": "Farm runes from enemies."},
        {"name": "Depths of Deeproot", "location": "Defeat enemies for rune pickups."}
    ]
};

document.getElementById("findRune").addEventListener("click", function() {
    const area = document.getElementById("area").value.trim();
    const resultDiv = document.getElementById("result");
    const runeSound = document.getElementById("runeSound");
    const runeImage = document.getElementsByClassName("rune-image")[0];

    resultDiv.innerHTML = ""; 

    if (runeCampingData[area]) {
        const farms = runeCampingData[area];
        farms.forEach(farm => {
            const div = document.createElement("div");
            div.className = "result-item";
            div.textContent = `${farm.name}: ${farm.location}`;
            resultDiv.appendChild(div);
        });
        runeSound.play();

        const imageName = area === "Stormveil Castle" ? "Stormveil_Castle.jpg" : `${area}.jpg`;
        runeImage.src = imageName;
        runeImage.alt = area;
        runeImage.style.display = "block"; 
    } else {
        resultDiv.innerHTML = "Area not found. Please check your spelling.";
        runeImage.src = "rune.jpg"; 
        runeImage.alt = "Rune"; 
        runeImage.style.display = "block"; 
    }
});
