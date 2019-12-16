import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock("Test Stock","TSC",85,80)).toBeTruthy();
  });
});
