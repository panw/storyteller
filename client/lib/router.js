Meteor.Router.add({
	'/' : 'dashboard',
	'/home' : 'dashboard',
	'/author'		: 'author',
  '/book/:story/builder'  : function(story){
  	Session.set("currentStory", story);
  	return 'builder';
  },
  '/book/:title' : function(title){
  	Session.set("currentTitle", title);
  	return 'book';
  }
});