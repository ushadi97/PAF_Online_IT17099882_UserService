/**
 * 
 */
function emptyCheck(name,id) {
	var inputValue = document.getElementById(name);
	if (inputValue.value == "" || inputValue.value == null || inputValue.value == " ") {
		id.style.backgroundColor = "red";
	}else{
		id.style.backgroundColor = "";
	}
} 

function emailValidation(email, id) {
	var regExpression =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regExpression.test(email)) {
		id.style.backgroundColor = "red";
		alert("Invalid E-mail")
	}else{
		value.style.backgroundColor = "";
	}
} 

function mobileValidation(phone, id) {
	var regExpression = /^\d{10}$/;
	if (!regExpression.test(phone)) {
		id.style.backgroundColor = "red";
		alert("Invalid Mobile number")
	}else{
		value.style.backgroundColor = "";
	}
} 

function getUserbyEmail(){
	jQuery.ajax({
		url: "localhost:8080/user/getUserByEmail/"+ $("#email").val(),
		type: "GET",
		contentType: "application/json",
		dataType: "json",
		success: function(data, textStatus, errorThrown){
			$("#name").text(data.name);
			$("#address").text(data.address);
			$("#tel").text(data.tel);
			$("#email").text(data.email);
			$("#uname").text(data.uname);
		},
		error: function(jqXHR, textStatus, errorThrown){
			$("#name").textStatus("Sorry! User not found!.");
		},
		timeout: 10000
	})
}

function deleteUser(){
	jQuery.ajax({
		url: "localhost:8080/user/getUserByEmail/"+ $("#user_id").val(),
		type: "DELETE",
		contentType: "application/json",
		dataType: "json",
		success: function(data, textStatus, errorThrown){

		},
		error: function(jqXHR, textStatus, errorThrown){

		},
		timeout: 10000
	})
}

function addUser(){
	jQuery.ajax({
		url: "localhost:8080/user/addUser",
		type: "POST",
		data: {"name": $("#name").val(),
			"address": $("#address").val(),
			"tel": $("#tel").val(),
			"email": $("#email").val(),
			"uname": $("#uname").val(),
			"pw": $("#password").val()
		},
		contentType: "application/json",
		dataType: "json",
		success: function(data, textStatus, errorThrown){
			$("#result").text("User added.");
		},
		error: function(jqXHR, textStatus, errorThrown){
			$("#result").text("Sorry! User is not added!");
		},
		timeout: 10000
	})
}

function updateUser(){
	jQuery.ajax({
		url: "localhost:8080/user/updateUser",
		type: "PUT",
		data: {"name": $("#name").val(),
			"address": $("#address").val(),
			"tel": $("#tel").val(),
			"email": $("#email").val(),
			"uname": $("#uname").val(),
			"pw": $("#password").val()
		},
		contentType: "application/json",
		dataType: "json",
		success: function(data, textStatus, errorThrown){
			$("#result").text("User updated!.");
		},
		error: function(jqXHR, textStatus, errorThrown){
			$("#result").text("Sorry! User is not updated!");
		},
		timeout: 10000
	})
}