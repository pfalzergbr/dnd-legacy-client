import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Register from '../Register';

describe('Register component', () => {
  test('should render register component correctly', () => {
    render(<Register />, { wrapper: MemoryRouter });
    const title = screen.getByText(/3.5 wizard/i);
  });
});
