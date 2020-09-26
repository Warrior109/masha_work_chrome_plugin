// Representation of the Task object
class Task {
  static from(items) {
    let taskDate
    return items.map(item => {
      taskDate = item[0] || taskDate
      return new Task(item, taskDate)
    })
  }

  name = null
  type = null
  portal = null
  forDate = null

  constructor(item, date) {
    this.name = item[1]
    this.type = item[2]
    this.portal = item[4]
    this.forDate = moment(date, 'DD.MM')
  }

  render = () => $(this._html())

  _html = () => `
    <tr>
      <td>${this.name}</td>
      <td>${this.type}</td>
      <td>${this.portal}</td>
    </tr>
  `
}

export default Task
