import $ from 'jquery';
import Entry from './scriptsBackendlogic';
import './css/styles.css';


// UI or front end logic
var game1 = new Entry;





$(document).ready(function() {
//  attachContactListeners();

  $("form#details").submit(function(event) {
    event.preventDefault();
    var newTitle = $("input#title").val();
    var newBody = $("input#body").val();
    game1.addEntry(newTitle,newBody);
    $('input#title').val('');
    $('input#body').val('');
  });
});

