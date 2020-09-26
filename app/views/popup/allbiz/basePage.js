// Base class for all popup pages
class BasePage {
  static instance = null

  static open(callback) {
    this.instance = new this()
    this.instance.render(callback)
  }

  static close() {
    this.instance.close()
    this.instance = null
  }

  close = () => {}
}

export default BasePage
