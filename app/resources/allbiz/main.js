import LanguageTranslator from './services/languageTranslator.js';

window.addEventListener('message', function(event) {
  if (event.data.type === 'TRANSLATE_ON_ALL_LANGUAGES') {
    LanguageTranslator.call()
  }
});
