Template.author.rendered = function (){
	$(".button").button();
};
Template.author.events({
	"click .button#create": function(){
		console.log($("#title").val());
		console.log($("#author").val());
		Page.insert({
			title: $("#title").val(),
			author: $("#author").val(),
		}
	}
});