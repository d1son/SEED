$(document).ready(function(){
  var studentList
  $('#submit').on('click', function(e){
    e.preventDefault()
    var name = $('#name').val()
    var email = $('#email').val()
    var github = $('#github').val()
    var linkdin = $('#linkdin').val()
    var stackoverflow = $('#stackoverflow').val()
    var portfolio = $('#portfolio').val()
    var facebook = $('#facebook').val()
    var twitter = $('#twitter').val()
    var student = {
      "name": name,
      "email": email,
      "github": github,
      "linkdin": linkdin,
      "stackoverflow": stackoverflow,
      "portfolio": portfolio,
      "facebook": facebook,
      "twitter": twitter   
      }
    console.log(student)
  });
});