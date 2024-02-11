import { hello } from './ui';

describe('uiJs', () => {
  it('should work', () => {
    expect(hello()).toEqual('world');
  });
});
