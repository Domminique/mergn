// npm install bcryptjs jsonwebtoken nodemon
// npm install @apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client
// install Apollo dev tools chrome, GraphQL extensions vs
//npm install react-router-dom semantic-ui-css semantic-ui-react

const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers')
const { MONGODB }= require('./config.js'); 
const typeDefs = require('./graphql/typeDefs'); 

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: ({req}) => ({req, pubsub})
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDb Connected');
        return server.listen({port: 5000 })
    }).then(res => {
        
    console.log(`server running at ${res.url}`)
})
.catch((err) => {
    console.log(err);
  });

