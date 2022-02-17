import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import UserListing from './Component/UserListing';

function App() {

   const client = new ApolloClient({
     uri:"http://localhost:4000",
     cache: new InMemoryCache(),
   })


  return (
    <div className="App">
     <ApolloProvider client={client}>
       <UserListing/>
     </ApolloProvider>
    </div>
  );
}

export default App;
