-- Write SQL Queries to get the following: 

-- Table Name: Products                             Table Name: ProductsPrice

-- ProductID   ProductName                          ProductID   ProductPrice
-- 1           Apple                                    1           10.0
-- 2           Banana                                   2           2.1
-- 3           Cucumber                                 3           5.5
-- 4           Watermelon                               4           20.0
-- 5           Ice-cream                                5           0.5
-- 6           Orange                                   6           0.8
-- 7           Eggplant                                 7           2.0
-- 8           Egg                                      8           40.0


-- 1. Count number of products 
SELECT COUNT(ProductName)
 FROM Products

-- 2. Get least expensive product name and price 

Select Products.productName ,min(ProductsPrice.productPrice)
 FROM Products 
  INNER JOIN ProductsPrice ON Products.ProductID = ProductsPrice.ProductID

-- 3. Count number of products with price less than 5 

SELECT COUNT(ProductPrice) 
 FROM ProductsPrice
  WHERE ProductPrice < 5; 


