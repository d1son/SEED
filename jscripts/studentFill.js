$(document).ready(function(){
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');
  var studentList = []
//Populate studentList
  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });
//Dynamically Create students
  $('#studentFill').on('click',function(){
      for(i = 0; i < studentList.length; i++){
        var newStudent = $('<div>')
        .append($('<p>').html('Name: ' + studentList[i].name))
        .append($('<p>').html('Email: ' + studentList[i].email))
        .append($('<a>').html('github ').attr('href', studentList[i].github))
        .append($('<a>').html('linkedin ').attr('href', studentList[i].linkedin))
        .append($('<a>').html('stackoverflow ').attr('href', studentList[i].stackoverflow))
        .append($('<a>').html('portfolio ').attr('href', studentList[i].portfolio))
        .append($('<a>').html('facebook ').attr('href', studentList[i].facebook))
        .append($('<a>').html('twitter ').attr('href', studentList[i].twitter))
        .append($('<div>').html('<br>'))
        $('#studentListTest').append(newStudent)
      }
  });
//New Student 
  $('#submitForm').on('click', function(e){
    e.preventDefault()
    var name = $('#name').val()
    var email = $('#email').val()
    var github = $('#github').val()
    var linkedin = $('#linkedin').val()
    var stackoverflow = $('#stackoverflow').val()
    var portfolio = $('#portfolio').val()
    var facebook = $('#facebook').val()
    var twitter = $('#twitter').val()
    var student = {
      "name": name,
      "email": email,
      "github": github,
      "linkedin": linkedin,
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