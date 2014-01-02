/* 

 author   : Eray ARSLAN
 web      : erayarslan.com
 twitter  : @eryarslan
 facebook : fb.com/eryarslan
 github   : github.com/erayarslan

*/

// Check Exist Email & Password (Local Storage)
function localStorageCheck() {
  if(!localStorage.email || !localStorage.password) {
      alert("Please login Shared Clipboard system!");
      chrome.tabs.create({
        url: chrome.extension.getURL("options.html")
      });
      return false;
  } else {
      r = checkLogin(localStorage.email,localStorage.password);
      if(r.error) {
        alert(r.error.text)
        chrome.tabs.create({
          url: chrome.extension.getURL("options.html")
        });
        return false;
      } else {
        return true;
      }
  } 
}


// Right Click - Copy Function
var itemCopy = chrome.contextMenus.create({
  "title"     : "Shared Copy",
  "contexts"  : ["selection"],
  "onclick"   : function f(data) {
    if(localStorageCheck()) {
      r = saveClipboard(data.selectionText);
      if(r.error) {
        // on error
        alert(r.error.text);
      } else {
        alert("Kopyalandı!");
      }
    }
  }
});

// Right Click - Paste Function
var itemPaste = chrome.contextMenus.create({
  "title"     : "Shared Paste",
  "contexts"  : ["editable"],
  "onclick"   : function f(info,tab){
    if(localStorageCheck()) {
      r = getClipboard();
      if(r.error) {
        // on error
        alert(r.error.text);
      } else {
        // send paste text main.js message listener
        chrome.tabs.sendMessage(tab.id, r.result.text);
      }
    }    
  }
});