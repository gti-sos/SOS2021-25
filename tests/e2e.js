const puppeteer = require('puppeteer');
const screenshotPath = './tests/e2e_screenshoots/';

(async () => {
    const browser = await puppeteer.launch();
    console.log("Browser opened");

    const page = await browser.newPage();
    await page.setViewport({ width: 3688, height: 1768 });
    await page.goto('https://sos2021-25.herokuapp.com/');

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

    var rowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`Initial row count = ${rowCount}`);


    console.log ("Search andalucia before insert");
    await page.focus('td:nth-child(1) > input:nth-child(1)');
    await page.keyboard.type("andalusia");
    console.log("Taking an screenshot with data (Before search)");
    await page.focus("td:nth-child(8)");
    await page.click('td:nth-child(8)');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: screenshotPath + '01_BeforeInsertData.png' });

    var rowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`andalusia row count = ${rowCount}`);

    await page.focus('td:nth-child(2) > input:nth-child(1)');
    await page.keyboard.type("2014");
    await page.focus('td:nth-child(3) > input:nth-child(1)');
    await page.keyboard.type("123");
    await page.focus('td:nth-child(4) > input:nth-child(1)');
    await page.keyboard.type("123");
    await page.focus('td:nth-child(5) > input:nth-child(1)');
    await page.keyboard.type("123");
    await page.focus('td:nth-child(6) > input:nth-child(1)');
    await page.keyboard.type("123");

    console.log("Taking an screenshot with data (For insert)");

    await page.screenshot({ path: screenshotPath + '02_InsertingData.png' });
    await page.focus("td:nth-child(7)");
    await page.click('td:nth-child(7)');
    await page.waitForTimeout(2000);

    console.log("Taking an screenshot inserted data");
    await page.screenshot({ path: screenshotPath + '03_InsertedData.png' });

    await page.focus('td:nth-child(1) > input:nth-child(1)');
    await page.keyboard.type("andalusia");

    console.log("Taking an screenshot with data (For search)");

    await page.screenshot({ path: screenshotPath + '04_SearchingData.png' });
    await page.focus("td:nth-child(8)");
    await page.click('td:nth-child(8)');
    await page.waitForTimeout(2000);

    var rowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`andalusia row count = ${rowCount}`);

    console.log("Taking an screenshot searched data");
    await page.screenshot({ path: screenshotPath + '05_SearchedData.png' });

    await browser.close();
    console.log("Browser closed!");

})();