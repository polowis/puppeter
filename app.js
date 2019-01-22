const puppeteer = require('puppeteer');

(async() => {

   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://kenh14.vn');
    const result = 'h3.knswli-title > a'
    await page.waitForSelector(result)
  //in console
    const articles = await page.evaluate(() => {
        let titleLinks = Array.from(document.querySelectorAll('h3.knswli-title > a'));
        return titleLinks.map(link => ({
            title: link.getAttribute('title'),
            url: link.getAttribute('href')
        }));
        
        
    });

   
    console.log(articles);
    await browser.close();
})();
