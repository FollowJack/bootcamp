const appUrlBase = 'http://localhost:3000'
const routes = {
  public: {
    home: `${appUrlBase}/`
  },
  private: {
  }
}

class AppHeader {
  async loadPage (page) {
    await page.goto(routes.public.home)
    await page.waitForSelector('.App-title')
  }

  async getTitle (page) {
    const html = await page.$eval('.App-title', element => element.innerHTML)
    return html
  }

  async clickOnTitle (page) {
    await page.click('.App-title')
  }
}

class GameListContent {
  constructor () {
    this.appHeader = new AppHeader()
  }

  async loadPage (page) {
    await this.appHeader.loadPage(page)
    await this.appHeader.clickOnTitle(page)
    await page.waitForSelector('.Games-title')
  }

  async getTitle (page) {
    const html = await page.$eval('.Games-title', element => element.innerHTML)
    return html
  }
}

export default {
  AppHeader: new AppHeader(),
  GameListContent: new GameListContent()
}
