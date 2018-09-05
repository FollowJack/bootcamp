/* global describe, it, beforeEach, before, HTMLCanvasElement */

require('jsdom-global')()
const expect = require('chai').expect
const should = require('chai').should()
let Cell
let World

describe('Game of Life', () => {

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
    Cell = require('../src/game_of_life').Cell
    World = require('../src/game_of_life').World
  })

  describe('World', () => {
    it('should creates initial empty two dimensionaly array', () => {
      const world = new World(2, 2)
      const space = world.space
      const deadCell = new Cell('DEAD')
      const result = [ [ deadCell, deadCell ], [ deadCell, deadCell ] ]
      expect(result).deep.equal(space)
    })
    it('should throw an error if negative numbers are entered', () => {
      try {
        const world = new World(0, -1)
      } catch (err) {
        should.exist(err)
      }
    })
    it('should throw an error if nothing are entered', () => {
      try {
        const world = new World()
      } catch (err) {
        should.exist(err)
      }
    })
    it('should throw an error if strings are entered', () => {
      try {
        const world = new World('a', 'sadsad')
      } catch (err) {
        should.exist(err)
      }
    })
    it('should place a living cell on any field', () => {
      const world = new World(4, 4)
      const isCellDead = world.getCell(1, 0).isDead()
      expect(isCellDead).to.be.true

      world.setCell(1, 0, new Cell('LIVE'))

      const isCellAlive = world.getCell(1, 0).isAlive()
      expect(isCellAlive).to.be.true
    })
    it('should place a dead cell on any field', () => {
      const world = new World(4, 4)
      world.setCell(1, 0, new Cell('DEAD'))
      const isCellDead = world.getCell(1, 0).isDead()
      expect(isCellDead).to.be.true
    })
    it('should count living neighbours of a cell', () => {
      const world = new World(4, 4)
      world.setCell(1, 1, new Cell('LIVE'))

      world.setCell(0, 0, new Cell('LIVE'))
      world.setCell(0, 1, new Cell('LIVE'))
      world.setCell(1, 0, new Cell('LIVE'))
      world.setCell(2, 0, new Cell('LIVE'))


      const neighbours = world.countNeighbours(1, 1)
      expect(4).to.equal(neighbours)
    })
  })
})
