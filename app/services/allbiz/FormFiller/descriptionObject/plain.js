import DescriptionObject from './descriptionObject.js'

// Just a plain paragraph, without any specific styles. Fallback for all styles
class Plain extends DescriptionObject {
  static STYLES = {
    container: 'p'
  }

  static pattern() { return `.*` }
}

export default Plain
