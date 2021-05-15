import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Login from '../Login';


describe('Login component', () => {
  test('should render Login component correctly', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Login />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const title = await screen.findByText(/3.5 wizard/i)
    const email = await screen.findByLabelText(/e-mail/i)
    const password = await screen.findAllByText('Password', {exact: true})
    expect(title).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password[0]).toBeInTheDocument()
  })
  
  test('should render "I forgot my password" link', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Login />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const forgotLink = await waitFor(() => screen.getByRole('link', {name: /i forgot my password/i}))
    expect(forgotLink).toBeInTheDocument()
  })
  

  test('should render a disabled button if the forms are invalid', async () => {
    render(
      <MockedProvider addTypename={false}>
        <Login />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
    const button = await waitFor(() => screen.findByRole('button', {name: /log in/i}))
    expect(button).toBeDisabled()
  })
  
})
