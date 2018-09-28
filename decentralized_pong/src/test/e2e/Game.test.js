/* global describe, expect, test, beforeAll, afterAll */
import puppeteer from 'puppeteer'
import AppComponents from './AppComponents'
const GameContent = AppComponents.GameContent

let browser
let page

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: true // headless mode set to false so browser opens up with visual feedback
    // TODO  Get process.ENV === DEBUG for displaying the browser
    // headless: false, // headless mode set to false so browser opens up with visual feedback
    // slowMo: 250 // how slow actions should be
  })
  // creates a new page in the opened browser
  page = await browser.newPage()
})

describe('Game', () => {
  test('player joins game', async () => {
    await GameContent.loadPage(page)
    const playerName = 'AwesomeName'
    await GameContent.joinGame(page, playerName)
    const html = await GameContent.getJoiningConfirmation(page)
    expect(html).toMatch(playerName)
  }, 900000)

  test('timer appears', async () => {
    // TODO
    // await GameListContent.loadPage(page)
    // const html = await GamesContent.getTitle(page)
    // expect(html).toBe('Choose your Game')
  }, 900000)

  test('player moves up and gets it visualized', async () => {
    // TODO
    // await GameListContent.loadPage(page)
    // const html = await GamesContent.getTitle(page)
    // expect(html).toBe('Choose your Game')
  }, 900000)

  test('player moves down and gets it visualized', async () => {
    // TODO
    // await GameListContent.loadPage(page)
    // const html = await GamesContent.getTitle(page)
    // expect(html).toBe('Choose your Game')
  }, 900000)
})

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})
