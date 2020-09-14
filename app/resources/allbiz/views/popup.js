document.getElementById('translate-all-languages').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "translate_all_languages"});
  });
});

