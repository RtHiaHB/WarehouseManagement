# Warehouse Management API
## Description
The Warehouse Management API allows you to manage the inventory and orders for a warehouse.  You can search for inventory by location or by SKU.  You can also get inventory totals grouped by SKU to get an overall picture of your inventory levels throughout the warehouse.

## Endpoints
### /Locations
#### Get all locations or find a location by aisle, column, and level

``` 
GET /locations?aisle=<aisle>&col=<column>&lvl=<level>
```

##### Query Parameters:

* ```'aisle'``` (optional): The aisle number of the location you're looking for.
* ```'col'``` (optional): The column number of the location you're looking for.
* ```'lvl'``` The level number of the location you're looking for.

Please note that you need all three of the above query parameters.  Anything else will give you all of the locations.

``` 
GET /locations?sku=<sku> 
```

##### Query Parameters:

* `'sku'` (required): the SKU of the product you're looking for.

#### Get a location by its ID

``` 
GET /locations/:id
```

##### Path Parameters:

* `'id'` (required): The ID of the location you want to retrieve.

#### Add a new location

```
POST /locations
```

##### Body Parameters:

* `'aisle'` (required): The aisle number of the new location.
* `'col_number'` (required): The column number of the new location.
* `'lvl'` (required): The level number of the new location.
* `'prod_id'` (required): The ID of the product being stored in the new location.
* `'qty'` (required): The quantity of that product stored in the new location.

#### Update an existing location
```
PUT /locations/:id
```

##### Path Parameters:

* `'id'` (required): the ID of the location you want to update.

##### Body Parameters:

* `'aisle'` (optional): The new aisle number for the location.
* `'col_number'` (optional): The new column number for tthe location.
* `'lvl'` (optional): The new level number for the location.
* `'prod_id'` (optional): The new product ID for the location.
* `'qty'` (optional): The new quantity for the product in the location.

#### Delete a location
```
DELETE /locations/:id
```

##### Path Parameters:

* `'id'` (required): The ID of the location you want to delete.

### /products
#### Get all products or get a product by SKU

```
GET /products?sku=<SKU>
```

##### Query Parameters:

* `'sku'` (optional): The SKU of the product you're looking for.

Please note that if you do not provide a SKU, the API will return all products.

#### Get an overview of the inventory for all products

```
GET /products/inv
```

This will give you the prod_id, sku, and sum of all products in locations grouped by prod_id.

#### Get a product by it's ID

```
GET products/:id
```

##### Path Parameters:

* `'id'` (required): The ID of the product you want to retrieve.

#### Add a new product

```
POST /products
```

##### Body Parameters:

* `'sku'` (required): The SKU of the new product.
* `'description'` (required): A short description of the new product.

#### Update an existing product

```
PUT /products/:id
```

##### Path Parameters:

* `'id'` (required): the ID of the location you want to update.

##### Body Parameters:

* `'sku'` (optional): The new SKU for the product.
* `'description'` (optional): The new description for the product.

#### Delete a product

```
DELETE /products/:id
```

##### Path Parameters:

* `'id'` (required): The ID of the product you want to delete.

### /users
#### Gets all users, or searches user by username

```
GET /users?username=<username>
```
##### Query Parameters:

* `'username'` (optional): The username of the user you're looking for.

#### Creates a new user
```
POST /user
```

##### Body Parameters:

* `'username'` (required): The user's username.
* `'password'` (required): The user's password to be hashed.
* `'role'` (required): The user's role: 0 for picker, 2 for clerical, 3 for manager.

### /authenticate
#### authenticates a user

```
POST /authenticate
```

##### Body Parameters:

* `'user_name'` (required): The user's username.
* `'password'` (required): The user's password.

### /authenticate/profile
#### Get the profile for the currently authenticated user

```
GET /authenticate/profile
```
No parameters

