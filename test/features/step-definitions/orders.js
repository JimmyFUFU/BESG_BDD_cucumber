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

When('I get orders by price from {int} to {int}', function (lower, upper) {
  this.result = OrdersDao.find_by_price_range(lower, upper);
});

Then('the orders should have length {int}', function (length) {
  expect(this.result).toHaveLength(length);
});

Then('the entry {int} of orders should match: customer is {string}, price is {string}', function (entry, name, price) {
  let result = this.result[entry - 1]
  expect(result.customer).toBe(name);
  expect(result.price).toBe(price);
});
