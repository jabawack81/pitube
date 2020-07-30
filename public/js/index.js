(function() {
  let socket = io();

  socket.on("player new video", (data) => {
    console.log(data.videoId);
    player.loadVideoById(data.videoId);
  });

  socket.on("player command", (data) => {
    switch(data.command) {
      case "play":
        player.playVideo();
        break;
      case "pause":
        player.pauseVideo();
        break;
    }
  })

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

})();



var player;
function onYouTubeIframeAPIReady() {
  console.log("HERE");
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
  });
}
