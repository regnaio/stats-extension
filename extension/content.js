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
