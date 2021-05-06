const { Given, When, Then } = require('cucumber');
let {By} = require('selenium-webdriver');
const expect = require('expect');

Given('我進入立捷建設的網站', async function(){
  this.driver.get('http://fuhouse.com.tw');
  await sleep(3000);
})

When('我點選導覽列的{string}', async function(text){
  let formBtn = await this.driver.findElement(By.linkText(text));
  formBtn.click();
  await sleep(3000);
})

When('我勾選本人知悉並同意隱私權政策規範內容', async function(){
  let agreeBtn = await this.driver.findElement(By.css("#submitCheck"));
  agreeBtn.click();
  await sleep(3000);
})

Then('立即預約按鈕應為可點選', async function(){
  let element =  await this.driver.findElement(By.css("button#submit")).isEnabled()
  expect(element).toBe(true);
})

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
