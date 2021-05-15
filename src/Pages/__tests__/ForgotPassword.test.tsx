import { screen, render } from '../../Test-Utils/renderWithProviders';
import ForgotPassword from '../ForgotPassword';

describe('Forgot Password screen', () => {
  test('should render form if not submitted yet', async () => {
    render(<ForgotPassword />);
    const forgotHeader = await screen.findByText(/where should we/i);
    expect(forgotHeader).toBeInTheDocument();
  });

  test('should render success screen if submitted', async () => {
    // render(<ForgotPassword />, { wrapper: MemoryRouter });
    // const emailInput = await screen.findByLabelText(/e-mail/i)
    // const senditButton = await screen.findByRole('button', {name: /send it/i})
    // userEvent.type(emailInput, 'frodo@baggins.sh')
    // userEvent.click(senditButton)
    //TODO - fix this test case
    // const successMessage = await screen.findByText(/email successfully sent/i)
    // expect(successMessage).toBeInTheDocument()
  });
});
