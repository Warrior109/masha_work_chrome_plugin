// Just a base class for line of text, which is separated from others lines with a new line symbol
class DescriptionObject {
  static isGroupObject = false

  static isIt(line) { return line.match(new RegExp(this.pattern())) }

  // Should be reloaded in the children
  // Just string, which will be converted into regexp
  static pattern() {}

  line = null

  constructor(line) {
    this.line = line
  }

  transform = () => {
    let line = this.line.replace(new RegExp(this.constructor.pattern()), this.styles())
    line = this._wrapObject(line)
    return line
  }

  styles = () => {
    let styles = [], config = this.constructor.STYLES
    for (let key in config) {
      // container - should parse in the "_wrapObject" method
      if (key === 'container') { continue }

      if (config[key]) { styles.push(this[`_${key}Style`](config[key])) }
    }
    return this._joinStyles(styles)
  }

  _wrapObject = line => {
    let containerStyle = this._containerStyle(this.constructor.STYLES.container)
    return line.replace(/^.*$/, this._joinStyles([containerStyle]))
  }

  _joinStyles = (tags) => {
    let result = '$&'
    tags.forEach(tag => result = `${tag.open}${result}${tag.close}`)
    return result
  }

  // It should be common for some objects (but not for all)
  _containerStyle = tag => ({
    open: `<${tag} style="text-align: justify">`,
    close: `</${tag}>`
  })

  _fontSizeStyle = fontSize => ({
    open:`<span style="font-size: ${fontSize}pt;">`,
    close: '</span>'
  })

  _boldStyle = () => ({
    open: '<strong>',
    close: '</strong>'
  })
}

export default DescriptionObject
