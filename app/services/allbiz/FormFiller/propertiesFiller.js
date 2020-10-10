// Fill default properties
class PropertiesFiller {
  task = null

  constructor(task) {
    this.task = task
  }

  call = () => {
    this._chooseRetailPrice()
    this._fillRetailPrice()
    this._chooseExport()
  }

  _chooseRetailPrice = () => $('.js-choose-retail-price').click()
  _fillRetailPrice = () => document.getElementById("prices[retail]").value = '67.00'
  _chooseExport = () => {
    let $checkbox = $('.checkbox input[name="export_is_possible"]')
    if (!$checkbox.is(':checked')) $checkbox.click()
  }
}

export default PropertiesFiller
