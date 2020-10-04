import PropertyLine from './descriptionObject/propertyLine.js'
import Chapter from './descriptionObject/chapter.js'
import List from './descriptionObject/list.js'
import NumberedList from './descriptionObject/numberedList.js'
import Plain from './descriptionObject/plain.js'
import GroupWrapper from './descriptionObject/groupWrapper.js'

// Fill title description from the template.
class DescriptionFiller {
  // Order is important
  static TYPES = [PropertyLine, Chapter, List, NumberedList, Plain]

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
    let objects = this.task.description.split("\n").map(this._wrapLine)
    objects = GroupWrapper.wrapObjects(objects)

    return objects.map(object => object.transform()).join('')
  }

  _wrapLine = line => {
    let Type = this.constructor.TYPES.find(type => type.isIt(line))
    return new Type(line)
  }
}

export default DescriptionFiller
