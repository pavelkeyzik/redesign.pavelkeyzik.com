import { render } from '@testing-library/react';

import LastWorks from './last-works';

describe('LastWorks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LastWorks />);
    expect(baseElement).toBeTruthy();
  });
});
