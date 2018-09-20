/* global describe, expect, test, beforeAll, afterAll */
// const faker = require('faker')
const puppeteer = require('puppeteer')

const appUrlBase = 'http://localhost:3000'
const routes = {
  public: {
    home: `${appUrlBase}/`
  },
  private: {
  }
}

let browser
let page
// const person = {
//   name: faker.name.firstName() + ' ' + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// }

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: false, // headless mode set to false so browser opens up with visual feedback
    slowMo: 250 // how slow actions should be
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

    await page.goto(routes.public.home)
    await page.waitForSelector('.App-title')

    const html = await page.$eval('.App-title', element => element.innerHTML)
    expect(html).toBe('| Crowd ° Pong |')
  }, 900000)

  test('Games loads correctly', async () => {
    await page.goto(routes.public.home)
    await page.waitForSelector('.App-title')

    await page.click('.App-title')
    await page.waitForSelector('.Games-title')

    const html = await page.$eval('.Games-title', element => element.innerHTML)
    expect(html).toBe('Choose your Game')
  }, 900000)
})

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close()
})
