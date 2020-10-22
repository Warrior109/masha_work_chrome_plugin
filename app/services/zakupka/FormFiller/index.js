import TitleFiller from './titleFiller.js'
import DescriptionFiller from './descriptionFiller.js'
import PropertiesFiller from './propertiesFiller.js'

// Fill form by template
class FormFiller {
  task = null
  titleFiller = null

  constructor(task) {
    this.task = task
    this.titleFiller = new TitleFiller(task)
    this.descriptionFiller = new DescriptionFiller(task)
    this.propertiesFiller = new PropertiesFiller(task)
  }

  call = () => {
    this.titleFiller.call()
    this.descriptionFiller.call()
    this.propertiesFiller.call()
  }
}

export default FormFiller
