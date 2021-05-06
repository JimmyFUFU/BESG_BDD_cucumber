const seleniumWebdriver = require('selenium-webdriver');
const {Before, After} = require('cucumber');

Before({tags: "@chrome"}, function() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
  return this.driver.manage().window();
});

After({tags: "@chrome"}, function() {
  return this.driver.quit();
});