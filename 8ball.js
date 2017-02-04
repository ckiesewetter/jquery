
function answer(){
  var ans = "";
  var random = Math.floor(Math.random() * 4);
  console.log(random);
    if(random === 0){
      ans = $("#answer").append(" YES");
    }
    if(random === 1){
       ans = $("#answer").append("No");
    }
    if(random === 2){
       ans = $("#answer").append(" Maybe you should ask Google?");
    }
    if(random === 3){
      ans = $("#answer").append(" Sucks to suck");
    };
  };


$(document).ready(function(){
  $("button").on("click", function() {
//    $("submit").val();
    answer()
  //  $("button").on("click", function(){
      $("#textBar").val("");
//    });
    // $("#answer").append(ans);
  });
});
