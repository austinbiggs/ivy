import { render } from '@testing-library/react';

import UiNext from './ui-next';

describe('UiNext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiNext />);
    expect(baseElement).toBeTruthy();
  });
});
