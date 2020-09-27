import { ALL_TEMPLATES, TEMPLATES_OPTION_GROUP_LABELS } from './constants.js'

// Representation of the Txt template for tasks
class TxtTemplate {
  static renderAll = () => {
    let $content = [], $optGroup, $options, $option
    for (let optGroup in ALL_TEMPLATES) {
      $optGroup = $(this._optGroupHtml(TEMPLATES_OPTION_GROUP_LABELS[optGroup]))
      $options = ALL_TEMPLATES[optGroup].map((templateName, index) => {
        return $(this._optionHtml(`${optGroup}_${index}`, templateName))
      })
      $optGroup.append($options)
      $content.push($optGroup)
    }
    return $content
  }

  static _optGroupHtml = label => `<optgroup label="${label}"></optgroup>`
  static _optionHtml = (value, label) => `<option value="${value}">${label}</option>`
}

export default TxtTemplate
