//RUN NPM START FOR BABEL TO WORK
import { data } from './data.json';
import fetch from 'node-fetch';
const http = require('http');

console.log('data', data);

export let customer = {
    name: 'Carl',
    details: { age: 82 },
};
const customerCity = customer.city ?? 'Unknown city';
console.log(customerCity); // Unknown city
