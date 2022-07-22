import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

VIMEO_PLAYER_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveTime(time) {
  localStorage.setItem(VIMEO_PLAYER_TIME, JSON.stringify(time));
}
player.on('timeupdate', throttle(saveTime, 1000));

function loadingSeconds() {
  const savedTime = localStorage.getItem(VIMEO_PLAYER_TIME);
  const convertingSavedTime = JSON.parse(savedTime);
  return convertingSavedTime.seconds;
}
player.setCurrentTime(loadingSeconds());
