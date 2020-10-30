//Business or back-end logic:
function Entry (){
  this.titles = [];
  this.body = [];
}

Entry.prototype.addEntry = function(title,body) {
  this.titles.push(title);
  this.body.push(body);
}
