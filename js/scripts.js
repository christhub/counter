var countTo = function(multiple, total) {
  var daBank = new Array();

  for(var i =multiple; i <=total; i +=multiple){
    daBank.push(i);
  }

   return daBank;
};

$(document).ready(function() {
  $("form#numberCounter-form").submit(function(event){
    var multiple = parseInt($("input#multiple").val());
    var numberTo = parseInt($("input#count2").val());

    var result = countTo(multiple, numberTo);




    $("#numberCounter-answer").text(result);

    $("#result").show();

    event.preventDefault();

  });
});
