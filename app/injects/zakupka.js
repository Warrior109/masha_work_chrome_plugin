import FormFiller from '../services/zakupka/FormFiller/index.js'

window.addEventListener('message', function(event) {
  if (event.data.type === 'FILL_FORM') {
    new FormFiller(event.data.task).call()
  }
})

