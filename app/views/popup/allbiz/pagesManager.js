import MainPage from './mainPage.js'
import TasksPage from './tasksPage.js'

const PAGES = {
  main: MainPage,
  tasks: TasksPage
}

// Is responsible for which page is active now
class PagesManager {
  activePage = null
  loader = $("<div id='loader'></div>")
  container = $('.main-container')

  init = () => {
    this.open('main')
  }

  open = (pageName) => {
    console.log('open', pageName)
    if (this.activePage) this.activePage.close()
    this.container.empty()
    this.container.append(this.loader)

    this.activePage = PAGES[pageName]
    this.activePage.open($content => {
      this.container.append($content)
      this.loader.remove()
    })
  }
}

export default PagesManager
