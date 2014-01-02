/* 

 author   : Eray ARSLAN
 web      : erayarslan.com
 twitter  : @eryarslan
 facebook : fb.com/eryarslan
 github   : github.com/erayarslan

*/

// current web page message listener
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    document.activeElement.value=message;
});