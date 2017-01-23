chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var nodes = document.getElementsByTagName("INPUT"); for (var i = 0; i < nodes.length; i++) { if (nodes[i].type == "checkbox") nodes[i].checked = true; }'
  });
});
