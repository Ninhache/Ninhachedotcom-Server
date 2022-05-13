const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// list of routers
const jSeriesRouter = require('./routes/JustSeries');
const portfolioRouter = require('./routes/Portfolio');
const resumeRouter = require('./routes/Resume');


app.use(express.static(__dirname + '/public'));

app.get(/^\/$/, (req, res) => {
    res.redirect(301, '/portfolio');
});

app.use('/Portfolio', portfolioRouter);
app.use('/JustSeries', jSeriesRouter);
app.use('/Resume', resumeRouter);

app.all('*', (req, res) => {
    res.redirect(301, '/portfolio');
}
);

app.listen(port, () => {
    console.log(`Look http://localhost:${port}`)
});