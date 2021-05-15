import { render, screen, waitFor } from '../../Test-Utils/renderWithProviders';
import { MockedProvider } from '@apollo/client/testing'
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Login from '../Login';


describe('Login component', () => {
  test('should render Login component correctly', async () => {
    render(<Login />);
    const title = await screen.findByText(/3.5 wizard/i)
    const email = await screen.findByLabelText(/e-mail/i)
    const password = await screen.findAllByText('Password', {exact: true})
    expect(title).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password[0]).toBeInTheDocument()
  })
  
  test('should render "I forgot my password" link', async () => {
    render(<Login />);
    const forgotLink = await waitFor(() => screen.getByRole('link', {name: /i forgot my password/i}))
    expect(forgotLink).toBeInTheDocument()
  })
  

  test('should render a disabled button if the forms are invalid', async () => {
    render(<Login />);
    const button = await waitFor(() => screen.findByRole('button', {name: /log in/i}))
    expect(button).toBeDisabled()
  })
  
})
