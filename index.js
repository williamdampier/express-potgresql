const express = require('express');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/posts.routes');

const app = express()

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log("App is running on port: ", PORT);
})