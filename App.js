const express = require('express')
const { Pool } = require('pg');
const {sequelize} = require('../sequelize/models')
const cors = require('cors'); 
const { signUp, Login } = require('../controllers/userController');




//creating the instance of the express with the variable app
const app = express();

//telling the app to accept the json data else it will throw an error of the typeError cannot read properties of undefined
app.use(express.json())

//When a web application running at one origin (e.g., http://localhost:3000) tries to make a request to a different origin (e.g., http://localhost:3002), the browser enforces a security policy known as the Same-Origin Policy.
//To resolve this issue, you need to configure your server (http://localhost:3002) to include the appropriate CORS headers in its responses.
app.use(cors())

app.use('/api/signUp', signUp)

app.use('/api/Login', Login)



// app.get('/user', (req, res) => {
//     res.send(user)
// })

// app.post('/users', async (req , res)=>{
// try{
// const salt = await bcrypt.genSalt()
// const hashed = await bcrypt.hash(salt + req.body.password, 10)
// const user = {name : req.body.name, password: hashed}
// users.push(user)
// res.status(201).send("Success")
// console.log(users)
// }catch{
//     res.status(500).send("Something is wrong ")
// }
// })

const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log("Successfully connected to database.");
    } catch (error) {
      console.log("An error occured while connecting to database, \n", error);
      process.exit(1);
    }
  };
  (async () => {
    await connectDB();
  
    app.listen(3002, () =>
      console.log("Server running on the port",  3002)
    );
  })();
  

// code for database connection and entry
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');


const PORT = process.env.PORT || 3001;

// Configure body parser to parse JSON bodies
app.use(bodyParser.json());

// Connect to PostgreSQL database
const sequelize = new Sequelize('chatbotdata', 'tharunmai', 'tharunmai@08', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define a model for the User table
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Define a route to handle user registration
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
