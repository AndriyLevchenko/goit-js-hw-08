// Встановлення плеєра

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";

// iframePlayer.on('play', function() {
//     console.log('played the video!');
// });

// Відстежування події timeupdate, локальне сховище та throttle

const onTimeUpdate = function(evt) {
    const currentTime = evt.seconds;
    localStorage.setItem(TIME_KEY, currentTime);
    console.log(currentTime);
};

iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

// метод setCurrentTime()

iframePlayer.setCurrentTime(localStorage.getItem(TIME_KEY)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
});



