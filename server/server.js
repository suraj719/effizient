const express = require("express")
const connectDB = require("./Connection")
const app =express()
const routes = require("./routes")
const cors = require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use('/api/v1',routes)
const port = process.env.PORT || 5000;
app.use('/',(req,res) => {
    res.send("helloooo")
})
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()