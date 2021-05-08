import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Start from '../Start';

describe('Start page', () => {
  test('should render start page correctly', () => {
    render(<Start/>, { wrapper: MemoryRouter})
    const header = screen.getByText(/3.5 Wizard/i)
    expect(header).toBeInTheDocument()
  })
  
  test('should render Register and Login button', () => {
    render(<Start/>, { wrapper: MemoryRouter})
    const loginButton = screen.getByRole('link', {name: /log in/i})
    const registerButton = screen.getByRole('link', {name: /register/i})
    expect(loginButton).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
    
  })
  
})
