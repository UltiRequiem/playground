/**
 * Mute a singular HTML5 element
 *
 * @param {HTMLElement} elem
 */
function muteMe(elem) {
  elem.muted = true;
  elem.pause();
}

/** Try to mute all video and audio elements on the page */
function mutePage() {
  document.querySelectorAll('video, audio').forEach((elem) => muteMe(elem));
}
