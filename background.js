

let sharedDataFromContentScript = {};

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "shareData") {
        // Store the data from content script
        sharedDataFromContentScript = request.data;
        console.log("Data received from content script:",request.a);
        sendResponse({ status: "Data stored" });
    } else if (request.type === "getSharedData") {
        // Respond to the popup.js request with the stored data
        sendResponse(sharedDataFromContentScript);
    }
});
