let prName = document.getElementById("product-name");
let prPrice = document.getElementById("product-price");
let prImgLink = document.getElementById("img-link");

let data;
let domainUrl;



  function parsedUrl() {
    // No need to wait for DOMContentLoaded unless necessary
    // Simply call the function to start extracting tab info
    getActiveTab().then(tab => {
      domainUrl = tab.url; // Get the URL of the active tab
      let parsedUrl = new URL(domainUrl); // Parse the URL
  
      domainUrl = parsedUrl;
  
      checkParsedUrl(parsedUrl);
    }).catch(error => {
      console.error("Error fetching tab URL:", error);
    });
  }
  

function getActiveTab() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      // Execute content script and wait for it to finish
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      }, () => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }

        // Resolve only after script execution completes
        resolve(tabs[0]);
      });
    });
  });
}

parsedUrl();

let content = document.getElementById("content");

async function checkParsedUrl(url) {
  if (url?.hostname === "www.zara.com" || url?.hostname === "www.zara.com/in") {
    document.getElementById("refresh-btn").textContent = "Refresh  and again clik on extension to see info";
 
    document.getElementById("refresh-btn").addEventListener("click", () => {
      chrome.tabs.reload();
    })
    // Wait for content.js to send the data back
    chrome.runtime.sendMessage({ type: "getSharedData" }, function (response) {
      if (!response) {
        console.error("No data received from background script");
        return;
      }

      console.log("Data received from background script:", response);
      data = response;
    
      // Update the UI with the product data
      prName.textContent = data.productName;
      prPrice.textContent = data.productPrice;
      prImgLink.setAttribute("href", data.imageLink);
    
      // Handle click on the image link
      document.getElementById('img-link').addEventListener('click', () => {
        chrome.tabs.create({ url: prImgLink.getAttribute('href') });  
      });
    });
  } else {
    console.log(false);
    content.textContent = "Not a Zara Site..";
  }
}
