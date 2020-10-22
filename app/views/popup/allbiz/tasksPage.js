import BasePage from './basePage.js'
import Task from './task.js'

const TASKS_CACHE_KEY = 'tasks'
const TASKS_LOADED_AT = 'tasksLoadedAt'

// Incapsulate logic to work with tasks page
class TasksPage extends BasePage {
  static open(callback) {
    chrome.storage.local.get([TASKS_CACHE_KEY, TASKS_LOADED_AT], (data) => {
      let tasks = data.tasks
      let tasksLoadedAt = data.tasksLoadedAt
      let currentDate = new Date().toDateString()

      if (tasks && tasksLoadedAt === currentDate) {
        this._openPage(Task.wrap(tasks), callback)
      } else {
        chrome.runtime.sendMessage({type: 'loadTasksSheet'}, (items) => {
          let today = moment()
          tasks = Task.from(items).filter(task => task.name && task.forDate.isSame(today, 'day'))

          chrome.storage.local.set({
            [TASKS_CACHE_KEY]: Task.serialize(tasks),
            [TASKS_LOADED_AT]: currentDate
          })
          this._openPage(tasks, callback)
        })
      }
    })
  }

  static _openPage(tasks, callback) {
    this.instance = new TasksPage(tasks)
    this.instance.render(callback)
  }

  tasks = []

  constructor(tasks) {
    super()
    this.tasks = tasks
  }

  _modifyContent = $content => {
    let $tasks = this.tasks.map(task => task.render())
    $content.find('tbody').append($tasks)
  }

  _bindEvents = $content => {
    $content.find('#back-to-menu').on('click', () => pagesManager.open('main'))
    $content.find('#reload-tasks').on('click', this._reloadTasks)
  }

  _reloadTasks = () => {
    chrome.storage.local.remove(
      [TASKS_CACHE_KEY, TASKS_LOADED_AT],
      () => pagesManager.open('tasks')
    )
  }

  _html = () => `
    <div class='row tasks-page'>
      <a href='#' id='back-to-menu' class='btn btn-dark'>Назад</a>
      <a href='#' id='reload-tasks' class='btn btn-dark'>Оновити список</a>
      <table class='table table-hover'>
        <thead class='thead-dark'>
          <tr>
            <th scope="col">Назва товару</th>
            <th scope="col">Тип</th>
            <th scope="col">Портал</th>
            <th scope="col">Додаткова інформація</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `
}

export default TasksPage
