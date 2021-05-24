import { render as rtlRender } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from '../Context/AuthContext';


interface IOptions {
  // readonly mocks?: MockedResponse<Record<string, any>>
  mocks?: any
  addTypeName?: boolean
}

function render(ui: React.ReactElement, options?: IOptions ) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return (
      <MockedProvider addTypename={options?.addTypeName} mocks={options?.mocks}>
        <AuthProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </AuthProvider>
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
