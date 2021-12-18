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
           .usingServer('http://{account-browserstack}:{api-key-browserstack}@hub-cloud.browserstack.com/wd/hub')
           .withCapabilities(capabilities)
           .build();
           driver.get("endpoint");
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
        
        const movieName = "New movie for Thundra";
        const movieAuthor = "61b4778ba33fbf4e335cb1dd";
        const movieContent = "New movie for Thundra. New movie for Thundra . New movie for Thundra . New movie for Thundra . New movie for Thundra . New movie for Thundra. New movie for Thundra";
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


        const element = driver.findElement(By.css("#root > div > div > div > div > div:nth-child(5)"));
        await sleep(3000)
        expect(movieName).toMatch(await element.getText());
         driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Yaay! my sample test passed"}}');
         await driver.quit();
       
    


});
