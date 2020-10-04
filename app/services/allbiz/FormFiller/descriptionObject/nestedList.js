import DescriptionObject from './descriptionObject.js'

// Object for lis with <ul><li><ul><li> tag
class NestedList extends DescriptionObject {
  static STYLES = {
    container: 'li'
  }

  static pattern() { return `^\\s*\\*\\* ` }

  groupWrapper = 'ul'
  isDeletePatternMatch = true
  isNested = true
}

export default NestedList
