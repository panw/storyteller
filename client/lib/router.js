Meteor.Router.add({
	'/' : 'dashboard',
	'/home' : 'dashboard',
	'/author'		: 'author',
  '/book/:story/builder'  : function(story){
  	Session.set("currentStory", story);
  	return 'builder';
  }
});