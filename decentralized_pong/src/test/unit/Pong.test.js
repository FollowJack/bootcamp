/* global describe, test */
import Pong from '../../pong/Pong';

let pong
describe('Pong', () => {
  beforeEach(() => {
    const width = 1000
    const height = 500
    pong = new Pong(width, height)
  })
  test('player1 moves up', () => {
    const playerSite = 'team1'
    const threshold = '10'
    pong.playerMovesUp(playerSite, threshold)
    expect(pong.playField.paddleLeft.position.y).toEqual(39)
  })
  test('player1 moves down', () => {
    const playerSite = 'team1'
    const threshold = '10'
    pong.playerMovesDown(playerSite, threshold)
    expect(pong.playField.paddleLeft.position.y).toEqual(59)
  })

})
