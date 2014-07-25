chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "litbel");
  port.onMessage.addListener(function(msg) {
    console.log(msg);
    if (msg.joke == "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer == "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});