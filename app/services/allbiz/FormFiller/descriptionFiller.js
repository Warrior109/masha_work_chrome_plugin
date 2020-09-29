// The property of the item
const PROPERTIES = [
  /^\s*Форма выпуска:/,
  /^\s*Вид:/,
  /^\s*Вкус:/,
  /^\s*Объем:/,
  /^\s*Количество в упаковке:/
]
// The parts of text which should be a bold
const CHAPTERS = [
  /^\s*Действие\s*$/,
  /^\s*Дополнительные свойства\s*$/,
  /^\s*Передозировка\s*$/,
  /^\s*Побочное действие\s*$/,
  /^\s*Беременность и период лактации\s*$/,
  /^\s*Основные действующие кмоопоненты\s*$/,
  /^\s*Способ применения и дозы\s*$/
]

// Fill title description from the template.
// FIXME: Make a better regexp logic
class DescriptionFiller {
  task = null
  editor = null

  constructor(task) {
    this.task = task
    this.editor = tinyMCE.activeEditor
  }

  call = () => {
    let content = this._generateContent()
    this.editor.setContent(content)
  }

  // Takes a description in the txt format, and convert it to HTML description, which parsed by
  // tinyMCE editor
  _generateContent = () => {
    let paragraphs = this._getParagraphs()
    return paragraphs.map(paragraph => `<p style="text-align: justify;">${paragraph}</p>`).join('')
  }

  // Paragraph - just a line of text, which is separated from another with a new line symbol
  _getParagraphs = () => this.task.description.split("\n").map(this._prepareParagraph)

  // For now just make a text bold, which needs to be bold
  _prepareParagraph = paragraph => {
    // Make a bold
    paragraph = this._prepareProperties(paragraph)
    paragraph = this._prepareChapters(paragraph)
    return paragraph
  }

  _prepareProperties = paragraph => {
    let styles = this._joinTags(this._boldTag())
    paragraph = this._applyStyles(paragraph, PROPERTIES, styles)
    return paragraph
  }

  _prepareChapters = paragraph => {
    let styles = this._joinTags(this._fontSizeTag(14), this._boldTag())
    paragraph = this._applyStyles(paragraph, CHAPTERS, styles)
    return paragraph
  }

  // Returns an regexp with tags
  _joinTags = (...tags) => {
    let opening = [], closing = []
    tags.forEach(tag => {
      opening.push(tag.open)
      closing.unshift(tag.close)
    })
    return `${opening.join('')}$&${closing.join('')}`
  }

  _applyStyles = (txt, regexps, styles) => {
    regexps.forEach(regexp => txt = txt.replace(regexp, styles))
    return txt
  }

  _fontSizeTag = fontSize => ({
    open:`<span style="font-size: ${fontSize}pt;">`,
    close: '</span>'
  })

  _boldTag = () => ({
    open: '<strong>',
    close: '</strong>'
  })
}

export default DescriptionFiller
