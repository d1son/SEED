$(document).ready(function(){


  $("#submitCompanySearch").on("click", function(e) {
    e.preventDefault();
    //alert("glassdoor company submit button working")

    var business = $("#searchCompany").val().trim();
    var businessLocation = $("#searchCompanyLocation").val().trim();
    var jobTitle = $("#searchJob").val().trim();

    var urlSearchCompany = "https://api.glassdoor.com/api/api.htm?t.p=51262&t.k=etldXOKl8dW&userip=0.0.0.0&useragent=&format=json&v=1&action=employers";
    urlSearchCompany = urlSearchCompany + "&q=";
    urlSearchCompany = urlSearchCompany + business;
    urlSearchCompany = urlSearchCompany + "&l=";
    urlSearchCompany = urlSearchCompany + businessLocation;
    console.log(urlSearchCompany);

    $.ajax({
      type: "GET",
      url: urlSearchCompany,
      //url: "https://api.glassdoor.com/api/api.htm?t.p=51262&t.k=etldXOKl8dW&userip=0.0.0.0&useragent=&format=json&v=1&action=employers",
      dataType: "jsonp",

      success: function(glassdoorData){
        //alert("glassdoor submit get request working");
        for (var i = 0; i < 3; i++) {
          var employerSectionNumber = (i + 1)
          $("#getCompanyImage" + employerSectionNumber.toString()).attr("src", glassdoorData.response.employers[i].squareLogo);
          $("#getCompanyName" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].name);
          $("#getWebsite" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].website);
          $("#getIndustry" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].industryName);
          $("#getCompanyPros" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].featuredReview.pros);  //added for more company info
          $("#getCompanyCons" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].featuredReview.cons);
          $("#overallRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].overallRating);
          $("#cultureAndValuesRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].cultureAndValuesRating);
          $("#careerOpportunitiesRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].careerOpportunitiesRating);
          $("#workLifeBalanceRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].workLifeBalanceRating);
          $("#getCompanyImageMoreInfo" + employerSectionNumber.toString()).attr("src", glassdoorData.response.employers[i].squareLogo);
          $("#getCompanyNameMoreInfo" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].name);
        }
      },    
        error: function(jqXHR, textStatus, errorThrown) {
          alert("glassdoor get request is a problem");
          }
    });
  });

  $("#submitJobSearch").on("click", function(e) {
    e.preventDefault();
    //alert("glassdoor company submit button working")

    var jobLocation = $("#searchJobLocation").val().trim();
    var jobTitle = $("#searchJob").val().trim();
    var urlSearchJob = "https://api.glassdoor.com/api/api.htm?t.p=51262&t.k=etldXOKl8dW&userip=0.0.0.0&useragent=&format=json&v=1&action=employers";
    
    urlSearchJob = urlSearchJob + "&jt=";
    urlSearchJob = urlSearchJob + jobTitle;
    urlSearchJob = urlSearchJob + "&l=";
    urlSearchJob = urlSearchJob + jobLocation;

    //console.log(urlSearchJob);

    $.ajax({
      type: "GET",
      url: urlSearchJob,
      dataType: "jsonp",

      success: function(glassdoorData){
        //alert("glassdoor submit get request working");
        for (var i = 0; i < 3; i++) {
          var employerSectionNumber = (i + 1)
          $("#getCompanyImage" + employerSectionNumber.toString()).attr("src", glassdoorData.response.employers[i].squareLogo);
          $("#getCompanyName" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].name);
          $("#getWebsite" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].website);
          $("#getIndustry" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].industryName);
          $("#getCompanyPros" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].featuredReview.pros);  //added for more company info
          $("#getCompanyCons" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].featuredReview.cons);
          $("#overallRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].overallRating);
          $("#cultureAndValuesRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].cultureAndValuesRating);
          $("#careerOpportunitiesRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].careerOpportunitiesRating);
          $("#workLifeBalanceRating" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].workLifeBalanceRating);
          $("#getCompanyImageMoreInfo" + employerSectionNumber.toString()).attr("src", glassdoorData.response.employers[i].squareLogo);
          $("#getCompanyNameMoreInfo" + employerSectionNumber.toString()).html(glassdoorData.response.employers[i].name);
        }
      },    
        error: function(jqXHR, textStatus, errorThrown) {
          alert("glassdoor get request is a problem");
          }
    });
  });


});