const gql = require('graphql-tag'); // 26.3k (gzipped: 7.8k)

module.exports = gql`

type Post {
    id: ID!
    body : String!
    createdAt: String!
    userName: String! 
}
type User{
    id: ID!
    email: String!
    token : String!
    username : String!
    createdAt: String!
}
input RegisterInput{
    username : String!
    password : String!
    confirmPassword : String!
    email : String!
   
}
type Query{
   getPosts : [Post]
}

type Mutatation{
    register(registerInput: RegisterInput): User!
}
`;