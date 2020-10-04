import DescriptionObject from './descriptionObject.js'

// Name of the chapter
class Chapter extends DescriptionObject {
  static NAMES = [
    'Действие', 'Дополнительные свойства', 'Передозировка', 'Побочное действие',
    'Беременность и период лактации', 'Основные действующие компоненты',
    'Способ применения и дозы', 'Рекомендации по применению', 'Показания к применению', 'Состав',
    'Действующие вещества:', 'Вспомогательные вещества:', 'Дополнительное действие',
    'Дополнительные действия'
  ]
  static STYLES = {
    container: 'p',
    bold: true,
    fontSize: 14
  }

  static pattern() { return `^\\s*(${this.NAMES.join('|')})\\s*$` }
}

export default Chapter
