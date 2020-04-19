const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];
const Author = [
    {
        title: 'InsideOut',
        author: 'primeVide',
        books:[ {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
        }]
    }
]  
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type Author {
    title: String
    author: String,
    books: [Book]
  }
  type Query {
    books: [Book]
    Author: [Author]
  }
`;
const resolvers = {
    Query: {
      books: () => books,
    },
    Query: {
        Author: ()=> Author
    }
  };
  const server = new ApolloServer({ typeDefs, resolvers });
  console.log('call')

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
