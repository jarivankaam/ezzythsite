let puppeteer = require('puppeteer');
let fs = require('fs');

(async () => {
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    await page.goto('https://www.youtube.com/c/OfficialDuckStudios/videos/');
    await page.click('button[aria-label="Agree to the use of cookies and other data for the purposes described"]');
    await page.waitForNavigation();
    const data = page.evaluate(() => {
        let scrollCheck = [];
        let scrollCheckLast = [];
        setInterval(() => {
            scrollCheck.push(window.scrollY);
            scrollCheckLast = scrollCheck.slice(-3);
            if(scrollCheckLast.every( (val, i, arr) => val === arr[0] ) && scrollCheckLast[0] != 0){
                let data = Array.from(document.querySelectorAll('#video-title'), element => [element.textContent, element.href]);
                Promise.resolve(data);
            }
            window.scrollBy(0, 1920);
        }, 500);
    });
    
    data.then(function(val){
        console.log(val);
    });
})()


