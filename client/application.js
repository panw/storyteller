Deps.autorun(function () {
	Meteor.subscribe("images");
	Meteor.subscribe("books");
	if (Session.get("currentBookId") != null) {
		Meteor.subscribe("currentBook", Session.get("currentBookId"));
	};
	
});