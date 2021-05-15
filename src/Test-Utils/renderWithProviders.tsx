import { render as rtlRender } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';


function render(ui: React.ReactElement, options?: any) {
  // const {...rest} = options
  function Wrapper({ children } : { children: React.ReactNode}) {
    return (
      <MockedProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react'
export { render }


