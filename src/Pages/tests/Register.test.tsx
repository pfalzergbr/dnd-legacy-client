import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Register from '../Register';

describe('Register component', () => {
  test('should render register component correctly', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const title = await screen.findByText(/3.5 wizard/i);
    const email = await screen.findByLabelText(/e-mail/i);
    const password = await screen.findByLabelText(/create password/i);
    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});

describe('Password validation', () => {
  test('should render validation criteria', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const lengthText = await screen.findByText(/at least 8 characters/i);
    const symbolText = await screen.findByText(/symbol/i);
    const upperCaseText = await screen.findByText(/uppercase/i);
    const lowerCaseText = await screen.findByText(/lowercase/i);
    const numberText = await screen.findByText(/number/i);
    expect(lengthText).not.toHaveClass('verified');
    expect(symbolText).not.toHaveClass('verified');
    expect(upperCaseText).not.toHaveClass('verified');
    expect(lowerCaseText).not.toHaveClass('verified');
    expect(numberText).not.toHaveClass('verified');
  });

  test('should flip class of at least 8 characters to verified, if it is at least 8 characters long', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const lengthText = await screen.findByText(/at least 8 characters/i);
    expect(lengthText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i)
    userEvent.type(passwordInput, 'longpassword')
    await waitFor(() => expect(lengthText).toHaveClass('verified'));
    userEvent.clear(passwordInput)
    await waitFor(() => expect(lengthText).not.toHaveClass('verified'));
  });

  test('should flip class of at least 8 characters to verified, if it includes a symbol', async () => {
    render(<Register />, { wrapper: MemoryRouter });
    const symbolText = await screen.findByText(/symbol/i);
    expect(symbolText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i)
    userEvent.type(passwordInput, 'abc$')
    await waitFor(() => expect(symbolText).toHaveClass('verified'));
    userEvent.clear(passwordInput)
    await waitFor(() => expect(symbolText).not.toHaveClass('verified'));
  });
});
