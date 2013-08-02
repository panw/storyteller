Meteor.publish("images", function(){
	return Images.find();
});
Meteor.publish("bookdrafts", function(){
	return BookDrafts.find({userId: this.userId});
});

// Meteor.publish("pages", function(){
// 	return Pages.find();
// });
Meteor.publish("pages", function(currentBook){
	console.log("In publications.js");
	console.log(currentBook.bookId);
	// console.log("#### Find Output ####");
	// console.log(Pages.find({bookId: currentBookId}));
	// console.log("#### End of Find Output ####");
	return Pages.find({bookId: currentBook.bookId});
});