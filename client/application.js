Deps.autorun(function () {
	Meteor.subscribe("images");
	Meteor.subscribe("books");
	if (Session.get("currentBook") != null) {
		Meteor.subscribe("pages", {bookId: Session.get("currentBook").id});
	};
	
});