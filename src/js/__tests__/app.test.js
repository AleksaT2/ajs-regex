import Validator from '../app';

test('test validateUsername', () => {
  expect(Validator.validateUsername('aBc123-456xYz')).toBeTruthy();
  expect(Validator.validateUsername('gIj78_90uVw')).toBeTruthy();
});
