// Video players: each .player holds a poster and a play button.
// Set data-video to an .mp4 path or a YouTube/Vimeo embed URL to enable playback.
document.querySelectorAll('.player').forEach(function (player) {
  var button = player.querySelector('.play');
  if (!button) return;
  button.addEventListener('click', function () {
    var src = player.getAttribute('data-video') || '';
    var el;
    if (!src) {
      el = document.createElement('button');
      el.type = 'button';
      el.className = 'player-note';
      el.textContent = player.getAttribute('data-pending') || 'Video coming soon';
      el.addEventListener('click', function () { el.remove(); });
    } else if (/youtube|youtu\.be|vimeo/.test(src)) {
      el = document.createElement('iframe');
      el.src = src;
      el.allow = 'autoplay; fullscreen';
      el.allowFullscreen = true;
      el.title = button.getAttribute('aria-label') || 'Video';
    } else {
      el = document.createElement('video');
      el.src = src;
      el.controls = true;
      el.autoplay = true;
      el.playsInline = true;
    }
    el.classList.add('player-layer');
    player.appendChild(el);
  });
});
