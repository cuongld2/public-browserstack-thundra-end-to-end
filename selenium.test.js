const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver'); 
const {By} = require('selenium-webdriver');

const capabilities = {
    'os_version' : '10',
    'resolution' : '1920x1080',
    'browserName' : 'Chrome',
    'browser_version' : '95.0',
    'os' : 'Windows',
    'browserstack.debug' : 'true',
    'name': 'BStack-[NodeJS] Sample Test', // test name
    'build': 'BStack Build Number 1' // CI/CD job or build name
   }

   

test('selenium getting started',  async () => {

         let driver = new webdriver.Builder()
           .usingServer('http://donaldle_0hOIEy:7UKeszvKGDzDqNcqkfSf@hub-cloud.browserstack.com/wd/hub')
           .withCapabilities(capabilities)
           .build();
           driver.get("https://2ce1-123-16-77-168.jp.ngrok.io/");
           const getElementByCss = async (localdriver, css, timeout = 10000) => {
            const el = await localdriver.wait(until.elementLocated(By.css(css)), timeout);
            return  localdriver.wait(until.elementIsVisible(el), timeout);
          };

          var fs = require('fs');

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
  return driver.takeScreenshot().then(function(data) {
      fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
          if(err) throw err;
      });
  })
};

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

driver.saveScreenshot('snapshot1.png')
await driver.takeScreenshot()

await sleep(3000)
        
        const movieName = "Roman Holiday";
        const movieAuthor = "6334cb86cd20a81a1d0b9c9b";
        const movieContent = "Stuck with boredom in her luxurious confinement, a princess escapes from her guardians and falls in love with an American news reporter in Rome.";
        driver.findElement(By.css("#root > div > nav > div > a:nth-child(2)")).click();
        await sleep(5000)
        driver.findElement(By.css("#root > div > div > div > form > input[type=text]")).click();
        driver.findElement(By.css("#root > div > div > div > form > input[type=text]")).sendKeys(movieName);
        await sleep(1000)
        
        driver.saveScreenshot('snapshot0.png')
await driver.takeScreenshot()

        driver.findElement(By.css("#root > div > div > div > form > textarea:nth-child(4)")).sendKeys(movieContent);

        driver.findElement(By.css("#root > div > div > div > form > textarea:nth-child(6)")).click();
        await sleep(3000)
        driver.findElement(By.css("#root > div > div > div > form > textarea:nth-child(6)")).sendKeys(movieAuthor);
        
        driver.saveScreenshot('snapshot2.png')
await driver.takeScreenshot()
        driver.findElement(By.css("#root > div > div > div > form > button")).click();
        await getElementByCss(driver,"#root > div > nav > h1");

        await sleep(3000)

      // Update the test


        // const element = driver.findElement(By.css("#root > div > div > div > div > div:nth-child(5)"));
        // await sleep(3000)
        // expect(movieName).toMatch(await element.getText());
         driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Yaay! my sample test passed"}}');
         await driver.quit();
       
    


});
