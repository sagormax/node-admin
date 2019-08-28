const express	= require('express');
const app	    = express();
const port	    = 3000;

app.get('/', (req, res) => {
    res.send('hi its working...');
});

app.listen(port, () => console.log(`Node Admin is running on ${port} port`));
