// searches active tab under active window, return it in a list, then make
// the background color green
chrome.declarativeContent.onPageChanged.removeRules(
  undefined,
  function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({pageUrl: {schemes: ['https', 'http', 'localhost', 'chrome']},})],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  }
);

chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.query(
    {active: true, currentWindow: true},
    function(tabs) {
      chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'main.js'}
    );
  });
});
