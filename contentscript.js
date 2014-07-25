var opt = {
  type: "basic",
  title: "Free Date!!",
  message: "Hurry up, you have not very much time",
  iconUrl: "download48.png"
}

var notification_id = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
	var port = chrome.tabs.connect(tab.id, {name: "litbel"});
	port.postMessage({joke: "Knock knock"});

	port.onMessage.addListener(function(msg) {
	  console.log(msg.question);
	  if (msg.question == "Who's there?")
	    port.postMessage({answer: "Madame"});
	  else if (msg.question == "Madame who?")
	    port.postMessage({answer: "Madame... Bovary"});
	});

	chrome.notifications.create((notification_id++).toString(), opt, function(){});
});