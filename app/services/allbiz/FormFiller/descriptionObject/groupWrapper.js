import DescriptionObject from './descriptionObject.js'

// GroupWrapper - is a wrapper for a group type of a description object.
// Every group type of a description object should have a defined "groupWrapper" instance variable
// With a name of tag, to which them should be wrapped
class GroupWrapper extends DescriptionObject {
  static STYLES = {}

  static pattern() { return '' }

  static wrapObjects = objects => {
    let results = [], currentWrapper
    objects.forEach(object => {
      if (currentWrapper && currentWrapper.tag == object.groupWrapper) {
        currentWrapper.addItem(object)
      } else {
        currentWrapper = object.groupWrapper ? new this(object) : null
        results.push(currentWrapper || object)
      }
    })
    return results
  }

  tag = null
  items = []

  constructor(object) {
    super(null)
    this.tag = object.groupWrapper
    this.addItem(object)
  }

  line = () => this.items.map(item => item.transform()).join('')
  addItem = item => this.items.push(item)

  _wrapObject = line => `<${this.tag}>${line}</${this.tag}>`
}

export default GroupWrapper
