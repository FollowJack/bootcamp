/* global describe, expect, test, beforeAll, afterAll */
// const faker = require('faker')
// const puppeteer = require('puppeteer')
import puppeteer from 'puppeteer'
import AppComponents from './AppComponents'
const AppHeader = AppComponents.AppHeader
const GamesContent = AppComponents.GamesContent

let browser
let page
//   name: faker.name.firstName() + ' ' + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// }

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

describe('Main App', () => {
  test('App Title loads correctly', async () => {
    // page.emulate({
    //   viewport: {
    //     width: 500,
    //     height: 2400
    //   },
    //   userAgent: ''
    // })

    await AppHeader.loadPage(page)
    const html = await AppHeader.getTitle(page)

    expect(html).toBe('| Crowd ° Pong |')
  }, 900000)

  test('Games loads correctly', async () => {
    await GamesContent.loadPage(page)
    const html = await GamesContent.getTitle(page)
    expect(html).toBe('Choose your Game')
  }, 900000)
})

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})
