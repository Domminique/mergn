const { ApolloServer } = require('apollo-server');
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers')
const { MONGODB }= require('./config.js'); 
const typeDefs = require('./graphql/typeDefs');



const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDb Connected');
        return server.listen({port: 3000 })
    }).then(res => {
    console.log(`server running at $(res.url)`)
})

