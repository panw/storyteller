Template.dashboard.publications = function(){
	return Publications.find();
};

Template.dashboard.events({
	"click .publicationLink": function(){
		console.log("Clicked", this._id);
		Session.set("currentPublicationId", this._id);
	}
});
	