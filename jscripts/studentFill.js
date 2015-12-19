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
    var expertiseArray = []
    $('.expertiseCheckboxs').each(function(){
      if($(this).prop('checked')){
        expertiseArray.push($(this).attr('id'))
      }
    });



    var student = {
      "name": name,
      "email": email,
      "github": github,
      "linkedin": linkedin,
      "stackoverflow": stackoverflow,
      "portfolio": portfolio,
      "facebook": facebook,
      "twitter": twitter,
      "expertise" : {
        "javascript": false,
        "jquery": false,
        "node": false,
        "express": false,
        "html5": false,
        "bootstrap": false,
        "git": false,
        "angular": false,
        "lodash": false,
        "json": false,
        "restful": false,
        "firebase": false,
        "mysql": false,
        "ajax": false,
        "trello": false,
      }
    }
    for(i = 0; i < expertiseArray.length; i++){
      console.log(expertiseArray[i])
      switch(expertiseArray[i]){
        case "javascript":
          student.expertise.javascript = true
          break;
        case "jquery":
          student.expertise.jquery = true
          break;
        case "node":
          student.expertise.node.js = true
          break;
        case "express":
          student.expertise.express = true
          break;
        case "html5":
          student.expertise.html5 = true
          break;
        case "bootstrap":
          student.expertise.bootstrap = true
          break;
        case "git":
          student.expertise.git = true
          break;
        case "angular":
          student.expertise.angular.js = true
          break;
        case "lodash":
          student.expertise.lodash = true
          break;
        case "json":
          student.expertise.json = true
          break;
        case "restful":
          student.expertise.restful = true
          break;
        case "firebase":
          student.expertise.firebase = true
          break;
        case "mysql":
          student.expertise.mysql = true
          break;
        case "ajax":
          student.expertise.ajax = true
          break;
        case "trello":
          student.expertise.trello = true
          break;
      }
    }
    fbase.push(student)
    $('#studentFormModal').modal('hide')

  });

  $('#studentForm').on('click', function(){
    $('#studentFormModal').modal('show')
  });
});
