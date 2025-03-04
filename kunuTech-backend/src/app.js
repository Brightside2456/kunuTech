const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const binRoutes = require('./routes/binRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const recycleRoutes = require('./routes/recycleRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const db = require('./config/db'); // Assuming you have a Firestore setup

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log("Works!!")
    res.json({message: "Server works"})
})


app.use('/api/auth', authRoutes);
app.use('/api/bins', binRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/recycle', recycleRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});