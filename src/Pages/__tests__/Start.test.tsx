import { render, screen } from '../../Test-Utils/renderWithProviders';
import Start from '../Start';

describe('Start page', () => {
  test('should render start page correctly', () => {
    render(<Start />);
    const header = screen.getByText(/3.5 Wizard/i);
    expect(header).toBeInTheDocument();
  });

  test('should render Register and Login button', () => {
    render(<Start />);
    const loginButton = screen.getByRole('link', { name: /log in/i });
    const registerButton = screen.getByRole('link', { name: /register/i });
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
