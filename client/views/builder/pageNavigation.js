var pageCount;

// Function for showing and hiding pages
function displayPage(pageId){
  console.log(pageId);
  $(".page.active").hide();
  $(".page.active").removeClass("active");
  $(pageId).addClass("active");
  $(".page.active").show();
}

function changePage(){
  $(".pageLink").click(function(){
    var pageId = $(this).attr("href");
    displayPage(pageId);
  }); 
}
Template.pageNavigation.rendered = function(){
  changePage();
};
Template.pageNavigation.pages = function(){
  var currentBook = Books.findOne({_id: Session.get("currentBookId")});
  // console.log(currentBook);
  // console.log(currentBook.pages);
  //return pageCount;
  return currentBook.pages;
};
Template.pageNavigation.events({
  "click #addPage": function(){
    $("div.pageNavigation span.pages").append(" <a class='pageLink' href='#page"+pageCount+"'>"+pageCount+"</a>");
    $(".pageEditor").append("<div class='page active' id='page"+pageCount+"'></div>");
    displayPage("#page"+pageCount);
    pageCount++;
    changePage();
  }
});