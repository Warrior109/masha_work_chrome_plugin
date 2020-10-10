import DescriptionObject from './descriptionObject.js'

// Line, which start with one from a property names, which ends with a ":" character
class PropertyLine extends DescriptionObject {
  static NAMES = [
    'Форма выпуска', 'Вид', 'Вкус', 'Объем', 'Количество в упаковке', 'Назначение', 'Стать',
    'Возраст', 'Пол', 'Время применения', 'Основа', 'Аромат', 'Тип'
  ]
  static STYLES = {
    container: 'p',
    bold: true
  }

  static pattern() { return `^\\s*(${this.NAMES.join('|')}):` }
}

export default PropertyLine
