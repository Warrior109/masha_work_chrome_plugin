import LanguageTranslator from '../services/allbiz/languageTranslator.js'
import FormFiller from '../services/allbiz/FormFiller/index.js'

window.addEventListener('message', function(event) {
  if (event.data.type === 'TRANSLATE_ON_ALL_LANGUAGES') {
    LanguageTranslator.call()
  } else if (event.data.type === 'FILL_FORM') {
    new FormFiller(event.data.task).call()
  }
})

