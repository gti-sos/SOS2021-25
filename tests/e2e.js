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

    var initialRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`Initial row count = ${initialRowCount}`);
    if (initialRowCount != 12){
        console.error("Initial row count is not 12");
        process.exit(1);
    }
        



    console.log ("Search andalucia before insert");
    await page.focus('td:nth-child(1) > input:nth-child(1)');
    await page.keyboard.type("andalusia");
    console.log("Taking an screenshot with data (Before search)");
    await page.focus("td:nth-child(8)");
    await page.click('td:nth-child(8)');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: screenshotPath + '01_BeforeInsertData.png' });

    var searchRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`search andalusia row count = ${searchRowCount}`);
    if (searchRowCount!=7){
        console.error("searchRowCount is not 7");
        process.exit(1);
    }
        

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

    var finalRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`added one resource andalusia row count = ${finalRowCount}`);
    if (finalRowCount!=8){
        console.error("finalRowCount doesn't increase when adding data");
        process.exit(1);
    }




    console.log("Taking an screenshot searched data");
    await page.screenshot({ path: screenshotPath + '05_SearchedData.png' });



    //Evictions
    console.log("--------------------------------");
    console.log("Go to Evictions Frontend.");
    await page.click("li.nav-item:nth-child(1) > a:nth-child(1) > button:nth-child(1)"),
    console.log("Clicked \"frontend page\" link, waiting data...");
    await page.waitForTimeout(1000);
    await page.click("div.article:nth-child(2) > a:nth-child(3) > button:nth-child(1)"),
    console.log("Clicked \"frontend page\" link, waiting data...");
    await page.waitForTimeout(1000);
    console.log("Taking an screenshot");
    await page.screenshot({ path: screenshotPath + 'Evictions.png' });

    var initialEvictionsRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`Initial row count = ${initialEvictionsRowCount}`);
    if (initialEvictionsRowCount != 12){
        console.error("Initial row count in Evictions front-end is not 12");
        process.exit(1);
    }
        



    console.log ("Search cataluña before insert");
    await page.focus('#nuevalocation');
    await page.keyboard.type("catalonia");
    console.log("Taking an screenshot with data (Before search)");
    await page.focus("tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)");
    await page.click('tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: screenshotPath + '01_BeforeInsertDataEviction.png' });

    var searchEvictionsRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`search cataluña row count = ${searchEvictionsRowCount}`);
    if (searchEvictionsRowCount!=7){
        console.error("searchEvictionsRowCount is not 7");
        process.exit(1);
    }

    await page.focus("#cancelar > button:nth-child(1)");
    await page.click('#cancelar > button:nth-child(1)');

    await page.waitForTimeout(2000);
    
    console.log ("Insert new data Cataluña in Evictions");    
    await page.focus('#nuevalocation');
    await page.keyboard.type("catalonia");
    await page.focus('#nuevoyear');
    await page.keyboard.type("2001");
    await page.focus('#nuevototal');
    await page.keyboard.type("12345");
    await page.focus('#nuevorustic');
    await page.keyboard.type("12345");
    await page.focus('#nuevohousehold');
    await page.keyboard.type("12345");
    await page.focus('#nuevobuildinglot');
    await page.keyboard.type("12345");
    await page.focus('#nuevoother');
    await page.keyboard.type("12345");

    console.log("Taking an screenshot with data (For insert in Evictions)");

    await page.screenshot({ path: screenshotPath + '02_InsertingDataEvictions.png' });
    await page.focus("#cancelar > button:nth-child(1)");
    await page.click('#cancelar > button:nth-child(1)');
    await page.waitForTimeout(2000);

    console.log("Taking an screenshot inserted data in Evictions");
    await page.screenshot({ path: screenshotPath + '03_InsertedDataEvictions.png' });

    await page.focus('#nuevalocation');
    await page.keyboard.type("catalonia");

    console.log("Taking an screenshot with data in Evictions (For search)");

    await page.screenshot({ path: screenshotPath + '04_SearchingEvictionsData.png' });
    await page.focus("tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)");
    await page.click('tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)');
    await page.waitForTimeout(2000);

    var finalEvictionsRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`added one resource andalusia row count = ${finalEvictionsRowCount}`);
    if (finalEvictionsRowCount!=8){
        console.error("finalEvictionsRowCount doesn't increase when adding data");
        process.exit(1);
    }

    console.log("Taking an screenshot searched data in Evictions");
    await page.screenshot({ path: screenshotPath + '05_SearchedEvictionsData.png' });

    console.log("To delete Cataluña 2001 data in Evictions");
    await page.waitForTimeout(2000);
    await page.focus("tr.svelte-jlgssw:nth-child(7) > td:nth-child(9) > button:nth-child(1)");
    await page.click('tr.svelte-jlgssw:nth-child(7) > td:nth-child(9) > button:nth-child(1)');
    await page.waitForTimeout(2000);
    
    console.log("Taking an screenshot with data (after delete)");
    await page.focus("tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)");
    await page.click('tbody.svelte-jlgssw > tr:nth-child(1) > td:nth-child(9) > button:nth-child(1)');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: screenshotPath + '06_AfterDeleteDataEviction.png' });

    var searchEvictionsRowCount = (await page.$$("tr:nth-child(n)")).length;
    console.log(`search cataluña row count = ${searchEvictionsRowCount}`);
    if (searchEvictionsRowCount!=7){
        console.error("searchEvictionsRowCount is not 7");
        process.exit(1);
    }

    await browser.close();
    console.log("Browser closed!");
    process.exit(0);

})();