import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { number } from 'yup/lib/locale';
import Register from '../Register';

describe('Register component', () => {
  test('should render register component correctly', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const title = await screen.findByText(/3.5 wizard/i);
    const email = await screen.findByLabelText(/e-mail/i)
    const password = await screen.findByLabelText(/create password/i)
    expect(title).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  });
});

describe('Password validation', () => {
  test('should render validation criteria', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const lengthText = await screen.findByText(/at least 8 characters/i)
    const symbolText = await screen.findByText(/symbol/i)
    const upperCaseText = await screen.findByText(/uppercase/i)
    const lowerCaseText = await screen.findByText(/lowercase/i)
    const numberText = await screen.findByText(/number/i)
    expect(lengthText).not.toHaveClass('verified')
    expect(symbolText).not.toHaveClass('verified')
    expect(upperCaseText).not.toHaveClass('verified')
    expect(lowerCaseText).not.toHaveClass('verified')
    expect(numberText).not.toHaveClass('verified')
  })
  
})
