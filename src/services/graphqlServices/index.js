import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { env } from '../../enviroments'

const Client = new ApolloClient({
  //uri: 'https://guarded-mesa-19206.herokuapp.com/graphql',
  uri: env.graphqlApi,
  // headers:{
  //     'Authorization': 'bearer '+localStorage.getItem('token')
  // },
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})

export default Client
