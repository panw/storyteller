Meteor.publish("bookDrafts", function(){
	return BookDraft.find({userId: this.userId});	
});

Meteor.publish("images", function(imageType){
	return Images.find({type: imageType});	
});

// Meteor.publish("bookDraftsCount", function(){
// 	return BookDraft.find({userId: this.userId}).count();	
// });