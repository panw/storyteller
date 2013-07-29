Template.builder.rendered = function (){
	$(".button").button();
};

Template.builder.title = function(){
	return Session.get("title");
};

Template.builder.events({
	"click #saveBook": function(){
		alert("Clicked");
	}
});