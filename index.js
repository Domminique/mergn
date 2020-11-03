const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag'); // 26.3k (gzipped: 7.8k)
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
const { MONGODB }= require('./config.js'); 

const typeDefs = gql`
type Query{
    sayHi : String!
}
`
const resolvers = {
    Query: {
        sayHi: () => 'Hello world'
    }
}
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

