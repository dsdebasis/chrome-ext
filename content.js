
console.log("check")

let productDetails = {
    productName: "",
    productPrice: "",
    imageLink: "",
}
 productDetails.productName = document.getElementsByClassName("product-detail-info__header-name")[0].textContent;

 productDetails.productPrice= document.getElementsByClassName("money-amount__main")[0].textContent

 productDetails.imageLink = document.getElementsByClassName("media-image__image media__wrapper--media")[0].getAttribute("src")

 // content.js

// Collect the data you want to share

// console.log(sharedData)
// Send the data to the background script
chrome.runtime.sendMessage({ type: "shareData", data: productDetails }, function(response) {
    console.log("Data sent to background script:",response);
});




