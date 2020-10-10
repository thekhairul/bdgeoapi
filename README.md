# bdgeoapi

A basic nodejs API to fetch division, district, upazila or union of Bangladesh as JSON

## base URL

https://bdgeoapi.herokuapp.com

## endpoints

- /divisions (GET) : gets all the divisions of Bangladesh.

  ```javascript
  fetch("https://bdgeoapi.herokuapp.com/divisions")
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

- /districts/:divisionID (GET) : Districts are mapped against their corresponding division. This endpoint gets all the districts matched with the provided division ID.

  ```javascript
  fetch("https://bdgeoapi.herokuapp.com/districts/6")
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

  This will return an array of districts under Dhaka division.

- /upazilas/:districtID (GET) : Upazilas are mapped against their corresponding district. This endpoint gets all the upazilas matched with the provided district ID.

  ```javascript
  fetch("https://bdgeoapi.herokuapp.com/upazilas/2")
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

  This will return an array of upazilas under Feni district.

- /unions/:upazilaID (GET) : Unions are mapped against their corresponding Upazilla. This endpoint gets all the unions matched with the provided upazila ID.

  ```javascript
  fetch("https://bdgeoapi.herokuapp.com/unions/19")
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

  This will return an array of unions under Feni Sadar upazila.

## credits

The idea and all the data was taken from this great project [Bangladesh Geocode](https://github.com/nuhil/bangladesh-geocode "Bangladesh Geocode") by [Nuhil Mehdy](https://github.com/nuhil "Nuhil Mehdy")
