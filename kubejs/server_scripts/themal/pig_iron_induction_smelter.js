ServerEvents.recipes(event => {

event.recipes.thermal.smelter({
        ingredients: [
            { item: 'minecraft:iron_ingot' }, // First input
            { item: 'minecraft:clay_ball' }  // Second input
        ],
        result: [
            { item: 'tconstruct:pig_iron_ingot', count: 2 } // Output
        ],
        energy: 4000 // Energy cost for the recipe
    });

    })