ServerEvents.recipes(event => {
    event.shaped(
        Item.of("gtceu:graphite_dust", 3), // arg 1: output
        [
          'AAA',
          '   ', // arg 2: the shape (array of strings)
          '   '
        ],
        {
          A: "mysticalagriculture:graphite_essence",
        }
      )
    event.shaped(
        Item.of("gtceu:chromium_ingot", 3), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: "mysticalagriculture:chrome_essence",
        }
      )
    event.shaped(
        Item.of('gtceu:raw_rubber_dust', 8), // arg 1: output
        [
          'AAA',
          '   ', // arg 2: the shape (array of strings)
          '   '
        ],
        {
          A: "mysticalagriculture:rubber_essence",
        }
      )
})