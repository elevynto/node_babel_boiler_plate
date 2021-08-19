import { customer } from './index';

describe('test description', () => {
    it('test requirement', () => {
        expect(customer.name).toEqual('Carl');
    });
});
