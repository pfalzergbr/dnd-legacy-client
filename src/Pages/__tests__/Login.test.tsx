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

describe('Login functionality', () => {
  test('should redirect to Home page if login is successful', async () => {
    await renderWithApollo(<Login />);
    const emailInput = await screen.findByLabelText(/e-mail/i);
    const passwordInput = await screen.findByLabelText(/password/i);
    const loginButton = await screen.findByRole('button', { name: /log in/i });
    // // console.log(loginButton);
    userEvent.type(emailInput, 'jon.snow@nights-watch.gov');
    userEvent.type(passwordInput, 'W1nterIsC@ming');
    // // userEvent.click(loginButton);
    // await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    // screen.debug();
    // const loadingMessage = await screen.findByText(/loading/i);
    // waitFor(() => expect(loadingMessage).toBeInTheDocument());
    // // const welcome = await screen.findByText(/yey/i);
    // // expect(welcome).toBeInTheDocument();
  });

  test('should display an error if the user is not found', async () => {});

  test('should display an error if the password is incorrect', async () => {});
});
