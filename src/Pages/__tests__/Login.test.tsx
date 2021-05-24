import { LOGIN } from '../../GraphQL/authQueries';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../Test-Utils/renderWithProviders';
import Login from '../Login';

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
    // const mocks = [
    //   {
    //     request: {
    //       query: LOGIN,
    //       // variables: {
    //       //   data: {
    //       //     email: 'jon.snow@nights-watch.gov',
    //       //     password: 'W1nterIsC@ming'
    //       //   }
    //       // }
    //     },
    //     result: {
    //       data: {
    //         login: {
    //           id: '609a33ae190f4c0b9cacf8b2',
    //           email: 'jon.snow@nights-watch.gov',
    //         },
    //       },
    //     },
    //   },
    // ];

    // await render(<Login />, { mocks });
    // const emailInput = await screen.findByLabelText(/e-mail/i);
    // const passwordInput = await screen.findByLabelText(/password/i);
    // const loginButton = await screen.findByRole('button', {name: /log in/i});
    // userEvent.type(emailInput, 'jon.snow@nights-watch.gov');
    // userEvent.type(passwordInput, 'W1nterIsC@ming');
    // userEvent.click(loginButton);
    // // await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    // const loadingMessage = waitFor(() => screen.findByText(/loading/i));
    // console.log(loadingMessage)
    // expect(loadingMessage).toBeInTheDocument()
    // const welcome = waitFor(() => screen.findByText(/yey/i));
    // expect(welcome).toBeInTheDocument()
  });

  test('should display an error if the user is not found', async () => {});

  test('should display an error if the password is incorrect', async () => {});
});
