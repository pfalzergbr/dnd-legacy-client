import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Login from '../Login';


describe('Login component', () => {
  test('should render Login component correctly', () => {
    render(<Login/>, {wrapper: MemoryRouter })
    const title = screen.getByText(/3.5 wizard/i)
    const email = screen.getByLabelText(/e-mail/i)
    const password = screen.getAllByText('Password', {exact: true})[0]
    expect(title).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })
  
  test('should render "I forgot my password" link', () => {
    render(<Login/>, {wrapper: MemoryRouter })
    const forgotLink = screen.getByRole('link', {name: /i forgot my password/i})
    expect(forgotLink).toBeInTheDocument()
  })
  

  test('should render a disabled button if the forms are invalid', () => {
    render(<Login/>, {wrapper: MemoryRouter })
    const button = screen.getByRole('button', {name: /log in/i})
    expect(button).toBeDisabled()
  })
  
})
