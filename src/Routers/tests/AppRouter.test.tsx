import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';

describe('Router navigation', () => {
  afterEach(() => {
    window.history.pushState({}, 'homepage', '/');
  });

  test('should render a loading component on lazy loaded routes', async () => {
    render(<AppRouter />, { wrapper: MemoryRouter });
    const loginLink = screen.getByRole('link', { name: /log in/i });
    userEvent.click(loginLink);
    const loadingMessage = await screen.findByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();
  })

  test('should render the right page if you click on login link', async () => {
    render(<AppRouter />, { wrapper: MemoryRouter });
    const welcomeMessage = screen.getByText(/3.5/i);
    expect(welcomeMessage).toBeInTheDocument();
    const loginButton = screen.getByRole('link', { name: /log in/i });
    userEvent.click(loginButton);
    const emailField = await waitFor(() => screen.getByText(/e-mail/i));
    const passwordField = await waitFor(() => screen.getAllByText(/password/i));
    expect(emailField).toBeInTheDocument();
    expect(passwordField[0]).toBeInTheDocument();
    const loginLink = screen.getByRole('link', { name: /log in/i });
    expect(loginLink).toHaveClass('active')
  });

  test('should render the right page if you click on register link', async () => {
    render(<AppRouter />, { wrapper: MemoryRouter });
    const welcomeMessage = await screen.findByText(/3.5/i);
    expect(welcomeMessage).toBeInTheDocument();
    const registerLink = await screen.findByRole('link', { name: /register/i });
    userEvent.click(registerLink);
    const registerButton = await screen.findByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument()
    // expect(registerLink).toHaveClass('active')
  });


  test('should render 404 page, if landing on a non-existing page', async () => {
    window.history.pushState({}, 'non-existent', '/there-be-dragons');
    render(<AppRouter />, { wrapper: MemoryRouter });
    const notFoundMessage = await screen.findByText(/404/i)
    expect(notFoundMessage).toBeInTheDocument()
  })
  
});
