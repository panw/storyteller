// Images = new Meteor.Collection('images');

// if (Meteor.isClient) {

//   Template.element_menu.scenes = function () {
//     return Images.find({type: 'scene'});
//   };

//   Template.element_menu.characters = function () {
//     return Images.find({type: 'character'});
//   };

//   Template.builder.rendered = function (){
//     $("#accordion").accordion({
//       heightStyle: "content"
//     });
//     $(".button").button();
//   };

//   Template.login.events({
//     'submit #login-form' : function(e, t){
//       e.preventDefault();
//       // retrieve the input field values
//       var email = t.find('#login-email').value
//         , password = t.find('#login-password').value;

//         // Trim and validate your fields here.... 

//         // If validation passes, supply the appropriate fields to the
//         // Meteor.loginWithPassword() function.
//         Meteor.loginWithPassword(email, password, function(err){
//         if (err){}
//           // The user might not have been found, or their passwword
//           // could be incorrect. Inform the user that their
//           // login attempt has failed. 
//         else{}
//           // The user has been logged in.
//       });
//          return false; 
//       }
//   });

//   Template.registration.events({
//     'submit #registration-form' : function(e, t) {
//       e.preventDefault();
//       var email = t.find('#account-email').value
//         , password = t.find('#account-password').value;

//         // Trim and validate the input

//       Accounts.createUser({email: email, password : password}, function(err){
//           if (err) {
//             // Inform the user that account creation failed
//           } else {
//             // Success. Account has been created and the user
//             // has logged in successfully. 
//           }

//         });

//       return false;
//     }
//   });

//   Meteor.Router.add({
//     '/'         : 'home',
//     '/author'   : 'author',
//     '/builder'  : 'builder'
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     if(Images.find().count() == 0){
//       Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/0/f/b/8/1197091304272882353carlitos_Cartoon_Landscape.svg.hi.png'});
//       Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/x/p/O/y/C/9/farm-fence-hi.png'});
//       Images.insert({type: 'scene', src:'http://www.clker.com/cliparts/f/a/d/2/12988691081493617768race%20track.svg.hi.png'});
//       Images.insert({type: 'character', src:'http://www.clker.com/cliparts/8/6/e/a/1237914684389011788StudioFibonacci_Cartoon_bunny.svg.hi.png'});
//       Images.insert({type: 'character', src:'http://www.clker.com/cliparts/c/a/b/4/11954237081096120744Machovka_panda.svg.hi.png'});
//       Images.insert({type: 'character', src:'http://www.clker.com/cliparts/2/7/a/d/12262023651915431669rg1024_Metalic_Bear.svg.hi.png'});
//     }
//   });
// }
