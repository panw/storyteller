Meteor.startup(function () {

  if(Images.find().count() == 0){
    Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/0/f/b/8/1197091304272882353carlitos_Cartoon_Landscape.svg.hi.png'});
    Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/x/p/O/y/C/9/farm-fence-hi.png'});
    Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/f/a/d/2/12988691081493617768race%20track.svg.hi.png'});
    Images.insert({type: 'character', src:'http://www.clker.com/cliparts/8/6/e/a/1237914684389011788StudioFibonacci_Cartoon_bunny.svg.hi.png'});
    Images.insert({type: 'character', src:'http://www.clker.com/cliparts/c/a/b/4/11954237081096120744Machovka_panda.svg.hi.png'});
    Images.insert({type: 'character', src:'http://www.clker.com/cliparts/2/7/a/d/12262023651915431669rg1024_Metalic_Bear.svg.hi.png'});
  }

});