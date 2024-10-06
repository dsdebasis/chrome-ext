Here’s a brief `README.md` file tailored to my Chrome extension project. This will guide you through the installation and setup process.

---

# **Chrome Extension: Product Informer**

This Chrome extension allows users to extract product information from the Zara website . The product details  are displayed directly in the extension’s popup interface.

## **Features**
- Extracts product name, price, and image from Zara product pages.

- Basic styling for a clean, user-friendly interface.

## **Installation & Setup**

### **Prerequisites**
- [Google Chrome](https://www.google.com/chrome/) browser installed.
- Basic knowledge of how to load Chrome extensions in developer mode.


### **Step-by-Step Installation**

1. **downalod the files from the github   link**

   
   

2. **Load the Extension in Chrome**

   1. Open **Google Chrome** and navigate to `chrome://extensions/`.
   2. Enable **Developer Mode** (toggle switch in the top-right corner).
   3. Click the **Load Unpacked** button and select the project folder (`file location`).
   4. The extension should now appear in the list of installed extensions.

5. **Use the Extension**
   - The Extension will only work on "https://zara.com/in". 
   - it will not work on smaller devices.
   - Navigate to a **Zara** product page. Click on any displayed Items
   - Click on the **extension icon** in the Chrome toolbar.
   - The extension will display the product information .
   - Every time you visit a different product page. you have to refresh the page and click on extension icon  for information to  display.

### **Usage**

1. Open any Zara product page.
2. Click the extension icon to extract product information.


### **Folder Structure**

```
├── popup.html           # Popup interface displayed when the extension is clicked
├── popup.js             # JavaScript logic for interacting with the popup
├── content.js           # Extracts product info from the active tab
├── manifest.json        # Chrome extension configuration
├── index.css           # Basic styling for the popup interface
├── README.md            # Documentation file
```

Thank You ....