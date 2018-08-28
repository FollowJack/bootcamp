/* global describe, it, beforeEach */

var expect = require('chai').expect
var should = require('chai').should()
var GameOfLife = require('../src/game_of_life')

describe('Game of Life', () => {
  let gameOfLife

  beforeEach(() => {
    gameOfLife = new GameOfLife(2, 2)
  })

  describe('Space', () => {
    it('should creates initial empty two dimensionaly array', () => {
      const space = gameOfLife.field
      const result = [ [ {state: 'DEAD'}, {state: 'DEAD'} ], [ {state: 'DEAD'}, {state: 'DEAD'} ] ]
      expect(space).deep.equal(result)
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
      expect(state).to.equal(0)
    })
    it('should change to next state', () => {
      gameOfLife.swtichToNextState()
      state = gameOfLife.state
      expect(state).to.equal(1)
    })
  })
  describe('Cell', () => {
    it('should place a living cell on any field', () => {
      const cellBefore = gameOfLife.field[1][0]
      expect(cellBefore.state).to.equal('DEAD')

      gameOfLife.setCellLive(1, 0)

      const cellAfter = gameOfLife.field[1][0]
      expect(cellAfter.state).to.equal('LIVE')
    })
    it('should place a dead cell on any field', () => {
      gameOfLife.setCellDead(0, 0)

      const cellAfter = gameOfLife.field[0][0]
      expect(cellAfter.state).to.equal('DEAD')
    })
    xit('should change dead cell to live cell', () => {
      const cellBefore = gameOfLife.field[0][0]
      expect(cellBefore.state).to.equal('DEAD')
      expect(cell.state).to.equal('LIVE')
    })
    xit('should change live cell to dead cell', () => {
      expect(cellBefore).to.equal('LIVE')
      expect(cell).to.equal('DEAD')
    })
  })
  describe('Game rules', () => {
    xit('Any live cell with fewer than two live neighbors dies, as if by under population.', () => {
      expect(cellBefore).to.equal('LIVE')
      expect(zeroNeighbour).to.equal(0)
      expect(oneNeighbour).to.equal(1)
      expect(cell).to.equal('DEAD')
    })
    xit('Any live cell with two or three live neighbors lives on to the next generation', () => {
      expect(cellBefore).to.equal('LIVE')
      expect(twoNeuighbour).to.equal(2)
      expect(threeNeighbour).to.equal(3)
      expect(cell).to.equal('LIVE')
    })
    xit('Any live cell with more than three live neighbors dies, as if by overpopulation.', () => {
      expect(cellBefore).to.equal('LIVE')
      expect(fourNeighbour).to.equal(4)
      expect(fourNeighbour).to.equal(8)
      expect(cell).to.equal('DEAD')
    })
    xit('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', () => {
      expect(cellBefore).to.equal('DEAD')
      expect(fourNeighbour).to.equal(3)
      expect(cell).to.equal('LIVE')
    })
  })
})
