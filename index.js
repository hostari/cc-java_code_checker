import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.send(`This is a Java Code Checker, perform a POST /check with JSON body: {"code": encoded-base64-java-code } and you will get a response.`);
});

const port = parseInt(process.env.PORT) || 8082;
app.listen(port, () => {
  console.log(`app: listening on port ${port}`);
});
