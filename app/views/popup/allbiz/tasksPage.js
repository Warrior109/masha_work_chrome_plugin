import BasePage from './basePage.js'
import Task from './task.js'

// Incapsulate logic to work with tasks page
class TasksPage extends BasePage{
  static open(callback) {
    chrome.runtime.sendMessage({type: 'loadTasksSheet'}, (items) => {
      let today = moment()
      let tasks =  Task.from(items).filter(task => task.name && task.forDate.isSame(today, 'day'))
      this.instance = new TasksPage(tasks)
      this.instance.render(callback)
    })
  }

  tasks = []

  constructor(tasks) {
    super()
    this.tasks = tasks
  }

  render = (callback) => {
    let $content = $(this._html)
    let $tasks = this.tasks.map(task => task.render())
    $content.find('tbody').append($tasks)
    this._bindEvents($content)

    callback($content)
  }

  _bindEvents = $content => {
    $content.find('#back-to-menu').on('click', () => pagesManager.open('main'))
  }

  _html = `
    <div class='row tasks-page table-hover'>
      <a href='#' id='back-to-menu' class='btn btn-dark'>Назад</a>
      <table class='table'>
        <thead class='thead-dark'>
          <tr>
            <th scope="col">Назва товару</th>
            <th scope="col">Тип</th>
            <th scope="col">Портал</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `
}

export default TasksPage
