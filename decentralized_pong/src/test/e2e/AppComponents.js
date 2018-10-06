const appUrlBase = 'http://localhost:3000'
const routes = {
  public: {
    home: `${appUrlBase}/`
  },
  private: {
  }
}
const selectors = {
  app: {
    appTitle: '.App-title'
  },
  game: {
    canvas: '.Game-pong-canvas',
    lastPlayerConfirmation: '.team-a > .list-group-item:last-child',
    joinButton: '.Game-btn-join',
    matchStartTimer: '.Game-timer-start',
    playerNameInput: '.Game-player-name-input',
    title: '.Game-title',
    upIcon: '.Game-up-icon',
    downIcon: '.Game-down-icon'
  },
  gameList: {
    title: '.Games-title',
    lastGameTitel: '.Games-view:last-child',
    newButton: '.Games-btn-new-game',
  },
  gameNew: {
    title: '.GameNew-title',
    newButtonSubmit: '.GameNew-btn-submit',
    form: {
      maxScore: '.GameNew-max-score',
      matchName: '.GameNew-match-name',
      teamNameA: '.GameNew-teamname-a',
      teamNameB: '.GameNew-teamname-b'
    }
  }
}

class AppHeader {
  async loadPage (page) {
    await page.goto(routes.public.home)
    await page.waitForSelector(selectors.app.appTitle)
  }
  async getTitle (page) {
    const html = await page.$eval(selectors.app.appTitle, element => element.innerHTML)
    return html
  }
  async clickOnTitle (page) {
    await page.click(selectors.app.appTitle)
    await page.waitForSelector(selectors.gameList.title)
  }
}
class GameListContent {
  constructor () {
    this.appHeader = new AppHeader()
  }
  async clickOnLastGame (page) {
    await page.click(selectors.gameList.lastGameTitel)
    await page.waitForSelector(selectors.game.title)
  }
  async clickOnNewGame (page) {
    await page.click(selectors.gameList.newButton)
    await page.waitForSelector(selectors.gameNew.title)
  }
  async loadPage (page) {
    await this.appHeader.loadPage(page)
    await this.appHeader.clickOnTitle(page)
    await page.waitForSelector(selectors.gameList.title)
  }
  async getTitle (page) {
    const html = await page.$eval(selectors.gameList.title, element => element.innerHTML)
    return html
  }
}
class GameContent {
  async loadPage (page) {
    const gameList = new GameListContent()
    await gameList.loadPage(page)
    await gameList.clickOnLastGame(page)
  }
  async getJoiningConfirmation (page) {
    const html = await page.$eval(selectors.game.lastPlayerConfirmation, element => element.innerHTML)
    return html
  }
  async getMatchStartTimer (page) {
    const html = await page.$eval(selectors.game.matchStartTimer, element => element.innerHTML)
    return html
  }
  async getTitle (page) {
    const html = await page.$eval(selectors.game.title, element => element.innerHTML)
    return html
  }
  async joinGame (page, playerName) {
    await page.focus(selectors.game.playerNameInput)
    await page.keyboard.type(playerName)
    await page.click(selectors.game.joinButton)
    await page.waitForSelector(selectors.game.lastPlayerConfirmation)
  }
  async playerMovesDown (page) {
    await page.focus(selectors.game.canvas)
    await page.keyboard.down('ArrowDown');
    await page.waitForSelector(selectors.game.downIcon)
    await page.keyboard.up('ArrowDown')
  }
  async playerMovesUp (page) {
    await page.focus(selectors.game.canvas)
    await page.keyboard.down('ArrowUp');
    await page.waitForSelector(selectors.game.upIcon)
    await page.keyboard.up('ArrowUp');
  }
}
class GameNewContent {
  async loadPage (page) {
    const gameList = new GameListContent()
    await gameList.loadPage(page)
    await gameList.clickOnNewGame(page)
  }
  async fillOutForm (page) {
    await page.focus(selectors.gameNew.form.maxScore)
    await page.keyboard.type('6')
    await page.focus(selectors.gameNew.form.matchName)
    await page.keyboard.type('Test Match')
    await page.focus(selectors.gameNew.form.teamNameA)
    await page.keyboard.type('TeamA')
    await page.focus(selectors.gameNew.form.teamNameB)
    await page.keyboard.type('TeamB')
  }
  async getLastGameTitel (page) {
    const html = await page.$eval(selectors.gameList.lastGameTitel, element => element.innerHTML)
    return html
  }
  async getTitle (page) {
    const html = await page.$eval(selectors.gameNew.title, element => element.innerHTML)
    return html
  }
  async submitForm (page) {
    await page.click(selectors.gameNew.newButtonSubmit)
    await page.waitForSelector(selectors.gameList.title)
  }
}

export default {
  AppHeader: new AppHeader(),
  GameNewContent: new GameNewContent(),
  GameListContent: new GameListContent(),
  GameContent: new GameContent()
}
