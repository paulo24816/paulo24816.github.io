"use strict";
const names = [];
let phones = [];

$(() => {
  //add button
  $("#add").click(() => {
    const n = $("#name").val();
    const p = parseFloat($("#phone").val());

    names[names.length] = n;
    phones[phones.length] = p;
    displayAdd();

  });
  // display function
  const displayAdd = () => {

    let resultPhone = "<label>Phone book:</label><br><br>";

    for (let i = 0; i < names.length; i++) {

      resultPhone += "<label>" + names[i] + " : " + phones[i] + "</label><br>";

    }
    $("#output").html(resultPhone);
    $("#name").val("");
    $("#phone").val("");
    $("#name").focus();

  };
  //search button
  $("#search").click(() => {

    const target = $("#target").val();
    let found = false;

    if (target != "") {
      let result = "<label>Search results:</label><br><br>";

      for (var i in names) {

        if (names[i].toUpperCase().includes(target.toUpperCase())) {

          found = true;
          result += "<label>" + names[i] + " : " + phones[i] + "</label><br>";
        }

      }
      if (found) {
        $("#output").html("");
        $("#output").html(result);

      } else {
        alert("Not found");
      }

      $("#target").val("");
      $("#target").focus();
    } else {
      alert("Please enter a search term.")
    }

  });

  $("#clear").click(() => {

    names.length = 0;
    phones.length = 0;
    $("#output").html("");

    
  });

});