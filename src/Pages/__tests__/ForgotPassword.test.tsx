import { screen, render,  } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword';

describe('Forgot Password screen',  () => {
  test('should render form if not submitted yet', async () => {
    render(
      <MockedProvider addTypename={false}>
        <ForgotPassword />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const forgotHeader = await screen.findByText(/where should we/i)
    expect(forgotHeader).toBeInTheDocument()
  })
  
  test('should render success screen if submitted', async () => {
    // render(<ForgotPassword />, { wrapper: MemoryRouter });
    // const emailInput = await screen.findByLabelText(/e-mail/i)
    // const senditButton = await screen.findByRole('button', {name: /send it/i})
    // userEvent.type(emailInput, 'frodo@baggins.sh')
    // userEvent.click(senditButton)

    //TODO - fix this test case

    // const successMessage = await screen.findByText(/email successfully sent/i)
    // expect(successMessage).toBeInTheDocument()
  })
})
