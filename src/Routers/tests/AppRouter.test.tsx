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
    const loginLink = screen.getByRole('link', { name: /log in/i });
    userEvent.click(loginLink);
    const emailField = await waitFor(() => screen.getByText(/e-mail/i));
    const passwordField = await waitFor(() => screen.getByText(/password/i));
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginLink).toHaveClass('active')
  });

  test('should render the right page if you click on register link', async () => {
    render(<AppRouter />, { wrapper: MemoryRouter });
    const welcomeMessage = await screen.findByText(/3.5/i);
    expect(welcomeMessage).toBeInTheDocument();
    const registerLink = screen.getByRole('link', { name: /register/i });
    userEvent.click(registerLink);
    const registerTitle = await waitFor(() =>
      screen.getByText(/register page/i)
    );
    expect(registerTitle).toBeInTheDocument();
  });


  test('should render 404 page, if landing on a non-existing page', async () => {
    window.history.pushState({}, 'non-existent', '/there-be-dragons');
    render(<AppRouter />, { wrapper: MemoryRouter });
    const notFoundMessage = await screen.findByText(/404/i)
    expect(notFoundMessage).toBeInTheDocument()
  })
  
});
