var countTo = function(multiple, total) {
  var daBank = new Array();

  for(var i =multiple; i <=total; i +=multiple){
    daBank.push(i);
  }
   var new_daBank = daBank.join(',');
   alert(daBank);
   return new_daBank;
};

$(document).ready(function() {
  $("form#numberCounter").submit(function(event){
    var multiple = $("input#multiple").val();
    var numberTo = $("input#count2").val();
    //
    // var result = countTo(multiple, numberTo);
    var result = "foo";




    $("#numberCounter").text(result);

    $("#result").show();

    event.preventDefault();

  });
});
