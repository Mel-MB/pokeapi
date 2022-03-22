import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('hello from express with Typescript')
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listenning on PORT ${port}`))