Meteor.publish("images", function(){ return Images.find(); });

Meteor.publish("books", function(){ return Books.find({userId: this.userId}); });

Meteor.publish("currentBook", function(bookId){	return Books.findOne({_id: bookId}); });

Meteor.publish("publications", function(){ return Publications.find(); });
