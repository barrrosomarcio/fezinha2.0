import DotENV from 'dotenv'
import express from 'express'

DotENV.config()
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json())


const server = app.listen(process.env.PORT, () => console.debug(`Heimdall API running on port [${process.env.PORT}]`));

export default server;