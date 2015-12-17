$(document).ready(function(){
  var studentList = []
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');

  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });

  $('#submitForm').on('click', function(e){
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
    fbase.push(student)
  });
});