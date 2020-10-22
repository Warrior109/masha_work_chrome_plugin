import PropertyLine from '../../allbiz/FormFiller/descriptionObject/propertyLine.js'
import Chapter from '../../allbiz/FormFiller/descriptionObject/chapter.js'
import List from '../../allbiz/FormFiller/descriptionObject/list.js'
import NumberedList from '../../allbiz/FormFiller/descriptionObject/numberedList.js'
import NestedList from '../../allbiz/FormFiller/descriptionObject/nestedList.js'
import Plain from '../../allbiz/FormFiller/descriptionObject/plain.js'
import GroupWrapper from '../../allbiz/FormFiller/descriptionObject/groupWrapper.js'

// Fill title description from the template.
class DescriptionFiller {
  // Order is important
  static TYPES = [PropertyLine, Chapter, List, NumberedList, NestedList, Plain]

  task = null
  editor = null

  constructor(task) {
    this.task = task
    this.editor = tinyMCE.activeEditor
  }

  call = () => {
    let content = this._generateContent()
    this.editor.setContent(content + this._templateEnding)
  }

  // Takes a description in the txt format, and convert it to HTML description, which parsed by
  // tinyMCE editor
  _generateContent = () => {
    let objects = this.task.description.split("\n").map(this._wrapLine)
    objects = GroupWrapper.wrapObjects(objects)

    return objects.map(object => object.transform()).join('')
  }

  _wrapLine = line => {
    let Type = this.constructor.TYPES.find(type => type.isIt(line))
    return new Type(line)
  }

  _templateEnding = `
    <p style="text-align: justify;">
      <span style="font-size: medium;">
        <span lang="uk-UA"><strong>Условия возврата</strong></span>
      </span>
    </p>
    <p style="text-align: justify;">
      <span lang="uk-UA">
        Вернуть данный товар возможно в соответствии с действующим законодательством.
      </span>
    </p>
    <p lang="uk-UA" style="text-align: justify;"><br /><br /></p>
    <p style="text-align: justify;">
      <span>*Не является лекарственным средством. </span>
      <span lang="uk-UA"> </span>
      <span>Все результаты сугубо индивидуальны и зависят от особенностей организма.</span>
    </p>
    <p style="text-align: justify;"><br /><br /></p>
    <p style="text-align: justify;">
      <span>*</span>
      <span><span lang="uk-UA">*</span></span>
      <span>Акционная цена действует при заказе минимального курса.</span>
      <span lang="uk-UA"> </span>
      <span>Подробности акции у менеджеров.</span>
    </p>
    <p style="text-align: justify;"><br /><br /></p>
    <p style="text-align: justify;"><span><strong>Дополнительная информация</strong></span></p>
    <p style="text-align: justify;">
      <span>
        Знакомясь с образцами продукции, представленными на сайте, необходимо принимать во внимание некоторые моменты, связанные с точностью передачи цвета и внешнего вида продукции. Производитель оставляет за собой право в одностороннем порядке без уведомления потребителя вносить изменения в цветовую отделку и дизайн упаковки, а также изменять форму выпуска. Проверка на соответствие заказанному продукту осуществляется на отделении Новой Почты, впоследствии обмен или возврат не принимается.
      </span>
    </p>
  `
}

export default DescriptionFiller
