//RUN NPM START FOR BABEL TO WORK

import fetch from 'node-fetch';
const http = require('http');

export let customer = {
    name: 'Carl',
    details: { age: 82 },
};
const customerCity = customer.city ?? 'Unknown city';
console.log(customerCity); // Unknown city
