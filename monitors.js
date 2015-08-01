var rip_refreshInterval;

function refreshEsFrames() {
    var frames = document.getElementsByTagName('iframe');
    for (var i = frames.length - 1; i >= 0; i--) {
      frames[i].src = frames[i].src;
    }
  }
  //for interaction events

function touchDelayRefresh() {
    if (rip_refreshInterval !== undefined) {
      clearInterval(rip_refreshInterval);
      rip_refreshInterval = setInterval(function() {
        refreshEsFrames();
      }, 60000)
    }
  }
  //only auto-refresh when not on testing page!!
if (location.href.indexOf('test=true') == -1) {
  //refresh page automatically every 60 seconds
  rip_refreshInterval = setInterval(function() {
      refreshEsFrames();
    }, 60 * 1000)
    //interaction events
    //Delays auto-refresh inter so does not reload page while the user is interacting
  document.addEventListener('touchstart', touchDelayRefresh, false);
  document.addEventListener('touchend', touchDelayRefresh, false);
  // document.addEventListener('touchmove',     touchDelayRefresh, false);
  document.addEventListener('scroll', touchDelayRefresh, false);
  document.addEventListener('click', touchDelayRefresh, false);
} else {
  //during testing
}

function refreshButton() {
    touchDelayRefresh();
    refreshEsFrames();
  }
  //manual user refresh button
var refreshButtonEl = document.getElementById('masthead');
refreshButtonEl.addEventListener('click', refreshButton, false);
refreshButtonEl.addEventListener('touchend', refreshButton, false);
//bottom banner refresh
document.getElementById('bottom-banner')
  .addEventListener('touchend', function() {
    location.reload();
  }, false);