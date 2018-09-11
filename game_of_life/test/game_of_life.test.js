/* global describe, it, beforeEach, before, HTMLCanvasElement */

require('jsdom-global')()
const expect = require('chai').expect
let GameOfLife
let World

describe('Game of Life', () => {
  let gameOfLife

  before(() => {
    var canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    document.body.appendChild(canvas)
    HTMLCanvasElement.prototype.getContext = () => {
      return {
        'moveTo': () => {},
        'lineTo': () => {},
        'fillRect': () => {},
        'stroke': () => {}
      }
    }
    var runButton = document.createElement('button')
    runButton.id = 'run'
    document.body.appendChild(runButton)
  })

  beforeEach(() => {
    World = require('../src/world')
    GameOfLife = require('../src/game_of_life')
    gameOfLife = new GameOfLife(4, 4)
  })

  describe('Game of Life', () => {
    it('should initialize with dead world', () => {
      const world = gameOfLife.world
      expect(world).deep.equal(new World(4, 4))
    })
    it('should initialize with generation zero', () => {
      const generation = gameOfLife.generation
      expect(0).to.equal(generation)
    })
    it('should change to next generation', () => {
      gameOfLife.swtichToNextGeneration()
      const generation = gameOfLife.generation
      expect(1).to.equal(generation)
    })
    it('should get the population height and width', () => {
      const resultHeight = gameOfLife.getPopulationHeight()
      const resultWidth = gameOfLife.getPopulationWidth()
      expect(4).to.equal(resultHeight)
      expect(4).to.equal(resultWidth)
    })
    it('should switch cell state', () => {
      gameOfLife.switchCellState(1, 1)
      const resultAlive = gameOfLife.isCellAlive(1, 1)
      expect(resultAlive).to.is.true

      gameOfLife.switchCellState(1, 1)
      const resultDead = gameOfLife.isCellAlive(1, 1)
      expect(resultDead).to.is.false
    })
    it('1. live cell should die with fewer than two live neighbors, as if by under population.', () => {
      gameOfLife.switchCellState(1, 1)
      const isAliveBefore = gameOfLife.isCellAlive(1, 1)
      expect(isAliveBefore).to.be.true

      gameOfLife.switchCellState(0, 0)
      gameOfLife.swtichToNextGeneration()
      const isAliveAfter = gameOfLife.isCellAlive(1, 1)
      expect(isAliveAfter).to.be.false
    })
    it('2. live cell should live with two or three live neighbors', () => {
      gameOfLife.switchCellState(1, 1)
      const isAliveBefore = gameOfLife.isCellAlive(1, 1)
      expect(isAliveBefore).to.be.true

      gameOfLife.switchCellState(0, 0)
      gameOfLife.switchCellState(0, 1)
      gameOfLife.switchCellState(0, 2)
      gameOfLife.swtichToNextGeneration()
      const isAliveAfter = gameOfLife.isCellAlive(1, 1)
      expect(isAliveAfter).to.be.true
    })
    it('3. live cell should die with more than three live neighbors, as if by overpopulation.', () => {
      gameOfLife.switchCellState(1, 1)
      const isAliveBefore = gameOfLife.isCellAlive(1, 1)
      expect(isAliveBefore).to.be.true

      gameOfLife.switchCellState(0, 0)
      gameOfLife.switchCellState(0, 1)
      gameOfLife.switchCellState(0, 2)
      gameOfLife.switchCellState(1, 0)
      gameOfLife.swtichToNextGeneration()
      const isAliveAfter = gameOfLife.isCellAlive(1, 1)
      expect(isAliveAfter).to.be.false
    })
    it('4. dead cell should live with exactly three live neighbors, as if by reproduction.', () => {
      const isAliveBefore = gameOfLife.isCellAlive(1, 1)
      expect(isAliveBefore).to.be.false

      gameOfLife.switchCellState(0, 0)
      gameOfLife.switchCellState(0, 1)
      gameOfLife.switchCellState(0, 2)
      gameOfLife.swtichToNextGeneration()
      const isAliveAfter = gameOfLife.isCellAlive(1, 1)
      expect(isAliveAfter).to.be.true
    })
  })
})
