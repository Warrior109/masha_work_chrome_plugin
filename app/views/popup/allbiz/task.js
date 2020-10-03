import TxtTemplate from './txtTemplate.js'

// Representation of the Task object
class Task {
  static from(items) {
    let taskDate
    return items.map(item => {
      taskDate = item[0] || taskDate
      return new Task(item, taskDate)
    })
  }

  // Name always contains english and russian versions
  name = null
  nameEn = null
  nameRu = null

  description = null

  type = null
  portal = null
  forDate = null
  txtTemplate = null

  constructor(item, date) {
    this.name = item[1]
    this.type = item[2]
    this.portal = item[4]
    this.forDate = moment(date, 'DD.MM')
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
    this.nameEn = this.name.match(/[a-z0-9]+[a-z0-9 +\-_]*[a-z0-9]/i)[0]
    this.nameRu = this.name.match(/[а-я0-9]+[а-я0-9 +\-_]*[а-я0-9]/i)[0]
  }

  // Fill txt template by current task
  _fillTemplate = text => text.replace(/Название\*/gi, this.nameEn)

  _bindEvents = $content => {
    $content.on('click', () => pagesManager.open('taskConfiguration', this))
  }

  _html = () => `
    <tr>
      <td>${this.name}</td>
      <td>${this.type}</td>
      <td>${this.portal}</td>
    </tr>
  `
}

export default Task
