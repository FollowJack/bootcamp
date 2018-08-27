var expect = require('chai').expect
var GameOfLife = require('../src/game_of_life')

describe ('Game of Life', () => {
  describe ('Precondition', () => {
    it('creates initial empty array', () => {
      const gameOfLife = new GameOfLife(2, 2)

      const space = gameOfLife.field

      const result = [ [ false, false ], [ false, false ] ]
      expect(space).deep.equal(result)
    })
  })
})
