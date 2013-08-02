Meteor.publish("images", function(){
	return Images.find();
});

Meteor.publish("books", function(){
	return Books.find({userId: this.userId});
});

Meteor.publish("pages", function(currentBook){
	return Pages.find({bookId: currentBook.bookId});
});