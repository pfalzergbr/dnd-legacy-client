import AppRouter from './Routers/AppRouter';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './Services/client';

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </div>
  );
}

export default App;
