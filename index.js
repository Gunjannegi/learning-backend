const express = require('express');
const app = express();
const port = 3000;
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

app.use(express.json());

app.use('/', ordersRouter);
app.use('/', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
