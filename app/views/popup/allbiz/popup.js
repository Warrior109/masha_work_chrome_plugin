const TemplatesPage = {
  load: function (tasks, callback) {
    let tasksForToday = this.selectTasksForToday(tasks);
    let tasksHtml = this.renderTasks(tasksForToday);
    this.container().find('tbody').append(tasksHtml);
    if (callback) callback().bind(this);
  },

  show: function() {
    this.mainMenu().hide();
    this.container().show();
  },

  hide: function() {
    this.container().hide();
    this.mainMenu().show();
  },

  selectTasksForToday: function (tasks) {
    let taskDate;
    let currentDate = this.dateToTasksDateFormat(new Date());
    return tasks.filter((task) => {
      taskDate = task[0] ? task[0] : taskDate;
      return taskDate == currentDate && task.length;
    });
  },

  dateToTasksDateFormat: (date) => {
    let day = ('0' + (date.getDate() + 1)).slice(-2)
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    return day + '.' + month;
  },

  renderTasks: function(tasks) {
    let template = this.taskTemplate();
    let taskHTML;
    return tasks.map((task) => {
      taskHTML = template.clone();
      taskHTML.find('.name').text(task[1]);
      taskHTML.find('.type').text(task[2]);
      taskHTML.find('.portal').text(task[4]);
      return taskHTML;
    });
  },

  taskTemplate: () => {
    let item = $('#task-row-template');
    item.removeAttr('id');
    return item;
  },
  container: () => $('#templates-tab'),
  mainMenu: () => $('#main-menu'),
};

$('#translate-all-languages').on('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {type: 'translate_all_languages'});
  });
});

$('#fill-by-template').on('click', function() {
  chrome.runtime.sendMessage({type: 'fill_by_template'}, function (tasks) {
    TemplatesPage.load(tasks, TemplatesPage.show)
  });
});

$('#back-to-menu').on('click', TemplatesPage.hide.bind(TemplatesPage));
