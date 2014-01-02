/* 

 author   : Eray ARSLAN
 web      : erayarslan.com
 twitter  : @eryarslan
 facebook : fb.com/eryarslan
 github   : github.com/erayarslan

*/

// do login
function checkLogin(email,password) {
  	var result;
  	$.ajax({
        url:'http://erayarslan.com/cbapi/login',
        type:'POST',
        async:false,
        dataType:"json",
        data: {
          	'email'    :email,
          	'password' :password
        },
        success:function (data) {
        	result = data;
        }
    });
    return result;
}

// do paste
function getClipboard() {
  	var result;
  	$.ajax({
        url:'http://erayarslan.com/cbapi/clipboard',
        type:'GET',
        async:false,
        dataType:"json",
        data: {
          	'email'		  :localStorage.email,
          	'password'	:localStorage.password
        },
        success:function (data) {
            result = data;
        }
    });
    return result;
}

// do copy
function saveClipboard(data) {
	var result;
  	$.ajax({
        url:'http://erayarslan.com/cbapi/clipboard',
        type:'POST',
        async:false,
        dataType:"json",
        data: {
          	'email'		:localStorage.email,
          	'password'	:localStorage.password,
          	'data'		:data
        },
        success:function (data) {
            result = data;
        }
    });
    return result;
}