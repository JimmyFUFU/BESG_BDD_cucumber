var orders = require('./orders');

const find_by_price_range = (lower, upper) => {
  return orders.filter(order => {
    return order.price >= lower && order.price <= upper;
  });
}

module.exports = { find_by_price_range };
