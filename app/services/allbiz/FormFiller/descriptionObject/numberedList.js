import DescriptionObject from './descriptionObject.js'

// Object for lis with <ul><li> tag
class NumberedList extends DescriptionObject {
  static STYLES = {
    container: 'li'
  }

  static pattern() { return `^\\s*n\\* ` }

  groupWrapper = 'ol'
  isDeletePatternMatch = true
}

export default NumberedList
