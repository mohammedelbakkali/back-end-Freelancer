var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { ApolloServer } = require("@apollo/server");
var postRouter = require('./routes/post')
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var categoryRouter = require('./routes/category');
var subCategoryRouter = require('./routes/subCategory');
var startsRouter = require('./routes/stars')
var packRouter = require('./routes/pack');
var fs = require('fs');

var socket = require('socket.io');

var languageRouter = require('./routes/language');
var skillRouter = require('./routes/skill');
var educationRouter = require('./routes/education');
var certificationRouter = require('./routes/certification');
var roomRouter = require('./routes/room');
var wishlistRouter = require('./routes/wishlist');

var http = require('http');
var app = express();
var multer = require('multer');
var upload = multer();
var  bodyParser  = require('body-parser');
var  cors  = require('cors') ;
var {mongoose} = require('mongoose');
var { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const gql = require("graphql-tag");
var { typeDefs , resolvers } = require('./graphql/schema');
var {engine} = require('express-handlebars');
const { startStandaloneServer } = require("@apollo/server/standalone");



var server = http.createServer(app);
var socketIO = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});


app.use(cors());


mongoose.connect('mongodb://127.0.0.1/database',).then(()=>{
                console.log('-> connexion to database ');
}).catch((err)=>{
                 console.log(err);
});

app.use(bodyParser.json());// pour convirtire le body en JSON 
app.use(bodyParser.urlencoded({ extended: true }))// pour lire data se forme de key value
// app.use(express.static(path.join(__dirname, 'pulic/product')));
app.use(express.static('pulic'));
app.use('/pulic', express.static('product'));


app.get('/pulic/product/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, 'pulic/product', imageName);
  
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(404).send('Image not found');
      } else {
        res.contentType('image/jpeg'); // Set the appropriate content type
        res.send(data);
      }
    });
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cookieParser());




app.use('/auth',authRouter);
app.use('/post', postRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter);
app.use('/subcategory',subCategoryRouter);
app.use('/pack',packRouter);
app.use('/reviews',startsRouter);
app.use('/wishlist',wishlistRouter);
app.use('/language',languageRouter);
app.use('/skill', skillRouter);
app.use('/education', educationRouter);
app.use('/certification', certificationRouter);
app.use('/room',roomRouter)


// const http = http.createServer(app);


      
// const server = new ApolloServer({ typeDefs, resolvers });

// startStandaloneServer(server, {
//   listen: { port: 4000 },
// }).then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });












// STRIPE:
require('dotenv').config()


//CORS which is already configured :  It is a security feature implemented by browsers to prevent unauthorized cross-origin requests.
//CORS allows server owners to specify who can access their resources by setting appropriate HTTP headers in the server's response

//BODY-PARSER which is already configured :The main purpose of body-parser is to handle different types of request bodies and convert them into a usable format. 
//It supports various formats, including JSON, URL-encoded data, raw text, and multipart/form-data (used for file uploads)

app.use(express.static("public"))
app.use(cors({origin: true,credentials: true}))

const stripe = require("stripe")("sk_test_51ND7qgBU1CNygU20VVi5dSi9xzLAX2MDAqkaCCMAfZVvY4RmkErpmPS8l74vhpHAB8RgGCbbm6ky4T721OYrGTQM00J5t9KAGW")

function calculateAmount(product) {
  // Calculate the payment amount based on the product information
  return product.price * 100; // Assuming the price is in dollars, convert it to cents
}

app.post("/checkout", async(req, res, next) => {
  const { order } = req.body; 
  console.log(req.body);
  const amount = order.price * 100;
  console.log(amount);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{

        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: order.name,
            description: order.description,
            
          },
        },
        quantity: 1,
        // {
        //   // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //   amount,
        //   quantity: 1,
        // },
    }],
      mode: 'payment',
      success_url: "http://localhost:4000/success.html",
      cancel_url: "http://localhost:4000/cancel.html",
    });
    res.status(200).json(session);
  } catch (error) {
    next(error);
  }
  
})











// Set up a socket connection event handler
socketIO.on('connection', (socket) => {
  console.log('User connected');

  // Handle chat message event
  socket.on('chat message', (msg) => {
     
    console.log('Message:', msg.message);
    console.log(msg)

    // Broadcast the message to all connected clients
    socketIO.emit('chat message', msg);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(4000,()=>{
  console.log('listening on 4000')
})

module.exports = app;

