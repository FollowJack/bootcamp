/* global describe, test */
let PlayField = require('../../pong/PlayField')
describe('PlayField', () => {
  test('initialize play field', () => {
    const width = 1000
    const height = 500
    const playField = new PlayField(width,height)
    expect(playField.width).toEqual(width)
    expect(playField.height).toEqual(height)
  })
})
