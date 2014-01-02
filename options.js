/* 

 author   : Eray ARSLAN
 web      : erayarslan.com
 twitter  : @eryarslan
 facebook : fb.com/eryarslan
 github   : github.com/erayarslan

*/

var emailTextBox;
var passwordTextBox;

// constructor
function init() {
  	emailTextBox 			= document.getElementById("email");
  	passwordTextBox			= document.getElementById("password");

  	emailTextBox.value 		= localStorage.email || "";
  	passwordTextBox.value 	= localStorage.password || "";
}

// save function
function save() {
	r = checkLogin(emailTextBox.value,passwordTextBox.value);
	if(r.error) {
		$('#result').html(">"+r.error.text);
  	} else {
  		localStorage.email 		= emailTextBox.value;
  		localStorage.password   = passwordTextBox.value;
  		$('#result').html(">OK ;)");
      alert("OK;)");
      chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.remove(tab.id, function() { });
      });
  	}
}

// dom tree listeners
document.addEventListener('DOMContentLoaded', init);
document.querySelector('#save-button').addEventListener('click', save);