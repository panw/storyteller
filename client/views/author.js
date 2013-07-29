Template.author.bookDrafts = function(){
	return BookDraft.find();
};

Template.author.rendered = function (){
	$(".button").button();
};
Template.author.events({
	"click .button#create": function(){
		BookDraft.insert({
			userId: Meteor.userId(),
			title: $("#title").val(),
			author: $("#author").val(),
		});
		Session.set("title",  $("#title").val());
		Session.set("author",  $("#author").val());
		Meteor.Router.to('/builder');
	}
});