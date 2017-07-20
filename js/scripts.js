//console.log("javascript connected");
//

var answers = ["YES", "NO"];
//
$(document).ready(function()
{
  $("select#question1").append("<option>" + answers[0]+ "</option>")
  $("select#question1").append("<option>" + answers[1]+ "</option>")
  $("select#question2").append("<option>" + answers[0]+ "</option>")
  $("select#question2").append("<option>" + answers[1]+ "</option>")
  $("select#question3").append("<option>" + answers[0]+ "</option>")
  $("select#question3").append("<option>" + answers[1]+ "</option>")
  $("select#question4").append("<option>" + answers[0]+ "</option>")
  $("select#question4").append("<option>" + answers[1]+ "</option>")
  $("select#question5").append("<option>" + answers[0]+ "</option>")
  $("select#question5").append("<option>" + answers[1]+ "</option>")

  $("form").submit(function(event)
  {
   event.preventDefault();

   var fullname = $("input#fullname").val();
   console.log(fullname);
   $("#name").html(fullname);
   $("h5").show();

   var answer1= $("#question1 option:selected").val();
   console.log(answer1);
   if(answer1.toString() === "YES" )
   {
     $("#csharp").show();
   }
   var answer2= $("#question2 option:selected").val();
   console.log(answer1);
   if(answer2.toString() === "YES")
  {
   $("#java").show();
  }
   var answer3= $("#question3 option:selected").val();
   console.log(answer3);
   if(answer3.toString() === "YES")
  {
   $("#android").show();
  }

   var answer4= $("#question4 option:selected").val();
   console.log(answer4);
   if(answer4.toString() === "YES")
  {
   $("#ruby").show();
  }

   var answer5= $("#question5 option:selected").val();
   console.log(answer5);
   if(answer5.toString() === "YES")
  {
   $("#design").show();
  }
});
});
