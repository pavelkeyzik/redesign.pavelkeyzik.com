import { render } from '@testing-library/react';

import DateFormat from './date-format';

describe('DateFormat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateFormat />);
    expect(baseElement).toBeTruthy();
  });
});
