"use strict";

$(() => {
//class
  class Package {
    //constructor
    constructor(id, city, state) {
      //properties
      this.id = id;
      this.city = city;
      this.state = state;
    }
    
  }
  //array
  const packages = [
    new Package("0101", "Champaigne", "IL"),
    new Package("0102", "St. Louis", "MO"),
    new Package("0104", "Chicago", "IL"),
    new Package("0105", "Carbondale", "IL"),
    new Package("0106", "Madison", "WI"),
    new Package("0107", "Kansas City", "MO"),
    new Package("0108", "Alton", "IL")
  ];

  let p = 0; //index of current package

  const buttons = () => {
    if (p == packages.length - 1) {
      $("#next").prop("disabled", true);
      $("#last").prop("disabled", true);
    } else {
      $("#next").prop("disabled", false);
      $("#last").prop("disabled", false);
    }
    if (p == 0) {
      $("#first").prop("disabled", true);
      $("#previous").prop("disabled", true);
    } else {
      $("#first").prop("disabled", false);
      $("#previous").prop("disabled", false);
    }

  };

  //display
  let pack; // current package

  const displayPack = () => {
    pack = packages[p];//why this ?????
    buttons();
    $("#pnum").val(p + 1);//index del array mas 1 porque en el array el primer valor es 1
    $("#pid").val(pack.id);
    $("#city").val(pack.city);
    $("#state").val(pack.state);

  };
  //search button
  $("#search").click(() => {
    //i have 
    let out = "<h2>Search Results</h2>";
    out += "ID" + "\t\t\t" + "City" + "\t\t\t" + "State<br>";
    let found = null;
    let target ="";
    target =  $("#target").val();//aqui estaba el error
    //target  = prompt("Search");

    for (let aaPack of packages) {
      if (aaPack.state.toLowerCase() == target.toLowerCase()) {
        found = aaPack;
        out += aaPack.id + "\t\t\t" + aaPack.city + "\t\t\t" + aaPack.state + "<br>";//?????????????how i can do so this looks better 
      } 
    };
    if (found == null){
      alert("Can not find " + target);
      $("#target").val("");//clearing the invalid input 
    }
    $("#output").html(out);


  });
  //first, previous, next, last buttons 
  $("#first").click(() => {
    p = 0;
    displayPack();
  });

  $("#previous").click(() => {
    p -= 1;
    displayPack();
  });
  
  $("#next").click(()=>{
    p += 1;
    displayPack();
  });

  $("#last").click(()=>{
    p = packages.length -1;
    displayPack();
  });


  displayPack();
});
