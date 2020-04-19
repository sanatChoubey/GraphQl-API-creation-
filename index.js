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
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;
const resolvers = {
    Query: {
      books: () => books,
    },
    Query: {
        Author: ()=> Author
    },
    Mutation: {
        addBook : (title, author)=>   author
    }
    
  };
  const server = new ApolloServer({ typeDefs, resolvers });
  console.log('call')

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
