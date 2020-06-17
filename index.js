let song = [];
let currentSong = 0;

const title = document.querySelector("h1");
const input = document.querySelector("input");
const label = document.querySelector("label");
const play = document.querySelector("#play");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const player = document.querySelector("audio");
player.volume = 0.4;

input.onchange = getSongs;
next.onclick = nextSong;
prev.onclick = prevSong;

function getSongs(event) {
  songs = event.target.files;
  playSong();
  label.innerText = songs[currentSong].name.slice(0, -4);
  title.innerText = "Spotify Clone";
}

function playSong() {
  let song = URL.createObjectURL(songs[currentSong]);
  label.innerText = songs[currentSong].name.slice(0, -4);
  player.setAttribute("src", song);
  play.innerText = "pause";
  player.play();
  play.onclick = pause;
}

function pause() {
  play.innerText = "play";
  player.pause();
  play.onclick = playCurrent;
}

function playCurrent() {
  play.innerText = "pause";
  player.play();
  play.onclick = pause;
}

function nextSong() {
  if (currentSong + 1 <= songs.length - 1) {
    currentSong++;
    playSong();
  }
}

function prevSong() {
  if (currentSong - 1 >= 0) {
    currentSong--;
    playSong();
  }
}
