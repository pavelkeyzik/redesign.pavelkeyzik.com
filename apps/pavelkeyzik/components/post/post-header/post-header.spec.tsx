import { render } from '@testing-library/react';

import PostHeader from './post-header';

describe('PostHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostHeader />);
    expect(baseElement).toBeTruthy();
  });
});
