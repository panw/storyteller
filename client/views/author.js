function setBookSession(bookId, bookTitle){
	var newBook = {
		id: bookId,
		title: bookTitle
	};
	console.log("In Author.js: ");
	console.log(newBook);
	//console.log(EJSON.stringify(newBook));
	Session.set("currentBook", newBook);
	console.log(Session.get("currentBook"));
}

Template.author.bookdrafts = function(){
	return BookDrafts.find();
};

Template.author.rendered = function (){
	$(".button").button();

	$("a.bookLink").click(function(){
		var newBookId = $(this).attr("id");
		var newBookTitle = $(this).attr("name");
		Session.set("isNewBook", false);
		setBookSession(newBookId, newBookTitle);
	});

};

Template.author.events({
	"click .button#create": function(){
		var newBookId = BookDrafts.insert({
			userId: Meteor.userId(),
			title: $("#title").val(),
		});
		Session.set("isNewBook", true);
		setBookSession(newBookId, $("#title").val());

		var currentUrl = "/book/"+$("#title").val()+"/builder";
		Meteor.Router.to(currentUrl);
	}
});