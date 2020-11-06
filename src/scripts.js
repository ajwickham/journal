function Entry (){
  this.titles = [];
  this.body = [];
}


Entry.prototype.addEntry = function(title,body) {
this.titles.push(title);
this.body.push(body);
}

// UI or front end logic
var game1 = new Entry;





$(document).ready(function() {
//  attachContactListeners();

  $("form#details").submit(function(event) {
    event.preventDefault();
    debugger
    var newTitle = $("input#title").val();
    var newBody = $("input#body").val();
    game1.addEntry(newTitle,newBody);
    $('input#title').val('');
    $('input#body').val('');
  });
});

