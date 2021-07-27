import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../Test-Utils/renderWithProviders';
import Login from '../Login';
import { render as renderWithApollo } from '../../Test-Utils/renderWithApollo';

describe('Login component', () => {
  test('should render Login component correctly', async () => {
    render(<Login />);
    const title = await screen.findByText(/3.5 wizard/i);
    const email = await screen.findByLabelText(/e-mail/i);
    const password = await screen.findAllByText('Password', { exact: true });
    expect(title).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password[0]).toBeInTheDocument();
  });

  test('should render "I forgot my password" link', async () => {
    render(<Login />);
    const forgotLink = await waitFor(() =>
      screen.getByRole('link', { name: /i forgot my password/i })
    );
    expect(forgotLink).toBeInTheDocument();
  });

  test('should render a disabled button if the forms are invalid', async () => {
    render(<Login />);
    const button = await waitFor(() =>
      screen.findByRole('button', { name: /log in/i })
    );
    expect(button).toBeDisabled();
  });
});

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Login functionality', () => {
  test('should redirect to Home page if login is successful', async () => {
    await renderWithApollo(<Login />);
    const emailInput = await screen.findByLabelText(/e-mail/i);
    const passwordInput = await screen.findByLabelText(/password/i);
    const loginButton = await screen.findByRole('button', { name: /log in/i });
    userEvent.type(emailInput, 'jon.snow@nights-watch.gov');
    userEvent.type(passwordInput, 'W1nterIsC@ming');
    await waitFor(() => expect(loginButton).toBeEnabled(), {
      timeout: 0,
    });
    userEvent.click(loginButton);
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const loadingMessage = await screen.findByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();
    await waitFor(() => expect(mockHistoryPush).toHaveBeenCalledWith('/home'));
  });

  test('should display an error if the user is not found', async () => {
    await renderWithApollo(<Login />);
    const emailInput = await screen.findByLabelText(/e-mail/i);
    const passwordInput = await screen.findByLabelText(/password/i);
    const loginButton = await screen.findByRole('button', { name: /log in/i });
    userEvent.type(emailInput, 'no1girl@faceless.br');
    userEvent.type(passwordInput, 'V@l@rMorghul1s');
    await waitFor(() => expect(loginButton).toBeEnabled(), {
      timeout: 0,
    });
    userEvent.click(loginButton);
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const loadingMessage = await screen.findByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const errorMessage = await screen.findByText(/cannot find this user/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should display an error if the password is incorrect', async () => {
    await renderWithApollo(<Login />);
    const emailInput = await screen.findByLabelText(/e-mail/i);
    const passwordInput = await screen.findByLabelText(/password/i);
    const loginButton = await screen.findByRole('button', { name: /log in/i });
    userEvent.type(emailInput, 'jon.snow@nights-watch.gov');
    userEvent.type(passwordInput, 'V@l@rMorghul1s');
    await waitFor(() => expect(loginButton).toBeEnabled(), {
      timeout: 0,
    });
    userEvent.click(loginButton);
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const loadingMessage = await screen.findByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    const errorMessage = await screen.findByText(/incorrect password/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
