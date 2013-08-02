function insertElementIntoPage(selectedElement, elementType){
	var selected = $(selectedElement).clone();
	var type = elementType;
	
	selected.appendTo(".active.page");
	selected.addClass("draggable removable");

	// Make page elements draggable
	$(".draggable.pageElement").draggable({
		containment: "#"+$(".active.page").attr("id"),
		scroll: false
	});


	// On hover activate remove function
	selected.hover(function(){
		
		$("<div class='removeButton ui-icon ui-icon-close'></div>").prependTo(selected);
		selected.children(".removeButton").click(function (){
		  selected.remove();
		});
		}, function(){
			selected.children(".removeButton").remove();
	});

	if(type == "character"){
		selected.children().addClass("resizable");

		// Make character resizable
		$("img.resizable").resizable({
			aspectRatio: true
		});	
	}
	else if(type == "textbox"){
		var textbox = selected.children();
		textbox.removeAttr("style").removeAttr("disabled");

		// Make textbox border visible
		selected.hover(function(){
			selected.css("border", "solid 2px");
		}, function(){
			selected.css("border", "none");
		});
	}
}

function makeRemovable(element){
	var pageElement = element;
	pageElement.addClass("removable");
	
}

Template.elementMenu.rendered = function(){
	$(".accordion").accordion({
	  heightStyle: "content"
	});

	// Change background image of active page
	$(".pageElement.scene").click(function(){
		var imgSrc = $(this).children().attr("src");
		$(".active.page").css("background-image", "url("+imgSrc+")");
	});

	$(".pageElement.character").click(function(){
		insertElementIntoPage(this, "character");
	});

	$(".pageElement.textbox").click(function(){
		insertElementIntoPage(this, "textbox");
	});

};

// Return collections based on image type
Template.elementMenu.scenes = function () {
  return Images.find({type: "scene"});
};

Template.elementMenu.characters = function () {
	return Images.find({type: "character"});
};

