Template.builder.rendered = function (){
	$(".button").button();
};

Template.builder.bookTitle = function(){
	console.log(Session.get("currentBookTitle"));
	return Session.get("currentBookTitle");
};


Template.builder.events({
	"click .button#saveBook": function(){
		var pageCount = 0;
		var pages = new Array();

		$(".page").each(function(){
			console.log("Page" + pageCount);
			var pageScene = $(this).css("background-image").replace('url(','').replace(')','');
			console.log(pageScene);
			var pageElements = $(this).children(".character");
			var pageObjects = new Array();
			pageElements.each(function(){
	 			var character_id = this.id;
	 			var character_src = $(this).children().children("img").attr("src");
	 			var character_left = this.style.left;
	 			var character_top = this.style.top;
	 			var character_width = $(this).children().width() + "px";
	 			var character_height = $(this).children().height() + "px";

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
			pages.push(page);
			pageCount++;
		});
		console.log(pages);
		Books.update(
		   { _id: Session.get("currentBookId") },
		   { $set: { 'pages': pages }}
		);
		console.log("End of Save Function");
	},

	"click .button#publishBook": function(){
		alert("Clicked Publish");
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