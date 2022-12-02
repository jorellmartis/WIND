import { ApolloClient, InMemoryCache } from '@apollo/client';
const apolloClient = new ApolloClient({
    uri: 'http://localhost:1338/graphql',
    cache: new InMemoryCache(),
    ssrMode: true,
    });

export default apolloClient