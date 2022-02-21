import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import UserListing from './Component/UserListing';
import { Provider } from 'react-redux';
import Store from './Store/Store';

function App() {

   const client = new ApolloClient({
     uri:"http://localhost:4000",
     cache: new InMemoryCache(),
   })


  return (
    <div className="App">
      <Provider store={Store()}>
     <ApolloProvider client={client}>
       <UserListing/>
     </ApolloProvider>
     </Provider>
    </div>
  );
}

export default App;
