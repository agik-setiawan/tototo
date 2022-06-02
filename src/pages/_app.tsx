import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, InMemoryCache, HttpLink, from, ApolloClient } from '@apollo/client'
import { Provider } from 'react-redux'
import { onError } from "@apollo/client/link/error";
import store from '../store';

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql.anilist.co" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
