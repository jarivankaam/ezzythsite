const puppeteer = require('puppeteer');
let fs = require('fs');
const { stringify } = require('querystring');

(async () => {
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    await page.goto('https://www.youtube.com/c/OfficialDuckStudios/videos/');
    await page.click('button[aria-label="Agree to the use of cookies and other data for the purposes described"]');
    await page.waitForNavigation();
    const data = await page.evaluate(async () => {
        return await new Promise((resolve, reject) =>{
            try{
                let scrollCheck = [];
                let scrollCheckLast = [];
                let intervaller = setInterval(() => {
                    scrollCheck.push(window.scrollY);
                    scrollCheckLast = scrollCheck.slice(-6);
                    if(scrollCheckLast.every( (val, i, arr) => val === arr[0] ) && scrollCheckLast[0] != 0){
                        letdata = Array.from(document.querySelectorAll('#video-title'), element => [element.textContent, element.href]);
                        clearInterval(intervaller);
                        resolve(letdata);
                    }
                    window.scrollBy(0, 1920);
                }, 500);

            }
            catch(err){
                console.log(err);
                reject(err.toString());
            }
        });
    });
    let dataArray = [];
    data.forEach(element => {
        const object = {
            "title": element[0],
            "link": element[1]
        }
        dataArray.push(object);
    });
    const jsonData = JSON.stringify(dataArray, null, '\t')
    fs.writeFileSync('duck.json', jsonData);
    await browser.close();

})();


