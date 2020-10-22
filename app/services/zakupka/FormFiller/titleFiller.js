// Fill for title
class TitleFiller {
  task = null

  constructor(task) {
    this.task = task
  }

  call = () => {
    this._titleInput().val(this._generateTitle())
  }

  _titleInput = () => $('#pp')
  _generateTitle = () => `${this.task.name} - ${this.task.type}`
}

export default TitleFiller
