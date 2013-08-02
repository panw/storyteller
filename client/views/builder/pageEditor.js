Template.pageEditor.pages = function(){
	//console.log(Pages.find({bookId: Session.get("currentBook").id}));
	console.log(Session.get("currentBook"));
	return Pages.find({bookId: Session.get("currentBook").id});
	//return Pages.find();
};

Template.pageEditor.rendered = function(){
	$("div.page:first-child").addClass("active");
	$(".page").hide();
  $(".active.page").show();
	// Initial stuff to setup the cover page as the active page
	// $("div.page:first-child").addClass("active");
	// $(".page").hide();
	// $(".active.page").show();
};