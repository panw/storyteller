Template.builder.rendered = function (){
	$(".button").button();
};

Template.builder.bookTitle = function(){
	console.log(Session.get("currentBookTitle"));
	return Session.get("currentBookTitle");
};

function saveBook(){
	var pageCount = 0;
	var packagedPages = new Array();

	$(".page").each(function(){
		console.log("Page" + pageCount);
		var pageScene = $(this).css("background-image").replace('url(','').replace(')','');
		console.log(pageScene);
		var pageElements = $(this).children(".character");
		var pageObjects = new Array();
		pageElements.each(function(){
			console.log("Parent", $(this).parent());
			console.log("This", $(this));
 			var character_id = this.id;
 			var character_src = $(this).children().children("img").attr("src");
 			var character_left = $(this).position().left;
 			var character_top = $(this).position().top ;
 			var character_width = $(this).children().width() + "px";
 			var character_height = $(this).children().height() + "px";

 			console.log("top", character_top);
 			console.log("left", character_left);
 			console.log("width", character_width);
 			console.log("height", character_height);


 			var object = {
 				id: character_id,
 				src: character_src,
 				top: character_top,
 				left: character_left,
 				width: character_width,
 				height: character_height
 			};

 			pageObjects.push(object);

 			console.log(character_id);
 			console.log(character_src);
 			console.log(character_left);
 			console.log(character_top);
 			console.log(character_width);
 			console.log(character_height);
 			console.log("\n");
		});
		var page = {
			number: pageCount,
			scene: pageScene,
			elements: pageObjects
		};
		packagedPages.push(page);
		pageCount++;
	});
	console.log("packagedPages");
	console.log(packagedPages);
	
	Books.update(
	   { _id: Session.get("currentBookId") },
	   { $set: { 
	   	'title': $("#title").val(),
	   	'pages': packagedPages
	   	}
	   }
	);
}

Template.builder.events({
	"click .button#saveBook": function(){
		saveBook();
		console.log("End of Save Function");
	},

	"click .button#publishBook": function(){
		saveBook();
		console.log("Current Pub ID: "+Session.get("currentPublicationId"));
		Publications.update(
			{ _id: Session.get("currentPublicationId") },
			{ $set: {
				'title': $("#title").val(),
				'book': Books.findOne(Session.get("currentBookId"))
				} 
			}
		);
	}
});

// Template.builder.events({
// 	"click .button#saveBook": function(){
// 		BookDrafts.update({
// 			userId: Meteor.userId(),
// 			title: $("#title").val(),
// 			$addToSet:{ author: $("#author").val()},
// 		});
// 		Session.set("title",  $("#title").val());
// 		Session.set("author",  $("#author").val());
// 	}
// });