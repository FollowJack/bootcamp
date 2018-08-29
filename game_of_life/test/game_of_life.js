/* global describe, it, beforeEach */

var expect = require('chai').expect
var should = require('chai').should()
var GameOfLife = require('../src/game_of_life')

describe('Game of Life', () => {
  let gameOfLife

  beforeEach(() => {
    gameOfLife = new GameOfLife(4, 4)
  })

  describe('Space', () => {
    it('should creates initial empty two dimensionaly array', () => {
      gameOfLife = new GameOfLife(2, 2)
      const space = gameOfLife.field
      const deadCell = {state: 'DEAD', neighbours: 0}
      const result = [ [ deadCell, deadCell ], [ deadCell, deadCell ] ]
      expect(result).deep.equal(space)
    })
    it('should throw an error if negative numbers are entered', () => {
      try {
        gameOfLife = new GameOfLife(0, -1)
      } catch (err) {
        should.exist(err)
      }
    })
    it('should throw an error if nothing are entered', () => {
      try {
        gameOfLife = new GameOfLife()
      } catch (err) {
        should.exist(err)
      }
    })
    it('should throw an error if strings are entered', () => {
      try {
        gameOfLife = new GameOfLife('a', 'sadsad')
      } catch (err) {
        should.exist(err)
      }
    })
  })
  describe('State', () => {
    let state
    it('should initialize with state zero', () => {
      state = gameOfLife.state
      expect(0).to.equal(state)
    })
    it('should change to next state', () => {
      gameOfLife.swtichToNextState()
      state = gameOfLife.state
      expect(1).to.equal(state)
    })
  })
  describe('Cell', () => {
    it('should place a living cell on any field', () => {
      const cellBefore = gameOfLife.field[1][0]
      expect('DEAD').to.equal(cellBefore.state)

      gameOfLife.setCellLive(1, 0)

      const cellAfter = gameOfLife.field[1][0]
      expect('LIVE').to.equal(cellAfter.state)
    })
    it('should place a dead cell on any field', () => {
      gameOfLife.setCellDead(0, 0)

      const cellAfter = gameOfLife.field[0][0]
      expect('DEAD').to.equal(cellAfter.state)
    })
  })
  describe('Game rules', () => {
    it('1. live cell should die with fewer than two live neighbors, as if by under population.', () => {
      gameOfLife.setCellLive(1, 1)
      const cellStateBefore = gameOfLife.field[1][1].state
      expect('LIVE').to.equal(cellStateBefore)

      gameOfLife.setCellLive(0, 0)
      gameOfLife.swtichToNextState()
      const cellStateAfter = gameOfLife.field[1][1].state

      expect('DEAD').to.equal(cellStateAfter)
    })
    it('2. live cell should live with two or three live neighbors', () => {
      gameOfLife.setCellLive(1, 1)
      const cellStateBefore = gameOfLife.field[1][1].state
      expect('LIVE').to.equal(cellStateBefore)

      gameOfLife.setCellLive(0, 0)
      gameOfLife.setCellLive(0, 1)
      gameOfLife.setCellLive(0, 2)
      gameOfLife.swtichToNextState()
      const cellStateAfter = gameOfLife.field[1][1].state
      expect('LIVE').to.equal(cellStateAfter)
    })
    it('3. live cell should die with more than three live neighbors, as if by overpopulation.', () => {
      gameOfLife.setCellLive(1, 1)
      const cellStateBefore = gameOfLife.field[1][1].state
      expect('LIVE').to.equal(cellStateBefore)

      gameOfLife.setCellLive(0, 0)
      gameOfLife.setCellLive(0, 1)
      gameOfLife.setCellLive(0, 2)
      gameOfLife.setCellLive(1, 0)
      gameOfLife.swtichToNextState()
      const cellStateAfter = gameOfLife.field[1][1].state
      expect('DEAD').to.equal(cellStateAfter)
    })
    it('4. dead cell should live with exactly three live neighbors, as if by reproduction.', () => {
      const cellStateBefore = gameOfLife.field[1][1].state
      expect('DEAD').to.equal(cellStateBefore)

      gameOfLife.setCellLive(0, 0)
      gameOfLife.setCellLive(0, 1)
      gameOfLife.setCellLive(0, 2)
      gameOfLife.swtichToNextState()
      const cellStateAfter = gameOfLife.field[1][1].state
      expect('LIVE').to.equal(cellStateAfter)
    })
  })
})
