ServerEvents.recipes(event => {
    event.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'mysticalagriculture:prosperity_seed_base'
  },
  "ingredients": [
{
"item": 'gtceu:neutronium_ingot'
},
{
"item": 'mysticalagradditions:insanium_essence'
},
{
"item": 'gtceu:neutronium_ingot'
},
{
"item": 'mysticalagradditions:insanium_essence'
},
{
"item": 'gtceu:neutronium_ingot'
},
{
"item": 'mysticalagradditions:insanium_essence'
},
{
"item": 'gtceu:neutronium_ingot'
},
{
"item": 'mysticalagradditions:insanium_essence'
}
  ],
  "result": {
    "item": 'mysticalagriculture:neutronium_seeds'
  }
}
)
    event.shaped(
        Item.of('gtceu:neutronium_nugget', 3), // arg 1: output
        [
          'AAA',
          'AAA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'mysticalagriculture:neutronium_essence',
        }
      )
})