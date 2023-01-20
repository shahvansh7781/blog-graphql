const typeDefs = `#graphql
type User{
id:ID!
name:String!
email:String!
password:String!
registeredAt:String!
}
type Token{
token:String!
}
input CreateUserInput{
name:String!
email:String!
password:String!
}
input LoginUserInput{
email:String!
password:String!
}
type Query{
getAllUsers:[User!]!
}
type Mutation{
createUser(userNew:CreateUserInput):User!
loginUser(loginInput:LoginUserInput):Token!
}
`;
export default typeDefs;
