Template.builder.rendered = function (){
	$(".button").button();
};

Template.builder.book = function(){
	var book = Session.get("currentBook");
	console.log("In builder.js");
	console.log(Session.get("currentBook"));
	if(Session.get("isNewBook")){
		for (i=0; i<2; i++){
			Pages.insert({
				bookId: book.id,
				number: i,
				images: [],
				text: []
			});	
		}
		Session.set("isNewBook", false);
	}
	return book;
};


Template.builder.events({
	"click .button#saveBook": function(){
		var count = 1;
		$(".active.page > .character").each(function(){
 			var character_id = this.id;
 			var character_left = this.style.left;
 			var character_top = this.style.top;
 			var character_width = $(this).children().width();
 			var character_height = $(this).children().height();
 			console.log("Character" + count);
 			console.log(character_id);
 			console.log(character_left);
 			console.log(character_top);
 			console.log(character_width);
 			console.log(character_height);
 			console.log("\n");
 			count++;
 		});
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