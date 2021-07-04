import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/index.js'
import bodyParser from 'body-parser'

dotenv.config()

const api = router

const app = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoDB, Atlas. Connected'))
    .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Server is running'
  })
})

app.use('/api/v1', api)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
