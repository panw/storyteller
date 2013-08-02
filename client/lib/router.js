Meteor.Router.add({
	'/author'		: 'author',
  '/book/:story/builder'  : function(story){
  	Session.set("currentStory", story);
  	return 'builder';
  }
});