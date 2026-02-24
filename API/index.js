import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRouter);

//The app.get() function accepts two parameters. The first is used to specify the path (in this case, it is '/').
//The next parameter is a callback function where you define what happens when the GET request is called. 
// The function also has two parameters: the request body (req), which can containinformation such as the request 
// query string, parameters, body, and HTTP headers. While the response object (res) contains the information you want to se

app.get('/', (req, res) => {
    console.log('Received GET request at [GET ROUTE]');
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));