import { render as rtlRender } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

function Wrapper({ children } : { children: React.ReactNode}) {
  return (
    <MockedProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </MockedProvider>
  );
}

function render(ui: React.ReactElement, options?: any) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react'
export { render }


