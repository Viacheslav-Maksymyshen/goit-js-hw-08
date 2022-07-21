import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const onTimeupdate = function () {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
  console.log('the time was updated to: ' + this.currentTime);
  console.log('all times: ' + this.seeking);
};
player.on('timeupdate', onTimeupdate);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
