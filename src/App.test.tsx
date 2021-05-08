import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dummy app component', () => {
  render(<App />);
  const helloElement = screen.getByText(/hello dungeon/i);
  expect(helloElement).toBeInTheDocument();
});
