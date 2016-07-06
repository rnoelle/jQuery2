$(document).ready(function () {
  var listo = [];
  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  };
  var addTask = function (task) {
    if(task) {
      task = new Task(task);
        listo.push(task);

        $('#newItemInput').val('');
        $('#newList').append(
          '<a href="#finish" class="" id="item">' +
          
        )
    }
  }
});
