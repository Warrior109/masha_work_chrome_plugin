import TitleFiller from './titleFiller.js'
import DescriptionFiller from './descriptionFiller.js'

// Fill form by template
class FormFiller {
  task = null
  titleFiller = null

  constructor(task) {
    this.task = task
    this.titleFiller = new TitleFiller(task)
    this.descriptionFiller = new DescriptionFiller(task)
  }

  call = () => {
    this.titleFiller.call()
    this.descriptionFiller.call()
  }
}

export default FormFiller
