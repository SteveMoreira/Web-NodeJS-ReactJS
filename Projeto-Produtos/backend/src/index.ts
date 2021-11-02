import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from './routes'

const app = express()
createConnection()

app.use(bodyParser())
app.use(routes)

app.listen(3003, () => {
    console.log('Backend em progersso')
})