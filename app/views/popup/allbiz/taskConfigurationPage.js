import BasePage from './basePage.js'
import TxtTemplate from './txtTemplate.js'

// Configration for task before fill template
class TaskConfigurationPage extends BasePage {
  task = null

  constructor(task) {
    if (!task) { throw new Error('Task should be present') }

    super()
    this.task = task
  }

  _modifyContent = $content => {
    let $select = $content.find('.select')

    $select.append(TxtTemplate.renderAll())
    $select.select2({
      allowClear: true,
      placeholder: 'Машенька, вибери шаблон',
      width: '100%'
    })
  }

  _bindEvents = $content => {
    $content.find('#back-to-tasks').on('click', () => pagesManager.open('tasks'))
    $content.find('.select').on('change.select2', this._changeTaskTxtTemplate)
    $content.find('#submit-config').on('click', this._sendFillFormEvent)
  }

  _changeTaskTxtTemplate = event => this.task.changeTxtTemplate($(event.target).val())
  _sendFillFormEvent = () => {
    this.task.load(task => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let activeTab = tabs[0]
        console.log('tasl loaded', task, 'send fillForm message')
        chrome.tabs.sendMessage(activeTab.id, {type: 'fillForm', task: task})
      })
    })
  }

  _html = () => `
    <div class='task-configuration-page'>
      <div><a href='#' id='back-to-tasks' class='btn btn-dark'>Назад</a></div>
      <div class='row information-block'>
        <div class='col-sm-4'><strong>Назва:</strong></div>
        <div class='col-sm-8'>${this.task.name}</div>
        <div class='col-sm-4'><strong>Тип:</strong></div>
        <div class='col-sm-8'>${this.task.type}</div>
        <div class='col-sm-4'><strong>Портал:</strong></div>
        <div class='col-sm-8'>${this.task.portal}</div>
      </div>
      <h4>Налаштування шаблону</h4>
      <div class='row select-block'>
        <div class='col-sm-4'>
          <strong>Шаблон, що буде використовуватися:</strong>
        </div>
        <div class='col-sm-8'>
          <select class='select'>
            <option></option>
          </select>
        </div>
      </div>
      <div><a href='#' id='submit-config' class='btn btn-dark'>Заповнити!</a></div>
    </div>
  `
}

export default TaskConfigurationPage
