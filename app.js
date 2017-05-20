 $(document).ready(function(){
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCY0F96DgCztY6rWJLHdigKNPAYZt4pbNQ",
    authDomain: "employee-timesheet-bbcd7.firebaseapp.com",
    databaseURL: "https://employee-timesheet-bbcd7.firebaseio.com",
    projectId: "employee-timesheet-bbcd7",
    storageBucket: "employee-timesheet-bbcd7.appspot.com",
    messagingSenderId: "710286577551"
  };
  firebase.initializeApp(config);
 
 var database = firebase.database();



 $("#addEmp").on("click", function(event){

 	event.preventDefault();

 	var name = $("#name").val().trim();
 	var role = $("#role").val().trim();
 	var sDate = $("#sDate").val().trim();
 	var rate = $("#rate").val().trim();

 	database.ref().push({
 		name : name,
 		role : role,
 		startDate : sDate,
 		rate : rate

 	});



 });
});