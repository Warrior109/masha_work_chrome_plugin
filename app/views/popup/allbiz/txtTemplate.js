import { ALL_TEMPLATES, TEMPLATES_OPTION_GROUP_LABELS } from './constants.js'

// Representation of the Txt template for tasks
class TxtTemplate {
  static renderAll = () => {
    let $content = [], $optGroup, $options
    for (let optGroup in ALL_TEMPLATES) {
      $optGroup = $(this._optGroupHtml(TEMPLATES_OPTION_GROUP_LABELS[optGroup]))
      $options = ALL_TEMPLATES[optGroup].map((_, index) => new this(optGroup, index).render())
      $optGroup.append($options)
      $content.push($optGroup)
    }
    return $content
  }

  static fromId = id => new this(...this.parseId(id))

  static generateId = (optGroup, index) => `${optGroup}_${index}`
  static parseId = id => id.split('_')
  static _optGroupHtml = label => `<optgroup label="${label}"></optgroup>`

  optGroup = null
  index = null
  id = null
  name = null

  constructor(optGroup, index) {
    this.optGroup = optGroup
    this.index = index
    this.id = this.constructor.generateId(optGroup, index)
    this.name = ALL_TEMPLATES[this.optGroup][this.index]
  }

  load = (callback) => {
    $.ajax({
      url: chrome.runtime.getURL(`app/txt_templates/${this.name}`),
      async: false,
      success: text => callback(text)
    })
  }

  render = () => this._html()

  _html = () => `<option value="${this.id}">${this.name}</option>`
}

export default TxtTemplate
