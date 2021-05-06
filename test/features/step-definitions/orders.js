const { Given, When, Then } = require('cucumber');
const expect = require('expect');
const OrdersDao = require('../../../src/orders_dao');
var orders = require('../../../src/orders');

Given('I have some orders', function (table) {
  let columns = table.rawTable.shift();
  table.rawTable.forEach((row) => {
    order = {}
    row.map((value, index) => { order[columns[index]] = value })
    orders.push(order)
  })
})

When('I get orders by price from 500 to 1500', function () {
  this.result = OrdersDao.find_by_price_range(500, 1500);
});

Then('the orders should have length 2', function () {
  expect(this.result).toHaveLength(2);
});

Then('the entry 1 of orders should match: customer is Gin, price is 1000', function () {
  let result = this.result[0]
  expect(result.customer).toBe('Gin');
  expect(result.price).toBe('1000');
});

Then('the entry 2 of orders should match: customer is Tina, price is 700', function () {
  let result = this.result[1]
  expect(result.customer).toBe('Tina');
  expect(result.price).toBe('700');
});
