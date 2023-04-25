const gql = require("graphql-tag");
const {
    addData,
    getOneById,
    getAll,
    update,
    deleteOne
 } = require('../controllers/post');


const Post = require('../models/post');
const { json } = require("body-parser");
const typeDefs = gql`
  type Post {
      title:String
      description:String
      status:String
  }
  
  type Query {
    getPostById(id:ID):Post!
    getPosts: [Post]!
  }
`;



const resolvers = {
    Query: {
        getPosts:() => {
            const posts = JSON.parse(getAll);
          return posts;
          },
          getPostById:async () => {}
    },
  };






module.exports = { typeDefs , resolvers};