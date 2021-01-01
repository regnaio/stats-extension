// function toggle(div) {
//   if (div.style.display === 'none') {
//     div.style.display = 'block';
//   } else {
//     div.style.display = 'none';
//   }
// }

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { text: 'toggle' }, response => {
      if (response.type == 'answer') {
        console.log('Answer');
      }
    });
  });
});
