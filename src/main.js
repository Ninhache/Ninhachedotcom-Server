const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

// list of routers
const jSeriesRouter = require('./routes/JustSeries');
const portfolioRouter = require('./routes/Portfolio');
const resumeRouter = require('./routes/Resume');
const mazeRouter = require('./routes/MazeThings');


app.use(express.static(__dirname + '/public'));

app.get(/^\/$/, (req, res) => {
    res.redirect(301, '/Portfolio');
});

app.use('/Portfolio', portfolioRouter);
app.use('/JustSeries', jSeriesRouter);
app.use('/Resume', resumeRouter);
app.use('/MazeThings', mazeRouter);

app.all('*', (req, res) => {
    res.redirect(301, '/Portfolio');
}
);

app.listen(port, () => {
    console.log(`Look http://localhost:${port}`)
});
