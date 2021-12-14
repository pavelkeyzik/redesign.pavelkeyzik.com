import { render } from '@testing-library/react';

import AllPosts from './all-posts';

describe('AllPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllPosts />);
    expect(baseElement).toBeTruthy();
  });
});
