import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from '../Login';


describe('Login component', () => {
  test('should render Login component correctly', () => {
    render(<Login/>, {wrapper: MemoryRouter })
    const title = screen.getByText(/3.5 wizard/i)
    const email = screen.getByLabelText(/e-mail/i)
    const password = screen.getByLabelText(/password/i)
    expect(title).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })
  
})
