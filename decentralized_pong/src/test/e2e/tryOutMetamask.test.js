/* global describe, test */
import puppeteer from 'puppeteer'
import dappeteer from 'dappeteer'

describe('Main App', () => {
  test('App Title loads correctly', async () => {
    const browser = await dappeteer.launch(puppeteer)
    const metamask = await dappeteer.getMetamask(browser)

    // you can change the network if you want
    await metamask.switchNetwork('ropsten')

    // create or import an account
    await metamask.createAccount('password1234')
    // await metamask.importAccount('already turtle birth enroll since...')

    // go to a dapp and do something that prompts MetaMask to confirm a transaction
    const page = await browser.newPage()
    // await page.goto('http://my-dapp.com')
    // const payButton = await page.$('#pay-with-eth')
    // await payButton.click()
    //
    // await metamask.confirmTransaction()
  }, 900000)
})
