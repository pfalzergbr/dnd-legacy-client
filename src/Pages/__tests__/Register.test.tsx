import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Register from '../Register';

describe('Register component', () => {
  const mocks = [];

  test('should render register component correctly', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const title = await screen.findByText(/3.5 wizard/i);
    const email = await screen.findByLabelText(/e-mail/i);
    const password = await screen.findByLabelText(/create password/i);
    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('should send a request with the correct data when the form is filled', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );

    const emailInput = await screen.findByLabelText(/e-mail/i);
    const passwordInput = await screen.findByLabelText(/create password/i);
    const registerButton = await screen.findByRole('button', {
      name: /register/i,
    });
    userEvent.type(emailInput, 'gimli@moria.me');
    userEvent.type(passwordInput, 'My@xe1sYourz');
    userEvent.click(registerButton);
    //TODO - ADD testing the call
  });
});

describe('Password validation', () => {
  test('should render validation criteria', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
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
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const lengthText = await screen.findByText(/at least 8 characters/i);
    expect(lengthText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i);
    userEvent.type(passwordInput, 'longpassword');
    await waitFor(() => expect(lengthText).toHaveClass('verified'));
    userEvent.clear(passwordInput);
    await waitFor(() => expect(lengthText).not.toHaveClass('verified'));
  });

  test('should flip class of symbol if it includes a symbol', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const symbolText = await screen.findByText(/symbol/i);
    expect(symbolText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i);
    userEvent.type(passwordInput, 'abc$');
    await waitFor(() => expect(symbolText).toHaveClass('verified'));
    userEvent.clear(passwordInput);
    await waitFor(() => expect(symbolText).not.toHaveClass('verified'));
  });

  test('should flip class of number if text input includes number', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const numberText = await screen.findByText(/number/i);
    expect(numberText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i);
    userEvent.type(passwordInput, 'abc42');
    await waitFor(() => expect(numberText).toHaveClass('verified'));
    userEvent.clear(passwordInput);
    await waitFor(() => expect(numberText).not.toHaveClass('verified'));
  });

  test('should flip class of uppercase if text input includes uppercase letter', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const upperCaseText = await screen.findByText(/uppercase/i);
    expect(upperCaseText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i);
    userEvent.type(passwordInput, 'aBc');
    await waitFor(() => expect(upperCaseText).toHaveClass('verified'));
    userEvent.clear(passwordInput);
    await waitFor(() => expect(upperCaseText).not.toHaveClass('verified'));
  });

  test('should flip class of lowerrcase if text input includes lowercase letter', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Register />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const lowerCaseText = await screen.findByText(/lowercase/i);
    expect(lowerCaseText).not.toHaveClass('verified');
    const passwordInput = await screen.findByLabelText(/create password/i);
    userEvent.type(passwordInput, 'LOWercase');
    await waitFor(() => expect(lowerCaseText).toHaveClass('verified'));
    userEvent.clear(passwordInput);
    await waitFor(() => expect(lowerCaseText).not.toHaveClass('verified'));
  });
});