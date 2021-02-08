SELECT E.first_name NAME,D.department_name DNAME
FROM employees E JOIN departments D
ON (E.department_id = D.department_id);

SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);







-- 4. Select "Asset's Registration#" and "Dealership's name" of all tuktuks which were sold before 17th December 2020

SELECT asset.registration_no,dealership.name
FROM(asset  INNER JOIN dealership ON dealership.id=asset.initial_dealership_id)
WHERE (asset.asset_type_id = 2 AND asset.initial_purchase_date < (12/17/2020))


-- 5. Select "Asset's Registration#", "Make name" and "Model name" of the following
-- Asset models ""1,2,3,5,6,8,9,12,23,24,29,30,51,54,59,64,68,80,81,115,126,239,250"" (provided numbers are Asset model IDs)

SELECT asset.registration_no,vehicle_make.name,vehicle_model.name
FROM ((asset
INNER JOIN vehicle_model ON vehicle_model.id = asset.model_id)
INNER JOIN vehicle_make ON vehicle_make.id = vehicle_model.vehicle_make_id)
WHERE model_id IN (1,2,3,5,6,8,9,12,23,24,29,30,51,54,59,64,68,80,81,115,126,239,250)

-- 6. Get statistics of 14th December 2020 about how many assets of each colour where sold that day. Sort Descending by count of color.


SELECT colour.name,COUNT(*)
FROM (asset INNER JOIN colour ON asset.colour_id = colour.id)
GROUP BY color.name
WHERE (asset.initial_purchase_date = (12/14/2020))
ORDER BY 2 DESC;