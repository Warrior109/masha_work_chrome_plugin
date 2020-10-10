import PropertyLine from './descriptionObject/propertyLine.js'
import Chapter from './descriptionObject/chapter.js'
import List from './descriptionObject/list.js'
import NumberedList from './descriptionObject/numberedList.js'
import NestedList from './descriptionObject/nestedList.js'
import Plain from './descriptionObject/plain.js'
import GroupWrapper from './descriptionObject/groupWrapper.js'

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
    <p><span style="font-size: 12pt;"><strong><span lang="RU">Условия обмена/возврата</span></strong></span></p>
    <p><span lang="UK">Вы можете вернуть или обменять товар согласно действующему законодательству.</span></p>
    <p><span lang="UK">&nbsp;</span></p>
    <p><span lang="UK">*</span> &nbsp;<span lang="RU">Продукт не является лекарственным средством</span><span lang="UK">.</span> &nbsp;<span lang="RU">&nbsp;Не является БАД</span><span lang="UK">.</span></p>
    <p><span lang="RU">Все результаты сугубо индивидуальны и зависят от особенностей организма.</span></p>
    <p><span lang="RU">&nbsp;</span></p>
    <p><strong><span lang="RU" style="font-size: 12pt;">Доставка:</span></strong></p>
    <p><span lang="RU">Наша компания осуществляет доставку по всему миру.</span></p>
    <p dir="ltr" style="text-align: center;"><img src="https://ua.all.biz/img/ua/catalog/article/1379773/17988805/a0070f24cb.png" alt="" width="625" height="334" /></p>
    <p><span lang="RU">Вы можете оформить заказ с доставкой в одну из этих стран:</span></p>
    <p>
      <span lang="RU">
        Австралия, Австрия, Азербайджан, Албания, Алжир, Ангола, Андорра, Антигуа и Барбуда,
        Аргентина, Армения, Афганистан, Багамские Острова, Бангладеш, Барбадос, Бахрейн, Беларусь,
        Белиз, Бельгия, Бенин, Болгария, Боливия, Босния и Герцеговина, Ботсвана, Бразилия,
        Бруней - Даруссалам, Буркина - Фасо, Бурунди, Бутан, Бывшая югославская Республика Македония,
        Вануату, Венгрия, Венесуэла, Вьетнам, Габон, Гаити, Гайана, Гамбия, Гана, Гватемала, Гвинея,
        Гвинея - Бисау, Германия, Гондурас, Гренада, Греция, Грузия, Дания, Демократическая Республика Конго,
        Джибути, Доминика, Доминиканская Республика, Египет, Замбия, Зимбабве, Израиль, Индия,
        Индонезия, Иордания, Ирак, Иран, Ирландия, Исландия, Испания, Италия, Йемен, Кабо - Верде,
        Казахстан, Камбоджа, Камерун, Канада, Катар, Кения, Кипр, Кирибати, Китай, Колумбия,
        Коморские Острова, Конго, Корейская Народно - Демократическая Республика, Коста - Рика,
        Кот - д'Ивуар, Куба, Кувейт, Кыргызстан, Лаосская Народно - Демократическая Республика, Латвия,
        Лесото, Либерия, Ливан, Ливийская Арабская Джамахирия, Литва, Лихтенштейн, Люксембург, Маврикий,
        Мавритания, Мадагаскар, Малави, Малайзия, Мали, Мальдивские Острова, Мальта, Марокко,
        Маршалловы Острова, Мексика, Микронезия (Федеративные Штаты), Мозамбик, Монако, Монголия,
        Мьянма, Намибия, Науру, Непал, Нигер, Нигерия, Нидерланды, Никарагуа, Новая Зеландия,
        Норвегия, Объединенная Республика Танзания, Объединенные Арабские Эмираты, Оман, Пакистан,
        Палау, Панама, Папуа - Новая Гвинея, Парагвай, Перу, Польша, Португалия, Республика Корея,
        Республика Молдова, Российская Федерация, Руанда, Румыния, Сальвадор, Самоа, Сан - Марино,
        Сан - Томе и Принсипи, Саудовская Аравия, Свазиленд, Сейшельские Острова, Сенегал,
        Сент - Винсент и Гренадины, Сент - Китс и Невис, Сент - Люсия, Сербия и Черногория,
        Сингапур, Сирийская Арабская Республика, Словакия, Словения, Соединенное Королевство Великобритании и Северной Ирландии,
        Соединенные Штаты Америки, Соломоновы Острова, Сомали, Судан, Суринам, Сьерра - Леоне, Таджикистан,
        Таиланд, Тимор - Лешти, Того, Тонга, Тринидад и Тобаго, Тувалу, Тунис, Туркменистан, Турция,
        Уганда, Узбекистан, Украина, Уругвай, Фиджи, Филиппины, Финляндия, Франция, Хорватия,
        Центральноафриканская Республика, Чад, Чешская Республика, Чили, Швейцария, Швеция, Шри - Ланка,
        Эквадор, Экваториальная Гвинея, Эритрея, Эстония, Эфиопия, Южная Африка, Ямайка, Япония.
      </span>
    </p>
    <p><span lang="RU">&nbsp;</span></p>
    <p><span lang="RU">*</span> &nbsp; <span lang="UK">*</span> &nbsp;<span lang="RU">Акционная цена действует при заказе минимального курса.</span></p>
    <p><span lang="RU">Подробности акции у менеджеров</span></p>
    <p><span lang="RU">&nbsp;</span></p>
    <p><span lang="RU">*</span> &nbsp; <span lang="UK">* *</span> &nbsp;<span lang="RU">Знакомясь с образцами продукции, представленными на сайте, необходимо принимать во внимание некоторые моменты, связанные с точностью передачи цвета и внешнего вида продукции. Производитель оставляет за собой право в одностороннем порядке без уведомления потребителя вносить изменения в цветовую отделку и дизайн упаковки, а также изменять форму выпуска. Проверка на соответствие заказанному продукту осуществляется на отделении Новой Почты, в последствии обмен или возврат не принимается.</span></p>

  `
}

export default DescriptionFiller
