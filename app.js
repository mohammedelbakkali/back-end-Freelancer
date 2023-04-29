var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { ApolloServer } = require("@apollo/server");
var postRouter = require('./routes/post')
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var http = require('http');
var app = express();

var  bodyParser  = require('body-parser');
var  cors  = require('cors') ;
var {mongoose} = require('mongoose');
var { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const gql = require("graphql-tag");
var { typeDefs , resolvers } = require('./graphql/schema');

const { startStandaloneServer } = require("@apollo/server/standalone");


mongoose.connect('mongodb://127.0.0.1/database',).then(()=>{
                console.log('-> connexion to database ');
}).catch((err)=>{
                 console.log(err);
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/auth',authRouter);
app.use('/post', postRouter);
app.use('/users', usersRouter);



const httpServer = http.createServer(app);


      
// const server = new ApolloServer({ typeDefs, resolvers });

// startStandaloneServer(server, {
//   listen: { port: 4000 },
// }).then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });


app.listen(4000);

// module.exports = app;
