Deps.autorun(function () {
	Meteor.subscribe("images");
	Meteor.subscribe("bookdrafts");
	//Meteor.subscribe("pages");
	if (Session.get("currentBook") != null) {
		console.log("In application.js");
		console.log(Session.get("currentBook").id);
		Meteor.subscribe("pages", {bookId: Session.get("currentBook").id});
		//console.log(Session.get("currentBook").id);	
	};
	
});