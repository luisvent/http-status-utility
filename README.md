# HTTP Status Utility

This lightweight JavaScript library provides utility functions to work with HTTP status codes. It includes functions to get the status message from a given status code and vice versa. The library is easy to use and can be integrated into your projects effortlessly.

## Installation

To use this library, you can install it via npm:

```sh
$ npm install http-status-utility
```
## Usage

```js
const { StatusCode, getStatus, getCode } = require('http-status-utility');

// Get the status message from a status code
const statusMessage = getStatus(200);
console.log(statusMessage); // Output: "OK"

// Get the status code from a status message
const statusCode = getCode("Not Found");
console.log(statusCode); // Output: 404
```
## Functions
* getStatus(code)
### Parameters:
code (Number): HTTP status code.
Returns: (String) The corresponding status message.

* getCode(status)
### Parameters:
status (String): HTTP status message.
Returns: (Number) The corresponding status code.

## Examples
### Example 1:
```js
const { StatusCode, getStatus, getCode } = require('http-status-utility');

const statusMessage = getStatus(404);
console.log(statusMessage); // Output: "Not Found"

const statusCode = getCode("OK");
console.log(statusCode); // Output: 200
```
### Example 2:
```js
const { StatusCode, getStatus, getCode } = require('http-status-utility');

const statusMessage = getStatus(500);
console.log(statusMessage); // Output: "Internal Server Error"

const statusCode = getCode("Bad Request");
console.log(statusCode); // Output: 400
```

Feel free to customize this library according to your project requirements. Enjoy using it!

## License

[MIT](LICENSE)
