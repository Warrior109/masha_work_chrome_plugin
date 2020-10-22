import GApiClient from '../services/gapiClient.js';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'mynew.all.biz',
            pathContains: 'goods_services_management/add/goods'
          },
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'zakupka.com',
            pathContains: 'cabinet/tovary-foto/new'
          },
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'tomas.kz',
            pathContains: 'cabinet/tovary-foto/new'
          },
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'satom.ru',
            pathContains: 'cabinet/tovary-foto/new'
          },
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

window.addEventListener('load', GApiClient.init);

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'loadTasksSheet') {
    GApiClient.loadTasksSheet((values) => {
      sendResponse(values)
    });
    return true;
  }
});
