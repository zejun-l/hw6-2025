var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 // Initialize video element
 video = document.querySelector(".video");
 video.autoplay = false;
 video.loop = false;

 // Play
 document.getElementById("play").addEventListener("click", function () {
   video.play();
   document.getElementById("volume").innerText = `${Math.round(video.volume * 100)}%`;
 });

 // Pause
 document.getElementById("pause").addEventListener("click", function () {
   video.pause();
 });

 // Slow Down
 document.getElementById("slower").addEventListener("click", function () {
   video.playbackRate *= 0.9;
   console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
 });

 // Speed Up
 document.getElementById("faster").addEventListener("click", function () {
   video.playbackRate /= 0.9;
   console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
 });

 // Skip Ahead
 document.getElementById("skip").addEventListener("click", function () {
   if (video.currentTime + 10 < video.duration) {
	 video.currentTime += 10;
   } else {
	 video.currentTime = 0;
   }
   console.log(`Current time: ${video.currentTime.toFixed(2)}s`);
 });

 // Mute
 document.getElementById("mute").addEventListener("click", function () {
   video.muted = !video.muted;
   this.innerText = video.muted ? "Unmute" : "Mute";
 });

 // Volume Slider
 document.getElementById("slider").addEventListener("input", function () {
   video.volume = this.value/100;
   document.getElementById("volume").innerText = `${this.value}%`;
 });

 // Vintage / Styled
 document.getElementById("vintage").addEventListener("click", function () {
   video.classList.add("oldSchool");
 });

 // Original Style
 document.getElementById("orig").addEventListener("click", function () {
   video.classList.remove("oldSchool");
 });