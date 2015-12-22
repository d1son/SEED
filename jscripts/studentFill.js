$(document).ready(function(){
  var fbase = new Firebase('https://incandescent-heat-4625.firebaseio.com/');
  var studentList = []
  var newStudent
  var githubPicture
  var arrayIndex
//Populate studentList
  fbase.on("child_added", function(snapshot){
    studentList[studentList.length] = snapshot.val()
  });
//Dynamically Create students
  $('#studentFill').on('click',function(){
    var githubUsername = ""
    var studentInfo
    arrayIndex = 0
      for(i = 0; i < studentList.length; i++){
        githubUsername = studentList[i].github
        githubUsername = githubUsername.slice((githubUsername.lastIndexOf('/') + 1),githubUsername.length)
        getGithubPicture(githubUsername,studentList[i])
      }
  });
  function getGithubPicture(url, info){
    $.ajax({
      type: 'GET',
      url: "https://api.github.com/users/" + url,
      success: function (user){
        githubPicture = user.avatar_url
      }

      }).done(function(){
        createStudentDisplay(githubPicture, info)
    })
  }

  function createStudentDisplay(picture, studentInfo){
console.log(studentInfo)
    newStudent = $('<div>').addClass('col-md-4')
      .append($("<img>").attr('src', picture).addClass('studentPicture'))
      .append($("<p>").html(studentInfo.name))
      .append($("<p>").html(studentInfo.email))
      .append($("<button>").html('More Info').attr('type','button').addClass("btn-sm btn-info moreStudentInfo"))
      $('#studentList').append(newStudent)
}
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





        // <div class="col-md-1">
        //   <img src="images/StevenBuller_cropped.jpg" class="studentImages">
        // </div>
        // <div class="col-md-3">  
        //   <ul>
        //     <li><h5>Steven Buller</h5></li>
        //     <li>HTML5</li>
        //   </ul>
        //     <button type="button" class="btn-sm btn-info" id="moreStudentInfo">More Info</button>
        // </div>
        // <div class="col-md-1">
        //   <img src="images/DongSon.jpg" class="studentImages">
        // </div>
        // <div class="col-md-3">  
        //   <ul>
        //     <li><h5>Dong Son</h5></li>
        //     <li>CSS</li>
        //   </ul>
        //   <button type="button" class="btn-sm btn-info" id="moreStudentInfo">More Info</button>
        // </div>
        // <div class="col-md-1">
        //   <img src="images/DongHoonKim.jpg" class="studentImages">
        // </div>
        // <div class="col-md-3">  
        //   <ul>
        //     <li><h5>Dong Hoon Kim</h5></li>
        //     <li>Bootstrap</li>
        //   </ul>
        //   <button type="button" class="btn-sm btn-info" id="moreStudentInfo">More Info</button>
        // </div