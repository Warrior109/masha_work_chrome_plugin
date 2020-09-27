import MainPage from './mainPage.js'
import TasksPage from './tasksPage.js'
import TaskConfigurationPage from './taskConfigurationPage.js'

export const PAGES = {
  main: MainPage,
  tasks: TasksPage,
  taskConfiguration: TaskConfigurationPage
}

export const ALL_TEMPLATES = {
  drops: [
    "Капли_Алкоголизм_ШАБЛОН.txt",
    "Капли_Аллергия_ШАБЛОН.txt",
    "Капли_Бодрость_и_энергия_ШАБЛОН.txt",
    "Капли_Варикоз_ШАБЛОН.txt",
    "Капли_Возбуждение_женское_ШАБЛОН.txt",
    "Капли_Возбуждение_мужчин_ШАБЛОН.txt",
    "Капли_Волосы_ШАБЛОН.txt",
    "Капли_Гастрит_ШАБЛОН.txt",
    "Капли_Геморрой_ШАБЛОН.txt",
    "Капли_Гипергидроз_ШАБЛОН.txt",
    "Капли_Гипертония_ШАБЛОН.txt",
    "Капли_Грибок_ШАБЛОН.txt",
    "Капли_Дефицит_йода_в_организме_ШАБЛОН.txt",
    "Капли_Диабет_ШАБЛОН.txt",
    "Капли_Дыхательные_пути_ШАБЛОН.txt",
    "Капли_Желудок_ШАБЛОН.txt",
    "Капли_Женская_репродуктивная_система_ШАБЛОН.txt",
    "Капли_Женское_здоровье_ШАБЛОН.txt",
    "Капли_Загар_ШАБЛОН.txt",
    "Капли_Запах_изо_рта_ШАБЛОН.txt",
    "Капли_Зрение_ШАБЛОН.txt",
    "Капли_Иммунитет_ШАБЛОН.txt",
    "Капли_Кишечник_Пищеварение_ШАБЛОН.txt",
    "Капли_Кожа_ШАБЛОН.txt",
    "Капли_Курение_ШАБЛОН.txt",
    "Капли_Молочница_ШАБЛОН.txt",
    "Капли_Мочевой_ШАБЛОН.txt",
    "Капли_Мужская_репродуктивная_система_ШАБЛОН.txt",
    "Капли_Нервная_система_ШАБЛОН.txt",
    "Капли_Обмен_веществ_ШАБЛОН.txt",
    "Капли_Омолоение_организма_ШАБЛОН.txt",
    "Капли_Память_Мозговая_активность_ШАБЛОН.txt",
    "Капли_Панкреатит_Поджелудочная_ШАБЛОН.txt",
    "Капли_Папилломы_ШАБЛОН.txt",
    "Капли_Паразиты_ШАБЛОН.txt",
    "Капли_Печень_ШАБЛОН.txt",
    "Капли_Потенция_ШАБЛОН.txt",
    "Капли_Похудение_ШАБЛОН.txt",
    "Капли_Почки_ШАБЛОН.txt",
    "Капли_Простатит_ШАБЛОН.txt",
    "Капли_Псориаз_ШАБЛОН.txt",
    "Капли_Ревматизм_ШАБЛОН.txt",
    "Капли_Сердце_Сосуды_ШАБЛОН.txt",
    "Капли_Слух_ШАБЛОН.txt",
    "Капли_Суставы_ШАБЛОН.txt",
    "Капли_Тестостерон_Рост_мышц_ШАБЛОН.txt",
    "Капли_Увеличение_груди_ШАБЛОН.txt",
    "Капли_Увеличение_члена_ШАБЛОН.txt",
    "Капли_Холестерин_ШАБЛОН.txt",
    "Капли_Храп_ШАБЛОН.txt",
    "Капли_Целлюлит_ШАБЛОН.txt",
    "Капли_Шлаки_Токсины_ШАБЛОН.txt",
    "Капли_Эндокринная_система_Щитовидка_ШАБЛОН.txt"
  ],

  capsules: [
    "Капсулы_Алкоголизм_ШАБЛОН.txt",
    "Капсулы_Аллергия_ШАБЛОН.txt",
    "Капсулы_Анемия_ШАБЛОН.txt",
    "Капсулы_Бодрость_и_энергия_ШАБЛОН.txt",
    "Капсулы_Варикоз_ШАБЛОН.txt",
    "Капсулы_Возбуждение_женское_ШАБЛОН.txt",
    "Капсулы_Возбуждение_мужчин_ШАБЛОН.txt",
    "Капсулы_Волосы_ШАБЛОН.txt",
    "Капсулы_Гастрит_ШАБЛОН.txt",
    "Капсулы_Геморрой_ШАБЛОН.txt",
    "Капсулы_Гипергидроз_ШАБЛОН.txt",
    "Капсулы_Гипертония_ШАБЛОН.txt",
    "Капсулы_Грибок_ШАБЛОН.txt",
    "Капсулы_Диабет_ШАБЛОН.txt",
    "Капсулы_Дыхательные_пути_ШАБЛОН.txt",
    "Капсулы_Желудок_ШАБЛОН.txt",
    "Капсулы_Женская_репродуктивная_система_ШАБЛОН.txt",
    "Капсулы_Женское_здоровье_ШАБЛОН.txt",
    "Капсулы_Загар_ШАБЛОН.txt",
    "Капсулы_Запах_изо_рта_ШАБЛОН.txt",
    "Капсулы_Зрение_ШАБЛОН.txt",
    "Капсулы_Иммунитет_ШАБЛОН.txt",
    "Капсулы_Кишечник_Пищеварение_ШАБЛОН.txt",
    "Капсулы_Кожа_ШАБЛОН.txt",
    "Капсулы_Курение_ШАБЛОН.txt",
    "Капсулы_Молочница_ШАБЛОН.txt",
    "Капсулы_Мочевой_ШАБЛОН.txt",
    "Капсулы_Мужская_репродуктивная_система_ШАБЛОН.txt",
    "Капсулы_Нервная_система_ШАБЛОН.txt",
    "Капсулы_Обмен_веществ_ШАБЛОН.txt",
    "Капсулы_Омоложение_организма_ШАБЛОН.txt",
    "Капсулы_Память_Мозговая_активность_ШАБЛОН.txt",
    "Капсулы_Папилломы_ШАБЛОН.txt",
    "Капсулы_Паразиты_ШАБЛОН.txt",
    "Капсулы_Печень_ШАБЛОН.txt",
    "Капсулы_Поджелудочная_Панкреатит_ШАБЛОН.txt",
    "Капсулы_Потенция_ШАБЛОН.txt",
    "Капсулы_Похудение_ШАБЛОН.txt",
    "Капсулы_Почки_ШАБЛОН.txt",
    "Капсулы_Простатит_ШАБЛОН.txt",
    "Капсулы_Псориаз_ШАБЛОН.txt",
    "Капсулы_Ревматизм_ШАБЛОН.txt",
    "Капсулы_Роста_человека_ШАБЛОН.txt",
    "Капсулы_Седые_волосы_ШАБЛОН.txt",
    "Капсулы_Сердце_Сосуды_ШАБЛОН.txt",
    "Капсулы_Слух_ШАБЛОН.txt",
    "Капсулы_Суставы_ШАБЛОН.txt",
    "Капсулы_Тестостерон_и_Рост_мышц_ШАБЛОН.txt",
    "Капсулы_Увеличение_груди_ШАБЛОН.txt",
    "Капсулы_Увеличение_члена_ШАБЛОН.txt",
    "Капсулы_Холестерин_ШАБЛОН.txt",
    "Капсулы_Храп_ШАБЛОН.txt",
    "Капсулы_Целлюлит_ШАБЛОН.txt",
    "Капсулы_Шлаки_Токсины_ШАБЛОН.txt",
    "Капсулы_Эндокринная_система_ШАБЛОН.txt"
  ],

  creams: [
    "Крем_Варикоз_ШАБЛОН.txt",
    "Крем_Геморрой_ШАБЛОН.txt",
    "Крем_Грибок_ШАБЛОН.txt",
    "Крем_Депиляция_ШАБЛОН.txt",
    "Крем_Квеличение_груди_ШАБЛОН.txt",
    "Крем_Омоложение_Пигментация_Темные_круги_ШАБЛОН.txt",
    "Крем_Отбеливание_интимных_зон_ШАБЛОН.txt",
    "Крем_Папилломы_ШАБЛОН.txt",
    "Крем_Потенция_ШАБЛОН.txt",
    "Крем_Прыщи_ШАБЛОН.txt",
    "Крем_Псориаз_ШАБЛОН.txt",
    "Крем_Сужение_влагалища_ШАБЛОН.txt",
    "Крем_Суставы_ШАБЛОН.txt",
    "Крем_Увеличение_члена_ШАБЛОН.txt",
    "Крем_Целлюлит_Похудение_ШАБЛОН.txt"
  ],

  sprays: [
    "Спрей_Продление_полового_акта_ШАБЛОН.txt",
    "Спрей_Рост_мышечной_массы_ШАБЛОН.txt",
    "Спрей_Феромоны_ШАБЛОН.txt",
    "Спрей_для_волос_ШАБЛОН.txt",
    "Спрей_для_роста_бороды_ШАБЛОН.txt"
  ],

  other: [
    "Активатор_клева_ШАБЛОН.txt",
    "Маска_Волосы_ШАБЛОН.txt",
    "Скраб_для_тела_ШАБЛОН.txt",
    "Удобрения_ШАБЛОН.txt",
    "Шампунь_ШАБЛОН.txt"
  ]
}

export const TEMPLATES_OPTION_GROUP_LABELS = {
  drops: 'Каплі',
  capsules: 'Капсули',
  creams: 'Креми',
  sprays: 'Спреї',
  other: 'Інше'
}
