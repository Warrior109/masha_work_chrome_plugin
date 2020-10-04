import DescriptionObject from './descriptionObject.js'

// Object for lis with <ul><li> tag
class List extends DescriptionObject {
  static STYLES = {
    container: 'li'
  }

  static pattern() { return `^\\s*\\* ` }

  groupWrapper = 'ul'
  isDeletePatternMatch = true
}

export default List
