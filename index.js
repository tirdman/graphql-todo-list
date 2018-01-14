const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema/Schema')
require('dotenv').config()
const mongoose = require('mongoose')

//console.log(${process.env.DB_HOST});

// connect to mongodb
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)

const app = express()
app.get('/', (req, res) => res.send("Hello world !"))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

// run server on port 3000
app.listen('3000', _ => console.log('Server is listening on port 3000…'))