<<<<<<< HEAD
import url from 'url';
const http = require('http');

=======
>>>>>>> f05205710798bec0f4cdafd3aef08a964d00a307
export let customer = {
    name: 'Carl',
    details: { age: 82 },
};
const customerCity = customer.city ?? 'Unknown city';
console.log(customerCity); // Unknown city
