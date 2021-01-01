function toggle(div) {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

chrome.browserAction.onClicked.addListener(tab => {
  alert('Toggle');
  
  const fpsDiv = document.body.getElementById('fps');
  const frameRenderDurationDiv = document.body.getElementById('frameRenderDuration');
  const memoryDiv = document.body.getElementById('memory');

  toggle(fpsDiv);
  toggle(frameRenderDurationDiv);
  toggle(memoryDiv);
});