/* global describe, expect, test */
const faker = require('faker')
const puppeteer = require('puppeteer')

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
}

describe('test example', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      healess: false
    })
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    })

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.App-title')

    const html = await page.$eval('.App-title', element => element.innerHTML)
    expect(html).toBe('Welcome to React')

    browser.close()
  }, 16000)
})
