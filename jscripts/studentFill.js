$(document).ready(function(){
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');
  var studentList = []
  fbase.on('value',function(snapshot){
    studentList[studentList.length] = snapshot.val()
    console.log(studentList)
    console.log(snapshot.val())
  });
  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });
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