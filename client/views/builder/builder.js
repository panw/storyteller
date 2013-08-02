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


// Template.builder.events({
// 	"click .button#saveBook": function(){
// 		alert("Clicked");
// 	}
// });

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