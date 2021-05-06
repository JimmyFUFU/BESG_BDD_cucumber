Feature: Get Orders
  Test the feature of getting orders.

  # Background:

  Scenario: Get orders from 500 to 1500
    Given I have some orders
      | id | customer    | price | created_at  |
      | 1  | Meta        | 2500  | 2021-04-03  |
      | 2  | Gin         | 1000  | 2021-05-03  |
      | 3  | Tina        | 700   | 2021-03-28  |
      | 4  | Rich        | 400   | 2021-05-02  |
    When I get orders by price from 500 to 1500
    Then the orders should have length 2
    Then the entry 1 of orders should match: customer is "Gin", price is "1000"
    Then the entry 2 of orders should match: customer is "Tina", price is "700"
