// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZqQkMxlQWIktbgz7ocCaa7j7arwy31Lc",
    authDomain: "emplo-90681.firebaseapp.com",
    databaseURL: "https://emplo-90681.firebaseio.com",
    projectId: "emplo-90681",
    storageBucket: "",
    messagingSenderId: "674071590354"
  };

    firebase.initializeApp(config);

var database = firebase.database();
var employeeTestName;
var employeeCount = 0;

//check if any players have joined, listen for any changes
database.ref().on("value", function(snapshot) {
	//if (snapshot.child("player1").exists() && snapshot.child("player2").exists()) {
	employeeTestName = snapshot.val();
	employeeCount = snapshot.val().length;
	console.log(employeeCount);
},function(e){
	console.log(e);
});


$(document).ready(function(){
    $("#enterBtn").on("click", function(event)
    {
      event.preventDefault();


      var name = $("#name").val().trim();
      var role = $("#role").val().trim();
      var startDate = $("#startDate").val().trim();
      var monthlyRate = $("#monthlyRate").val().trim();

      console.log(name, role, startDate, monthlyRate);

      var newRow = $("<tr>");

      var newName = $("<td>").text(name);
      var newRole = $("<td>").text(role);
      var newStartDate = $("<td>").text(startDate);
      var newMonthsWorked = $("<td>").text("");
      var newMonthlyRate = $("<td>").text(monthlyRate);
      var newTotalBilled = $("<td>").text("");

      newRow.append(newName);
      newRow.append(newRole);
      newRow.append(newStartDate);
      newRow.append(newMonthsWorked);
      newRow.append(newMonthlyRate);
      newRow.append(newTotalBilled);

      $("tbody").append(newRow);

      $("#role").val("");
      $("#name").val("");
      $("#startDate").val("");
      $("#monthlyRate").val("");

    });

 });

// database.ref('users/' + employeeCount).set({
// 	name: "Leo",
// 	role: "Student",
// 	startDate: "01/01/2000",
// 	rate: "$10"
// })
