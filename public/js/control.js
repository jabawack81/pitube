(function(){
  let socket = io();
  document.getElementById("youtube-form").onsubmit = (e) => {
    e.preventDefault();
    let videoIdInput = document.getElementById("video-id");
    socket.emit("control new video", {videoId: videoIdInput.value});
    videoIdInput.value = "";
  }

  let commands = document.getElementsByClassName("command")

  for(let i = 0; i < commands.length; i++){
    console.log(i)
    commands[i].onclick = (e) => {
      socket.emit("control command", {command: e.target.dataset.command});
    }
  }
})();
