var counter = 2;

// Function for showing and hiding pages
function displayPage(pageId){
  $(".page.active").hide();
  $(".page.active").removeClass("active");
  $(pageId).show();
  $(pageId).addClass("active");
}

function changePage(){
  $(".pageLink").click(function(){
    var pageId = $(this).attr("href");
    displayPage(pageId);
  }); 
}
Template.pageNavigation.rendered = function(){
  $(".page").hide();
  $(".active.page").show();
  changePage();

};

Template.pageNavigation.events({
  "click #addPage": function(){
    $("div.pageNavigation span.pages").append(" <a class='pageLink' href='#page"+counter+"'>"+counter+"</a>");
    $(".pageEditor").append("<div class='page active' id='page"+counter+"'>This is Page"+counter+"</div>");
    displayPage("#page"+counter);
    counter++;
    
    changePage();
  }
});