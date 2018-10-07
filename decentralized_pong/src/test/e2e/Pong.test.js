/* global describe, test */
import React from 'react';
import {shallow} from 'enzyme';
import Game from '../../routes/Game';
import Pong from '../../components/Pong';

describe('Pong', () => {
  let wrapper;
  beforeEach(() => {
    const match = { params: { id: '1' } }
    wrapper = shallow(<Game match={match}/>)
  })
  test('place the game', () => {
    // expect(wrapper.containsMatchingElement(<Pong />)).toEqual(true)
  })
  // test('starts the game', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'startGame');
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalledTimes(1);
  // })
  test('select players team', () => {
    // gameManager.moveUp
  })
  test('player moves up', () => {
    // gameManager.moveUp
  })
  test('player moves down', () => {
    // gameManager.moveDown
  })
  test('ball moves default to the right', () => {})
  test('ball colides with paddle', () => {})
  test('ball colides with upside wall', () => {})
  test('ball colides with upside wall', () => {})
  test('ball colides with team 1s wall', () => {})
  test('ball colides with team 2s wall', () => {})
})
