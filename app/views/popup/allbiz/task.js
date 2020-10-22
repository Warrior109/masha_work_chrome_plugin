import TxtTemplate from './txtTemplate.js'

// Representation of the Task object
class Task {
  static from(items) {
    let taskDate
    return items.map(item => {
      taskDate = item[0] || taskDate

      return new Task({
        date: taskDate,
        name: item[1],
        type: item[2],
        portal: item[3],
        additionalInformation: item[4]
      })
    })
  }

  static wrap(items) {
    return items.map(item => new Task(item))
  }

  static serialize(tasks) {
    return tasks.map(task => ({
      name: task.name,
      type: task.type,
      portal: task.portal,
      additionalInformation: task.additionalInformation,
      date: task.date
    }))
  }

  // Name always contains english and russian versions
  name = null
  nameEn = null
  nameRu = null

  description = null

  type = null
  portal = null
  additionalInformation = null
  forDate = null
  txtTemplate = null

  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.portal = data.portal
    this.additionalInformation = data.additionalInformation
    this.data = data.date
    this.forDate = moment(data.date, 'DD.MM')
  }

  changeTxtTemplate = txtTemplateId => this.txtTemplate = TxtTemplate.fromId(txtTemplateId)

  load = callback => {
    this._parseName()

    this.txtTemplate.load(text => {
      this.description = this._fillTemplate(text)
      callback(this)
    })
  }

  render = () => {
    let $content = $(this._html())
    this._bindEvents($content)
    return $content
  }

  // Name always has en and ru versions. This method find each version and sets them to relative
  // variables
  _parseName = () => {
    let nameEnMatch = this.name.match(/[a-z0-9]+[a-z0-9 +\-_]*[a-z0-9]/i)
    let nameRuMatch = this.name.match(/[а-я0-9]+[а-я0-9 +\-_]*[а-я0-9]/i)
    this.nameEn = nameEnMatch && nameEnMatch[0]
    this.nameRu = nameRuMatch && nameRuMatch[0]
  }

  // Fill txt template by current task
  _fillTemplate = text => text.replace(/Название\*/gi, this.nameEn || this.nameRu)

  _bindEvents = $content => {
    $content.on('click', () => pagesManager.open('taskConfiguration', this))
  }

  _html = () => `
    <tr>
      <td>${this.name}</td>
      <td>${this.type}</td>
      <td>${this.portal}</td>
      <td>${this.additionalInformation || ''}</td>
    </tr>
  `
}

export default Task
