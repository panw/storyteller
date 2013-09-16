Template.book.currentPublication = function(){
	console.log("currentPublication");
	console.log(Publications.findOne(Session.get("currentPublicationId")));
	return Publications.findOne(Session.get("currentPublicationId"));
};

Template.book.rendered = function(){
	// var currentBook = Publications.findOne({_id: Session.get("currentPublicationId")}).book;
	// var currentPages = currentBook.pages;
	// for(i in currentPages){
	// 	var currentElements = currentPages[i].elements;
	// 	var currentPageNumber = currentPages[i].number;
	// 	console.log("currentElements ", currentElements);
	// 	for(j in currentElements){
	// 		$("#"+currentElements[j].id+" img").css({top:currentElements[j].top, 
	// 																						left:currentElements[j].left, 
	// 																						width:currentElements[j].width, 
	// 																						height:currentElements[j].height});		
	// 	}
	// }
	
	// var currentBook = Publications.findOne({_id: Session.get("currentPublicationId")}).book;
	// console.log("currentBook");
	// console.log(currentBook);
	// var currentPages = currentBook.pages;
	// for(i in currentPages){
	// 	var currentElements = currentPages[i].elements;
	// 	var currentPageNumber = currentPages[i].number;
	// 	console.log("currentElements");
	// 	console.log(currentElements);
	// 	$(".content").append("<div class='page' id='page"+currentPageNumber+"' style='display:block; background-image: url("+currentPages[i].scene+");'></div>");
	// 	for(j in currentElements){
	// 		var element = "<div id='"+currentElements[j].id+"' class='pageElement character inPage'><img src='"+currentElements[j].src+"'/></div>";
	// 		$("#page"+currentPageNumber).append(element);	
	// 		
	// 		console.log("currentElementId: "+ currentElements[j].id);
	// 	}
	// }

	// $("div.page:first-child").addClass("active");
	// $(".page").hide();
 //  $(".active.page").show();	
};

Template.book.currentPublication = function(){
	return Publications.findOne({_id: Session.get("currentPublicationId")});
};