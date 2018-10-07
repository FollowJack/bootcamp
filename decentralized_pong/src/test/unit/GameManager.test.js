/* global describe, test */
let gameManager
const team = 'team1'
const startTime = new Date(new Date().getTime() * 3000)
describe('GameManager', () => {
  beforeEach(() => {
    const GameManager = require('../../pong/GameManager')
    gameManager = new GameManager(startTime,team)
  })
  test('player joined', () => {
    expect(gameManager.selectedTeam).toEqual(team)
  })
  test('player moves up', () => {
    gameManager.playerMovesUp()
    expect(gameManager.isMovementSend).toEqual(true)
  })
  test('player moves down', () => {
    gameManager.playerMovesDown()
    expect(gameManager.isMovementSend).toEqual(true)
  })
  test('aggregation moves', () => {
    // get data
    // aggregate data
    // give pong the new movement
  })
})
