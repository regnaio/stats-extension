const injectScript = function (scriptUrl) {
  const newScript = document.createElement('script');

  newScript.src = chrome.extension.getURL(scriptUrl);

  const injectElement = document.head || document.documentElement;
  injectElement.insertBefore(newScript, injectElement.firstChild);

  newScript.onload = function () {
    newScript.parentNode.removeChild(newScript);
  };
};

injectScript('stats.min.js');
injectScript('dat.gui.min.js');
injectScript('overlay.js');

function toggleDiv(div) {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function toggle() {
  const fpsDiv = document.getElementById('fps');
  const frameRenderDurationDiv = document.getElementById('frameRenderDuration');
  const memoryDiv = document.getElementById('memory');

  toggleDiv(fpsDiv);
  toggleDiv(frameRenderDurationDiv);
  toggleDiv(memoryDiv);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text == 'toggle') {
    console.log('Toggle');
    toggle();
    sendResponse({
      type: 'answer'
    });
  }
});
