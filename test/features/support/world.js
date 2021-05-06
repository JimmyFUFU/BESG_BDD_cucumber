const {setWorldConstructor, setDefaultTimeout} = require('cucumber');

class CustomWorld {
  constructor() {

  }
}

setDefaultTimeout(30 * 1000);
setWorldConstructor(CustomWorld);