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

type Blog{
id:ID!
title:String!
description:String!
createdBy:ID!
createdAt:String!
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

input CreateBlogInput{
title:String!
description:String!
}

type Query{
getAllUsers:[User!]!
getAllBlogs:[Blog!]!
getUserBlogs(userId:ID):[Blog!]!
}

type Mutation{
createUser(userNew:CreateUserInput):User!
loginUser(loginInput:LoginUserInput):Token!
createBlog(blogNew:CreateBlogInput):Blog!
}
`;
export default typeDefs;
