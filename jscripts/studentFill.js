$(document).ready(function(){
//HIDE
  $('#studentList').hide()
  $('#studentMoreInfo').hide()
  $('#studentPage').hide()
  $('#employerSection').hide()
  $('.filter').hide()
  $('.studentSectionNavBar').hide()
  $('#footer').hide()

//EventListeners
  $('#student-employee').on('click', function(e){
    e.preventDefault()
    $('#studentPage').show()
    $('#studentList').show()
    $('.filter').show()
    fillStudentList()
  });
  $('#employerNavBar').on('click', function(){

  });
  $('#contactNavBar').on('click', function(){

  });
  $('#addStudent').on('click', function(){
    $('#studentFormModal').modal('show')
  });
  $('#submitForm').on('click', createNewStudent)
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');
  window.studentList = []
  var newStudent
  var githubPicture
//Populate studentList
  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });

//Dynamically Create students
  function fillStudentList(){
    var githubUsername = ""
    var studentInfo
    arrayIndex = 0
      for(i = 0; i < studentList.length; i++){
        createStudentDisplay(studentList[i])
      }
  };

  
  function createStudentDisplay(studentInfo){
    var expertiseDisplay = ""
    if(studentInfo.expertise.javascript === true){
      expertiseDisplay += "Javascript "
    }
    if(studentInfo.expertise.jquery === true){
      expertiseDisplay += "Jquery "
    }
    if(studentInfo.expertise.node.js === true){
      expertiseDisplay += "Node.js "
    }
    if(studentInfo.expertise.express === true){
      expertiseDisplay += "Express "
    }
    if(studentInfo.expertise.html5 === true){
      expertiseDisplay += "HTML5/CSS3 "
    }
    if(studentInfo.expertise.bootstrap === true){
      expertiseDisplay += "Bootstrap "
    }
    if(studentInfo.expertise.git === true){
      expertiseDisplay += "Git "
    }
    if(studentInfo.expertise.angular.js === true){
      expertiseDisplay += "Angular.js "
    }
    if(studentInfo.expertise.lodash === true){
      expertiseDisplay += "Lodash "
    }
    if(studentInfo.expertise.json === true){
      expertiseDisplay += "JSON/API "
    }
    if(studentInfo.expertise.restful === true){
      expertiseDisplay += "RESTful API "
    }
    if(studentInfo.expertise.firebase === true){
      expertiseDisplay += "Firebase "
    }
    if(studentInfo.expertise.mysql === true){
      expertiseDisplay += "MySQL "
    }
    if(studentInfo.expertise.ajax === true){
      expertiseDisplay += "Ajax "
    }
    if(studentInfo.expertise.trello === true){
      expertiseDisplay += "Trello "
    }
    $('.moreStudentInfo').off()
    newStudent = $('<div>').addClass('col-md-4')
      .append($('<div>').addClass('row')
        .append($('<div>').addClass('col-md-4')
          .append($("<img>").attr('src', studentInfo.githubProfilePicture).addClass('studentPicture')))
        .append($('<div>').addClass('col-md-8')
          .append($("<h3>").html(studentInfo.name))
          .append($("<p>").html(studentInfo.email))))
      .append($('<div>').addClass('row')
        .append($('<div>').addClass('col-md-8')
          .append($('<div>').html(expertiseDisplay)))
        .append($('<div>').addClass('col-md-4')
          .append($("<button>").html('More Info').attr('type','button').addClass("btn-sm btn-info moreStudentInfo").attr('data-name', studentInfo.name))))
    $('#studentList').append(newStudent)
    $('.moreStudentInfo').on('click', moreInfoButton)

  }

  function moreInfoButton() {
    var student = $(this).attr('data-name')
    $('#studentList').hide()
    $('#studentMoreInfo').show()
    for(i = 0; i < studentList.length; i++){
      if(student === studentList[i].name){
        student = studentList[i]
      }
    }
    $('#githubButton').attr('data-giturl', student.github)
  }

//New Student 
  function createNewStudent(e){
    e.preventDefault()
    var githubProfilePicture
    var name = $('#name').val()
    var email = $('#email').val()
    var github = $('#github').val()
    var linkedin = $('#linkedin').val()
    var stackoverflow = $('#stackoverflow').val()
    var portfolio = $('#portfolio').val()
    var facebook = $('#facebook').val()
    var twitter = $('#twitter').val()
    var expertiseArray = []
    githubUsername = github.slice((github.lastIndexOf('/') + 1),github.length)
    $('.expertiseCheckboxs').each(function(){
      if($(this).prop('checked')){
        expertiseArray.push($(this).attr('id'))
      }
    });
    $.ajax({
      type: 'GET',
      url: "https://api.github.com/users/" + githubUsername,
      success: function (user){
        githubProfilePicture = user.avatar_url
      }

      })
    .done(function(){
      var student = {
        "name": name,
        "email": email,
        "github": github,
        "githubProfilePicture": githubProfilePicture,
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

  };

});
