const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()

//middlware
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const port = process.env.PORT || 3000


const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port,()=>{
            console.log(`Server is listening on port : ${port}...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()
