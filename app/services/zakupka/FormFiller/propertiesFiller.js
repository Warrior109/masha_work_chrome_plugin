// Fill default properties
class PropertiesFiller {
  task = null

  constructor(task) {
    this.task = task
  }

  call = () => {
    this._chooseType()
    this._setPrice()
    this._applyMinPrice()
    this._choosePresence()
  }

  _chooseType = () => $('.ui-buttonset .product-type-t').click()
  _setPrice = () => {
    let $input = $('#price')
    $input.val(129)
    price_($input[0])
  }
  _applyMinPrice = () => $('#min_price').click()
  _choosePresence = () => $('#presence label[for="presence1"]').click()
}

export default PropertiesFiller
