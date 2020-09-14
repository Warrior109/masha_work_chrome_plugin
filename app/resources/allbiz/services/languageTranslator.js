let LanguageTranslator = {
  call: function () {
    this.translateAllLanguages();
  },

  // Private

  translateAllLanguages: function () {
    this.translateOneLanguage(this.translateAllLanguages.bind(this));
  },

  translateOneLanguage: function (afterTranslateCallback) {
    this.openLanguagePopup();
    let descriptionBeforeTranslate = $('#js-sourcePopUpDescription').text();
    if (this.selectLanguage()) {
      this.saveTranslate(descriptionBeforeTranslate, afterTranslateCallback);
    } else {
      this.closeLanguagePopup();
    }
  },

  openLanguagePopup: function () {
    $('.js-fancyboxAutoTranslatePopUpOpener').click();
  },

  // Select language to translate
  // If returns undefined - no any language which we could to select
  selectLanguage: function () {
    let $select = $('#js-selectLng');
    let languageId = $select.find('option:not([style="display: none;"])').eq(1).val();
    if (languageId) {
      $select.val(languageId);
      $select.trigger('change')
      return languageId;
    } else {
      return false;
    }
  },

  saveTranslate: function (descriptionBeforeTranslate, afterSaveCallback) {
    let $iframe = $('.js-gTranslateIframe');
    let $saveBtn = $('#js-saveTranslateBtn');
    let scrollFromTop = 0;

    let waiter = () => {
      let $contentContainer = $iframe.contents().find('#js-contentContainer')
      if (!$contentContainer.length) return setTimeout(waiter, 100);

      let scrollHeight = $contentContainer[0].scrollHeight;

      if (descriptionBeforeTranslate === $contentContainer.text()) {
        setTimeout(waiter, 100);
      } else if (scrollFromTop < scrollHeight){
        scrollFromTop = scrollFromTop + 200;
        $contentContainer.scrollTop(scrollFromTop);
        setTimeout(waiter, 100);
      } else {
        $saveBtn.click();
        if (afterSaveCallback) afterSaveCallback();
      }
    };
    setTimeout(waiter, 200);
  },

  closeLanguagePopup: function () {
    setTimeout(() => $('.fancybox-close').click(), 500)
  },
};

export default LanguageTranslator;
