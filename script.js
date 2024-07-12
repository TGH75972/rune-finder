const runeCampingData = {
    "Limgrave": [
        {
            "name": "Rune Farm 1",
            "location": "Near the Gatefront Ruins, defeat enemies for runes."
        },
        {
            "name": "Rune Farm 2",
            "location": "South of the Starting Point, in the forest area."
        }
    ],
    "Stormveil Castle": [
        {
            "name": "Rooftop Area",
            "location": "Defeat enemies on rooftops for runes."
        },
        {
            "name": "Lower Levels",
            "location": "Clear the lower levels for rune pickups."
        }
    ],
    "Caelid": [
        {
            "name": "Abandoned Cave",
            "location": "Farm runes from the enemies inside."
        },
        {
            "name": "Rotten Stray",
            "location": "Defeat the Rotten Stray for quick runes."
        }
    ],
    "Liurnia of the Lakes": [
        {
            "name": "Lake Shore",
            "location": "Enemies along the shore drop runes."
        },
        {
            "name": "Carian Manor",
            "location": "Defeat knights for good rune yield."
        }
    ],
    "Altus Plateau": [
        {
            "name": "Plateau Ridge",
            "location": "Farm from the enemies on the ridge."
        },
        {
            "name": "Grace Site",
            "location": "Enemies near the grace site drop runes."
        }
    ]
};

document.getElementById("findRune").addEventListener("click", function() {
    const area = document.getElementById("area").value.trim();
    const resultDiv = document.getElementById("result");
    const runeSound = document.getElementById("runeSound");
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
    } else {
        resultDiv.innerHTML = "Area not found. Please check your spelling.";
    }
});
