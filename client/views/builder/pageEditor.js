Template.pageEditor.pages = function(){
	console.log("pageEditor.pages returned currentBook.pages");
	var currentBook = Books.findOne({_id: Session.get("currentBookId")});
	console.log(currentBook.pages);
	return currentBook.pages;

};

Template.pageEditor.rendered = function(){
	var currentBook = Books.findOne({_id: Session.get("currentBookId")});
	console.log(currentBook);
	var currentPages = currentBook.pages;
	console.log(currentPages);
	
	for(i in currentPages){
		var currentElements = currentPages[i].elements;
		var currentPageNumber = currentPages[i].number;
		console.log(currentElements);
		$(".pageEditor").append("<div class='page' id='page"+currentPageNumber+"' style='background-image: url("+currentPages[i].scene+");'></div>");
		for(j in currentElements){
			var element = "<div id='"+currentElements[j].id+"' class='pageElement character inPage' style='top:"+currentElements[j].top+"; left:"+currentElements[j].left+";'><img src='"+currentElements[j].src+"' width='"+currentElements[j].width+"' height='"+currentElements[j].height+"'/></div>";
			console.log(element);
			$("#page"+currentPageNumber).append(element);

			//make element draggable
			$(".pageElement.inPage").addClass("draggable");
			
		}
	}
	$(".draggable.pageElement").draggable({
		containment: ".pageEditor",
		scroll: false
	});
	// make element resizable
	$(".pageElement.inPage").children("img").addClass("resizable");
	$("img.resizable").resizable({
		aspectRatio: true
	});

	// On hover activate remove function
	$(".pageElement.inPage").hover(function(){
		$("<div class='removeButton ui-icon ui-icon-close'></div>").prependTo(this);
		$(this).children(".removeButton").click(function (){
		  $(this).remove();
		});
		}, function(){
			$(this).children(".removeButton").remove();
	});

	$("div.page:first-child").addClass("active");
	$(".page").hide();
  $(".active.page").show();	
};