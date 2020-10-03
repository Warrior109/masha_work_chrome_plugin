import PropertyLine from './descriptionObject/propertyLine.js'
import Chapter from './descriptionObject/chapter.js'
import Plain from './descriptionObject/plain.js'

// Fill title description from the template.
class DescriptionFiller {
  // Order is important
  static TYPES = [PropertyLine, Chapter, Plain]

  task = null
  editor = null

  constructor(task) {
    this.task = task
    this.editor = tinyMCE.activeEditor
  }

  call = () => {
    let content = this._generateContent()
    this.editor.setContent(content)
  }

  // Takes a description in the txt format, and convert it to HTML description, which parsed by
  // tinyMCE editor
  _generateContent = () => {
    return this.task.description.split("\n").map(this._formatLine).join('')
  }

  _formatLine = line => {
    let Type = this.constructor.TYPES.find(type => type.isIt(line))
    return new Type(line).transform()
  }
}

export default DescriptionFiller
