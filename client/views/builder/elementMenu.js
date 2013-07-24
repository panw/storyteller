Template.elementMenu.scenes = function () {
  return Images.find({type: 'scene'});
};

Template.elementMenu.characters = function () {
	return Images.find({type: "character"});
};

