// Base class for all popup pages
class BasePage {
  static instance = null

  static open(callback, ...args) {
    this.instance = new this(...args)
    this.instance.render(callback)
  }

  static close() {
    this.instance.close()
    this.instance = null
  }

  render = (callback) => {
    let $content = $(this._html())
    this._modifyContent($content)
    this._bindEvents($content)
    callback($content)
  }

  close = () => {}

  _modifyContent = $content => {}
  _bindEvents = $content => {}
}

export default BasePage
