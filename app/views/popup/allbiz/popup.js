const TemmplatesPage = {
  show: function (tasks) {
    let tasksForToday = this.selectTasksForToday(tasks)
    console.log(tasksForToday)
  },

  selectTasksForToday: function (tasks) {
    let taskDate;
    let currentDate = this.dateToTasksDateFormat(new Date());
    return tasks.filter((task) => {
      taskDate = task[0] ? task[0] : taskDate;
      return taskDate == currentDate;
    });
  },

  dateToTasksDateFormat: (date) => {
    let day = ('0' + (date.getDate() + 1)).slice(-2)
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    return day + '.' + month;
  },
  container: () => $('#templates-tab'),
};

$('#translate-all-languages').on('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {type: 'translate_all_languages'});
  });
});

$('#fill-by-template').on('click', function() {
  chrome.runtime.sendMessage({type: 'fill_by_template'}, function (tasks) {
    TemmplatesPage.show(tasks)
  });
});
