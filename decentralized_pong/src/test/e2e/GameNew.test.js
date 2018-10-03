/* global describe, expect, test, beforeAll, afterAll */
import puppeteer from 'puppeteer'
import AppComponents from './AppComponents'
const GameListContent = AppComponents.GameListContent
const GameNewContent = AppComponents.GameNewContent

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

describe('Game New', () => {
  test('player fills out form', async () => {
    await GameNewContent.loadPage(page)
    await GameNewContent.fillOutForm(page)
    await GameNewContent.submitForm(page)
    // TODO change to last title
    // const html = await GameListContent.getLastGameTitel(page)
    const html = await GameListContent.getTitle(page)
    expect(html).toBe('Choose your Game')
  }, 900000)
})

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})
