import BasePage from './basePage.js'

// Incapsulates logic of the main page
class MainPage extends BasePage {
  render = callback => {
    let $content = $(this._html)
    this._bindEvents($content)
    callback($content)
  }

  _bindEvents = $content => {
    $content.find('#fill-by-template').on('click', () => pagesManager.open('tasks'))

    $content.find('#translate-all-languages').on('click', this._sendTranslateLanguagesEvent)
  }

  _sendTranslateLanguagesEvent = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      let activeTab = tabs[0]
      chrome.tabs.sendMessage(activeTab.id, {type: 'translate_all_languages'})
    })
  }

  _html = `
    <div class="row main-page">
      <nav class="nav flex-column">
        <a class="nav-link" id="fill-by-template" href="#">Заповнити по шаблону</a>
        <a class="nav-link" id="translate-all-languages" href="#">Перекласти всіма мовами</a>
      </nav>
    </div>
  `
}

export default MainPage
