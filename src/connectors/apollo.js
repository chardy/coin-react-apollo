import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createApolloFetch } from 'apollo-fetch'

const uri = 'http://localhost:4000/graphql'

const client = new ApolloClient({
  link: new createHttpLink({
    uri
  }),
  cache: new InMemoryCache(),
})

const apolloFetch = createApolloFetch({ uri });

export {client, apolloFetch}
