const puppeteer = require("puppeteer");
console.log("before");
let page ;
const browserOpenPromise = puppeteer.launch({
headless: false,
slowMo: true,
defaultViewport: null,
args:["--start-maximized"]
 });
browserOpenPromise.then(function(browser){
    // currently opened tabs
const pagesArrpromise = browser.pages();
 return pagesArrpromise;
})
.then(function(browserPages){
        page =  browserPages[0];
       let gotoPromise =  page.goto("https://www.google.com/");
       return gotoPromise;
})
.then(function(){
    // waiting for the element to appear on the page 
    let elementWaitPromise = page.waitForSelector("textarea[type='search']", { visible: true });
    // let elementWaitPromise = Promise.all([page.waitForSelector("textarea[type='search']")])
    return elementWaitPromise;
})
.then(function(){
   // type on input field of that page =>selector
    let keysWillbeSendPromise = page.type("textarea[type='search']", "pepcoding");
    return keysWillbeSendPromise;
}).then(function(){
    // page.keyboard to type special characters
    let enterPressedpromise = page.keyboard.press("Enter");
    console.log("pep coding typed");
    return enterPressedpromise;
}).then(function(){
   let elementWaitPromise =  page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
    return elementWaitPromise;
}).then(function(){
   let elementClickPromise =  page.click("h3.LC20lb.MBeuO.DKV0Md");
   return elementClickPromise;
}).catch(function(err){
    console.log(err);
});

console.log("after");