Meteor.publish("images", function(){
	return Images.find();
});

Meteor.publish("books", function(){
	return Books.find({userId: this.userId});
});

Meteor.publish("currentBook", function(bookId){
	// console.log("In Publication");
	// // console.log(Books.find(bookId));
	// // var currentBook = Books.findOne({_id: bookId});
	
	// var pages = currentBook.pages;
	// console.log(pages);
	return Books.findOne({_id: bookId});
});

// Meteor.publish("pages", function(currentBook){
// 	//return Pages.find({bookId: currentBook.bookId});
// 	return Books.find({ _id: currentBook.bookId });
// });