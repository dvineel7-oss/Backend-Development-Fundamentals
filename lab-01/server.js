const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express Server!</h1>');
});

app.get('/about', (req, res) => {
    res.json({
        name: 'Dhanyasi vineel kumar',
        'Registration Number': '252U1R8016',
        section: 'CSE-QE-2A'
    });
});

app.get('/time', (req, res) => {
    res.json({
        'currentDateAndTime': new Date()
    });
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
