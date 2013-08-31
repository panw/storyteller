Template.author.books = function(){
	return Books.find();
};

Template.author.rendered = function (){
	$(".button").button();

	$("a.bookLink").click(function(){
		var bookId = $(this).attr("id");
		var bookTitle = $(this).attr("name");
		// Session.set("isNewBook", false);
		// console.log("author.js isNewBook: "+Session.get("isNewBook"));
		Session.set("currentBookId", bookId);
		Session.set("currentBookTitle", bookTitle);
		Session.set("currentPublicationId", Publications.findOne({bookId: bookId})._id);
		// setBookSession(newBookId, newBookTitle);
	});

};

Template.author.events({
	"click .button#create": function(){
		// setup for a new book
		var newBookId = Books.insert({
			userId: Meteor.userId(),
			title: $("#title").val(),
			pages: [{number: 0}, {number: 1}]
		});

		// setup for a publication
		var newPublicationId = Publications.insert({
			bookId: newBookId, 
			userId: Meteor.userId,
			book: Books.findOne(newBookId)
		});

		Session.set("currentBookId", newBookId);
		Session.set("currentPublicationId", newPublicationId);
		Session.set("isNewBook", true);

		var currentUrl = "/book/"+$("#title").val()+"/builder";
		console.log(currentUrl);
		Meteor.Router.to(currentUrl);
	}
});