$(document).ready(function(){
  var githubUsername
  var githubCommitArray = []
  var commitLengthHigh = 10
  var commitLengthLow = 0
  var totalCommits

  $('#githubImageLink').on('click', function(){
    $('#githubRepoModal').modal('show')
    githubUsername = $('#githubImageLink').attr('data-giturl')
    githubUsername = githubUsername.slice((githubUsername.lastIndexOf('/') + 1),githubUsername.length)
  //Ajax Repo
    $.ajax({
      type: 'GET',
      url: "https://api.github.com/users/"+githubUsername+"/repos",
      success: function (repos){
        for(var i = 0; i < repos.length; i++){
          $('.list-group').append(getRepos(repos[i]))
        }
      }
    });
  //A links AJAX to fill Table
    $(".list-group").on("click", "a", function(e) {
      githubCommitArray = []
      e.preventDefault();
      $.ajax({
        type: "GET",
        url: $(this).attr("href"),
        success: function(commits) {
          $("tbody").empty();
          for(var i = 0; i < commits.length; i++) {
            githubCommitArray.push(commits[i])
          }
          limitCommits(githubCommitArray)
          $("#totalMessages").html(githubCommitArray.length + 1)
          $("#viewLow").html(commitLengthLow + 1)
          $("#viewHigh").html(commitLengthHigh)

        }
      })
    });
  //Sha on Hover
    $("table").on('mouseenter', '.tableRow', function() {
      var placeHolder = $(this).children('.shaID')
      var hrefLink = $('<a>').html(placeHolder.attr('id')).attr('href', placeHolder.attr('data-commit-href'))
      placeHolder.attr('data-hold',placeHolder.html());
      placeHolder.html("")
      placeHolder.append(hrefLink);
    });
    $("table").on('mouseleave', '.tableRow', function() {
      var placeHolder = $(this).children('.shaID')
      placeHolder.html(placeHolder.attr('data-hold'));
    });
  });

    $('#githubModalPrevious').on('click', function(){
      if(commitLengthLow === 0){

      }
      else{
        $("tbody").empty()
        commitLengthLow -= 10
        commitLengthHigh -= 10
        limitCommits(githubCommitArray)
        $("#viewLow").html(commitLengthLow + 1)
        $("#viewHigh").html(commitLengthHigh)
      }
    });
    $('#githubModalNext').on('click', function(){
        $("tbody").empty()
        commitLengthLow += 10
        commitLengthHigh += 10
        limitCommits(githubCommitArray)
        $("#viewLow").html(commitLengthLow + 1)
        $("#viewHigh").html(commitLengthHigh)
    });

  function getRepos(repoData){

    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";
    var newRepoLink = $('<a>').attr('href', commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.name);
    return newRepoLink;
  }

  function fillTable(repoCommits){
    var newUserName = $('<td>')
      .append(repoCommits.commit.author.name)
      .attr('id', repoCommits.sha)
      .addClass('shaID')
      .attr('data-commit-href', repoCommits.html_url);
    var newDate = $('<td>').append(repoCommits.commit.author.date)
    var newMessage = $('<td>').append(repoCommits.commit.message)

    var newTableRow = $('<tr>').addClass('tableRow').append(newUserName).append(newDate).append(newMessage);

    return newTableRow;
  }
  function limitCommits(commits){
    console.log(commitLengthLow)
    console.log(commitLengthHigh)
    for(var z = commitLengthLow; z < commits.length && z < commitLengthHigh; z++) {
      $("tbody").append(fillTable(commits[z]))

    }
  }
});