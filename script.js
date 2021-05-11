

 console.log('hello!')

var options = {};

 


var player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!');

  // In this context, `this` is the player that was created by Video.js.
  this.play();

  // How about an event listener?
  this.on('ended', function() {
    videojs.log('Awww...over so soon?!');     
  });
 this.on('play', function() {
    videojs.log('Play');    
  });

 this.on('pause', function() {
    videojs.log('Pause');    
  });


});


