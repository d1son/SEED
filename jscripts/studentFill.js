$(document).ready(function(){
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');
  var studentList = []
  fbase.on('value',function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });
  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });

  $('#studentFill').on('click',function(){
    fbase.on('value',function(){
      for(i = 0; i < studentList.length; i++){
        var newStudent = $('<div>').append($('<p>').html('Name: ' + studentList[i].name))
        .append($('<p>').html('Email: ' + studentList[i].email))
        .append($('<p>').html('github: ' + studentList[i].github))
        .append($('<p>').html('linkdin: ' + studentList[i].linkdin))
        .append($('<p>').html('stackoverflow: ' + studentList[i].stackoverflow))
        .append($('<p>').html('portfolio: ' + studentList[i].portfolio))
        .append($('<p>').html('facebook: ' + studentList[i].facebook))
        .append($('<p>').html('twitter: ' + studentList[i].twitter))
        .append($('<div>').html('<br>'))
        $('#studentListTest').append(newStudent)
      }
    });
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
    $('#studentFormModal').modal('hide')

  });

  $('#studentForm').on('click', function(){
    $('#studentFormModal').modal('show')
  });
});