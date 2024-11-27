const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const connectDB = require('./db/dbconnection');
const user = require('./db/user');

// Add CORS middleware here, before routes
app.use(cors());
app.use(express.json());
connectDB();

// Rest of your routes remain the same...
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new user({ username, password, });
        await newUser.save();
        res.status(200).send('User Registered');
        console.log(req.body);

    } catch (error) {
        console.error(error);
        res.status(500).send('Registration Failed');
    }
});

//for login

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await user.findOne({ username, password });
        if (userExists) {
            res.status(200).send('User Logged In');
        } else {
            res.status(401).send('Invalid Credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Login Failed');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running`);
});




















