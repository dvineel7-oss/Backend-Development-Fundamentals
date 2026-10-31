
const express = require('express');

const app = express();

// Home page
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1>Welcome to My Express Server!</h1><p>Hello! Welcome to my first backend development project.</p>'
    );
});

// About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Dhanyasi vineel kumar',
        'Registration Number': '252U1R8016',
        section: 'CSE-QE-2A'
    });
});

// Time page
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateAndTime: new Date()
    });
});

// 404 page
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
