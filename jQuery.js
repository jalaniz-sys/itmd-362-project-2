// Creating an object based off of the users input
$(document).ready(function(){
  var people = [], // Creating 'people' object array
    $ins = $('#first_name, #last_name, #username, #phone_number, #prefer_comm, #region, #game_genre'),
    counter = {
      first_name: {},
      last_name: {},
      username: {},
	    phone_number: {},
	    prefer_comm: {},
	    region: {},
	    game_genre: {}
    };
	
// Creating jQuery function for submission 
  $('#submit').click(function() {
    var person = {},
      valid = true;
    $ins.each(function() {
      var val = this.value.trim();
      if (val) {
        person[this.id] = val;
      }
    }); // If submission is valid, add a 'person' object to the 'people' array
    if (valid) {
      people.push(person);
      $ins.val('');

      // Adding a count to the 'people' array
      $.each(person, function(key, value) {
        var count = counter[key][value] || 0;
        counter[key][value] = count + 1;
      });
    }
	
	// Creating jQuery function to display the data, and stringify
	// the JS object into a JSON string
    $('#display_user').click(function() {
    $('p').text(JSON.stringify(people) );
    })
    })
  });

var conta = document.getElementsByClassName("chivecc");
var i;

for (i = 0; i < conta.length; i++) {
  conta[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var x = this.nextElementSibling;
    if (innerSect.style.display === "block"){
      innerSect.style.display = "none";
    } else {
      innerSect.style.display = "block";;
    }
  });
}
