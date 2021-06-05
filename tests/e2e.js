const puppeteer = require('puppeteer');
const screenshotPath = './tests/e2e_screenshoots/';

(async () => {
    const browser = await puppeteer.launch();
    console.log("Browser opened");

    const page = await browser.newPage();
    await page.setViewport({ width: 3688, height: 1768 });
    await page.goto('http://localhost:10000/');

    //Home
    console.log("Page opened. Taking an screenshot");
    await page.screenshot({ path: screenshotPath + 'HOME.png' });

    //Info
    console.log("Info page");
    await page.click(".repourl > a:nth-child(2)");
    await page.waitForTimeout(1000);
    await page.screenshot({ path: screenshotPath + 'INFO.png' });


    //Sales
    await page.click("div.group:nth-child(3) > div:nth-child(1) > a:nth-child(3)"),
    console.log("Clicked \"frontend page\" link, waiting data...");
    await page.waitForTimeout(1000);
    console.log("Taking an screenshot");
    await page.screenshot({ path: screenshotPath + 'Sales.png' });

    var rowCount = (await page.$$("tr.svelte-mkzily:nth-child(n)")).length;
    console.log(`Initial row count = ${rowCount}`);

    await page.$eval('td:nth-child(1) > input:nth-child(1)', el => el.value = "andalusia");
    await page.$eval('td:nth-child(2) > input:nth-child(1)', el => el.value = '2014');
    await page.$eval('td:nth-child(3) > input:nth-child(1)', el => el.value = '1234');
    await page.$eval('td:nth-child(4) > input:nth-child(1)', el => el.value = '123');
    await page.$eval('td:nth-child(5) > input:nth-child(1)', el => el.value = '321');
    await page.$eval('td:nth-child(6) > input:nth-child(1)', el => el.value = '520');

    console.log("Taking an screenshot with data");

    await page.screenshot({ path: screenshotPath + 'InsertingData.png' });
    await page.click('td:nth-child(7)');
    await page.waitForTimeout(500);

    console.log("Taking an screenshot inserted data");
    await page.screenshot({ path: screenshotPath + 'InsertedData.png' });

    await browser.close();
    console.log("Browser closed!");

})();