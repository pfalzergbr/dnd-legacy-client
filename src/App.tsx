import AppRouter from './Routers/AppRouter';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './Services/client';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
